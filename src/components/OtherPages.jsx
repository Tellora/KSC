import React, { useState } from 'react';
import { MapPin, Phone, Award, CheckCircle, ChevronRight, ClipboardList, Info, ArrowUpDown, Send, Clock, List, TrendingUp, Plus, Zap, ShieldCheck, Download, Package, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG, PRODUCT_DATABASE } from '../data/config';

// --- Contact Component ---
export const Contact = () => (
    <div className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-10">
                <div>
                    <h2 className="text-4xl font-black text-[#003366] mb-6">Visit Our Office</h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We operate from the heart of Asia's largest electronics market. We encourage bulk buyers to visit our experience center in Chandni Chowk.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start gap-6 group hover:bg-gray-50 p-4 rounded-2xl transition-colors">
                        <div className="bg-blue-50 p-4 rounded-2xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors shadow-sm">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-xl mb-2">Experience Center</h3>
                            <p className="text-gray-500 leading-relaxed max-w-xs">{BUSINESS_CONFIG.address}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group hover:bg-gray-50 p-4 rounded-2xl transition-colors">
                        <div className="bg-blue-50 p-4 rounded-2xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors shadow-sm">
                            <Phone size={28} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-xl mb-2">Support & Sales</h3>
                            <p className="text-gray-500 text-lg font-medium">{BUSINESS_CONFIG.phone}</p>
                            <p className="text-sm text-gray-400 mt-1">Mon - Sat: 11:00 AM - 8:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-[#FFD700]/10 to-transparent border-l-4 border-[#FFD700] rounded-r-2xl">
                    <h4 className="font-bold text-[#003366] mb-4 flex items-center gap-2 text-lg"><Award size={24} /> Dealer Benefits</h4>
                    <ul className="text-gray-700 space-y-3 font-medium">
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFD700]" /> Exclusive Price Sheet for {'>'}50 units</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFD700]" /> Priority Dispatch Service</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFD700]" /> Marketing Material Support</li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative bg-gray-100"
            >
                <iframe
                    title="KSC Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.761845667389!2d77.23326167615964!3d28.65413318388481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd03429352d1%3A0x3345479201730076!2sLajpat%20Rai%20Market%2C%20Chandni%20Chowk%2C%20New%20Delhi%2C%20Delhi%20110006!5e0!3m2!1sen!2sin!4v1709664583262!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-xs border border-gray-100">
                    <p className="font-bold text-[#003366] text-lg mb-1">Navigate to Store</p>
                    <p className="text-sm text-gray-500 mb-4">Old Lajpat Rai Market, Delhi</p>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Shop+No+728+Old+Lajpat+Rai+Market+Chandni+Chowk+Delhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold bg-[#003366] text-white px-5 py-2.5 rounded-xl hover:bg-[#FFD700] hover:text-[#003366] transition-colors w-full justify-center"
                    >
                        Open in Maps <ChevronRight size={16} />
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
);

