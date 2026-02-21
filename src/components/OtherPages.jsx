import React, { useState } from 'react';
import { MapPin, Phone, Award, CheckCircle, ChevronRight, ClipboardList, Info, ArrowUpDown, Send, Clock, List, TrendingUp, Plus, Zap, ShieldCheck, Download, Package, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG, PRODUCT_DATABASE } from '../data/config';

// --- Contact Component ---
import { Mail, MessageCircle, Map as MapIcon, Globe } from 'lucide-react';

export const Contact = () => {
    return (
        <div className="bg-[#000a14] min-h-[90vh] py-20 border-b border-white/5 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Area */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] text-blue-300 uppercase">Global Support Desk</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
                    >
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-200">Touch.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed font-light"
                    >
                        Connect directly with our enterprise sales directors or visit our massive experience center. We are structured to handle high-volume B2B logistics seamlessly.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Contact Cards */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Primary Office Card */}
                        <div className="bg-[#001224] border border-white/10 p-8 hover:border-blue-500/50 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                            <div className="flex items-start gap-5 relative z-10">
                                <div className="bg-blue-900/50 p-4 shrink-0 border border-blue-500/30 group-hover:bg-[#FFD700]/20 group-hover:border-[#FFD700]/50 transition-all group-hover:-translate-y-1">
                                    <MapPin size={28} className="text-blue-400 group-hover:text-[#FFD700] transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-black tracking-widest text-[#FFD700] uppercase mb-2">Primary Experience Center</h3>
                                    <p className="text-white text-lg font-bold leading-snug mb-3">Shop No 728, Old Lajpat Rai Market</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">Chandni Chowk, New Delhi, Delhi 110006. Located in the heart of Asia's largest electronics hub.</p>
                                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-400 hover:text-[#FFD700] inline-flex items-center gap-1 transition-colors">
                                        Get Directions <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Methods Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-[#001224] border border-white/10 p-6 hover:border-green-500/50 transition-all group">
                                <Phone size={24} className="text-green-400 mb-4 group-hover:scale-110 transition-transform origin-left" />
                                <h4 className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">Direct Sales</h4>
                                <p className="text-white font-bold text-lg">{BUSINESS_CONFIG.phone}</p>
                            </div>
                            <div className="bg-[#001224] border border-white/10 p-6 hover:border-blue-500/50 transition-all group">
                                <Mail size={24} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform origin-left" />
                                <h4 className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">Enterprise Email</h4>
                                <p className="text-white font-bold text-sm truncate">sales@kscorporations.in</p>
                            </div>
                        </div>

                        {/* Operating Hours */}
                        <div className="bg-gradient-to-br from-[#00172D] to-[#000a14] border border-white/10 p-6 mt-6">
                            <h4 className="font-black text-white mb-4 flex items-center gap-2"><Clock size={18} className="text-[#FFD700]" /> Operational Hours</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400 font-medium">Monday - Saturday</span>
                                    <span className="text-white font-bold">11:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <span className="text-gray-400 font-medium">Sunday</span>
                                    <span className="text-red-400 font-bold tracking-widest uppercase text-xs">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Advanced Map Interface */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                        className="lg:col-span-3 h-[600px] lg:h-full min-h-[500px] border border-white/10 relative group overflow-hidden bg-[#001224]"
                    >
                        {/* Map Overlay to keep styling strictly dark/branded until hover/interaction */}
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700"></div>

                        <iframe
                            title="KSC Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.761845667389!2d77.23326167615964!3d28.65413318388481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd03429352d1%3A0x3345479201730076!2sLajpat%20Rai%20Market%2C%20Chandni%20Chowk%2C%20New%20Delhi%2C%20Delhi%20110006!5e0!3m2!1sen!2sin!4v1709664583262!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>

                        {/* Interactive Floating Routing Card inside Map */}
                        <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-[#000a14]/90 backdrop-blur-xl p-6 border border-white/10 z-20 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 bg-[#FFD700] rounded-sm flex items-center justify-center shrink-0">
                                    <MapIcon size={20} className="text-[#000a14]" />
                                </div>
                                <div>
                                    <p className="font-black text-white text-lg">Central Warehouse</p>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Delhi NCR Region</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Shop+No+728+Old+Lajpat+Rai+Market+Chandni+Chowk+Delhi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-xs font-black bg-blue-600/20 text-blue-400 hover:bg-blue-500 hover:text-white py-3 transition-colors border border-blue-500/30"
                                >
                                    View Map
                                </a>
                                <a
                                    href={`https://wa.me/${BUSINESS_CONFIG.phone}?text=Hi, need directions to your Experience Center`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-xs font-black bg-green-600/20 text-green-400 hover:bg-green-500 hover:text-white py-3 transition-colors border border-green-500/30"
                                >
                                    <MessageCircle size={14} /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};


import { Search, Filter } from 'lucide-react';

export const FastOrder = ({ addToCart }) => {
    // Flatten and organize products by category for the advanced matrix
    const categories = PRODUCT_DATABASE;
    const allProducts = PRODUCT_DATABASE.flatMap(c => c.items);

    const [quantities, setQuantities] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const handleQuantityChange = (id, value) => {
        const num = parseInt(value, 10);
        setQuantities(prev => ({
            ...prev,
            [id]: isNaN(num) || num < 0 ? 0 : num
        }));
    };

    const updateQty = (id, delta, min = 0) => {
        setQuantities(prev => {
            const current = prev[id] || 0;
            const next = Math.max(min, current + delta);
            return { ...prev, [id]: next };
        });
    };

    const setQty = (id, amount) => {
        setQuantities(prev => ({ ...prev, [id]: amount }));
    };

    const handleAddSelected = () => {
        let addedCount = 0;
        allProducts.forEach(item => {
            const qty = quantities[item.id] || 0;
            if (qty > 0) {
                addToCart(item, qty);
                addedCount += qty;
            }
        });

        if (addedCount > 0) {
            alert(`Successfully added ${addedCount} units to your quote.`);
            setQuantities({});
        } else {
            alert("Please enter quantities for at least one item.");
        }
    };

    const calculateTotal = () => {
        let total = 0;
        let totalQty = 0;
        allProducts.forEach(item => {
            const qty = quantities[item.id] || 0;
            if (qty > 0) {
                total += item.price * qty;
                totalQty += qty;
            }
        });
        return { total, totalQty };
    };

    const { total, totalQty } = calculateTotal();

    // Filter Logic
    const filteredCategories = categories.map(cat => ({
        ...cat,
        items: cat.items.filter(item => {
            const matchesSearch = item.model.toLowerCase().includes(searchQuery.toLowerCase()) || item.specs.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || cat.category === activeCategory;
            return matchesSearch && matchesCategory;
        })
    })).filter(cat => cat.items.length > 0);

    return (
        <div className="py-12 lg:py-20 min-h-[90vh] bg-[#000a14] font-sans border-b border-white/5">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Advanced Dashboard Container */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-[#001224] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[85vh] lg:h-[80vh]"
                >
                    {/* Top Control Bar (Header) */}
                    <div className="bg-[#000a14]/80 backdrop-blur-xl px-6 py-6 border-b border-white/10 shrink-0 relative flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
                        <div className="flex items-center gap-4 relative z-10 w-full lg:w-auto">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20 shrink-0">
                                <ClipboardList size={28} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight">Enterprise PO Matrix</h2>
                                <p className="text-blue-400/80 text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5">Rapid Deployment Interface</p>
                            </div>
                        </div>

                        {/* Search & Filter Controls */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <div className="relative">
                                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search by model or specs..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                />
                            </div>

                            <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/10 overflow-x-auto hide-scrollbar">
                                <button
                                    onClick={() => setActiveCategory('All')}
                                    className={`px-4 py-1.5 text-xs font-bold whitespace-nowrap rounded-md transition-colors ${activeCategory === 'All' ? 'bg-[#FFD700] text-[#000a14]' : 'text-gray-400 hover:text-white'}`}
                                >
                                    All SKUs
                                </button>
                                {categories.map(c => (
                                    <button
                                        key={c.category}
                                        onClick={() => setActiveCategory(c.category)}
                                        className={`px-4 py-1.5 text-xs font-bold whitespace-nowrap rounded-md transition-colors ${activeCategory === c.category ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {c.category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highly Advanced Matrix Table (Scrollable Body) */}
                    <div className="flex-1 overflow-y-auto bg-[#000a14]/50 custom-scrollbar relative">
                        {filteredCategories.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <Search size={48} className="mb-4 opacity-20" />
                                <p className="text-lg font-medium">No matching models found.</p>
                                <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm">Clear Filters</button>
                            </div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 z-20 bg-[#001224]/95 backdrop-blur-xl shadow-lg border-b border-white/5">
                                    <tr className="text-gray-500 text-[10px] uppercase tracking-widest font-black">
                                        <th className="p-4 pl-6 lg:pl-8">Product Details</th>
                                        <th className="p-4 hidden md:table-cell w-1/4">Core Specifications</th>
                                        <th className="p-4 text-right">Wholesale Rate</th>
                                        <th className="p-4 pr-6 lg:pr-8 text-center w-[200px] lg:w-[280px]">Quantity Entry</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCategories.map((category) => (
                                        <React.Fragment key={category.category}>
                                            {/* Category Sticky Header */}
                                            <tr className="bg-[#000a14] sticky top-[53px] z-10 border-y border-white/5 shadow-sm">
                                                <td colSpan="4" className="px-6 lg:px-8 py-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                        <span className="text-xs font-black tracking-widest text-blue-100 uppercase">{category.category}</span>
                                                        <span className="text-[10px] font-bold text-gray-600 bg-white/5 px-2 py-0.5 rounded-full ml-2">{category.items.length} SKUs</span>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* Product Rows */}
                                            {category.items.map(item => {
                                                const qty = quantities[item.id] || 0;
                                                const isActive = qty > 0;

                                                return (
                                                    <tr key={item.id} className={`transition-colors border-b border-white/5 group ${isActive ? 'bg-[#FFD700]/5' : 'hover:bg-white/5'}`}>
                                                        <td className="p-4 pl-6 lg:pl-8">
                                                            <div className="flex items-center gap-4">
                                                                <div className="relative hidden sm:block shrink-0">
                                                                    <img src={item.image} alt={item.model} className="w-14 h-14 object-contain bg-white rounded-lg p-1 border border-white/10" />
                                                                    {isActive && <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#001224] flex items-center justify-center"><CheckCircle size={10} className="text-white" /></div>}
                                                                </div>
                                                                <div>
                                                                    <div className={`font-black tracking-tight text-sm md:text-base mb-1 ${isActive ? 'text-[#FFD700]' : 'text-gray-200'}`}>{item.model}</div>
                                                                    <div className="flex flex-wrap items-center gap-2">
                                                                        <span className="text-[10px] font-mono tracking-wider text-gray-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">{item.resolution}</span>
                                                                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-[3px] uppercase tracking-wider border ${item.stock === 'High' ? 'bg-green-500/10 text-green-400 border-green-500/20' : item.stock === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                                                            {item.stock}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="p-4 hidden md:table-cell">
                                                            <div className="text-xs font-medium text-gray-300 mb-1 line-clamp-2">{item.specs}</div>
                                                            <div className="text-[10px] text-blue-400/80 font-bold uppercase tracking-wider">{item.panel}</div>
                                                        </td>
                                                        <td className="p-4 text-right">
                                                            <div className={`font-black text-lg sm:text-xl tracking-tight ${isActive ? 'text-white' : 'text-gray-300'}`}>₹{item.price.toLocaleString()}</div>
                                                            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Base Rate</div>
                                                        </td>
                                                        <td className="p-4 pr-6 lg:pr-8 bg-[#000a14]/30">
                                                            <div className="flex flex-col gap-2 max-w-[220px] ml-auto relative">
                                                                {/* Quantity Control Segment */}
                                                                <div className={`flex items-center justify-between border rounded-lg overflow-hidden transition-all bg-[#001224] ${isActive ? 'border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.1)]' : 'border-white/10 hover:border-white/20'}`}>
                                                                    <button onClick={() => updateQty(item.id, -1)} className="p-2 sm:p-2.5 hover:bg-white/5 transition-colors text-gray-400 hover:text-white group/btn">
                                                                        <ChevronRight size={16} className="rotate-180 opacity-50 group-hover/btn:opacity-100" />
                                                                    </button>

                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        value={qty || ''}
                                                                        placeholder="0"
                                                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                                        className="w-16 min-w-0 text-center font-black text-lg text-white bg-transparent focus:outline-none appearance-none placeholder:text-gray-700 mx-1"
                                                                    />

                                                                    <button onClick={() => updateQty(item.id, 1)} className="p-2 sm:p-2.5 hover:bg-white/5 transition-colors text-gray-400 hover:text-white group/btn">
                                                                        <Plus size={16} className="opacity-50 group-hover/btn:opacity-100" />
                                                                    </button>
                                                                </div>

                                                                {/* Quick Multipliers */}
                                                                <div className="grid grid-cols-3 gap-1.5">
                                                                    <button onClick={() => setQty(item.id, item.moq)} className="py-1 bg-white/5 hover:bg-white/10 rounded text-[9px] font-black uppercase text-gray-400 hover:text-white transition-colors border border-white/5" title="Minimum Order Qty">MOQ ({item.moq})</button>
                                                                    <button onClick={() => updateQty(item.id, 10)} className="py-1 bg-white/5 hover:bg-[#FFD700] rounded text-[9px] font-black uppercase text-gray-400 hover:text-[#001224] transition-colors border border-white/5">+10</button>
                                                                    <button onClick={() => updateQty(item.id, 50)} className="py-1 bg-white/5 hover:bg-blue-500 rounded text-[9px] font-black uppercase text-gray-400 hover:text-white transition-colors border border-white/5">+50</button>
                                                                </div>

                                                                {isActive && (
                                                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-full text-right hidden xl:block">
                                                                        <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">Line Total</div>
                                                                        <div className="text-sm font-black text-[#FFD700]">₹{(item.price * qty).toLocaleString()}</div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Bottom Status & Action Bar */}
                    <div className="bg-[#001224] border-t border-white/10 p-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0 relative z-30">
                        {/* Live Counter */}
                        <div className="flex items-center gap-6 w-full md:w-auto overflow-hidden">
                            <div className="flex items-center gap-3 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20">
                                <span className="text-[10px] text-blue-300 uppercase tracking-widest font-bold hidden sm:block">Units:</span>
                                <span className="text-xl font-black text-white">{totalQty}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold hidden sm:block">Total PO Value</span>
                                <span className="text-2xl font-black text-[#FFD700]">₹{total.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <button onClick={() => setQuantities({})} className="text-xs font-bold text-gray-500 hover:text-red-400 transition-colors uppercase tracking-widest ml-auto md:ml-0">
                                Reset
                            </button>

                            <button
                                onClick={handleAddSelected}
                                disabled={totalQty === 0}
                                className={`px-8 py-3.5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all text-sm w-full md:w-auto ${totalQty > 0 ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95' : 'bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed'}`}
                            >
                                <Truck size={18} /> Push to Quote
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Helper Text */}
                <p className="text-center text-xs font-medium text-gray-500 mt-6 tracking-wide">
                    Prices listed are base Ex-Works rates. Final shipping and GST calculations will be provided on the final quote generated on WhatsApp.
                </p>
            </div>
        </div>
    );
};


// --- EnquiryForm Component ---
export const EnquiryForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        businessName: '',
        phone: '',
        gst: '',
        volume: '10-50',
        requirement: ''
    });

    const volumes = ['10-50', '50-250', '250-1000', '1000+'];

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        const msg = `*Enterprise Enquiry*\nBusiness: ${formData.businessName}\nPhone: ${formData.phone}\nGST: ${formData.gst || 'N/A'}\nEst. Volume: ${formData.volume} Units\nRequirement: ${formData.requirement}`;
        window.open(`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent(msg)}`, '_blank');
        setFormData({ businessName: '', phone: '', gst: '', volume: '10-50', requirement: '' });
    };

    return (
        <div className="py-12 md:py-24 bg-[#000a14] min-h-screen border-b border-white/5 font-sans relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-[#FFD700]/5 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
                        <Zap size={14} className="text-[#FFD700]" />
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Enterprise Division</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white px-4 leading-tight">
                        Scale With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-500">Confidence</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Partner with KS Corporations for priority B2B pricing, dedicated account management, and pan-India logistics.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Benefits */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-[#001224] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
                            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                                <ShieldCheck className="text-blue-500" /> B2B Advantages
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { icon: <TrendingUp size={20} className="text-[#FFD700]" />, title: 'Tiered Volume Discounts', desc: 'Access exclusive factory-direct pricing brackets.' },
                                    { icon: <Truck size={20} className="text-blue-400" />, title: 'Priority Fulfillment', desc: 'Secure supply lines with OEM partnerships.' },
                                    { icon: <Award size={20} className="text-purple-400" />, title: 'Extended Warranty Support', desc: 'Dedicated service portals for enterprise clients.' }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{benefit.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-blue-900/40 to-[#001224] p-8 rounded-[2rem] border border-blue-500/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] group-hover:bg-blue-400/30 transition-all"></div>
                            <h4 className="text-sm font-black text-blue-300 uppercase tracking-widest mb-2">Direct Line</h4>
                            <p className="text-2xl font-black text-white">+91 9718449001</p>
                            <p className="text-gray-400 text-sm mt-2">Available Mon-Sat, 10 AM to 7 PM</p>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-3 bg-[#001224] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Company / Dealership Name *</label>
                                    <input
                                        required
                                        className="w-full bg-[#000a14] border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                                        placeholder="Enter legal business name"
                                        value={formData.businessName}
                                        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">WhatsApp Mobile *</label>
                                    <input
                                        required
                                        type="tel"
                                        className="w-full bg-[#000a14] border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                                        placeholder="+91"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">GSTIN (Optional but Recommended)</label>
                                <input
                                    className="w-full bg-[#000a14] border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                                    placeholder="For wholesale billing & input credit"
                                    value={formData.gst}
                                    onChange={e => setFormData({ ...formData, gst: e.target.value })}
                                />
                            </div>

                            {/* Volume Selector */}
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Estimated Order Volume (Units)</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {volumes.map(vol => (
                                        <button
                                            key={vol}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, volume: vol })}
                                            className={`p-3 rounded-xl font-bold text-sm transition-all border ${formData.volume === vol ? 'bg-[#FFD700] text-[#000a14] border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.2)]' : 'bg-[#000a14] text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}
                                        >
                                            {vol}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Project / Requirement Details *</label>
                                <textarea
                                    required
                                    className="w-full bg-[#000a14] border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32 resize-none placeholder:text-gray-600"
                                    placeholder="Briefly describe models required, expected delivery timeline, or specific use case (e.g., hotel installation, direct distribution)."
                                    value={formData.requirement}
                                    onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black py-4 md:py-5 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all flex justify-center items-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 active:translate-y-0 text-sm md:text-base uppercase tracking-widest"
                            >
                                Submit Request <Send size={20} />
                            </button>
                            <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-4 flex items-center justify-center gap-2">
                                <ShieldCheck size={12} className="text-green-500" /> End-to-End Encrypted Inquiry
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- History Component ---
export const History = ({ orders }) => (
    <div className="py-16 md:py-24 bg-[#000a14] min-h-[80vh] font-sans border-b border-white/5 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-black text-white mb-10 flex items-center gap-4 tracking-tight">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                    <Clock size={32} className="text-[#FFD700]" />
                </div>
                Quotation History
            </h2>

            {orders.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-[#001224] p-16 text-center rounded-[2.5rem] shadow-2xl border border-white/5"
                >
                    <div className="inline-flex p-6 bg-[#000a14] rounded-full mb-6 border border-white/10 shadow-inner">
                        <List size={40} className="text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">No Active Quotes</h3>
                    <p className="text-gray-400 text-lg">You haven't generated any PO requests yet.</p>
                    <p className="text-sm font-bold text-gray-500 mt-4 uppercase tracking-widest">Built quotes will be securely logged here.</p>
                </motion.div>
            ) : (
                <div className="space-y-6">
                    {orders.map((order, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                            key={order.id}
                            className="bg-[#001224] p-6 md:p-8 rounded-[2rem] shadow-xl border border-white/5 hover:border-blue-500/30 hover:shadow-2xl transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                <div>
                                    <span className="text-[10px] font-black bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                                        Logged
                                    </span>
                                    <p className="text-sm text-gray-400 mt-3 font-medium flex items-center gap-2">
                                        <Clock size={14} /> {new Date(order.date).toLocaleString()}
                                    </p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Estimated Value</p>
                                    <p className="font-black text-3xl text-white">₹{order.total.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="bg-[#000a14] p-5 rounded-2xl border border-white/5">
                                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                                    <p className="font-black uppercase text-xs text-gray-400 tracking-widest">Requested SKUs</p>
                                    <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">{order.items.length} Models</span>
                                </div>
                                <ul className="space-y-2">
                                    {order.items.map((item, idx) => (
                                        <li key={idx} className="flex justify-between items-center text-sm md:text-base">
                                            <span className="font-bold text-gray-300">{item.model}</span>
                                            <span className="font-black text-white bg-white/5 px-3 py-1 rounded-lg">x {item.qty}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    </div>
);
