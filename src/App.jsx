import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductModal from './components/ProductModal';
import QuoteCart from './components/QuoteCart';
import CompareModal from './components/CompareModal';
import MobileNav from './components/MobileNav'; // Import the new mobile nav
import { Footer, FloatingWhatsApp } from './components/Footer';
import { StatsSection, Features, Newsletter, Testimonials, ProcessFlow, FAQ, BrandPartners, DeliveryTicker } from './components/HomeSections';
import { Contact, History, EnquiryForm, FastOrder } from './components/OtherPages';
import { Zap, Truck, CheckCircle, Info, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Flash Sale Banner ---
const FlashSaleBanner = () => {
    const [timeLeft, setTimeLeft] = useState({ h: 12, m: 0, s: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
                return { h: 12, m: 0, s: 0 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#003366] via-blue-900 to-[#003366] text-white text-xs py-2 relative overflow-hidden z-[51]">
            <div className="flex items-center justify-center gap-8 animate-marquee whitespace-nowrap min-w-full">
                {[1, 2, 3, 4].map(i => (
                    <React.Fragment key={i}>
                        <span className="flex items-center gap-2 mx-8">
                            <Zap size={14} className="text-[#FFD700] animate-pulse" />
                            FLASH DEAL: Flat 2% OFF on Bulk Orders (20+ Units)
                        </span>
                        <span className="text-gray-500">|</span>
                        <span className="flex items-center gap-2 mx-8">
                            <Truck size={14} className="text-[#FFD700]" />
                            Free Delivery within Delhi NCR
                        </span>
                        <span className="text-gray-500">|</span>
                        <span className="flex items-center gap-2 mx-8 text-[#FFD700] font-mono font-bold">
                            Ends in {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
                        </span>
                        <span className="text-gray-500">|</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

// --- Toast Component ---
const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className={`fixed top-24 right-4 z-[90] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md border ${type === 'success' ? 'bg-green-600/90 border-green-500/50 text-white' : 'bg-gray-800/90 border-gray-700/50 text-white'}`}
        >
            {type === 'success' ? <CheckCircle size={20} className="text-green-200" /> : <Info size={20} />}
            <span className="font-semibold text-sm tracking-wide">{message}</span>
        </motion.div>
    );
};

// --- Main App ---
const App = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [toast, setToast] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [compareList, setCompareList] = useState([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    // Initial Data Load
    useEffect(() => {
        const savedCart = localStorage.getItem('ksc_cart');
        if (savedCart) setCart(JSON.parse(savedCart));
        const savedOrders = localStorage.getItem('ksc_orders');
        if (savedOrders) setOrders(JSON.parse(savedOrders));
    }, []);

    // LocalStorage Sync
    useEffect(() => { localStorage.setItem('ksc_cart', JSON.stringify(cart)); }, [cart]);
    useEffect(() => { localStorage.setItem('ksc_orders', JSON.stringify(orders)); }, [orders]);

    const showToast = (message, type = 'info') => {
        setToast({ message, type });
    };

    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(p => p.id === product.id);
            if (existing) {
                return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + quantity } : p);
            }
            return [...prev, { ...product, qty: quantity }];
        });
        showToast(`Added ${product.model} to Quote`, 'success');
    };

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) return { ...item, qty: Math.max(1, item.qty + delta) };
            return item;
        }));
    };

    const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

    const saveQuoteOrder = (items, total) => {
        const newOrder = { id: Date.now(), date: new Date().toISOString(), items: items, total: total };
        setOrders([newOrder, ...orders]);
        setCart([]);
        setIsCartOpen(false);
        showToast('Quote generated & saved to History', 'success');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Hero setActiveTab={setActiveTab} />
                        <DeliveryTicker />
                        <StatsSection />
                        <ProcessFlow />
                        <Features />
                        <BrandPartners />
                        <div className="py-24 md:py-32 text-center bg-[#000a14] relative overflow-hidden border-b border-white/5">
                            {/* Ambient background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

                            {/* Added Featured Categories Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-7xl mx-auto px-4 relative z-10"
                            >
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6 mx-auto">
                                    <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                                    <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">High Volume Asset Classes</span>
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Intelligence Base Categories</h2>
                                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 px-4">Direct access to the most liquid and profitable panel categories.</p>

                                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                                    {[
                                        { title: "32\" Budget Series", desc: "Highest Velocity • Standard Grade", action: () => { setSearchQuery(''); setActiveTab('catalog'); } },
                                        { title: "43\" Smart Series", desc: "Commercial Standard • A+ Frameless", action: () => { setSearchQuery(''); setActiveTab('catalog'); } },
                                        { title: "Premium QLEDs", desc: "Maximum Margin • Tier-1 Grade", action: () => { setSearchQuery(''); setActiveTab('catalog'); } }
                                    ].map((c, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            onClick={c.action}
                                            className="group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-lg h-80 hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all duration-500 transform hover:-translate-y-3 border border-white/10 bg-[#001224]"
                                        >
                                            {/* Abstract tech pattern background instead of stock image */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-50 transition-opacity"></div>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#000a14] via-transparent to-blue-900/20 group-hover:to-blue-600/30 transition-colors"></div>

                                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-left z-10">
                                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/30 transition-all duration-300">
                                                    <Package className="text-gray-400 group-hover:text-[#FFD700] transition-colors" size={24} />
                                                </div>
                                                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 tracking-wide">{c.title}</h3>
                                                <p className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300 text-sm">{c.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <FAQ />
                        <Testimonials />
                        <Newsletter />
                    </motion.div>
                );
            case 'catalog':
                return (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Catalog
                            addToCart={addToCart}
                            searchQuery={searchQuery}
                            onOpenProduct={setSelectedProduct}
                            compareList={compareList}
                            setCompareList={setCompareList}
                            openCompareModal={() => setIsCompareModalOpen(true)}
                        />
                    </motion.div>
                );
            case 'history': return <History orders={orders} />;
            case 'bulkenquiry': return <EnquiryForm onFormSubmit={() => showToast('Enquiry Sent Successfully', 'success')} />;
            case 'contact': return <Contact />;
            // case 'quicktools': return <QuickTools />;
            case 'fastorder': return <FastOrder addToCart={addToCart} />;
            default: return <Hero setActiveTab={setActiveTab} />;
        }
    };
    return (
        <div className="min-h-screen bg-[#F4F6F8] relative font-sans text-gray-800 flex flex-col pb-16 md:pb-0">
            {/* Ambient Background Gradients for Depth */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FFD700]/20 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
                <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            </div>

            <AnimatePresence>
                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            </AnimatePresence>

            <FlashSaleBanner />
            {/* Header simplified for mobile or kept as is, but MobileNav added */}

            <Header
                activeTab={activeTab}
                setActiveTab={(tab) => { setActiveTab(tab); window.scrollTo(0, 0); }}
                cartCount={cart.reduce((a, b) => a + b.qty, 0)}
                toggleCart={() => setIsCartOpen(true)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <main className="flex-grow">
                <AnimatePresence mode='wait'>
                    {renderContent()}
                </AnimatePresence>
            </main>

            <Footer
                setActiveTab={(tab) => { setActiveTab(tab); window.scrollTo(0, 0); }}
                setSearchQuery={setSearchQuery}
            />
            {/* Hide Floating WhatsApp on mobile if MobileNav is covering it, or adjust position */}
            <div className="hidden md:block">
                <FloatingWhatsApp />
            </div>

            {/* Mobile Bottom Navigation */}
            <MobileNav
                activeTab={activeTab}
                setActiveTab={(tab) => { setActiveTab(tab); window.scrollTo(0, 0); }}
                cartCount={cart.reduce((a, b) => a + b.qty, 0)}
                toggleCart={() => setIsCartOpen(true)}
            />

            <QuoteCart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                onSaveQuote={saveQuoteOrder}
            />

            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAddToCart={addToCart}
            />

            <CompareModal
                items={compareList}
                isOpen={isCompareModalOpen}
                onClose={() => setIsCompareModalOpen(false)}
                addToCart={addToCart}
                removeFromCompare={(id) => setCompareList(prev => prev.filter(item => item.id !== id))}
            />
        </div >
    );
};

export default App;