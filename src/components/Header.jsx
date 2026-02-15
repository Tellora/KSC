import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG } from '../data/config';

const Header = ({ activeTab, setActiveTab, cartCount, toggleCart, searchQuery, setSearchQuery }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'Catalog', 'History', 'Bulk Enquiry', 'Contact', 'Fast Order'];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#003366]/90 backdrop-blur-md shadow-lg py-2' : 'bg-[#003366] py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer flex-shrink-0 group"
                    onClick={() => setActiveTab('home')}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#FFD700] rounded blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-[#FFD700] p-2 rounded text-[#003366] font-black text-2xl tracking-tighter shadow-lg group-hover:rotate-6 transition-transform">KS</div>
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl font-bold leading-none text-white tracking-wide">{BUSINESS_CONFIG.name}</h1>
                        <p className="text-[10px] text-blue-200 tracking-[0.2em] font-medium mt-1">WHOLESALE ELECTRONICS</p>
                    </div>
                </div>

                {/* Search Bar (Desktop) */}
                <div className="hidden md:flex flex-1 max-w-xl relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#FFD700] rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                    <input
                        type="text"
                        placeholder="Search models (e.g., 3256, QLED)..."
                        className="w-full bg-[#002850] text-white placeholder-blue-300/50 rounded-full px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all shadow-inner border border-white/5"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (e.target.value) setActiveTab('catalog');
                        }}
                    />
                    <Search className="absolute left-4 top-3.5 text-blue-300 group-hover:text-[#FFD700] transition-colors" size={18} />
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

                {/* Icons */}
                <div className="flex items-center gap-4 text-white">
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

                    <button
                        className="lg:hidden p-2 hover:bg-white/10 rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Search & Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#002244] border-t border-white/10 overflow-hidden"
                    >
                        <div className="p-6 space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full bg-[#001a33] text-white p-3 pl-10 rounded-lg border border-white/10 focus:border-[#FFD700] outline-none"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        if (e.target.value) setActiveTab('catalog');
                                    }}
                                />
                                <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            </div>
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setActiveTab(item.toLowerCase().replace(' ', ''));
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-left font-medium py-3 px-4 rounded-lg hover:bg-white/5 hover:text-[#FFD700] transition-colors flex justify-between items-center text-white"
                                    >
                                        {item} <ChevronRight size={16} />
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
