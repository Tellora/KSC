import React, { useState, useMemo } from 'react';
import { Sliders, Download, Grid, List, Search, ArrowDown, X, Check, Share2 } from 'lucide-react';
import { PRODUCT_DATABASE } from '../data/config';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const Catalog = ({ addToCart, searchQuery, onOpenProduct, compareList, setCompareList, openCompareModal }) => {
    const [filter, setFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('default');
    const [viewMode, setViewMode] = useState('grid');
    const [priceRange, setPriceRange] = useState(50000);
    const [selectedResolutions, setSelectedResolutions] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStock, setSelectedStock] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    const allProducts = useMemo(() => PRODUCT_DATABASE.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category }))), []);

    const filtered = useMemo(() => {
        return allProducts.filter(item => {
            if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) return false;
            const matchesSearch = item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.longDescription.toLowerCase().includes(searchQuery.toLowerCase());
            if (searchQuery && !matchesSearch) return false;
            if (item.price > priceRange) return false;
            if (selectedResolutions.length > 0 && !selectedResolutions.includes(item.resolution)) return false;
            if (selectedStock.length > 0 && !selectedStock.includes(item.stock)) return false;
            return true;
        }).sort((a, b) => {
            if (sortOrder === 'lowToHigh') return a.price - b.price;
            if (sortOrder === 'highToLow') return b.price - a.price;
            if (sortOrder === 'rating') return b.rating - a.rating;
            return 0;
        });
    }, [allProducts, selectedCategories, searchQuery, priceRange, selectedResolutions, selectedStock, sortOrder]);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginatedItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const toggleFilter = (set, val) => {
        set(prev => prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]);
        setPage(1);
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
        const csvContent = "data:text/csv;charset=utf-8," +
            ["Category,Model,Price,Resolution,Stock"].join(",") + "\n" +
            allProducts.map(i => `"${i.category}","${i.model}",${i.price},"${i.resolution}","${i.stock}"`).join("\n");
        const link = document.createElement("a");
        link.href = encodeURI(csvContent);
        link.download = "KS_PriceList.csv";
        link.click();
    };

    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    return (
        <div className="py-6 md:py-16 max-w-[1400px] mx-auto px-4 md:px-8 bg-[#F4F6F8]">

            {/* Header Section */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black text-[#003366] mb-2 tracking-tight">Wholesale Catalog</h2>
                    <p className="text-gray-500 font-medium">Verified Enterprise Stock • Real-time Pricing</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            alert("Catalog link copied!");
                        }}
                        className="hidden lg:flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-[#003366] hover:bg-gray-100 transition-all shadow-sm"
                    >
                        <Share2 size={18} /> Share Catalog
                    </button>
                    <button
                        onClick={handleDownloadPriceList}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-[#003366] hover:bg-gray-50 transition-all shadow-sm"
                    >
                        <Download size={18} /> Download CSV
                    </button>
                    <button
                        className="md:hidden flex flex-1 items-center justify-center gap-2 px-6 py-3 bg-[#003366] text-white rounded-2xl font-bold"
                        onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                    >
                        <Sliders size={18} /> Filters
                    </button>
                </div>
            </div>

            {/* Quick Segment Chips */}
            <div className="mb-8 flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {[
                    { label: 'All Models', action: () => { setSelectedCategories([]); setSelectedResolutions([]); setSelectedStock([]); setPriceRange(50000); } },
                    { label: 'Under ₹10,000', action: () => { setSelectedCategories([]); setSelectedResolutions([]); setSelectedStock([]); setPriceRange(10000); } },
                    { label: '4K Ultra HD', action: () => { setSelectedResolutions(['4K']); setPriceRange(50000); } },
                    { label: 'FHD Smart', action: () => { setSelectedResolutions(['FHD']); setPriceRange(50000); } },
                    { label: 'WebOS Premium', action: () => { setSelectedCategories(['Premium QLED & WebOS']); setPriceRange(50000); } },
                ].map((chip, i) => (
                    <button
                        key={i}
                        onClick={chip.action}
                        className="whitespace-nowrap px-6 py-2.5 bg-white border border-gray-100 rounded-full text-[11px] font-black text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-sm active:scale-95 uppercase tracking-wider"
                    >
                        {chip.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Enhanced Sidebar Filters */}
                <aside className={`w-full md:w-72 space-y-6 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
                    <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 sticky top-28">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-black text-[#003366] uppercase text-xs tracking-widest flex items-center gap-2">
                                <Sliders size={16} /> Refine Stock
                            </h3>
                            <button
                                onClick={() => { setSelectedCategories([]); setSelectedResolutions([]); setSelectedStock([]); setPriceRange(50000); }}
                                className="text-[10px] font-bold text-red-500 hover:underline"
                            >
                                Reset
                            </button>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-8">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Manufacturer Series</p>
                            <div className="space-y-3">
                                {PRODUCT_DATABASE.map(cat => (
                                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                                        <div
                                            onClick={() => toggleFilter(setSelectedCategories, cat.category)}
                                            className={`w-5 h-5 rounded-lg border-2 transition-all flex items-center justify-center ${selectedCategories.includes(cat.category) ? 'bg-[#003366] border-[#003366]' : 'border-gray-200 group-hover:border-blue-300'}`}
                                        >
                                            {selectedCategories.includes(cat.category) && <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />}
                                        </div>
                                        <span className={`text-sm font-bold transition-colors ${selectedCategories.includes(cat.category) ? 'text-[#003366]' : 'text-gray-500 group-hover:text-blue-600'}`}>{cat.category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Max Budget</p>
                                <span className="text-xs font-black text-[#003366]">₹{priceRange.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="5000"
                                max="50000"
                                step="1000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full accent-[#003366] h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Resolution Filter */}
                        <div className="mb-8">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Display Tech</p>
                            <div className="flex flex-wrap gap-2">
                                {['HD Ready', 'FHD', '4K'].map(res => (
                                    <button
                                        key={res}
                                        onClick={() => toggleFilter(setSelectedResolutions, res)}
                                        className={`px-3 py-1.5 rounded-xl text-[10px] font-black transition-all border ${selectedResolutions.includes(res) ? 'bg-[#003366] text-[#FFD700] border-[#003366] shadow-md shadow-blue-900/20' : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-blue-200'}`}
                                    >
                                        {res}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Stock Status */}
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Availability</p>
                            <div className="space-y-3">
                                {['High', 'Medium', 'Low'].map(status => (
                                    <label key={status} className="flex items-center gap-3 cursor-pointer group text-sm font-bold">
                                        <div
                                            onClick={() => toggleFilter(setSelectedStock, status)}
                                            className={`w-5 h-5 rounded-lg border-2 transition-all flex items-center justify-center ${selectedStock.includes(status) ? 'bg-green-500 border-green-500' : 'border-gray-200'}`}
                                        >
                                            {selectedStock.includes(status) && <Check size={12} className="text-white" strokeWidth={4} />}
                                        </div>
                                        <span className={selectedStock.includes(status) ? 'text-green-700' : 'text-gray-500'}>{status} Stock</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1">
                    {/* Advanced Toolbar */}
                    <div className="bg-white p-4 rounded-[2rem] border border-gray-100 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <p className="text-sm font-bold text-[#003366]/60 tracking-tight">
                                Showing <span className="text-[#003366] font-black">{filtered.length}</span> SKUs in total
                            </p>
                            <div className="h-6 w-px bg-gray-100 hidden sm:block"></div>
                            <div className="flex gap-2">
                                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-blue-50 text-[#003366]' : 'text-gray-300'}`}><Grid size={20} /></button>
                                <button onClick={() => setViewMode('list')} className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-blue-50 text-[#003366]' : 'text-gray-300'}`}><List size={20} /></button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 flex-grow sm:flex-grow-0">
                            <div className="relative flex-grow">
                                <select
                                    className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-2.5 text-sm font-bold text-[#003366] outline-none focus:border-blue-200 transition-all appearance-none pr-10"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option value="default">Sort: Default</option>
                                    <option value="lowToHigh">Price: Low to High</option>
                                    <option value="highToLow">Price: High to Low</option>
                                    <option value="rating">Top Rated First</option>
                                </select>
                                <ArrowDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Active Filters Summary */}
                    {(selectedCategories.length > 0 || selectedResolutions.length > 0 || selectedStock.length > 0) && (
                        <div className="flex flex-wrap gap-2 mb-8 items-center px-1">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Active:</span>
                            {[...selectedCategories, ...selectedResolutions, ...selectedStock].map(tag => (
                                <div key={tag} className="bg-white border border-blue-100 px-3 py-1 rounded-full text-[10px] font-bold text-[#003366] flex items-center gap-2 shadow-sm">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Dynamic Grid */}
                    <AnimatePresence mode="wait">
                        {paginatedItems.length === 0 ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                                <Search size={48} className="mx-auto text-gray-200 mb-6" />
                                <h3 className="text-xl font-black text-[#003366] mb-2">No Matches Found</h3>
                                <p className="text-gray-400 font-medium">Try adjusting your filters or search query.</p>
                            </motion.div>
                        ) : (
                            <motion.div layout className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                                {paginatedItems.map(item => (
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

                    {/* Paging */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex justify-center items-center gap-3">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                    className={`w-12 h-12 rounded-2xl font-black transition-all ${page === i + 1 ? 'bg-[#003366] text-white shadow-xl shadow-blue-900/30' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Sticky Comparison & Bulk Bar */}
            <AnimatePresence>
                {(compareList.length > 0 || selectedItems.length > 0) && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
                    >
                        <div className="bg-[#003366] rounded-full p-2 md:p-3 shadow-2xl border border-white/20 flex items-center justify-between backdrop-blur-xl">
                            <div className="flex items-center gap-4 ml-4">
                                {compareList.length > 0 && (
                                    <div className="flex items-center gap-3 border-r border-white/10 pr-4">
                                        <div className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest leading-none">Compare<br />Active</div>
                                        <div className="flex -space-x-3">
                                            {compareList.map(item => (
                                                <img key={item.id} src={item.image} className="w-10 h-10 rounded-full border-2 border-[#003366] object-cover" />
                                            ))}
                                        </div>
                                        <button onClick={openCompareModal} className="bg-white/10 hover:bg-white text-white hover:text-[#003366] px-4 py-2 rounded-full text-xs font-black transition-all">View</button>
                                    </div>
                                )}
                                {selectedItems.length > 0 && (
                                    <p className="text-white text-xs font-black uppercase tracking-widest hidden sm:block">
                                        <span className="text-[#FFD700]">{selectedItems.length}</span> SKUs Selected
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {selectedItems.length > 0 && (
                                    <button
                                        onClick={handleBulkAdd}
                                        className="bg-[#FFD700] text-[#003366] px-8 py-3 rounded-full font-black text-xs hover:bg-white transition-all shadow-lg uppercase"
                                    >
                                        Bulk Move to Quote
                                    </button>
                                )}
                                <button
                                    onClick={() => { setCompareList([]); setSelectedItems([]); }}
                                    className="p-3 text-white/50 hover:text-white transition-colors"
                                ><X size={20} /></button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Catalog;
