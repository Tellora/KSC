import React, { useState, useMemo } from 'react';
import { Sliders, Download, Grid, List, Search, ArrowUp, ArrowDown } from 'lucide-react';
import { PRODUCT_DATABASE } from '../data/config';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const Catalog = ({ addToCart, searchQuery, onOpenProduct, compareList, setCompareList, openCompareModal }) => {
    const [filter, setFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('default');
    const [viewMode, setViewMode] = useState('grid');
    const [priceRange, setPriceRange] = useState(50000);
    const [selectedResolutions, setSelectedResolutions] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]); // Array of IDs
    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    // Flattened Database for simpler filtering
    const allProducts = useMemo(() => PRODUCT_DATABASE.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category }))), []);

    // Filter Logic
    const filtered = useMemo(() => {
        return allProducts.filter(item => {
            if (filter !== 'all' && PRODUCT_DATABASE.find(c => c.id === filter)?.category !== item.category) return false;
            if (searchQuery && !item.model.toLowerCase().includes(searchQuery.toLowerCase())) return false;
            if (item.price > priceRange) return false;
            if (selectedResolutions.length > 0 && !selectedResolutions.includes(item.resolution)) return false;
            return true;
        }).sort((a, b) => {
            if (sortOrder === 'lowToHigh') return a.price - b.price;
            if (sortOrder === 'highToLow') return b.price - a.price;
            return 0; // Default relevance
        });
    }, [allProducts, filter, searchQuery, priceRange, selectedResolutions, sortOrder]);

    // Pagination Logic
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginatedItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const toggleResolution = (res) => {
        setSelectedResolutions(prev => prev.includes(res) ? prev.filter(r => r !== res) : [...prev, res]);
    };

    const toggleSelection = (id) => {
        setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const toggleCompare = (item) => {
        if (compareList.find(c => c.id === item.id)) {
            setCompareList(compareList.filter(c => c.id !== item.id));
        } else {
            if (compareList.length < 3) setCompareList([...compareList, item]);
            else alert("You can only compare up to 3 items.");
        }
    };

    const handleBulkAdd = () => {
        const itemsToAdd = allProducts.filter(p => selectedItems.includes(p.id));
        itemsToAdd.forEach(item => addToCart(item));
        setSelectedItems([]);
    };

    const handleDownloadPriceList = () => {
        const headers = ["Category,Model,Specs,Panel,Ports,Price (INR)"];
        const rows = PRODUCT_DATABASE.flatMap(cat =>
            cat.items.map(item =>
                `"${cat.category}","${item.model}","${item.specs}","${item.panel}","${item.ports}","${item.price}"`
            )
        );
        const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "KS_Corporations_Price_List.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 bg-[#F4F6F8]">

            {/* Sidebar Filters */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-full md:w-64 flex-shrink-0 space-y-8"
            >
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                    <div className="flex items-center gap-2 font-bold text-[#003366] mb-6 border-b border-gray-100 pb-2">
                        <Sliders size={20} /> Filters
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                            Max Price: ₹{priceRange.toLocaleString()}
                        </label>
                        <input
                            type="range"
                            min="5000"
                            max="50000"
                            step="1000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="w-full accent-[#003366]"
                        />
                    </div>

                    {/* Resolutions */}
                    <div className="mb-6">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Resolution</label>
                        <div className="space-y-2">
                            {['HD Ready', 'FHD', '4K'].map(res => (
                                <label key={res} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-[#003366]">
                                    <div
                                        onClick={() => toggleResolution(res)}
                                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedResolutions.includes(res) ? 'bg-[#003366] border-[#003366]' : 'border-gray-300'}`}
                                    >
                                        {selectedResolutions.includes(res) && <div className="w-2 h-2 bg-white rounded-sm" />}
                                    </div>
                                    {res}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => { setPriceRange(50000); setSelectedResolutions([]); setFilter('all'); }}
                        className="w-full py-2 text-xs font-bold text-gray-400 hover:text-red-500 border border-dashed border-gray-300 rounded-lg hover:border-red-300 transition-colors"
                    >
                        Reset Filters
                    </button>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1">
                {/* Toolbar */}
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex flex-wrap justify-between items-center mb-6 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
                >
                    <div className="text-sm font-medium text-gray-500">
                        Showing <span className="text-[#003366] font-bold">{filtered.length}</span> products
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        <button
                            onClick={handleDownloadPriceList}
                            className="flex items-center gap-2 px-4 py-2 border border-[#003366] text-[#003366] rounded-xl hover:bg-blue-50 font-bold transition-colors text-xs"
                        >
                            <Download size={14} /> Download CSV
                        </button>

                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow text-[#003366]' : 'text-gray-400'}`}><Grid size={18} /></button>
                            <button onClick={() => setViewMode('list')} className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow text-[#003366]' : 'text-gray-400'}`}><List size={18} /></button>
                        </div>

                        <div className="relative">
                            <select
                                className="appearance-none bg-gray-100 text-sm font-medium text-gray-700 py-2 pl-3 pr-8 rounded-lg border-none focus:ring-2 focus:ring-[#003366] cursor-pointer outline-none"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="default">Relevance</option>
                                <option value="lowToHigh">Price: Low to High</option>
                                <option value="highToLow">Price: High to Low</option>
                            </select>
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                {sortOrder === 'lowToHigh' ? <ArrowUp size={14} /> : sortOrder === 'highToLow' ? <ArrowDown size={14} /> : <div className="text-[10px]">▼</div>}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Product Grid */}
                <AnimatePresence mode="wait">
                    {paginatedItems.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200"
                        >
                            <Search className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                            <p className="text-gray-500">No products match your criteria.</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
                        >
                            {paginatedItems.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    item={item}
                                    viewMode={viewMode}
                                    selectedItems={selectedItems}
                                    toggleSelection={toggleSelection}
                                    onOpenProduct={onOpenProduct}
                                    addToCart={addToCart}
                                    toggleCompare={toggleCompare}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-12">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${page === i + 1 ? 'bg-[#003366] text-white shadow-lg scale-110' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Floating Bulk Action Bar */}
            <AnimatePresence>
                {selectedItems.length > 0 && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#003366] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-6 border border-white/20 backdrop-blur-md"
                    >
                        <span className="font-bold whitespace-nowrap">{selectedItems.length} items selected</span>
                        <div className="h-6 w-px bg-white/20"></div>
                        <button
                            onClick={handleBulkAdd}
                            className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors text-sm shadow-sm whitespace-nowrap"
                        >
                            Add All to Quote
                        </button>
                        <button onClick={() => setSelectedItems([])} className="text-white/70 hover:text-white text-sm underline">Cancel</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Catalog;
