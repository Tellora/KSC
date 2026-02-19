import React from 'react';
import { ShoppingCart, BarChart2, Star, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({
    item,
    viewMode,
    selectedItems,
    toggleSelection,
    onOpenProduct,
    addToCart,
    toggleCompare
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm md:hover:shadow-2xl md:hover:border-blue-400/30 transition-all duration-500 flex ${viewMode === 'list' ? 'flex-row items-center h-40 md:h-56' : 'flex-col'} relative`}
        >
            {/* Selection Checkbox */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); toggleSelection(item.id); }}
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-xl border-2 flex items-center justify-center transition-all shadow-md ${selectedItems.includes(item.id) ? 'bg-[#003366] border-[#003366] scale-105' : 'bg-white/80 backdrop-blur border-gray-200'}`}
                >
                    {selectedItems.includes(item.id) && <CheckSquare size={16} className="text-[#FFD700]" strokeWidth={3} />}
                </button>
            </div>

            {/* Badges */}
            <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20 flex flex-col gap-1 md:gap-1.5 items-end">
                {item.tag && (
                    <span className="bg-red-500 text-white text-[7px] md:text-[10px] font-black px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-full uppercase tracking-tighter shadow-lg">
                        {item.tag}
                    </span>
                )}
                <span className="bg-[#003366] text-[#FFD700] text-[7px] md:text-[10px] font-black px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-full uppercase tracking-tighter shadow-lg border border-white/10">
                    Bulk Deal
                </span>
            </div>

            {/* Image Section */}
            <div
                className={`relative overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer ${viewMode === 'list' ? 'w-32 md:w-64 h-full flex-shrink-0' : 'h-40 md:h-64'}`}
                onClick={() => onOpenProduct(item)}
            >
                <img
                    src={item.image}
                    alt={item.model}
                    className="max-h-[90%] max-w-[90%] object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#003366]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full text-[#003366] shadow-xl">
                        <BarChart2 size={24} />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className={`p-3 md:p-6 flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'h-full' : ''}`}>
                <div>
                    <div className="flex justify-between items-start mb-1 md:mb-2">
                        <h3
                            className="font-black text-xs md:text-xl text-[#003366] line-clamp-2 md:line-clamp-1 cursor-pointer hover:text-blue-600 transition-colors leading-tight"
                            onClick={() => onOpenProduct(item)}
                        >
                            {item.model}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                        <span className="text-[7px] md:text-[10px] font-black bg-blue-50 text-[#003366] px-1.5 py-0.5 rounded border border-blue-100 uppercase">{item.resolution}</span>
                        <span className="text-[7px] md:text-[10px] font-black bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded border border-orange-100 uppercase">MOQ: {item.moq}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2 md:pt-4">
                    <div className="flex flex-col">
                        <span className="text-[7px] md:text-[10px] text-gray-400 font-bold uppercase">Wholesale</span>
                        <span className="text-sm md:text-2xl font-black text-gray-900 leading-none">₹{item.price.toLocaleString()}</span>
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                        className="bg-[#003366] text-white p-2 md:px-5 md:py-3 rounded-xl font-black text-[8px] md:text-xs hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                        <ShoppingCart size={14} md:size={18} />
                        <span className="hidden md:inline">ADD TO QUOTE</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};


export default ProductCard;
