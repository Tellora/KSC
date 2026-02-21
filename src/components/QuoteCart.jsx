import React from 'react';
import { X, ShoppingCart, Trash2, MessageCircle, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG } from '../data/config';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

    const generatePDF = () => {
        if (cart.length === 0) return;
        const doc = new jsPDF();

        // Header
        doc.setFillColor(0, 51, 102); // #003366
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 215, 0); // #FFD700
        doc.setFontSize(24);
        doc.setFont("helvetica", "bold");
        doc.text(BUSINESS_CONFIG.name, 14, 25);

        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "normal");
        doc.text("Official Trade Quotation", 14, 32);

        // Date & Ref
        doc.setTextColor(50, 50, 50);
        doc.setFontSize(10);
        const dateStr = new Date().toLocaleDateString();
        const refNo = "KS-" + Math.floor(Math.random() * 90000 + 10000);
        doc.text(`Date: ${dateStr}`, 150, 50);
        doc.text(`Ref No: ${refNo}`, 150, 57);

        // From details
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("From:", 14, 50);
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(BUSINESS_CONFIG.address, 14, 57, { maxWidth: 80 });
        doc.text(`Phone: ${BUSINESS_CONFIG.phone}`, 14, 75);

        // Table
        const tableColumn = ["Model", "Resolution", "Qty", "Unit Price (INR)", "Total (INR)"];
        const tableRows = [];

        cart.forEach(item => {
            const rowData = [
                item.model,
                item.resolution,
                item.qty.toString(),
                item.price.toLocaleString(),
                (item.price * item.qty).toLocaleString()
            ];
            tableRows.push(rowData);
        });

        doc.autoTable({
            startY: 85,
            head: [tableColumn],
            body: tableRows,
            theme: 'grid',
            headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
            styles: { font: "helvetica", fontSize: 10 }
        });

        // Totals
        const finalY = doc.lastAutoTable.finalY + 15;
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Quotation Summary:", 135, finalY);
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(`Total Units: ${totalItems}`, 135, finalY + 8);

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 51, 102);
        doc.text(`Total Value: INR ${estimatedTotal.toLocaleString()}`, 135, finalY + 18);

        // Terms
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.setFont("helvetica", "normal");
        doc.text("Terms & Conditions:", 14, finalY + 30);
        doc.text("1. Prices are exclusive of GST.", 14, finalY + 36);
        doc.text("2. Quotation valid for 7 days.", 14, finalY + 41);
        doc.text("3. Subject to stock availability at the time of order confirmation.", 14, finalY + 46);

        // Save
        onSaveQuote(cart, estimatedTotal);
        doc.save(`${BUSINESS_CONFIG.name.replace(/ /g, '_')}_Quotation_${refNo}.pdf`);
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

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={generatePDF}
                                    className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${cart.length === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border-2 border-[#003366] text-[#003366] hover:bg-blue-50'}`}
                                    disabled={cart.length === 0}
                                >
                                    <Download size={20} /> Download PDF Quote
                                </button>

                                <button
                                    onClick={handleSend}
                                    className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${cart.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#25D366] text-white hover:bg-[#20bd5a]'}`}
                                    disabled={cart.length === 0}
                                >
                                    <MessageCircle size={20} /> Send via WhatsApp
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default QuoteCart;
