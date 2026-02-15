import React from 'react';
import { X, ShoppingCart, Trash2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG } from '../data/config';

const QuoteCart = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, onSaveQuote }) => {
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    const estimatedTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    const generateWhatsAppLink = () => {
        let message = `*Bulk Order Inquiry - ${BUSINESS_CONFIG.name}*\n\nHello, I am interested in the following models:\n\n`;
        cart.forEach(item => {
            message += `• ${item.model}: ${item.qty} units @ ₹${item.price}\n`;
        });
        message += `\n*Total Items:* ${totalItems}`;
        message += `\n*Estimated Value:* ₹${estimatedTotal.toLocaleString()}`;
        message += `\n\nPlease confirm stock availability.`;

        return `https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent(message)}`;
    };

    const handleSend = () => {
        if (cart.length === 0) return;
        onSaveQuote(cart, estimatedTotal);
        window.open(generateWhatsAppLink(), '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[100] flex flex-col"
                    >
                        <div className="bg-[#003366] p-4 text-white flex justify-between items-center shadow-md">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                <ShoppingCart size={20} /> Build Your Quote
                            </h2>
                            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                                    <ShoppingCart size={48} className="opacity-20" />
                                    <p>Your quote list is empty.</p>
                                    <button
                                        onClick={onClose}
                                        className="text-[#003366] font-semibold hover:underline"
                                    >
                                        Start Adding Products
                                    </button>
                                </div>
                            ) : (
                                <AnimatePresence>
                                    {cart.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex justify-between items-start group"
                                        >
                                            <div className="flex gap-3">
                                                <img src={item.image} className="w-16 h-16 object-cover rounded-lg bg-white shadow-sm" alt="" />
                                                <div>
                                                    <h4 className="font-bold text-[#003366] text-sm">{item.model}</h4>
                                                    <p className="text-sm font-semibold mt-1">₹{item.price.toLocaleString()}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold w-8"
                                                    >-</button>
                                                    <span className="px-2 text-sm font-medium w-8 text-center">{item.qty}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold w-8"
                                                    >+</button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                                                >
                                                    <Trash2 size={12} /> Remove
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        <div className="border-t border-gray-200 p-6 bg-gray-50 space-y-4">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Total Units:</span>
                                <span className="font-bold">{totalItems}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-[#003366]">
                                <span>Est. Value:</span>
                                <span>₹{estimatedTotal.toLocaleString()}*</span>
                            </div>
                            <p className="text-[10px] text-gray-500 text-center">
                                * Prices subject to quantity & market fluctuation.
                            </p>

                            <button
                                onClick={handleSend}
                                className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${cart.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#25D366] text-white hover:bg-[#20bd5a]'}`}
                                disabled={cart.length === 0}
                            >
                                <MessageCircle size={20} /> Send Quote via WhatsApp
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default QuoteCart;
