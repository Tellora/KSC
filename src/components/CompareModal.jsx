import React from 'react';
import { X, Star, BarChart2, Cpu, Layers, Usb, Maximize, Package, Trophy, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CompareModal = ({ items, isOpen, onClose, addToCart, removeFromCompare }) => {
    // Dynamic Highlights Calculations
    const minPrice = items.length > 0 ? Math.min(...items.map(i => i.price)) : 0;
    const maxRating = items.length > 0 ? Math.max(...items.map(i => parseFloat(i.rating) || 0)) : 0;

    return (
        <AnimatePresence>
            {isOpen && items.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-[#003366]/60 backdrop-blur-xl z-[80] flex items-center justify-center p-4 lg:p-8"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 50, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 50, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col h-[85vh] relative z-20 pointer-events-auto border border-white/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#003366] to-[#002244] p-6 lg:p-8 text-white flex justify-between items-center shadow-lg relative overflow-hidden z-10 shrink-0">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                            <div className="relative z-10">
                                <h3 className="font-black text-2xl flex items-center gap-3 tracking-tight">
                                    <BarChart2 size={28} className="text-[#FFD700]" /> Compare Matrix
                                </h3>
                                <p className="text-blue-200 text-sm font-medium mt-1 uppercase tracking-widest">{items.length} SKUs Selected</p>
                            </div>
                            <button onClick={onClose} className="hover:bg-white/10 p-2 lg:p-3 rounded-full transition-colors relative z-10 shadow-sm border border-transparent hover:border-white/20">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrolling Content Area */}
                        <div className="flex-1 overflow-x-auto p-0 bg-[#F4F6F8]">
                            <div className="grid grid-cols-5 min-w-[900px] h-full shadow-sm">

                                {/* Labels Column */}
                                <div className="bg-white font-black text-[#003366] flex flex-col border-r border-gray-100 shadow-[2px_0_10px_rgba(0,0,0,0.02)] z-10 sticky left-0 uppercase text-xs tracking-widest">
                                    <div className="h-56 p-6 flex flex-col justify-end pb-6 text-gray-400 bg-gray-50/50">Product Detail Overview</div>
                                    <div className="h-16 px-6 flex items-center gap-3 border-b border-gray-100 bg-white"><span className="p-1.5 bg-blue-50 rounded-md text-blue-600"><CheckCircle size={14} /></span> Wholesale Price</div>
                                    <div className="h-16 px-6 flex items-center gap-3 border-b border-gray-100 bg-gray-50/30"><span className="p-1.5 bg-gray-100 rounded-md text-gray-600"><Cpu size={14} /></span> Key Specs</div>
                                    <div className="h-16 px-6 flex items-center gap-3 border-b border-gray-100 bg-white"><span className="p-1.5 bg-gray-100 rounded-md text-gray-600"><Layers size={14} /></span> Panel Type</div>
                                    <div className="h-16 px-6 flex items-center gap-3 border-b border-gray-100 bg-gray-50/30"><span className="p-1.5 bg-gray-100 rounded-md text-gray-600"><Usb size={14} /></span> Connectivity</div>
                                    <div className="h-16 px-6 flex items-center gap-3 border-b border-gray-100 bg-white"><span className="p-1.5 bg-yellow-50 rounded-md text-yellow-600"><Star size={14} /></span> Dealer Rating</div>
                                    <div className="h-16 px-6 flex items-center gap-3 border-b border-gray-100 bg-gray-50/30"><span className="p-1.5 bg-gray-100 rounded-md text-gray-600"><Maximize size={14} /></span> Resolution</div>
                                    <div className="h-16 px-6 flex items-center gap-3 border-b border-gray-100 bg-white"><span className="p-1.5 bg-gray-100 rounded-md text-gray-600"><Package size={14} /></span> MOQ</div>
                                    <div className="h-24 bg-gray-50/50"></div>
                                </div>

                                {/* Dynamic Product Columns */}
                                {items.map((item, index) => {
                                    const isBestPrice = item.price === minPrice;
                                    const isBestRating = parseFloat(item.rating) === maxRating;

                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={item.id}
                                            className="text-center group flex flex-col border-r border-gray-100 relative bg-white hover:bg-blue-50/10 transition-colors"
                                        >
                                            {/* Top Remove Button */}
                                            <button
                                                onClick={() => removeFromCompare(item.id)}
                                                className="absolute top-4 right-4 z-30 p-1.5 bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 rounded-full shadow-sm transition-all opacity-0 group-hover:opacity-100"
                                                title="Remove from Compare"
                                            >
                                                <X size={14} strokeWidth={3} />
                                            </button>

                                            {/* Image & Title Header */}
                                            <div className="h-56 p-6 flex flex-col items-center justify-end bg-gray-50/50 pt-8 relative">
                                                <div className="relative h-28 mb-4 w-full flex items-center justify-center">
                                                    <img src={item.image} className="max-h-full max-w-full rounded-xl drop-shadow-xl group-hover:scale-110 transition-transform duration-500" alt={item.model} />
                                                </div>
                                                <h4 className="font-black text-[#003366] text-sm md:text-base leading-tight px-2">{item.model}</h4>
                                            </div>

                                            {/* Price Row (Highlighted if best) */}
                                            <div className={`h-16 px-4 flex flex-col items-center justify-center border-b border-gray-100 relative ${isBestPrice ? 'bg-green-50/50' : 'bg-white'}`}>
                                                <span className={`font-black text-lg ${isBestPrice ? 'text-green-700' : 'text-[#003366]'}`}>₹{item.price.toLocaleString()}</span>
                                                {isBestPrice && <span className="absolute top-1 text-[8px] font-black text-green-600 uppercase tracking-widest bg-green-100 px-2 rounded-full">Top Value</span>}
                                            </div>

                                            <div className="h-16 px-4 flex items-center justify-center text-xs font-bold text-gray-600 border-b border-gray-100 bg-gray-50/30">{item.specs}</div>
                                            <div className="h-16 px-4 flex items-center justify-center text-sm font-black text-gray-800 border-b border-gray-100 bg-white">{item.panel}</div>
                                            <div className="h-16 px-4 flex items-center justify-center text-xs font-bold text-gray-600 border-b border-gray-100 bg-gray-50/30">{item.ports}</div>

                                            {/* Rating Row (Highlighted if best) */}
                                            <div className={`h-16 px-4 flex flex-col items-center justify-center border-b border-gray-100 relative ${isBestRating ? 'bg-[#FFD700]/10' : 'bg-white'}`}>
                                                <div className="flex items-center gap-1 font-black text-lg text-gray-800">
                                                    {item.rating} <Star size={16} className={isBestRating ? 'text-[#FFD700] fill-[#FFD700]' : 'text-gray-300'} />
                                                </div>
                                                {isBestRating && <span className="absolute top-1 text-[8px] font-black text-yellow-700 uppercase tracking-widest bg-yellow-100 px-2 rounded-full flex items-center gap-0.5"><Trophy size={8} /> Highest Rated</span>}
                                            </div>

                                            <div className="h-16 px-4 flex items-center justify-center text-sm font-black text-[#003366] border-b border-gray-100 bg-gray-50/30 uppercase tracking-wide">{item.resolution}</div>
                                            <div className="h-16 px-4 flex items-center justify-center text-sm font-black text-gray-800 border-b border-gray-100 bg-white">{item.moq} Units</div>

                                            {/* Action Row */}
                                            <div className="h-24 p-6 flex flex-col justify-center bg-gray-50/50 shrink-0">
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="w-full bg-[#003366] text-white py-3 md:py-3.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl shadow-blue-900/30 hover:bg-[#FFD700] hover:text-[#003366] hover:-translate-y-1 transition-all active:scale-95"
                                                >
                                                    Add to Quote
                                                </button>
                                            </div>
                                        </motion.div>
                                    );
                                })}

                                {/* Empty placeholders (fills up to 4 columns) */}
                                {[...Array(Math.max(0, 4 - items.length))].map((_, i) => (
                                    <div key={`empty-${i}`} className="bg-gray-50/50 flex flex-col items-center justify-center text-gray-300 gap-4 shadow-inner border-r border-gray-100 h-full">
                                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-white shadow-sm">
                                            <BarChart2 size={32} className="opacity-30 text-gray-400" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Add SKU to Compare</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CompareModal;
