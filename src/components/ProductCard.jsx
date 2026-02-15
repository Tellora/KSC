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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`group bg-white rounded-xl md:rounded-2xl border border-gray-100 overflow-hidden shadow-sm md:hover:shadow-xl md:hover:border-blue-200 transition-all duration-300 flex ${viewMode === 'list' ? 'flex-row items-center h-48' : 'flex-col'} relative`}
        >
            {/* Selection Checkbox */}
            <div className="absolute top-2 left-2 z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); toggleSelection(item.id); }}
                    className={`w-5 h-5 md:w-6 md:h-6 rounded-md border flex items-center justify-center transition-colors shadow-sm ${selectedItems.includes(item.id) ? 'bg-[#003366] border-[#003366]' : 'bg-white/80 backdrop-blur border-gray-300'}`}
                >
                    {selectedItems.includes(item.id) && <CheckSquare size={14} className="text-white" />}
                </button>
            </div>

            {/* Image */}
            <div
                className={`relative overflow-hidden bg-gray-50 flex items-center justify-center ${viewMode === 'list' ? 'w-32 md:w-48 h-full flex-shrink-0' : 'h-32 md:h-56'}`}
                onClick={() => onOpenProduct(item)}
            >
                <img
                    src={item.image}
                    alt={item.model}
                    className="max-h-full max-w-full object-contain md:object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className={`p-3 md:p-5 flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'h-full' : ''}`}>
                <div>
                    <h3
                        className="font-bold text-xs md:text-lg text-[#003366] line-clamp-1 mb-1 cursor-pointer"
                        onClick={() => onOpenProduct(item)}
                    >
                        {item.model}
                    </h3>

                    <div className="flex flex-wrap gap-1 mb-2">
                        <span className="text-[9px] md:text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">{item.resolution}</span>
                        <span className="text-[9px] md:text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">MOQ: {item.moq}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-50 pt-2 md:pt-3 mt-auto">
                    <span className="text-sm md:text-xl font-black text-gray-900">₹{item.price.toLocaleString()}</span>

                    <button
                        onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                        className="bg-[#003366] text-white w-8 h-8 md:w-auto md:px-4 md:py-2 rounded-lg md:rounded-lg font-bold text-xs hover:bg-[#FFD700] hover:text-[#003366] transition-colors shadow-md flex items-center justify-center gap-1 active:scale-95 transform"
                    >
                        <ShoppingCart size={14} /> <span className="hidden md:inline">Add</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
