import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Truck, Zap, Award, Mail, CheckCircle, Star, Package, Instagram, MessageCircle, ArrowRight, UserCheck, Settings, PenTool, Database, Plus } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG } from '../data/config';

// Reusable Scroll Reveal Component
const ScrollReveal = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StatsSection = () => {
    return (
        <section className="bg-[#002244] py-8 md:py-12 relative z-20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-white relative z-10">
                {[
                    { val: "5000+", label: "Units Sold" },
                    { val: "500+", label: "Dealers" },
                    { val: "18", label: "States" },
                    { val: "98%", label: "Accuracy" }
                ].map((stat, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-default">
                            <div className="text-2xl md:text-4xl font-black text-[#FFD700] mb-1 font-mono group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                            <div className="text-blue-200 text-[8px] md:text-xs font-bold uppercase tracking-widest leading-none">{stat.label}</div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export const ProcessFlow = () => {
    const steps = [
        { icon: UserCheck, title: "Register", desc: "Verify dealer status on WhatsApp." },
        { icon: Database, title: "Browse", desc: "Access wholesale rates in real-time." },
        { icon: PenTool, title: "Quote", desc: "Instantly generate proforma invoices." },
        { icon: Truck, title: "Dispatch", desc: "Heavy crate packing within 24h." },
    ];

    return (
        <div className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 opacity-50 md:opacity-100"></div>
            <div className="max-w-7xl mx-auto px-4">
                <ScrollReveal className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-black text-[#003366] mb-3 md:mb-4">Global Trade Flow</h2>
                    <p className="text-gray-500 text-sm md:text-lg max-w-xl mx-auto px-4">Enterprise-grade procurement designed for modern high-volume retailers.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

                    {steps.map((step, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group bg-gray-50/50 md:bg-transparent p-4 md:p-0 rounded-2xl border border-gray-100/50 md:border-none shadow-sm md:shadow-none">
                                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-0 md:mb-6 mr-4 md:mr-0 shadow-lg group-hover:bg-[#003366] group-hover:text-[#FFD700] transition-all duration-300 relative z-10 shrink-0">
                                    <step.icon size={24} md:size={32} />
                                    <div className="absolute -top-1 -right-1 md:top-0 md:right-0 w-5 h-5 md:w-6 md:h-6 bg-[#FFD700] rounded-full text-[9px] md:text-[10px] font-black text-[#003366] flex items-center justify-center shadow-md border-2 border-white">
                                        {i + 1}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-black text-base md:text-xl text-[#003366] mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-500 overflow-hidden leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "What is the Minimum Order Quantity (MOQ)?", a: "Our general MOQ is 3-5 units depending on the model. For sample verification, we allow single unit trial orders for new registered dealers." },
        { q: "Do you provide GST Invoices?", a: "Yes, 100% of our billing is GST paid. We provide B2B tax invoices which you can use for input credit." },
        { q: "What about transport damage?", a: "We use wooden crate packing for all outstation orders. In the rare case of transit damage, we provide free replacement if reported within 24 hours of delivery with video proof." },
        { q: "Can I get a credit period?", a: "Credit facilities are available only for partners with a 6-month transaction history and subject to bank approval." },
    ];

    return (
        <div className="py-20 bg-[#F4F6F8]">
            <div className="max-w-3xl mx-auto px-4">
                <ScrollReveal className="text-center mb-12">
                    <h2 className="text-3xl font-black text-[#003366] mb-4">Frequently Asked Questions</h2>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <motion.div
                                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="p-6 flex justify-between items-center font-bold text-[#003366]">
                                    {faq.q}
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                                        className="text-gray-400"
                                    >
                                        <Plus size={20} />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm border-t border-gray-100">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Features = () => (
    <div className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal className="text-center mb-20">
                <h2 className="text-4xl font-black text-[#003366] mb-4 tracking-tight">Why Top Retailers Choose {BUSINESS_CONFIG.name}</h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">We've built an infrastructure designed for speed, reliability, and maximum profit margins for our partners.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { icon: ShieldCheck, title: "Verified Panels", desc: "100% A+ Grade Zero Dot panels guaranteed." },
                    { icon: Truck, title: "Safe Shipping", desc: "Insured wooden crate packing for every order." },
                    { icon: Zap, title: "Fast Service", desc: "24/7 technical support and spare parts availability." },
                    { icon: Award, title: "Best Margins", desc: "Direct factory import rates for maximum profit." }
                ].map((f, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1}>
                        <div className="group h-full p-8 rounded-3xl bg-gray-50 hover:bg-[#003366] shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                            <div className="w-16 h-16 mx-auto bg-white text-[#003366] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-[#FFD700] transition-colors shadow-inner">
                                <f.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-white transition-colors center">{f.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm group-hover:text-blue-200 transition-colors text-center">{f.desc}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
);

export const Newsletter = () => (
    <div className="py-24 bg-[#003366] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px]"
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <ScrollReveal>
                <div className="inline-block p-4 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-xl animate-float">
                    <Mail className="text-[#FFD700]" size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Join The Inner Circle</h2>
                <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto font-light">
                    Get access to <span className="text-[#FFD700] font-bold">secret price lists</span>, flash clearance alerts, and extra margin deals directly on WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <input
                        type="tel"
                        placeholder="Enter your WhatsApp Number"
                        className="flex-1 px-8 py-5 rounded-xl text-gray-900 outline-none focus:ring-4 focus:ring-[#FFD700]/50 text-lg shadow-inner bg-white/95"
                    />
                    <button className="bg-[#FFD700] text-[#003366] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)] text-lg hover:scale-105 active:scale-95 duration-200">
                        Join Now
                    </button>
                </div>
                <p className="text-white/40 text-sm mt-6 flex items-center justify-center gap-2">
                    <CheckCircle size={14} /> No spam. Only high-value business deals.
                </p>
            </ScrollReveal>
        </div>
    </div>
);

export const Testimonials = () => (
    <div className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
                <h2 className="text-4xl font-black text-[#003366] mb-4">Trusted by 500+ Partners</h2>
                <p className="text-gray-500 text-lg">Real feedback from retailers growing with {BUSINESS_CONFIG.name}</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Rajesh Kumar", shop: "RK Digital, Karol Bagh", text: "Best rates in Delhi market. I have been buying 43 inch models for 2 years. Zero complaints." },
                    { name: "Amit Singh", shop: "Singh Electronics, Noida", text: "The replacement policy is very fast. They understand B2B requirements properly." },
                    { name: "Vikas Jain", shop: "Jain & Sons, Jaipur", text: "Quality of the QLED series is comparable to big brands but at half the price." }
                ].map((t, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <div className="bg-[#F4F6F8] p-8 rounded-3xl relative hover:shadow-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100 group">
                            <div className="absolute -top-5 left-8 bg-[#FFD700] p-3 rounded-xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                                <span className="text-2xl font-serif text-[#003366]">❝</span>
                            </div>
                            <div className="mt-6 text-[#FFD700] mb-6 flex gap-1">
                                {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={18} />)}
                            </div>
                            <p className="text-gray-700 italic mb-8 leading-relaxed font-medium">"{t.text}"</p>
                            <div className="flex items-center gap-4 border-t border-gray-200/50 pt-6">
                                <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">{t.shop}</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
);
export const BrandPartners = () => {
    const brands = ["Samsung", "LG", "Sony", "Panasonic", "TCL", "Hisense", "Xiaomi"];
    return (
        <section className="py-16 bg-white border-t border-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-10">Compatible Spares & Service Partners</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {brands.map((b, i) => (
                        <div key={i} className="text-2xl font-black text-gray-900 tracking-tighter italic">{b}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const DeliveryTicker = () => {
    const orders = [
        "15 Units Dispatched to Jaipur",
        "8 Units Dispatched to New Delhi",
        "22 Units Dispatched to Kanpur",
        "5 Units Dispatched to Mumbai",
        "12 Units Dispatched to Lucknow",
        "43 Inch 4K Stock Refilled"
    ];

    return (
        <div className="bg-[#FFD700] py-2 overflow-hidden whitespace-nowrap border-y border-[#003366]/10">
            <div className="flex animate-marquee gap-10">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-10">
                        {orders.map((o, idx) => (
                            <span key={idx} className="text-[10px] font-black text-[#003366] uppercase flex items-center gap-2">
                                <CheckCircle size={10} /> {o}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
