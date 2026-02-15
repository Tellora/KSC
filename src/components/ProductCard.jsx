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
            className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex ${viewMode === 'list' ? 'flex-row items-center h-48' : 'flex-col'} relative`}
        >
            {/* Selection Checkbox */}
            <div className="absolute top-3 left-3 z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); toggleSelection(item.id); }}
                    className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors shadow-sm ${selectedItems.includes(item.id) ? 'bg-[#003366] border-[#003366]' : 'bg-white/80 backdrop-blur border-gray-300 hover:border-[#003366]'}`}
                >
                    {selectedItems.includes(item.id) && <CheckSquare size={16} className="text-white" />}
                </button>
            </div>

            {/* Image */}
            <div className={`relative overflow-hidden bg-gray-100 ${viewMode === 'list' ? 'w-48 h-full flex-shrink-0' : 'h-56'}`}>
                <img
                    src={item.image}
                    alt={item.model}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity" />

                {/* Badges */}
                <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                    {item.stock && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-sm ${item.stock === 'High' ? 'bg-green-100/90 text-green-700' : item.stock === 'Low' ? 'bg-red-100/90 text-red-700' : 'bg-blue-100/90 text-blue-700'}`}>
                            {item.stock} Stock
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className={`p-5 flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'h-full' : ''}`}>
                <div>
                    <div className="flex justify-between items-start mb-1">
                        <h3
                            className="font-bold text-lg text-[#003366] group-hover:text-blue-600 transition-colors cursor-pointer"
                            onClick={() => onOpenProduct(item)}
                        >
                            {item.model}
                        </h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{item.specs}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">MOQ: {item.moq}</span>
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">{item.resolution}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-auto">
                    <span className="text-xl font-black text-gray-900">₹{item.price.toLocaleString()}</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => toggleCompare(item)}
                            className="p-2 text-gray-400 hover:text-[#003366] hover:bg-blue-50 rounded-lg transition-colors"
                            title="Compare"
                        >
                            <BarChart2 size={18} />
                        </button>
                        <button
                            onClick={() => addToCart(item)}
                            className="bg-[#003366] text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#FFD700] hover:text-[#003366] transition-colors shadow-md flex items-center gap-1 active:scale-95 transform"
                        >
                            <ShoppingCart size={14} /> Add
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
