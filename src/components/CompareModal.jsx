import React from 'react';
import { X, Star, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CompareModal = ({ items, onClose, addToCart }) => {
    if (items.length === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80] flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col h-[85vh] relative z-20 pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-[#003366] p-6 text-white flex justify-between items-center shadow-md z-10">
                        <div>
                            <h3 className="font-bold text-xl flex items-center gap-2"><BarChart2 size={24} /> Compare Models</h3>
                            <p className="text-blue-200 text-sm">{items.length} items selected</p>
                        </div>
                        <button onClick={onClose} className="hover:bg-white/10 p-2 rounded-full transition-colors"><X size={24} /></button>
                    </div>

                    <div className="flex-1 overflow-x-auto p-0 bg-gray-50/50">
                        <div className="grid grid-cols-4 min-w-[800px] bg-white rounded-none shadow-sm divide-x divide-gray-100 h-full">

                            {/* Labels Column */}
                            <div className="bg-gray-50/50 font-bold text-gray-400 flex flex-col">
                                <div className="h-48 border-b border-gray-100 p-6 flex items-end pb-4 text-xs uppercase tracking-widest">Product</div>
                                {['Price', 'Specs', 'Panel', 'Ports', 'Rating', 'Resolution', 'MOQ'].map(feature => (
                                    <div key={feature} className="p-4 border-b border-gray-100 h-16 flex items-center text-xs uppercase tracking-wide">
                                        {feature}
                                    </div>
                                ))}
                                <div className="p-4 h-20"></div>
                            </div>

                            {/* Product Columns */}
                            {items.map(item => (
                                <div key={item.id} className="text-center relative group hover:bg-blue-50/20 transition-colors flex flex-col">
                                    <div className="h-48 p-6 border-b border-gray-100 flex flex-col items-center justify-end">
                                        <div className="relative h-24 mb-3 w-full flex items-center justify-center">
                                            <img src={item.image} className="max-h-full max-w-full rounded-lg shadow-sm group-hover:scale-110 transition-transform" alt="" />
                                        </div>
                                        <h4 className="font-bold text-[#003366] text-sm leading-tight px-2">{item.model}</h4>
                                    </div>

                                    <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-center font-bold text-[#003366] text-lg">
                                        ₹{item.price.toLocaleString()}
                                    </div>
                                    <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-center text-xs text-gray-500 line-clamp-2 px-2">
                                        {item.specs}
                                    </div>
                                    <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-center text-sm font-medium text-gray-700">
                                        {item.panel}
                                    </div>
                                    <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-center text-xs text-gray-500">
                                        {item.ports}
                                    </div>
                                    <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-center text-yellow-500 font-bold gap-1">
                                        <Star size={14} fill="currentColor" /> {item.rating}
                                    </div>
                                    <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-center text-sm font-medium text-gray-700">
                                        {item.resolution}
                                    </div>
                                    <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-center text-sm font-medium text-gray-700">
                                        {item.moq} Units
                                    </div>

                                    <div className="p-6 h-20 flex items-center justify-center">
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="w-full bg-[#003366] text-white py-2 rounded-lg font-bold text-xs shadow-md hover:bg-[#FFD700] hover:text-[#003366] transition-all"
                                        >
                                            Add to Quote
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Empty placeholders */}
                            {[...Array(3 - items.length)].map((_, i) => (
                                <div key={`empty-${i}`} className="bg-gray-50/30 flex flex-col items-center justify-center text-gray-300 gap-4">
                                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center">
                                        <BarChart2 size={24} className="opacity-20" />
                                    </div>
                                    <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Empty Slot</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CompareModal;
