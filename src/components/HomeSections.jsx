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
        <section className="bg-[#000a14] py-8 md:py-12 relative z-20 overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-white relative z-10 w-full">
                {[
                    { val: "50,000+", label: "Units Procured" },
                    { val: "500+", label: "Verified Partners" },
                    { val: "18", label: "States Covered" },
                    { val: "99.9%", label: "QC Pass Rate" }
                ].map((stat, i) => (
                    <ScrollReveal key={i} delay={i * 0.1} className="w-full">
                        <div className="p-4 md:p-6 bg-[#001224] rounded-2xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group cursor-default h-full flex flex-col items-center justify-center">
                            <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] to-yellow-600 mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">{stat.val}</div>
                            <div className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-none">{stat.label}</div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export const ProcessFlow = () => {
    const steps = [
        { icon: UserCheck, title: "Onboard", desc: "Instant KYC & Trade verification." },
        { icon: Database, title: "Inventory", desc: "Real-time stock matrix access." },
        { icon: PenTool, title: "Generate PO", desc: "Automated proforma & tax calc." },
        { icon: Truck, title: "Logistics", desc: "Insured crate dispatch in 24h." },
    ];

    return (
        <div className="py-20 md:py-32 bg-[#000a14] relative overflow-hidden border-b border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <ScrollReveal className="text-center mb-16 md:mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                        <Settings size={14} className="text-[#FFD700]" />
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Operating Procedure</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Enterprise Pipeline</h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto px-4">Streamlined procurement designed specifically for high-volume consumer electronics retailers.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-blue-500/10 -z-10"></div>

                    {steps.map((step, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center group bg-[#001224] md:bg-transparent p-6 md:p-0 rounded-[2rem] border border-white/5 md:border-none shadow-xl md:shadow-none hover:bg-white/5 transition-all w-full">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#000a14] border border-white/10 rounded-2xl flex items-center justify-center mb-0 md:mb-8 mr-6 md:mr-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 relative z-10 shrink-0">
                                    <step.icon size={28} className="text-blue-400 group-hover:text-[#FFD700] transition-colors" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#FFD700] to-yellow-600 rounded-lg text-xs font-black text-[#000a14] flex items-center justify-center shadow-lg border-2 border-[#000a14]">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-lg md:text-xl text-white mb-2 group-hover:text-blue-300 transition-colors uppercase tracking-wide">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">{step.desc}</p>
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
        { q: "What is the Enterprise Minimum Order Quantity (MOQ)?", a: "Our optimized MOQ is 5 units per specific model variant. For initial quality assurance, registered dealers may request single unit evaluations at wholesale pricing." },
        { q: "Is GST Input Credit enabled for all purchases?", a: "Yes, 100% compliant. We mandate B2B tax invoicing on every dispatch, enabling full GST input credit for your retail entity." },
        { q: "How is transit integrity maintained?", a: "Every outbound PO is secured in custom wooden crates and fully insured. Transit damages reported within 24h with unboxing footage are instantly replaced." },
        { q: "What are the terms for channel partnerships?", a: "Credit facilities and localized exclusivity are unlocked for partners maintaining a 6-month consistent volume history, subject to risk assessment." },
    ];

    return (
        <div className="py-24 bg-[#001224] relative overflow-hidden border-b border-white/5">
            {/* Diagonal accent */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Intelligence Base</h2>
                    <p className="text-gray-400">Common parameters for our B2B operations.</p>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <motion.div
                                className="bg-[#000a14] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer shadow-lg"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="p-6 md:p-8 flex justify-between items-center font-bold text-white text-lg">
                                    <span className="pr-4">{faq.q}</span>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                                        className="text-[#FFD700] shrink-0 bg-[#FFD700]/10 p-2 rounded-full"
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
                                            <div className="p-6 md:p-8 pt-0 text-gray-400 leading-relaxed border-t border-white/5 bg-[#000a14]/50">
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
    <div className="py-24 md:py-32 bg-[#000a14] relative z-10 border-b border-white/5 overflow-hidden">
        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#FFD700]">Top Retailers</span> Choose {BUSINESS_CONFIG.name}</h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">We've built an infrastructure designed for speed, uncompromised reliability, and maximum profit margins for our B2B partners.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                {[
                    { icon: ShieldCheck, title: "Verified Panels", desc: "100% A+ Grade Zero Dot panels stringently tested before sealing." },
                    { icon: Truck, title: "Safe Shipping", desc: "Highly secure, insured wooden crate packing for outstation logistics." },
                    { icon: Zap, title: "Fast Service", desc: "Dedicated enterprise technical support and prioritized spare parts." },
                    { icon: Award, title: "Best Margins", desc: "Factory-direct pricing matrix ensuring top-tier profitability." }
                ].map((f, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1}>
                        <div className="group h-full p-8 rounded-[2rem] bg-[#001224] hover:bg-white/5 shadow-lg border border-white/5 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col">
                            {/* Hover light effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <div className="w-16 h-16 bg-[#000a14] border border-white/10 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#FFD700]/50 group-hover:text-[#FFD700] transition-colors shadow-inner relative z-10">
                                <f.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-black text-white text-xl mb-3 tracking-wide">{f.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm flex-grow">{f.desc}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
);

export const Newsletter = () => {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phone || phone.length < 10) return;
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <div className="py-24 md:py-32 bg-[#000a14] relative overflow-hidden group border-b border-white/5">
            {/* Dark, subtle patterns */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#FFD700] rounded-full mix-blend-overlay filter blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05], x: [0, -100, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-[150px] pointer-events-none"
            />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10 w-full">
                <ScrollReveal>
                    <div className="inline-flex items-center justify-center p-5 bg-[#001224] border border-white/10 rounded-2xl mb-8 shadow-2xl relative">
                        <div className="absolute inset-0 bg-[#FFD700]/10 blur-xl rounded-2xl pointer-events-none"></div>
                        <MessageCircle className="text-[#FFD700] relative z-10" size={40} strokeWidth={1.5} />
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none drop-shadow-lg">
                        Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#FFD700]">The Hub</span>
                    </h2>

                    <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Instant access to <span className="text-white font-bold border-b border-white/20 pb-0.5">Under-the-Radar Inventory</span>, flash clearance models, and direct OEM communications.
                    </p>

                    <div className="max-w-lg mx-auto relative w-full">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="bg-green-500/10 border border-green-500/30 rounded-[2rem] p-10 backdrop-blur-md flex flex-col items-center justify-center gap-4 w-full"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 ring-2 ring-green-500/50 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-green-400/20 animate-pulse"></div>
                                        <CheckCircle size={40} className="relative z-10" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mt-2">Clearance Granted</h3>
                                    <p className="text-green-300 text-sm">Enterprise verification initiated. Our relations director will contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    onSubmit={handleSubmit}
                                    className="relative flex flex-col sm:flex-row gap-4 p-2 bg-[#001224] border border-white/10 rounded-[2rem] shadow-2xl focus-within:border-blue-500/50 transition-colors w-full"
                                >
                                    <div className="flex-1 relative flex items-center">
                                        <span className="absolute left-6 text-xl font-bold text-gray-500">+91</span>
                                        <input
                                            type="tel"
                                            required
                                            maxLength="10"
                                            placeholder="Mobile Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                            disabled={status === 'loading'}
                                            className="w-full pl-16 pr-6 py-5 bg-transparent text-white placeholder-gray-600 outline-none text-xl font-medium disabled:opacity-50"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || phone.length < 10}
                                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:from-blue-500 hover:to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm sm:text-base hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed group/btn flex items-center justify-center min-w-[180px]"
                                    >
                                        {status === 'loading' ? (
                                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Request Invite <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </span>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>

                        {status !== 'success' && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-500 text-xs mt-6 flex items-center justify-center gap-2 font-bold tracking-widest uppercase"
                            >
                                <ShieldCheck size={14} className="text-[#FFD700]/50" />
                                B2B VERIFICATION REQUIRED FOR ACCESS
                            </motion.p>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export const Testimonials = () => (
    <div className="py-24 md:py-32 bg-[#001224] border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center mb-16 md:mb-24">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Trusted by <span className="text-[#FFD700]">500+</span> Partners</h2>
                <p className="text-gray-400 text-lg md:text-xl">Verified intelligence from retailers growing with {BUSINESS_CONFIG.name}</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                {[
                    { name: "Rajesh Kumar", shop: "RK Digital, Karol Bagh", text: "Best rates in Delhi market. I have been buying 43 inch models for 2 years. Zero defect rate." },
                    { name: "Amit Singh", shop: "Singh Electronics, Noida", text: "The automated replacement policy is flawless. They truly understand high-volume B2B requirements." },
                    { name: "Vikas Jain", shop: "Jain & Sons, Jaipur", text: "Quality of the QLED series matches Tier-1 brands instantly but at factory-direct pricing." }
                ].map((t, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <div className="bg-[#000a14] p-8 md:p-10 rounded-[2rem] relative hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] transition-all duration-300 border border-white/5 hover:border-blue-500/30 group h-full flex flex-col justify-between">
                            <div>
                                <div className="absolute -top-5 left-8 bg-[#FFD700] p-3 rounded-xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                                    <span className="text-2xl font-serif text-[#000a14]">❝</span>
                                </div>
                                <div className="mt-4 text-[#FFD700] mb-6 flex gap-1">
                                    {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
                                </div>
                                <p className="text-gray-300 italic mb-8 leading-relaxed text-sm md:text-base">"{t.text}"</p>
                            </div>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                                <div className="w-12 h-12 bg-[#001224] border border-white/10 rounded-full flex items-center justify-center text-white font-black text-lg shadow-inner">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white tracking-wide">{t.name}</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">{t.shop}</p>
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
        <section className="py-16 bg-[#000a14] border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-10">Compatible Enterprise Spares & Service Hubs</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    {brands.map((b, i) => (
                        <div key={i} className="text-2xl font-black text-gray-300 tracking-tighter italic hover:text-white transition-colors cursor-default">{b}</div>
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
        <div className="bg-[#001224] py-2.5 overflow-hidden whitespace-nowrap border-y border-white/10 relative z-20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="flex flex-nowrap animate-marquee gap-10">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-10 min-w-max">
                        {orders.map((o, idx) => (
                            <span key={idx} className="text-[10px] md:text-xs font-bold text-[#FFD700] uppercase flex items-center gap-2 drop-shadow-sm">
                                <CheckCircle size={12} className="text-green-400" /> {o}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
