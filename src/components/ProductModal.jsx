import React, { useState } from 'react';
import { X, Star, ShoppingCart, ShieldCheck, Cpu, Layers, Monitor, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
    const [activeTab, setActiveTab] = useState('overview');

    if (!product) return null;

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Layers },
        { id: 'specs', label: 'Tech Specs', icon: Cpu },
        { id: 'warranty', label: 'Warranty', icon: ShieldCheck },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80]"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col md:flex-row pointer-events-auto border border-white/20">

                            {/* Left: Image & Quick Actions */}
                            <div className="w-full md:w-5/12 bg-gray-100 relative h-64 md:h-full flex flex-col">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-[#FFD700] text-[#003366] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                        {product.stock === 'High' ? 'Ready to Ship' : 'Limited Stock'}
                                    </span>
                                </div>
                                <div className="flex-1 relative overflow-hidden group">
                                    <img
                                        src={product.image}
                                        alt={product.model}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>

                                {/* Quick Stats Overlay on Image */}
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                                    <h3 className="text-3xl font-black mb-2">{product.model}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-200">
                                        <Monitor size={16} />
                                        <span>{product.resolution} Display</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Details & Tabs */}
                            <div className="w-full md:w-7/12 flex flex-col bg-white h-full">
                                {/* Header */}
                                <div className="p-6 border-b border-gray-100 flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[#003366] font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">{product.category}</span>
                                            <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                                                <Star size={14} fill="currentColor" /> {product.rating} (Verified)
                                            </div>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-black text-[#003366]">₹{product.price.toLocaleString()}</span>
                                            <span className="text-gray-400 text-xs font-medium">/ unit (excl. GST)</span>
                                        </div>
                                    </div>
                                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <X size={24} className="text-gray-500" />
                                    </button>
                                </div>

                                {/* Tabs Navigation */}
                                <div className="flex border-b border-gray-100 px-6">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === tab.id
                                                    ? 'border-[#003366] text-[#003366]'
                                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                                                }`}
                                        >
                                            <tab.icon size={16} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Content */}
                                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-gray-50/50">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {activeTab === 'overview' && (
                                                <div className="space-y-6">
                                                    <p className="text-gray-600 leading-relaxed text-lg">
                                                        {product.specs}. Engineered for commercial durability and vibrant visual performance.
                                                        This model features a premium {product.panel} panel ensuring consistent color accuracy
                                                        and wide viewing angles suitable for retail, hospitality, and home use.
                                                    </p>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                                            <div className="text-xs text-gray-400 uppercase font-bold mb-1">Stock Status</div>
                                                            <div className={`font-bold ${product.stock === 'High' ? 'text-green-600' : 'text-orange-500'}`}>
                                                                {product.stock} Availability
                                                            </div>
                                                        </div>
                                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                                            <div className="text-xs text-gray-400 uppercase font-bold mb-1">Min. Order Qty</div>
                                                            <div className="font-bold text-[#003366]">{product.moq} Units</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'specs' && (
                                                <div className="space-y-4">
                                                    <h4 className="font-bold text-[#003366] mb-4 flex items-center gap-2">
                                                        <Cpu size={18} /> Technical Specifications
                                                    </h4>
                                                    <div className="grid grid-cols-1 gap-0 border border-gray-200 rounded-xl overflow-hidden bg-white">
                                                        {[
                                                            { label: 'Panel Type', value: product.panel },
                                                            { label: 'Resolution', value: product.resolution },
                                                            { label: 'Connectivity', value: product.ports },
                                                            { label: 'Model Number', value: product.model },
                                                            { label: 'Power', value: 'AC 100-240V 50/60Hz' }, // Mock Data
                                                            { label: 'Box Contents', value: 'Remote, Wall Mount, Stand, Batteries' } // Mock Data
                                                        ].map((spec, i) => (
                                                            <div key={i} className={`flex p-4 ${i !== 5 ? 'border-b border-gray-100' : ''}`}>
                                                                <span className="w-1/3 text-gray-500 font-medium text-sm">{spec.label}</span>
                                                                <span className="w-2/3 font-bold text-gray-800 text-sm">{spec.value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'warranty' && (
                                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-[#003366]">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <ShieldCheck size={32} className="text-[#FFD700]" />
                                                        <div>
                                                            <h4 className="font-bold text-lg">1 Year Comprehensive Warranty</h4>
                                                            <p className="text-xs text-blue-400 font-medium">Standard Manufacturer Warranty</p>
                                                        </div>
                                                    </div>
                                                    <ul className="space-y-3 text-sm">
                                                        <li className="flex gap-2">
                                                            <ChevronRight size={16} className="text-[#FFD700] flex-shrink-0" />
                                                            <span>On-site service available in metro cities.</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <ChevronRight size={16} className="text-[#FFD700] flex-shrink-0" />
                                                            <span>Covers panel manufacturing defects and board failures.</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <ChevronRight size={16} className="text-[#FFD700] flex-shrink-0" />
                                                            <span>Immediate replacement for DOA (Dead on Arrival) cases within 48 hours.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Footer Action */}
                                <div className="p-6 border-t border-gray-100 bg-white">
                                    <button
                                        onClick={() => { onAddToCart(product); onClose(); }}
                                        className="w-full bg-[#003366] text-white py-4 rounded-xl font-bold hover:bg-[#002244] transition-all transform active:scale-95 shadow-lg shadow-blue-900/20 flex justify-center items-center gap-2 group"
                                    >
                                        <ShoppingCart size={20} className="group-hover:animate-bounce" /> Add to Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
