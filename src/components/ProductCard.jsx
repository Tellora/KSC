import React from 'react';
import { ShoppingCart, BarChart2, Star, CheckSquare, Layers, Cpu, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({
    item,
    viewMode,
    selectedItems,
    toggleSelection,
    onOpenProduct,
    addToCart,
    toggleCompare,
    userMode
}) => {
    const displayPrice = userMode === 'retail' ? Math.round(item.price * 1.3) : item.price;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`group bg-[#001224] rounded-3xl border border-white/5 overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 relative flex ${viewMode === 'list' ? 'flex-col md:flex-row' : 'flex-col'}`}
        >
            {/* Selection Checkbox & Compare Toggle */}
            <div className="absolute top-3 left-3 z-20 flex gap-2">
                {userMode === 'b2b' && (
                    <button
                        onClick={(e) => { e.stopPropagation(); toggleSelection(item.id); }}
                        className={`w-7 h-7 rounded-xl border flex items-center justify-center transition-all ${selectedItems.includes(item.id) ? 'bg-[#FFD700] border-[#FFD700] scale-105' : 'bg-[#000a14]/80 backdrop-blur-md border-white/10 hover:border-white/30'}`}
                        title="Select for Bulk Quote"
                    >
                        {selectedItems.includes(item.id) && <CheckSquare size={16} className="text-[#001224]" strokeWidth={3} />}
                    </button>
                )}
                <button
                    onClick={(e) => { e.stopPropagation(); toggleCompare(item); }}
                    className="w-7 h-7 rounded-xl border bg-[#000a14]/80 backdrop-blur-md border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-gray-400 flex items-center justify-center transition-all"
                    title="Add to Compare"
                >
                    <Layers size={14} strokeWidth={2.5} />
                </button>
            </div>

            {/* Top Right Badges */}
            <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 items-end">
                {item.tag && (
                    <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-red-500/20">
                        {item.tag}
                    </span>
                )}
                {item.stock === 'High' ? (
                    <span className="bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                        <Check size={10} strokeWidth={3} /> In Stock
                    </span>
                ) : item.stock === 'Medium' ? (
                    <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-black px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                        <AlertCircle size={10} strokeWidth={3} /> Low Stock
                    </span>
                ) : (
                    <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                        <AlertCircle size={10} strokeWidth={3} /> Limited
                    </span>
                )}
            </div>

            {/* Image Section */}
            <div
                className={`relative overflow-hidden bg-[#000a14]/50 flex items-center justify-center cursor-pointer p-6 ${viewMode === 'list' ? 'w-full md:w-72 h-48 md:h-auto flex-shrink-0 border-r border-white/5' : 'h-56 w-full mt-4'}`}
                onClick={() => onOpenProduct(item)}
            >
                <img
                    src={item.image}
                    alt={item.model}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000a14]/90 via-[#000a14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-[#001224]/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-[#FFD700] font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                        <BarChart2 size={18} /> Quick View
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className={`p-5 md:p-6 flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'h-full' : ''}`}>
                <div>
                    {/* Header Info */}
                    <div className="flex justify-between items-start mb-2 gap-4">
                        <h3
                            className="font-black text-lg md:text-xl text-white line-clamp-2 cursor-pointer hover:text-blue-400 transition-colors leading-tight"
                            onClick={() => onOpenProduct(item)}
                        >
                            {item.model}
                        </h3>
                        <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg border border-white/5 flex-shrink-0">
                            <Star size={12} className="text-[#FFD700] fill-current" />
                            <span className="text-[10px] font-black text-white">{item.rating}</span>
                        </div>
                    </div>

                    {/* Quick Specs Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[10px] font-black font-mono tracking-wider bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20 uppercase">{item.resolution}</span>
                        {userMode === 'b2b' && (
                            <span className="text-[10px] font-black bg-purple-500/10 text-purple-300 px-2 py-1 rounded border border-purple-500/20 uppercase tracking-widest">MOQ {item.moq}</span>
                        )}
                        {userMode === 'retail' && (
                            <span className="text-[10px] font-black bg-green-500/10 text-green-300 px-2 py-1 rounded border border-green-500/20 uppercase tracking-widest">Free Shipping</span>
                        )}
                    </div>

                    {/* Detailed Specs (List view specific or shown subtly in grid) */}
                    <div className={`space-y-2 mb-4 ${viewMode === 'list' ? 'block' : 'hidden sm:block'}`}>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                            <Cpu size={14} className="text-[#FFD700] opacity-70 group-hover:opacity-100 transition-all" /> {item.specs}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                            <Layers size={14} className="text-blue-400 opacity-70 group-hover:opacity-100 transition-all" /> {item.panel}
                        </div>
                    </div>

                    {/* List View Extra Details */}
                    {viewMode === 'list' && (
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4 italic">
                            "{item.longDescription}"
                        </p>
                    )}
                </div>

                {/* Footer / Actions */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                    <div className="flex flex-col">
                        <span className={`text-[9px] text-gray-500 font-bold uppercase tracking-widest`}>
                            {userMode === 'b2b' ? 'Wholesale Rate' : 'Retail Price'}
                        </span>
                        <span className="text-xl md:text-2xl font-black text-white leading-none mt-0.5">₹{displayPrice.toLocaleString()}</span>
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2.5 md:px-5 md:py-3 rounded-xl font-black text-[10px] md:text-xs hover:from-blue-500 hover:to-blue-400 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] border border-blue-400/20"
                    >
                        <ShoppingCart size={16} />
                        <span className="hidden sm:inline uppercase tracking-wider">{userMode === 'b2b' ? 'Add to Quote' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;

