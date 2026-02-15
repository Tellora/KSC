import React from 'react';
import { Instagram, MessageCircle, Package } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const Footer = () => (
    <footer className="bg-[#002244] text-white pt-24 pb-10 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-3xl font-black text-[#FFD700] mb-6 tracking-tight">{BUSINESS_CONFIG.name}</h3>
                <p className="text-blue-200 text-sm leading-relaxed max-w-sm mb-8">
                    Connecting retailers to factory-direct electronics. We are committed to transparency, quality verification, and long-term business relationships.
                </p>
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
                <h4 className="font-bold mb-8 text-white uppercase tracking-wider text-sm">Business</h4>
                <ul className="space-y-4 text-sm text-blue-200">
                    <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Wholesale Catalog</button></li>
                    <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Partner Program</button></li>
                    <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Warranty Claims</button></li>
                    <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block">Shipping Policy</button></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-8 text-white uppercase tracking-wider text-sm">Contact</h4>
                <div className="space-y-4 text-sm text-blue-200">
                    <p className="max-w-xs leading-relaxed opacity-80">{BUSINESS_CONFIG.address}</p>
                    <p className="font-mono text-[#FFD700] text-lg hover:text-white transition-colors cursor-pointer">{BUSINESS_CONFIG.phone}</p>
                    <p className="hover:text-white transition-colors cursor-pointer">sales@kscorporations.in</p>
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
