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
            className="relative bg-[#003366] text-white overflow-hidden min-h-[85vh] flex items-center perspective-1000"
            onMouseMove={handleMouseMove}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#002244] via-[#003366] to-[#001a33]"></div>

            <motion.div
                className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFD700]/10 rounded-full blur-[100px]"
                animate={{ y: [0, -50, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">

                {/* Text Content */}
                <div className="flex-1 space-y-8 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-[#FFD700] px-5 py-2 text-sm font-bold rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                    >
                        <Zap size={16} fill="currentColor" /> Direct Factory Pricing
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
                    >
                        Electronics for <br />
                        <span className="text-gradient-gold drop-shadow-lg">Scale & Growth</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-blue-100 text-xl max-w-lg leading-relaxed font-light"
                    >
                        Delhi's largest wholesale hub. Zero-defect panels, GST billing, and priority dispatch for retailers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-6"
                    >
                        <button
                            onClick={() => setActiveTab('catalog')}
                            className="bg-[#FFD700] text-[#003366] px-8 py-4 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center gap-3 text-lg group"
                        >
                            Browse Catalog <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setActiveTab('bulkenquiry')}
                            className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md text-lg"
                        >
                            Bulk Enquiry
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-8 text-sm font-medium text-blue-200 pt-8 border-t border-white/10"
                    >
                        <div className="flex items-center gap-2"><Truck size={18} className="text-[#FFD700]" /> 24hr Dispatch</div>
                        <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#FFD700]" /> 1yr Warranty</div>
                        <div className="flex items-center gap-2"><Users size={18} className="text-[#FFD700]" /> 500+ Dealers</div>
                    </motion.div>
                </div>

                {/* 3D Visual */}
                <motion.div
                    style={{ rotateX, rotateY, z: 100 }}
                    className="hidden md:block flex-1 w-full max-w-xl relative h-[500px]"
                >
                    {/* Spinning Rings */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/5 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#FFD700]/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>

                    {/* Floating Product Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-10 right-10 w-80 glass-dark p-5 rounded-2xl shadow-2xl z-20 border-t border-white/20"
                    >
                        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">HOT SELLER</div>
                        <img
                            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400"
                            className="rounded-xl mb-4 w-full h-40 object-cover shadow-lg"
                            alt=""
                        />
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="font-bold text-xl text-white">32" Frameless Smart</div>
                                <div className="text-gray-400 text-sm mt-1">Android 11.0 • 1GB/8GB</div>
                            </div>
                            <div className="text-[#FFD700] font-black text-2xl">₹7,100</div>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute bottom-10 left-0 w-72 glass-card p-6 rounded-2xl shadow-2xl z-30 border-l-4 border-[#003366]"
                    >
                        <div className="flex items-center gap-3 mb-4 text-[#003366] font-bold border-b border-gray-200 pb-3">
                            <div className="p-2 bg-blue-100 rounded-lg"><TrendingUp size={20} /></div>
                            Today's Market
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-600">32" Demand</span>
                                <span className="text-green-700 font-bold text-xs bg-green-100 px-2 py-1 rounded-full">+18% ↗</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '75%' }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="bg-[#003366] h-1.5 rounded-full"
                                ></motion.div>
                            </div>
                            <div className="text-xs text-gray-400 text-right">Live Stock Update</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