// --- FastOrder Component ---
export const FastOrder = ({ addToCart }) => {
    const [input, setInput] = useState('');
    const [lastAdded, setLastAdded] = useState([]);

    const topModels = PRODUCT_DATABASE.flatMap(c => c.items).slice(0, 4);

    const handleParse = () => {
        const lines = input.split('\n');
        let addedCount = 0;
        let newItems = [];

        lines.forEach(line => {
            const parts = line.trim().split(/\s+/);
            if (parts.length >= 2) {
                const modelCode = parts[0];
                const qty = parseInt(parts[1], 10) || 1;

                const foundItem = PRODUCT_DATABASE.flatMap(c => c.items)
                    .find(i => i.model.toLowerCase() === modelCode.toLowerCase());

                if (foundItem) {
                    addToCart(foundItem, qty);
                    addedCount++;
                    newItems.push({ model: foundItem.model, qty });
                }
            }
        });

        if (addedCount > 0) {
            setLastAdded(newItems);
            alert(`Processed ${addedCount} items. Check your quote.`);
        } else {
            alert("No matching products found. Format: ModelCode Quantity");
        }
        setInput('');
    };

    return (
        <div className="py-20 max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left Column: Quick Select */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 className="font-black text-[#003366] uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
                            <TrendingUp size={14} className="text-[#FFD700]" /> Top Movers
                        </h4>
                        <div className="grid gap-3">
                            {topModels.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setInput(prev => prev + `${item.model} 5\n`)}
                                    className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 group"
                                >
                                    <div className="text-left">
                                        <p className="font-bold text-[#003366] text-sm group-hover:text-blue-700 transition-colors">{item.model}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{item.resolution}</p>
                                    </div>
                                    <Plus size={16} className="text-gray-300 group-hover:text-blue-500" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {lastAdded.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-50 p-6 rounded-3xl border border-green-100"
                        >
                            <h4 className="text-green-800 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                <CheckCircle size={14} /> Recently Added
                            </h4>
                            <ul className="space-y-2">
                                {lastAdded.map((item, idx) => (
                                    <li key={idx} className="flex justify-between text-xs font-bold text-green-700">
                                        <span>{item.model}</span>
                                        <span>x {item.qty}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>

                {/* Right/Main Column: Order Pad */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                    <div className="bg-[#003366] px-8 py-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-2xl text-[#FFD700] backdrop-blur-md"><ClipboardList size={28} /></div>
                            <div>
                                <h2 className="text-2xl font-black text-white leading-tight">Fast Order Pad</h2>
                                <p className="text-blue-200 text-xs font-medium uppercase tracking-widest">Enterprise Bulk Input</p>
                            </div>
                        </div>
                        <div className="hidden sm:block text-right">
                            <p className="text-white font-black text-xl">₹ FAST</p>
                            <p className="text-blue-300 text-[10px] font-bold">1-CLICK PROCESSING</p>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-xs font-black text-[#003366] uppercase tracking-widest">Input Area</label>
                                    <button onClick={() => setInput('')} className="text-xs font-bold text-red-500 hover:underline">Clear All</button>
                                </div>
                                <textarea
                                    className="w-full h-80 border-2 border-gray-100 rounded-3xl p-6 font-mono text-sm bg-gray-50 focus:ring-4 focus:ring-blue-500/10 focus:border-[#003366] outline-none resize-none transition-all shadow-inner"
                                    placeholder={`3256FLSM 10\n4310FLSM 5\n50QLED 2`}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                ></textarea>
                                <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1.5"><Info size={14} className="text-blue-400" /> Format: MODELCODE [SPACE] QUANTITY (One SKU per line)</p>
                            </div>

                            <div className="flex flex-col justify-between">
                                <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100/50 space-y-6">
                                    <div>
                                        <h4 className="font-black text-[#003366] text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Zap size={16} fill="currentColor" /> Why use this?
                                        </h4>
                                        <ul className="text-xs text-[#003366]/70 space-y-3 font-medium">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1" /> For regular dealers who know our model codes by heart.</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1" /> Paste bulk lists from Excel or WhatsApp directly.</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1" /> Bypass the catalog UI for faster quote generation.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-blue-100/50 shadow-sm">
                                        <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Example Line</p>
                                        <code className="text-xs font-black text-[#003366] bg-blue-50 px-2 py-1 rounded">3256FLSM 12</code>
                                    </div>
                                </div>

                                <button
                                    onClick={handleParse}
                                    disabled={!input.trim()}
                                    className="w-full bg-[#003366] text-white font-black py-5 rounded-3xl hover:bg-[#FFD700] hover:text-[#003366] transition-all shadow-xl shadow-blue-900/40 flex justify-center items-center gap-3 active:scale-95 transform disabled:opacity-50 disabled:cursor-not-allowed mt-8 lg:mt-0"
                                >
                                    VERIFY & PROCESS LIST <ArrowUpDown size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};


// --- EnquiryForm Component ---
export const EnquiryForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        businessName: '',
        phone: '',
        gst: '',
        requirement: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        const msg = `*New Web Enquiry*\nBusiness: ${formData.businessName}\nPhone: ${formData.phone}\nGST: ${formData.gst}\nRequirement: ${formData.requirement}`;
        window.open(`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent(msg)}`, '_blank');
        setFormData({ businessName: '', phone: '', gst: '', requirement: '' });
    };

    return (
        <div className="py-20 bg-gray-50 min-h-[80vh] flex items-center">
            <div className="max-w-3xl mx-auto px-4 w-full">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="bg-[#003366] px-8 py-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <h2 className="text-3xl font-black text-white relative z-10">Bulk Order Enquiry</h2>
                        <p className="text-blue-200 mt-2 relative z-10">Fill this form to get a callback within 2 hours</p>
                    </div>
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Business Name *</label>
                                <input
                                    required
                                    className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none bg-gray-50 transition-all"
                                    placeholder="Enter shop/company name"
                                    value={formData.businessName}
                                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                                <input
                                    required
                                    type="tel"
                                    className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] outline-none bg-gray-50 transition-all"
                                    placeholder="WhatsApp enabled number"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">GST Number (Optional)</label>
                            <input
                                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] outline-none bg-gray-50 transition-all"
                                placeholder="For GST invoice verification"
                                value={formData.gst}
                                onChange={e => setFormData({ ...formData, gst: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Requirement Details *</label>
                            <textarea
                                required
                                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] outline-none bg-gray-50 transition-all h-32 resize-none"
                                placeholder="Ex: Need 10 units of 32 inch Smart TV and 5 units of 43 inch."
                                value={formData.requirement}
                                onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#003366] text-white font-bold py-5 rounded-xl hover:bg-[#002244] transition-all flex justify-center items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                        >
                            Submit Enquiry <Send size={20} />
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            By submitting, you agree to receive wholesale updates on WhatsApp.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

// --- History Component ---
export const History = ({ orders }) => (
    <div className="py-20 max-w-4xl mx-auto px-4 min-h-[60vh]">
        <h2 className="text-3xl font-black text-[#003366] mb-8 flex items-center gap-3">
            <Clock size={32} /> My Quote History
        </h2>
        {orders.length === 0 ? (
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white p-12 text-center rounded-2xl shadow-sm border border-gray-200"
            >
                <div className="inline-block p-4 bg-gray-50 rounded-full mb-4"><List size={32} className="text-gray-400" /></div>
                <p className="text-gray-500 text-lg">You haven't generated any quotes yet.</p>
                <p className="text-sm text-gray-400 mt-2">Quotes you send via WhatsApp will appear here automatically.</p>
            </motion.div>
        ) : (
            <div className="space-y-6">
                {orders.map((order, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                        key={order.id}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs font-bold bg-blue-100 text-[#003366] px-3 py-1 rounded-full uppercase tracking-wide">SENT</span>
                                <p className="text-sm text-gray-500 mt-2 font-medium">{new Date(order.date).toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-black text-2xl text-[#003366]">₹{order.total.toLocaleString()}</p>
                                <p className="text-xs text-gray-500">{order.items.length} Models</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 border border-gray-100">
                            <p className="font-bold mb-2 uppercase text-xs text-gray-400 tracking-wider">Items Summary</p>
                            <ul className="list-disc pl-5 space-y-1">
                                {order.items.map((item, idx) => (
                                    <li key={idx}><span className="font-bold">{item.model}</span> x {item.qty}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        )}
    </div>
);
