import React, { useState } from 'react';
import { X, Star, ShoppingCart, ShieldCheck, Cpu, Layers, Monitor, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, isOpen, onClose, onAddToCart, userMode }) => {
    const [activeTab, setActiveTab] = useState('overview');

    if (!product) return null;

    const displayPrice = userMode === 'retail' ? Math.round(product.price * 1.3) : product.price;

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Layers },
        { id: 'specs', label: 'Tech Specs', icon: Cpu },
        { id: 'reviews', label: 'Reviews', icon: Star },
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
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col md:flex-row pointer-events-auto border border-white/20">

                            {/* Left: Image & Quick Actions */}
                            <div className="w-full md:w-5/12 bg-gray-100 relative h-64 md:h-full flex flex-col">
                                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                    <span className="bg-[#FFD700] text-[#003366] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm w-fit">
                                        {product.stock === 'High' ? 'Ready to Ship' : 'Limited Stock'}
                                    </span>
                                    {product.tag && (
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm w-fit animate-pulse">
                                            {product.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1 relative overflow-hidden group">
                                    <img
                                        src={product.image}
                                        alt={product.model}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>

                                {/* Quick Stats Overlay on Image */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                    <h3 className="text-4xl font-black mb-2 leading-tight">{product.model}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-200">
                                        <div className="flex items-center gap-1">
                                            <Monitor size={16} className="text-[#FFD700]" />
                                            <span>{product.resolution} Display</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            <Star size={16} fill="currentColor" />
                                            <span>{product.rating} Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Details & Tabs */}
                            <div className="w-full md:w-7/12 flex flex-col bg-white h-full">
                                {/* Header */}
                                <div className="p-6 border-b border-gray-100 flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[#003366] font-extrabold text-xs bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-widest">{product.category}</span>
                                        </div>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-5xl font-black text-[#003366] tracking-tight">₹{displayPrice.toLocaleString()}</span>
                                            <span className="text-gray-400 text-sm font-semibold">{userMode === 'b2b' ? 'Volume Price (Excl. GST)' : 'Retail Price (Incl. Taxes)'}</span>
                                        </div>
                                    </div>
                                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                                        <X size={28} className="text-gray-400 group-hover:rotate-90 transition-transform duration-300" />
                                    </button>
                                </div>

                                {/* Tabs Navigation */}
                                <div className="flex border-b border-gray-100 px-6 overflow-x-auto no-scrollbar">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 px-6 py-5 text-xs font-black uppercase tracking-widest border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id
                                                ? 'border-[#003366] text-[#003366]'
                                                : 'border-transparent text-gray-400 hover:text-gray-600'
                                                }`}
                                        >
                                            <tab.icon size={14} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Content */}
                                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {activeTab === 'overview' && (
                                                <div className="space-y-8">
                                                    <div>
                                                        <h4 className="text-lg font-bold text-[#003366] mb-3">Product Description</h4>
                                                        <p className="text-gray-600 leading-relaxed text-lg">
                                                            {product.longDescription || `${product.specs}. Engineered for commercial durability and vibrant visual performance.`}
                                                        </p>
                                                    </div>

                                                    {product.highlights && (
                                                        <div>
                                                            <h4 className="text-sm font-black text-[#003366] uppercase tracking-widest mb-4">Key Highlights</h4>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {product.highlights.map((h, i) => (
                                                                    <div key={i} className="flex items-center gap-3 bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                                                                        <div className="w-2 h-2 rounded-full bg-[#003366]" />
                                                                        <span className="text-sm font-bold text-[#003366]">{h}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                                                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                                            <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Stock Availability</div>
                                                            <div className={`text-xl font-black ${product.stock === 'High' ? 'text-green-600' : 'text-orange-500'}`}>
                                                                {product.stock} Units
                                                            </div>
                                                        </div>
                                                        {userMode === 'b2b' && (
                                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                                                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Bulk Purchase MOQ</div>
                                                                <div className="text-xl font-black text-[#003366]">{product.moq} Units</div>
                                                            </div>
                                                        )}
                                                        <div className="bg-blue-50/30 p-5 rounded-2xl border border-blue-100/50">
                                                            <div className="text-[10px] text-blue-400 uppercase font-black tracking-widest mb-1">Fast Dispatch</div>
                                                            <div className="text-xl font-black text-[#003366]">24-48 Hours</div>
                                                        </div>
                                                        <div className="bg-green-50/30 p-5 rounded-2xl border border-green-100/50">
                                                            <div className="text-[10px] text-green-600 uppercase font-black tracking-widest mb-1">B2B Benefits</div>
                                                            <div className="text-xl font-black text-green-700">GST Invoice</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'specs' && (
                                                <div className="space-y-6">
                                                    <h4 className="font-black text-[#003366] uppercase tracking-widest text-sm mb-4">Technical Architecture</h4>
                                                    <div className="grid grid-cols-1 gap-3 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                        {[
                                                            { label: 'Panel Engineering', value: product.panel },
                                                            { label: 'Native Resolution', value: product.resolution },
                                                            { label: 'I/O Ports', value: product.ports },
                                                            { label: 'Processing Units', value: product.specs },
                                                            { label: 'Power Consumption', value: 'Energy Star 8.0 Rated' },
                                                            { label: 'Cabinet Material', value: 'High-Grade Industrial Plastic/Metal' }
                                                        ].map((spec, i) => (
                                                            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200/50 last:border-0">
                                                                <span className="text-xs text-gray-400 font-black uppercase tracking-widest">{spec.label}</span>
                                                                <span className="text-sm font-bold text-gray-800">{spec.value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'reviews' && (
                                                <div className="space-y-6">
                                                    <h4 className="font-black text-[#003366] uppercase tracking-widest text-sm mb-4">Customer Testimonials</h4>
                                                    {product.reviews ? (
                                                        <div className="space-y-4">
                                                            {product.reviews.map((rev, i) => (
                                                                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-hover hover:border-blue-200">
                                                                    <div className="flex justify-between items-center mb-3">
                                                                        <div className="font-black text-[#003366]">{rev.user}</div>
                                                                        <div className="flex gap-1 text-yellow-400">
                                                                            {[...Array(rev.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-gray-600 text-sm italic font-medium leading-relaxed">"{rev.comment}"</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="text-center py-10 text-gray-400 font-medium">No reviews yet for this model.</div>
                                                    )}
                                                </div>
                                            )}

                                            {activeTab === 'warranty' && (
                                                <div className="space-y-6">
                                                    <div className="bg-[#003366] p-8 rounded-3xl text-white relative overflow-hidden shadow-2xl">
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                                                        <div className="flex items-center gap-4 mb-6 relative z-10">
                                                            <ShieldCheck size={48} className="text-[#FFD700]" />
                                                            <div>
                                                                <h4 className="font-black text-2xl">Elite Warranty Program</h4>
                                                                <p className="text-[#FFD700] text-sm font-bold tracking-widest uppercase">12 Months Comprehensive Cover</p>
                                                            </div>
                                                        </div>
                                                        <ul className="space-y-4 text-sm font-medium relative z-10">
                                                            <li className="flex gap-3 items-start">
                                                                <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><ChevronRight size={12} /></div>
                                                                <span>Priority On-site service across Delhi NCR & Major Metros.</span>
                                                            </li>
                                                            <li className="flex gap-3 items-start">
                                                                <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><ChevronRight size={12} /></div>
                                                                <span>Zero-Cost panel replacement for manufacturing defects.</span>
                                                            </li>
                                                            <li className="flex gap-3 items-start">
                                                                <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><ChevronRight size={12} /></div>
                                                                <span>24/7 Technical Support for institutional buyers.</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Footer Action */}
                                <div className="p-6 border-t border-gray-100 bg-white flex gap-4">
                                    <button
                                        onClick={() => { onAddToCart(product); onClose(); }}
                                        className="flex-[2] bg-[#003366] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#002244] transition-all transform active:scale-95 shadow-xl shadow-blue-900/40 flex justify-center items-center gap-3 group"
                                    >
                                        <ShoppingCart size={20} className="group-hover:translate-x-1 transition-transform" /> {userMode === 'b2b' ? 'Add to Quote' : 'Add to Cart'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(`${window.location.origin}?product=${product.id}`);
                                            alert("Product link copied to clipboard!");
                                        }}
                                        className="flex-1 bg-gray-100 text-[#003366] py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-200 transition-all flex justify-center items-center gap-2"
                                    >
                                        Share
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
