import React from 'react';
import { Instagram, MessageCircle, Package } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const Footer = ({ setActiveTab, setSearchQuery }) => (
    <footer className="bg-[#002244] text-white pt-24 pb-10 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-4xl font-black text-[#FFD700] mb-6 tracking-tight">{BUSINESS_CONFIG.name}</h3>
                <p className="text-blue-200 text-sm leading-relaxed max-w-md mb-8">
                    Connecting retailers to factory-direct electronics. Delhi's premier hub for wholesale LED TVs. We are committed to transparency, quality verification, and long-term business relationships.
                </p>
                <div className="space-y-4 text-sm text-blue-200 mb-8 border-l border-[#FFD700]/30 pl-6">
                    <p className="max-w-xs opacity-70 italic leading-relaxed">{BUSINESS_CONFIG.address}</p>
                    <p className="font-black text-[#FFD700] text-xl tracking-wider">{BUSINESS_CONFIG.phone}</p>
                    <p className="opacity-70 font-bold tracking-widest uppercase text-[10px]">Email: sales@kscorporations.in</p>
                </div>
                <div className="flex gap-4">
                    <a href={BUSINESS_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#E1306C] hover:text-white transition-all hover:-translate-y-1">
                        <Instagram size={22} />
                    </a>
                    <a href={`https://wa.me/${BUSINESS_CONFIG.phone}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-1">
                        <MessageCircle size={22} />
                    </a>
                </div>
            </div>

            <div>
                <h4 className="font-bold mb-8 text-white uppercase tracking-wider text-sm">Quick Links</h4>
                <ul className="space-y-4 text-sm text-blue-200">
                    <li><button onClick={() => setActiveTab('catalog')} className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Wholesale Catalog</button></li>
                    <li><button onClick={() => setActiveTab('fastorder')} className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Fast Order Pad</button></li>
                    <li><button onClick={() => setActiveTab('bulkenquiry')} className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Bulk Enquiry</button></li>
                    <li><button onClick={() => setActiveTab('history')} className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Order History</button></li>
                    <li><button onClick={() => { setSearchQuery('4K'); setActiveTab('catalog'); }} className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">4K QLED Series</button></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-8 text-white uppercase tracking-wider text-sm">Operation Hours</h4>
                <div className="space-y-4 text-sm text-blue-200">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Mon - Sat</span>
                        <span className="text-[#FFD700] font-bold">10 AM - 8 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2 text-red-300">
                        <span>Sunday</span>
                        <span className="font-bold">Closed</span>
                    </div>
                    <p className="text-[10px] text-blue-400 italic font-medium pt-2">Orders placed on Sunday are processed on Monday morning.</p>
                </div>
                <div className="mt-8">
                    <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-[10px]">Secure Payments</h4>
                    <div className="flex flex-wrap gap-2">
                        {["NEFT", "RTGS", "UPI", "Cash"].map(p => (
                            <span key={p} className="text-[9px] font-black bg-white/5 border border-white/10 px-2 py-1 rounded text-blue-200">{p}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 mb-12 border-y border-white/5 py-12">
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="bg-[#FFD700] p-3 rounded-2xl text-[#003366]"><Package size={24} /></div>
                <div>
                    <h5 className="font-bold text-white mb-1">Pan India Delivery</h5>
                    <p className="text-xs text-blue-200">Safely delivered through our logistics partners like VRL, TCI, and Arc.</p>
                </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="bg-[#FFD700] p-3 rounded-2xl text-[#003366]"><MessageCircle size={24} /></div>
                <div>
                    <h5 className="font-bold text-white mb-1">Instant Support</h5>
                    <p className="text-xs text-blue-200">Get 24/7 technical assistance for panel or board related queries.</p>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-2"><Package size={14} /> Designed for High-Volume B2B Trade</p>
        </div>
    </footer>
);

export const FloatingWhatsApp = () => (
    <a
        href={`https://wa.me/${BUSINESS_CONFIG.phone}?text=Hi ${BUSINESS_CONFIG.name}, I want to place a bulk order for TVs.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_0_0_rgba(37,211,102,0.7)] hover:shadow-[0_0_0_10px_rgba(37,211,102,0)] transition-shadow duration-1000 z-40 flex items-center gap-3 group animate-pulse-ring"
    >
        <MessageCircle size={28} className="animate-bounce" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">Chat Now</span>
    </a>
);
