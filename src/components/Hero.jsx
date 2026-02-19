import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Zap, ChevronRight, TrendingUp, Truck, ShieldCheck, Users } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

const Hero = ({ setActiveTab }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-300, 300], [10, -10]);
    const rotateY = useTransform(x, [-300, 300], [-10, 10]);

    const handleMouseMove = (event) => {
        x.set(event.clientX - window.innerWidth / 2);
        y.set(event.clientY - window.innerHeight / 2);
    };

    return (
        <section
            className="relative bg-[#003366] text-white overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center"
            onMouseMove={handleMouseMove}
        >
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 md:opacity-15"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#001a33] via-[#003366] to-[#002244]"></div>

            <motion.div
                className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Text Content (Higher Z-Index) */}
                    <div className="lg:col-span-7 space-y-8 z-30 py-12 md:py-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-[#FFD700] text-[#003366] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-yellow-900/20"
                        >
                            <Zap size={14} fill="currentColor" /> Direct Factory Pricing
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter"
                            >
                                Electronics for <br />
                                <span className="text-gradient-gold">Large Scale</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-blue-100/80 text-lg md:text-2xl max-w-xl leading-relaxed font-medium pt-2"
                            >
                                Delhi's largest wholesale hub for Zero-Defect panels. Premium B2B support with GST compliance and priority national dispatch.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <button
                                onClick={() => setActiveTab('catalog')}
                                className="bg-white text-[#003366] px-8 py-4 rounded-2xl font-black hover:bg-[#FFD700] hover:scale-105 transition-all shadow-2xl flex items-center gap-2 text-lg active:scale-95"
                            >
                                BROWSE CATALOG <ChevronRight size={20} />
                            </button>
                            <button
                                onClick={() => setActiveTab('bulkenquiry')}
                                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-black hover:bg-white/20 transition-all backdrop-blur-md text-lg"
                            >
                                BULK ENQUIRY
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-8 text-xs font-black text-blue-200 uppercase tracking-widest pt-10 border-t border-white/10"
                        >
                            <div className="flex items-center gap-3"><Truck size={18} className="text-[#FFD700]" /> Instant Dispatch</div>
                            <div className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#FFD700]" /> 1Yr Protection</div>
                            <div className="flex items-center gap-3"><Users size={18} className="text-[#FFD700]" /> Trade Verified</div>
                        </motion.div>
                    </div>

                    {/* Right: Premium Visuals (Z-Index 10-20) */}
                    <div className="lg:col-span-5 h-[500px] lg:h-[600px] relative hidden lg:flex items-center justify-center">
                        <motion.div
                            style={{ rotateX, rotateY, z: 50 }}
                            className="relative w-full h-full flex items-center justify-center pointer-events-none md:pointer-events-auto"
                        >
                            {/* Animated Background Orbs */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-blue-400/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

                            {/* Main Product Card - Shifted Right */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute top-0 right-[-20px] w-[340px] glass-dark p-1 rounded-[2.5rem] shadow-2xl z-20 border border-white/10"
                            >
                                <div className="p-4">
                                    <div className="relative rounded-3xl overflow-hidden mb-5">
                                        <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg z-10 uppercase tracking-widest">HOT SELLER</div>
                                        <img
                                            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400"
                                            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                                            alt="Featured TV"
                                        />
                                    </div>
                                    <div className="flex justify-between items-end px-2 pb-2">
                                        <div>
                                            <div className="font-black text-xl text-white tracking-tight uppercase">32" Frameless 4K</div>
                                            <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Industrial Grade Panel</div>
                                        </div>
                                        <div className="text-[#FFD700] font-black text-2xl italic">₹7,100</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Market Dynamics Card - Lower Layer */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="absolute bottom-10 right-10 w-[280px] glass-card p-6 rounded-[2rem] shadow-3xl z-10 border border-white/20"
                            >
                                <div className="flex items-center gap-3 mb-6 text-[#003366] font-black uppercase text-[10px] tracking-widest">
                                    <div className="p-2 bg-blue-50 rounded-xl text-blue-600"><TrendingUp size={18} /></div>
                                    Market Trend
                                </div>
                                <div className="space-y-5">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase">Demand Spike</span>
                                            <span className="text-green-600 font-black text-xs">+24% ↗</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2 shadow-inner overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '78%' }}
                                                transition={{ duration: 2, delay: 1 }}
                                                className="bg-[#003366] h-full rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                    <div className="text-[8px] text-gray-400 font-black uppercase tracking-[0.3em] text-center opacity-50">Live Wholesale Feed</div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
