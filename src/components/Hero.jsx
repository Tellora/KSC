import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ShieldCheck, Box, Zap, Truck, CheckCircle2 } from 'lucide-react';

const Hero = ({ setActiveTab }) => {
    const { scrollY } = useScroll();

    // Parallax effects on scroll rather than mouse move for a more massive, planted feel
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative bg-[#000a14] min-h-[90vh] flex items-center overflow-hidden w-full font-sans border-b border-white/5">
            {/* Massive Cinematic Background Image with Gradient Mask */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#000a14] via-[#000a14]/90 to-transparent z-10 hidden lg:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000a14] via-[#000a14]/80 to-transparent z-10 lg:hidden"></div>

                {/* A high-end warehouse // distribution center background to convey massive scale & stock */}
                <motion.div style={{ y: y1 }} className="absolute right-0 top-0 w-full lg:w-[70%] h-full">
                    <img
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000"
                        alt="Electronics Warehouse Scale"
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                    />
                    {/* Add a gold/blue tint over the factory background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-[#FFD700]/10 mix-blend-overlay"></div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-20 lg:py-32 flex flex-col justify-center min-h-[90vh]">

                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 inline-flex items-center gap-2"
                    >
                        <span className="flex h-1.5 w-1.5 rounded-full bg-[#FFD700] ring-4 ring-[#FFD700]/20 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] text-[#FFD700] uppercase">India's Largest B2B Hub</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight text-white mb-6"
                    >
                        Scale Your <br className="hidden sm:block" />
                        Retail Network.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-10"
                    >
                        Access <strong className="text-white font-medium">zero-defect A+ grade panels</strong> directly from the source. GST billing, guaranteed replacements, and 24-hour dispatch nationwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <button
                            onClick={() => setActiveTab('catalog')}
                            className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#000a14] rounded-sm font-black uppercase tracking-widest transition-all hover:bg-gray-100 shadow-[0_4px_30px_rgba(255,255,255,0.15)] group"
                        >
                            View Inventory <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setActiveTab('bulkenquiry')}
                            className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent text-white rounded-sm font-black uppercase tracking-widest transition-all border-2 border-white/20 hover:border-white hover:bg-white/5"
                        >
                            Bulk Pricing Matrix
                        </button>
                    </motion.div>

                    {/* Trust Indicators under buttons */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-400 pt-12 mt-12 border-t border-white/10"
                    >
                        <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#FFD700]" /> 1 Year On-Site Warranty</div>
                        <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#FFD700]" /> Assured Buyback</div>
                        <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#FFD700]" /> 10,000+ Units Ready</div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Information Card - Anchors the right side without being a literal TV */}
            <motion.div
                style={{ opacity: opacity1 }}
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="hidden lg:flex absolute right-10 bottom-20 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-sm shadow-2xl flex-col max-w-[320px] z-30"
            >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] rounded-sm">
                        <Truck size={20} />
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Logistics Feed</div>
                        <div className="text-white font-black">Live Dispatch</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">43" Smart Led</span>
                        <span className="text-[#FFD700] font-bold">150 Units → DL</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">32" Frameless</span>
                        <span className="text-[#FFD700] font-bold">400 Units → UP</span>
                    </div>
                    <div className="flex justify-between items-center text-sm opacity-50">
                        <span className="text-gray-400">55" 4K WebOS</span>
                        <span className="text-[#FFD700] font-bold">45 Units → HR</span>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
