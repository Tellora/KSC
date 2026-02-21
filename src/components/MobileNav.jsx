import React from 'react';
import { Home, Grid, ShoppingCart, User, Phone, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileNav = ({ activeTab, setActiveTab, cartCount, toggleCart, userMode }) => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'catalog', icon: Grid, label: 'Catalog' },
        { id: 'quicktools', icon: ShieldCheck, label: 'Care' },
        { id: 'contact', icon: Phone, label: 'Contact' },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 px-6 py-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex flex-col items-center gap-1 p-2 transition-colors ${activeTab === item.id ? 'text-[#003366]' : 'text-gray-400'}`}
                    >
                        <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                        <span className="text-[10px] font-bold">{item.label}</span>
                        {activeTab === item.id && (
                            <motion.div
                                layoutId="mobile-indicator"
                                className="absolute top-0 w-8 h-1 bg-[#003366] rounded-b-full"
                            />
                        )}
                    </button>
                ))}

                {/* Cart Button */}
                <button
                    onClick={toggleCart}
                    className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#003366] relative"
                >
                    <div className="relative">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 bg-[#FFD700] text-[#003366] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                            >
                                {cartCount}
                            </motion.span>
                        )}
                    </div>
                    <span className="text-[10px] font-bold">{userMode === 'b2b' ? 'Quote' : 'Cart'}</span>
                </button>
            </div>
        </div>
    );
};

export default MobileNav;
