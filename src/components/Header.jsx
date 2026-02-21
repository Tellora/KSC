import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG } from '../data/config';
import logo from '../assets/ksc_logo.png';

const Header = ({ activeTab, setActiveTab, cartCount, toggleCart, searchQuery, setSearchQuery, userMode, setUserMode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = userMode === 'b2b'
        ? ['Home', 'Catalog', 'History', 'Bulk Enquiry', 'Contact', 'Fast Order']
        : ['Home', 'Catalog', 'History', 'Contact'];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#003366]/90 backdrop-blur-md shadow-lg py-2' : 'bg-[#003366] py-3 md:py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 md:gap-8">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 md:gap-3 cursor-pointer flex-shrink-0 group"
                    onClick={() => setActiveTab('home')}
                >
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-16 md:w-20 h-12 md:h-16 flex items-center justify-start group-hover:-translate-y-1 transition-all duration-500"
                    >
                        {/* Soft ambient back-glow with continuous pulse */}
                        <motion.div
                            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.2, 1.35, 1.2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white/40 blur-[15px] rounded-full group-hover:bg-[#FFD700]/40 transition-all duration-500"
                        />
                        <img
                            src={logo}
                            alt="KSC Logo"
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0px_0px_2px_rgba(255,255,255,0.9)] drop-shadow-[0px_0px_6px_rgba(255,255,255,0.5)] group-hover:scale-110 group-hover:drop-shadow-[0px_0px_12px_rgba(255,215,0,0.8)] transition-all duration-500"
                        />
                    </motion.div>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold leading-none text-white tracking-wide">{BUSINESS_CONFIG.name}</h1>
                        <p className="text-[8px] md:text-[10px] text-blue-200 tracking-[0.2em] font-medium mt-0.5 md:mt-1 hidden sm:block">
                            {userMode === 'b2b' ? 'WHOLESALE ELECTRONICS' : 'PREMIUM ELECTRONICS'}
                        </p>
                    </div>
                </div>

                {/* Mode Toggle (Mobile & Desktop) */}
                <div className="flex items-center bg-[#001224] rounded-full border border-white/10 p-1 relative z-50 flex-shrink-0">
                    <button
                        onClick={() => setUserMode('retail')}
                        className={`px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold rounded-full transition-all ${userMode === 'retail' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                    >
                        Retail
                    </button>
                    <button
                        onClick={() => setUserMode('b2b')}
                        className={`px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold rounded-full transition-all ${userMode === 'b2b' ? 'bg-[#FFD700] text-[#000a14] shadow-md' : 'text-gray-400 hover:text-white'}`}
                    >
                        B2B
                    </button>
                </div>

                {/* Search Bar (Desktop & Mobile Compact) */}
                <div className="flex-1 max-w-xl relative group mx-2 md:mx-0 z-50 pointer-events-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#FFD700] rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 pointer-events-none"></div>
                    <input
                        type="text"
                        placeholder="Search model codes (e.g. 3256FLSM)..."
                        className="w-full bg-[#002850] text-white placeholder-blue-300/50 rounded-full px-4 py-2 md:px-6 md:py-3 pl-10 md:pl-12 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all shadow-inner border border-white/5 relative z-10 pointer-events-auto"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (e.target.value && activeTab !== 'catalog') {
                                setActiveTab('catalog');
                            }
                        }}
                    />
                    <Search className="absolute left-3 top-2.5 md:top-3.5 text-blue-300 group-hover:text-[#FFD700] transition-colors" size={18} />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-2 md:top-3 p-1 hover:bg-white/10 rounded-full text-blue-300 transition-colors"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-white">
                    {navItems.map((item) => {
                        const tabKey = item.toLowerCase().replace(' ', '');
                        const isActive = activeTab === tabKey;
                        return (
                            <button
                                key={item}
                                onClick={() => setActiveTab(tabKey)}
                                className={`hover:text-[#FFD700] transition-all relative py-2 ${isActive ? 'text-[#FFD700]' : 'text-blue-100'}`}
                            >
                                {item}
                                {isActive && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700]"
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Mobile Quick Utility & Support Indicator */}
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end hidden xs:flex mr-1">
                        <span className="text-[7px] font-black text-[#FFD700] animate-pulse uppercase tracking-widest leading-tight">Live Support</span>
                        <span className="text-[10px] font-black text-white leading-none">ONLINE</span>
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-white">
                        <button
                            onClick={toggleCart}
                            className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
                        >
                            <ShoppingCart size={24} className="group-hover:text-[#FFD700] transition-colors" />
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 bg-[#FFD700] text-[#003366] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg ring-2 ring-[#003366]"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
