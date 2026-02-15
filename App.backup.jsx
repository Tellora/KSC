import React, { useState, useEffect, useRef } from 'react';
import {
    Phone,
    MapPin,
    ShoppingCart,
    Menu,
    X,
    Search,
    Filter,
    Send,
    CheckCircle,
    ShieldCheck,
    Truck,
    Zap,
    List,
    Grid,
    MessageCircle,
    ChevronRight,
    Trash2,
    Info,
    Clock,
    ArrowUpDown,
    Download,
    BarChart2,
    Eye,
    Star,
    Users,
    Instagram,
    TrendingUp,
    Gift,
    Mail,
    Award,
    Package,
    CheckSquare,
    Square,
    Sliders,
    ClipboardList
} from 'lucide-react';

// --- STYLES & ANIMATIONS ---
const styles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes pulse-ring {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 215, 0, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
  }
  
  .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-slide-in-right { animation: slideInRight 0.5s ease-out forwards; }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 20s linear infinite; }
  .animate-marquee { animation: marquee 25s linear infinite; }
  .animate-pulse-ring { animation: pulse-ring 2s infinite; }
  
  .delay-0 { animation-delay: 0s; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  }
  
  .glass-dark {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }
  
  .bg-grid-pattern {
    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .text-gradient-gold {
    background: linear-gradient(to right, #FFD700, #FDB931);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  /* Custom Range Slider Styling */
  input[type=range] {
    -webkit-appearance: none; 
    background: transparent; 
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #003366;
    cursor: pointer;
    margin-top: -6px; 
    box-shadow: 0 0 2px rgba(0,0,0,0.5);
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: #ddd;
    border-radius: 2px;
  }
  
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// --- DATA CONFIGURATION ---
const BUSINESS_CONFIG = {
    name: "K.S corporations",
    tagline: "Delhi's Premier Wholesale TV Supplier",
    phone: "+917428302719",
    address: "4/30-D, KH NO-4/693, GALI NO-8, MANDAWALI SAKET BLOCK, Shop No. 728, Chandni Chowk, 110006, New Delhi",
    instagram: "https://www.instagram.com/_capital.electronics",
    colors: {
        primary: "#003366",
        secondary: "#FFD700",
        bg: "#F4F6F8",
        text: "#333333"
    }
};

const PRODUCT_DATABASE = [
    {
        category: "32 Inch Series",
        id: "cat_32",
        items: [
            { id: "32-1", model: "3256FLSM", specs: "512MB RAM, Smart Android 9.0", panel: "A+ Grade IPS", ports: "2 HDMI, 2 USB", price: 7100, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600", rating: 4.5, tag: "Best Seller", stock: "High", moq: 5, resolution: "HD Ready" },
            { id: "32-2", model: "3286FLSM", specs: "1GB RAM, Imported Box Speaker", panel: "Zero Dot A+", ports: "2 HDMI, 2 USB", price: 7300, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600", rating: 4.2, stock: "Medium", moq: 5, resolution: "HD Ready" },
            { id: "32-3", model: "3286FLSM BT", specs: "Bluetooth 5.0, Voice Remote", panel: "IPS Hard Panel", ports: "2 HDMI, 2 USB, Aux", price: 7900, image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=80&w=600", rating: 4.7, stock: "Low", moq: 5, resolution: "HD Ready" },
            { id: "32-4", model: "3255GLSM", specs: "Frameless Design, Cloud TV", panel: "A+ Grade", ports: "2 HDMI, 2 USB", price: 8200, image: "https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&q=80&w=600", rating: 4.6, stock: "High", moq: 5, resolution: "FHD" },
            { id: "32-5", model: "3255GLSM BT", specs: "Soundbar Integrated, Bluetooth", panel: "IPS Pro", ports: "ARC HDMI, Optical", price: 8800, image: "https://images.unsplash.com/photo-1615986201152-7686a4867f30?auto=format&fit=crop&q=80&w=600", rating: 4.8, stock: "Medium", moq: 5, resolution: "FHD" },
            { id: "32-6", model: "3290GLSM Voice", specs: "Voice Command, 1.5GB RAM", panel: "A+ Grade IPS", ports: "2 HDMI, 2 USB", price: 8500, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600", rating: 4.6, stock: "High", moq: 5, resolution: "HD Ready" },
            { id: "32-7", model: "32Pro Max", specs: "Android 11, Bezel-less", panel: "LG IPS", ports: "3 HDMI, 2 USB", price: 8900, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600", rating: 4.9, stock: "Medium", moq: 5, resolution: "FHD" }
        ]
    },
    {
        category: "43 Inch Series",
        id: "cat_43",
        items: [
            { id: "43-1", model: "4310FLSM", specs: "1GB/8GB, Smart Android", panel: "FHD 1920x1080", ports: "2 HDMI, 2 USB", price: 11500, image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=600", rating: 4.3, tag: "Hot Deal", stock: "High", moq: 3, resolution: "FHD" },
            { id: "43-2", model: "4310FLSM BT", specs: "Bluetooth, Voice Assistant", panel: "A+ Grade FHD", ports: "2 HDMI, 2 USB", price: 12500, image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=600", rating: 4.5, stock: "High", moq: 3, resolution: "FHD" },
            { id: "43-3", model: "4319FLSM BT", specs: "Metal Body, 24W Speakers", panel: "IPS Hard Panel", ports: "3 HDMI, 2 USB", price: 13000, image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&q=80&w=600", rating: 4.6, stock: "Medium", moq: 3, resolution: "FHD" },
            { id: "43-4", model: "4319GLSM BT", specs: "Frameless Metal, Dolby Sound", panel: "A+ Grade FHD", ports: "ARC, Optical", price: 13600, image: "https://images.unsplash.com/photo-1528395874238-41d40c0e5a90?auto=format&fit=crop&q=80&w=600", rating: 4.9, stock: "Low", moq: 3, resolution: "4K" },
            { id: "43-5", model: "4380GLSM", specs: "4K UHD, Google TV Certified", panel: "4K HDR10", ports: "3 HDMI, 2 USB, LAN", price: 15800, image: "https://images.unsplash.com/photo-1595935736128-db1f11c7821c?auto=format&fit=crop&q=80&w=600", rating: 5.0, tag: "New", stock: "High", moq: 3, resolution: "4K" },
            { id: "43-6", model: "43Pro WebOS", specs: "Magic Remote, LG OS", panel: "IPS 4K", ports: "3 HDMI, 2 USB", price: 16500, image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=600", rating: 4.8, stock: "Medium", moq: 3, resolution: "4K" },
            { id: "43-7", model: "43Curved", specs: "Curved Display, Gaming Mode", panel: "VA Panel", ports: "3 HDMI, 2 USB", price: 17200, image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=600", rating: 4.7, stock: "Low", moq: 3, resolution: "FHD" }
        ]
    },
    {
        category: "50 & 55 Inch Series",
        id: "cat_50_55",
        items: [
            { id: "50-1", model: "50-4K Smart", specs: "50 Inch, Android 11, Voice", panel: "A+ 4K", ports: "3 HDMI, 2 USB", price: 18500, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600", rating: 4.5, stock: "High", moq: 2, resolution: "4K" },
            { id: "50-2", model: "50-WebOS", specs: "50 Inch, Magic Remote, Thinq", panel: "IPS 4K", ports: "3 HDMI, Optical", price: 19800, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600", rating: 4.7, stock: "Medium", moq: 2, resolution: "4K" },
            { id: "55-1", model: "55-4K Android", specs: "55 Inch, Google TV, Dolby", panel: "A+ 4K HDR", ports: "3 HDMI, 2 USB", price: 22500, image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=80&w=600", rating: 4.6, tag: "Best Value", stock: "High", moq: 2, resolution: "4K" },
            { id: "55-2", model: "55-WebOS Pro", specs: "55 Inch, Metal Bezel-less", panel: "LG Original 4K", ports: "3 HDMI, LAN", price: 24000, image: "https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&q=80&w=600", rating: 4.8, stock: "Low", moq: 2, resolution: "4K" }
        ]
    },
    {
        category: "Premium QLED & WebOS",
        id: "cat_prem",
        items: [
            { id: "50-Q1", model: "50QLED-WEBOS", specs: "50\" QLED 4K, Magic Remote", panel: "Quantum Dot 4K", ports: "3 HDMI, 2 USB, Bluetooth", price: 21500, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600", rating: 4.9, stock: "Medium", moq: 2, resolution: "4K" },
            { id: "58-Q1", model: "58QLED-WEBOS", specs: "58\" Bezel-less 4K, Thinq AI", panel: "A+ Grade 4K", ports: "3 HDMI, 2 USB, Optical", price: 26800, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&q=80&w=600", rating: 4.8, stock: "Low", moq: 2, resolution: "4K" },
            { id: "65-Q1", model: "65QLED-WEBOS", specs: "65\" Cinema Screen 4K, MEMC", panel: "LG Original IPS", ports: "3 HDMI, 2 USB, LAN", price: 36000, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600", rating: 5.0, tag: "Premium", stock: "High", moq: 1, resolution: "4K" },
            { id: "75-Q1", model: "75QLED-Theater", specs: "75\" Giant Screen, Dolby Atmos", panel: "Quantum Dot 4K", ports: "4 HDMI, 3 USB", price: 65000, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600", rating: 5.0, tag: "Flagship", stock: "Low", moq: 1, resolution: "4K" }
        ]
    }
];

// --- HOOKS & HELPERS ---

const useScrollReveal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
};

const ScrollReveal = ({ children, className = "" }) => {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div ref= { ref } className = {`${className} ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-700`
}>
    { children }
    </div>
  );
};

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className= {`fixed top-24 right-4 z-[90] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-500 animate-slide-in-right backdrop-blur-md ${type === 'success' ? 'bg-green-600/90 text-white' : 'bg-gray-800/90 text-white'
            }`
}>
    { type === 'success' ? <CheckCircle size={ 20 } className = "text-green-200" /> : <Info size={ 20 } />}
<span className="font-semibold text-sm tracking-wide" > { message } </span>
    </div>
  );
};

const AnimatedCounter = ({ end, duration = 2000, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [ref, isVisible] = useScrollReveal();

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;

            if (progress < duration) {
                setCount(Math.min(end, Math.floor((progress / duration) * end)));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return (
        <div ref= { ref } className = "text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm" >
            <div className="text-4xl font-black text-[#FFD700] mb-2 font-mono" > { count.toLocaleString() }{ suffix } </div>
                < div className = "text-blue-100 text-xs font-bold uppercase tracking-widest" > { label } </div>
                    </div>
  );
};

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
        <div className= "bg-gradient-to-r from-[#003366] via-blue-900 to-[#003366] text-white text-xs py-2 relative overflow-hidden z-[51]" >
        <div className="flex items-center justify-center gap-8 animate-marquee whitespace-nowrap min-w-full" >
        {
            [1, 2, 3, 4].map(i => (
                <React.Fragment key= { i } >
                <span className="flex items-center gap-2 mx-8" >
            <Zap size={ 14} className = "text-[#FFD700] animate-pulse" />
            FLASH DEAL: Flat 2 % OFF on Bulk Orders(20 + Units)
            </span>
            < span className = "text-gray-500" >| </span>
            < span className = "flex items-center gap-2 mx-8" >
            <Truck size={ 14} className = "text-[#FFD700]" />
            Free Delivery within Delhi NCR
            </span>
            < span className = "text-gray-500" >| </span>
            < span className = "flex items-center gap-2 mx-8 text-[#FFD700] font-mono font-bold" >
            Ends in { String(timeLeft.h).padStart(2, '0')
        }: { String(timeLeft.m).padStart(2, '0') }: { String(timeLeft.s).padStart(2, '0') }
    </span>
        < span className = "text-gray-500" >| </span>
            </React.Fragment>
        ))}
</div>
    </div>
  );
};

// --- COMPONENTS ---

const QuoteCart = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, onSaveQuote }) => {
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    const estimatedTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    const generateWhatsAppLink = () => {
        let message = `*Bulk Order Inquiry - ${BUSINESS_CONFIG.name}*\n\nHello, I am interested in the following models:\n\n`;
        cart.forEach(item => {
            message += `• ${item.model}: ${item.qty} units @ ₹${item.price}\n`;
        });
        message += `\n*Total Items:* ${totalItems}`;
        message += `\n*Estimated Value:* ₹${estimatedTotal.toLocaleString()}`;
        message += `\n\nPlease confirm stock availability.`;

        return `https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent(message)}`;
    };

    const handleSend = () => {
        if (cart.length === 0) return;
        onSaveQuote(cart, estimatedTotal);
        window.open(generateWhatsAppLink(), '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className= "fixed inset-0 z-[100] overflow-hidden" >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick = { onClose } > </div>
            < div className = "absolute inset-y-0 right-0 max-w-md w-full flex" >
                <div className="h-full w-full bg-white shadow-2xl flex flex-col animate-slide-in-right" >
                    <div className="bg-[#003366] p-4 text-white flex justify-between items-center shadow-md" >
                        <h2 className="text-lg font-bold flex items-center gap-2" >
                            <List size={ 20 } /> Build Your Quote
                                </h2>
                                < button onClick = { onClose } className = "p-1 hover:bg-white/20 rounded" >
                                    <X size={ 24 } />
                                        </button>
                                        </div>

                                        < div className = "flex-1 overflow-y-auto p-4 space-y-4" >
                                        {
                                            cart.length === 0 ? (
                                                <div className= "h-full flex flex-col items-center justify-center text-gray-400 space-y-4" >
                                                <ShoppingCart size={ 48 } className = "opacity-20" />
                                                    <p>Your quote list is empty.</p>
                                                        < button
    onClick = { onClose }
    className = "text-[#003366] font-semibold hover:underline"
        >
        Start Adding Products
            </button>
            </div>
            ) : (
    cart.map((item) => (
        <div key= { item.id } className = "bg-gray-50 p-3 rounded-lg border border-gray-200 flex justify-between items-start animate-fade-in-up" >
        <div className="flex gap-3" >
    <img src={ item.image } className = "w-12 h-12 object-cover rounded bg-white" alt = "" />
    <div>
    <h4 className="font-bold text-[#003366] text-sm" > { item.model } </h4>
    < p className = "text-sm font-semibold mt-1" >₹{ item.price.toLocaleString() } </p>
    </div>
    </div>
    < div className = "flex flex-col items-end gap-2" >
    <div className="flex items-center bg-white border border-gray-300 rounded shadow-sm" >
    <button 
                        onClick={() => updateQuantity(item.id, -1)}
        className = "px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold"
        > -</button>
        < span className = "px-2 text-sm font-medium min-w-[30px] text-center" > { item.qty } </span>
        < button 
                        onClick = {() => updateQuantity(item.id, 1)}
        className = "px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold"
        > +</button>
        </div>
        < button 
                      onClick = {() => removeFromCart(item.id)}
        className = "text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
        >
        <Trash2 size={ 12} /> Remove
        </button>
        </div>
    </div>
    ))
            )}
</div>

    < div className = "border-t border-gray-200 p-4 bg-gray-50 space-y-4" >
        <div className="flex justify-between text-sm text-gray-600" >
            <span>Total Units: </span>
                < span className = "font-bold" > { totalItems } </span>
                    </div>
                    < div className = "flex justify-between text-lg font-bold text-[#003366]" >
                        <span>Est.Value: </span>
                            <span>₹{ estimatedTotal.toLocaleString() }* </span>
                                </div>
                                < p className = "text-[10px] text-gray-500 text-center" >
              * Prices subject to quantity & market fluctuation.
            </p>

    < button
onClick = { handleSend }
className = {`w-full py-3 rounded font-bold text-center flex items-center justify-center gap-2 transition-colors ${cart.length === 0
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
        : 'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg transform active:scale-95'
    }`}
disabled = { cart.length === 0 }
    >
    <MessageCircle size={ 20 } /> Send Quote via WhatsApp
        </button>
        </div>
        </div>
        </div>
        </div>
  );
};

const History = ({ orders }) => (
    <div className= "py-20 max-w-4xl mx-auto px-4 min-h-[60vh]" >
    <h2 className="text-3xl font-black text-[#003366] mb-8 flex items-center gap-3" >
        <Clock size={ 32 } /> My Quote History
            </h2>
{
    orders.length === 0 ? (
        <div className= "bg-white p-12 text-center rounded-2xl shadow-sm border border-gray-200" >
        <div className="inline-block p-4 bg-gray-50 rounded-full mb-4" > <List size={ 32 } className = "text-gray-400" /> </div>
            < p className = "text-gray-500 text-lg" > You haven't generated any quotes yet.</p>
                < p className = "text-sm text-gray-400 mt-2" > Quotes you send via WhatsApp will appear here automatically.</p>
                    </div>
    ) : (
        <div className= "space-y-6" >
        {
            orders.map((order) => (
                <ScrollReveal key= { order.id } >
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all" >
            <div className="flex justify-between items-start mb-4" >
            <div>
            <span className="text-xs font-bold bg-blue-100 text-[#003366] px-3 py-1 rounded-full uppercase tracking-wide" > SENT </span>
            < p className = "text-sm text-gray-500 mt-2 font-medium" > { new Date(order.date).toLocaleString() } </p>
            </div>
            < div className = "text-right" >
            <p className="font-black text-2xl text-[#003366]" >₹{ order.total.toLocaleString() } </p>
            < p className = "text-xs text-gray-500" > { order.items.length } Models </p>
            </div>
            </div>
            < div className = "bg-gray-50 p-4 rounded-xl text-sm text-gray-700 border border-gray-100" >
            <p className="font-bold mb-2 uppercase text-xs text-gray-400 tracking-wider" > Items Summary </p>
            < ul className = "list-disc pl-5 space-y-1" >
            {
                order.items.map((item, idx) => (
                    <li key= { idx } > <span className="font-bold" > { item.model } < /span> x {item.qty}</li >
                  ))
        }
        </ul>
        </div>
        </div>
        </ScrollReveal>
        ))
}
</div>
    )}
</div>
);

const EnquiryForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        businessName: '',
        phone: '',
        gst: '',
        requirement: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        const msg = `*New Web Enquiry*\nBusiness: ${formData.businessName}\nPhone: ${formData.phone}\nGST: ${formData.gst}\nRequirement: ${formData.requirement}`;
        window.open(`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent(msg)}`, '_blank');
        setFormData({ businessName: '', phone: '', gst: '', requirement: '' });
    };

    return (
        <div className= "py-20 bg-gray-50" >
        <div className="max-w-3xl mx-auto px-4" >
            <ScrollReveal className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100" >
                <div className="bg-[#003366] px-8 py-8 text-center relative overflow-hidden" >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" > </div>
                        < h2 className = "text-3xl font-black text-white relative z-10" > Bulk Order Enquiry </h2>
                            < p className = "text-blue-200 mt-2 relative z-10" > Fill this form to get a callback within 2 hours </p>
                                </div>
                                < form onSubmit = { handleSubmit } className = "p-8 space-y-6" >
                                    <div className="grid md:grid-cols-2 gap-6" >
                                        <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2" > Business Name * </label>
                                            < input
    required
    className = "w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none bg-gray-50 transition-all"
    placeholder = "Enter shop/company name"
    value = { formData.businessName }
    onChange = { e => setFormData({ ...formData, businessName: e.target.value })}
                />
    </div>
    < div >
    <label className="block text-sm font-bold text-gray-700 mb-2" > Mobile Number * </label>
        < input
required
type = "tel"
className = "w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] outline-none bg-gray-50 transition-all"
placeholder = "WhatsApp enabled number"
value = { formData.phone }
onChange = { e => setFormData({ ...formData, phone: e.target.value })}
                />
    </div>
    </div>

    < div >
    <label className="block text-sm font-bold text-gray-700 mb-2" > GST Number(Optional) </label>
        < input
className = "w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] outline-none bg-gray-50 transition-all"
placeholder = "For GST invoice verification"
value = { formData.gst }
onChange = { e => setFormData({ ...formData, gst: e.target.value })}
              />
    </div>

    < div >
    <label className="block text-sm font-bold text-gray-700 mb-2" > Requirement Details * </label>
        < textarea
required
className = "w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] outline-none bg-gray-50 transition-all h-32 resize-none"
placeholder = "Ex: Need 10 units of 32 inch Smart TV and 5 units of 43 inch."
value = { formData.requirement }
onChange = { e => setFormData({ ...formData, requirement: e.target.value })}
              > </textarea>
    </div>

    < button
type = "submit"
className = "w-full bg-[#003366] text-white font-bold py-5 rounded-xl hover:bg-[#002244] transition-all flex justify-center items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
    Submit Enquiry < Send size = { 20} />
        </button>
        < p className = "text-center text-xs text-gray-400 mt-4" >
            By submitting, you agree to receive wholesale updates on WhatsApp.
            </p>
                </form>
                </ScrollReveal>
                </div>
                </div>
  );
};

const Contact = () => (
    <div className= "py-20 max-w-7xl mx-auto px-4" >
    <div className="grid md:grid-cols-2 gap-12 items-start" >
        <ScrollReveal className="space-y-10" >
            <div>
            <h2 className="text-4xl font-black text-[#003366] mb-6" > Visit Our Office </h2>
                < p className = "text-gray-500 text-lg leading-relaxed" >
                    We operate from the heart of Asia's largest electronics market. We encourage bulk buyers to visit our experience center in Chandni Chowk.
                        </p>
                        </div>

                        < div className = "space-y-8" >
                            <div className="flex items-start gap-6 group" >
                                <div className="bg-blue-50 p-4 rounded-2xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors" >
                                    <MapPin size={ 28 } />
                                        </div>
                                        < div >
                                        <h3 className="font-bold text-gray-900 text-xl mb-2" > Experience Center </h3>
                                            < p className = "text-gray-500 leading-relaxed" > { BUSINESS_CONFIG.address } </p>
                                                </div>
                                                </div>

                                                < div className = "flex items-start gap-6 group" >
                                                    <div className="bg-blue-50 p-4 rounded-2xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors" >
                                                        <Phone size={ 28 } />
                                                            </div>
                                                            < div >
                                                            <h3 className="font-bold text-gray-900 text-xl mb-2" > Support & Sales </h3>
                                                                < p className = "text-gray-500 text-lg font-medium" > { BUSINESS_CONFIG.phone } </p>
                                                                    < p className = "text-sm text-gray-400 mt-1" > Mon - Sat: 11:00 AM - 8:00 PM </p>
                                                                        </div>
                                                                        </div>
                                                                        </div>

                                                                        < div className = "p-8 bg-gradient-to-r from-[#FFD700]/10 to-transparent border-l-4 border-[#FFD700] rounded-r-2xl" >
                                                                            <h4 className="font-bold text-[#003366] mb-4 flex items-center gap-2 text-lg" > <Award size={ 24 } /> Dealer Benefits</h4 >
                                                                                <ul className="text-gray-700 space-y-3 font-medium" >
                                                                                    <li className="flex items-center gap-2" > <CheckCircle size={ 16 } className = "text-[#FFD700]" /> Exclusive Price Sheet for { '>'}50 units </li>
                                                                                        < li className = "flex items-center gap-2" > <CheckCircle size={ 16 } className = "text-[#FFD700]" /> Priority Dispatch Service </li>
                                                                                            < li className = "flex items-center gap-2" > <CheckCircle size={ 16 } className = "text-[#FFD700]" /> Marketing Material Support </li>
                                                                                                </ul>
                                                                                                </div>
                                                                                                </ScrollReveal>

                                                                                                < ScrollReveal className = "h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative bg-gray-100 delay-200" >
                                                                                                    <iframe 
          title="KSC Location"
src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.761845667389!2d77.23326167615964!3d28.65413318388481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd03429352d1%3A0x3345479201730076!2sLajpat%20Rai%20Market%2C%20Chandni%20Chowk%2C%20New%20Delhi%2C%20Delhi%20110006!5e0!3m2!1sen!2sin!4v1709664583262!5m2!1sen!2sin"
width = "100%"
height = "100%"
style = {{ border: 0 }}
allowFullScreen = ""
loading = "lazy"
referrerPolicy = "no-referrer-when-downgrade"
    > </iframe>
    < div className = "absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-xs border border-gray-100" >
        <p className="font-bold text-[#003366] text-lg mb-1" > Navigate to Store </p>
            < p className = "text-sm text-gray-500 mb-4" > Old Lajpat Rai Market, Delhi </p>
                < a
href = "https://www.google.com/maps/search/?api=1&query=Shop+No+728+Old+Lajpat+Rai+Market+Chandni+Chowk+Delhi"
target = "_blank"
rel = "noopener noreferrer"
className = "inline-flex items-center gap-2 text-sm font-bold bg-[#003366] text-white px-5 py-2.5 rounded-xl hover:bg-[#FFD700] hover:text-[#003366] transition-colors w-full justify-center"
    >
    Open in Maps < ChevronRight size = { 16} />
        </a>
        </div>
        </ScrollReveal>
        </div>
        </div>
);

const Footer = () => (
    <footer className= "bg-[#002244] text-white pt-24 pb-10 border-t border-white/10" >
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16" >
        <div className="col-span-1 md:col-span-2" >
            <h3 className="text-3xl font-black text-[#FFD700] mb-6 tracking-tight" > { BUSINESS_CONFIG.name } </h3>
                < p className = "text-blue-200 text-sm leading-relaxed max-w-sm mb-8" >
                    Connecting retailers to factory - direct electronics.We are committed to transparency, quality verification, and long - term business relationships.
        </p>
                        < div className = "flex gap-4" >
                            <a href={ BUSINESS_CONFIG.instagram } target = "_blank" rel = "noopener noreferrer" className = "p-3 bg-white/10 rounded-full hover:bg-[#E1306C] hover:text-white transition-all hover:-translate-y-1" >
                                <Instagram size={ 22 } />
                                    </a>
                                    < a href = {`https://wa.me/${BUSINESS_CONFIG.phone}`} target = "_blank" rel = "noopener noreferrer" className = "p-3 bg-white/10 rounded-full hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-1" >
                                        <MessageCircle size={ 22 } />
                                            </a>
                                            </div>
                                            </div>
                                            < div >
                                            <h4 className="font-bold mb-8 text-white uppercase tracking-wider text-sm" > Business </h4>
                                                < ul className = "space-y-4 text-sm text-blue-200" >
                                                    <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block" > Wholesale Catalog < /button></li >
                                                        <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block" > Partner Program < /button></li >
                                                            <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block" > Warranty Claims < /button></li >
                                                                <li><button className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block" > Shipping Policy < /button></li >
                                                                    </ul>
                                                                    </div>
                                                                    < div >
                                                                    <h4 className="font-bold mb-8 text-white uppercase tracking-wider text-sm" > Contact </h4>
                                                                        < div className = "space-y-4 text-sm text-blue-200" >
                                                                            <p className="max-w-xs leading-relaxed opacity-80" > { BUSINESS_CONFIG.address } </p>
                                                                                < p className = "font-mono text-[#FFD700] text-lg" > { BUSINESS_CONFIG.phone } </p>
                                                                                    < p className = "hover:text-white transition-colors" > sales@kscorporations.in</p>
                                                                                        </div>
                                                                                        </div>
                                                                                        </div>
                                                                                        < div className = "max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300" >
                                                                                            <p>& copy; { new Date().getFullYear() } { BUSINESS_CONFIG.name }. All rights reserved.</p>
                                                                                                < p className = "mt-2 md:mt-0 flex items-center gap-2" > <Package size={ 14 } /> Designed for High-Volume B2B Trade</p >
                                                                                                    </div>
                                                                                                    </footer>
);

const FloatingWhatsApp = () => (
    <a
    href= {`https://wa.me/${BUSINESS_CONFIG.phone}?text=Hi ${BUSINESS_CONFIG.name}, I want to place a bulk order for TVs.`}
target = "_blank"
rel = "noopener noreferrer"
className = "fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_0_0_rgba(37,211,102,0.7)] hover:shadow-[0_0_0_10px_rgba(37,211,102,0)] transition-shadow duration-1000 z-40 flex items-center gap-3 group animate-pulse-ring"
    >
    <MessageCircle size={ 28 } className = "animate-bounce" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap" >
            Chat Now
                </span>
                </a>
);

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!isOpen || !product) return null;

    return (
        <div className= "fixed inset-0 z-[80] flex items-center justify-center p-4" >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick = { onClose } > </div>
            < div className = "bg-white rounded-2xl shadow-2xl w-full max-w-4xl z-10 overflow-hidden flex flex-col md:flex-row animate-fade-in-up border border-white/20" >
                <div className="w-full md:w-1/2 bg-gray-100 relative h-72 md:h-auto overflow-hidden group" >
                    <img 
            src={ product.image }
    alt = { product.model }
    className = "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" > </div>
            < div className = "absolute bottom-4 left-4 text-white" >
                <p className="text-xs font-bold uppercase bg-[#FFD700] text-[#003366] px-2 py-1 rounded inline-block mb-2" > Wholesale </p>
                    < h3 className = "text-2xl font-bold" > { product.model } </h3>
                        </div>
                        </div>

                        < div className = "w-full md:w-1/2 p-8 flex flex-col h-full bg-white" >
                            <div className="flex justify-between items-start mb-6" >
                                <div className="flex items-center gap-2" >
                                    <span className="bg-blue-50 text-[#003366] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" > { product.category } </span>
                                        < div className = "flex items-center gap-1 text-yellow-500 text-xs" >
                                            <Star size={ 12 } fill = "currentColor" /> { product.rating }
                                                </div>
                                                </div>
                                                < button onClick = { onClose } className = "p-2 hover:bg-gray-100 rounded-full transition-colors" > <X size={ 20 } /></button >
                                                    </div>

                                                    < div className = "flex-1 space-y-6" >
                                                        <div>
                                                        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1" > Wholesale Price </p>
                                                            < div className = "text-4xl font-black text-[#003366]" >₹{ product.price.toLocaleString() } </div>
                                                                < p className = "text-gray-400 text-xs mt-1" >* Excluding GST & Transport </p>
                                                                    </div>

                                                                    < div className = "grid grid-cols-2 gap-3" >
                                                                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100" >
                                                                            <span className="text-xs text-gray-400 font-bold block uppercase" > Panel </span>
                                                                                < span className = "text-sm font-semibold text-gray-800" > { product.panel } </span>
                                                                                    </div>
                                                                                    < div className = "p-3 bg-gray-50 rounded-lg border border-gray-100" >
                                                                                        <span className="text-xs text-gray-400 font-bold block uppercase" > Ports </span>
                                                                                            < span className = "text-sm font-semibold text-gray-800" > { product.ports } </span>
                                                                                                </div>
                                                                                                < div className = "p-3 bg-gray-50 rounded-lg border border-gray-100" >
                                                                                                    <span className="text-xs text-gray-400 font-bold block uppercase" > Stock </span>
                                                                                                        < span className = {`text-sm font-semibold ${product.stock === 'Low' ? 'text-red-600' : 'text-green-600'}`
}> { product.stock } Availability </span>
    </div>
    < div className = "p-3 bg-gray-50 rounded-lg border border-gray-100" >
        <span className="text-xs text-gray-400 font-bold block uppercase" > MOQ </span>
            < span className = "text-sm font-semibold text-gray-800" > { product.moq } Units </span>
                </div>
                </div>

                < div className = "prose prose-sm text-gray-600 bg-blue-50/50 p-4 rounded-lg border border-blue-100" >
                    <p>{ product.specs }.High contrast ratio dynamic range.Verified for bulk commercial usage.</p>
                        </div>
                        </div>

                        < div className = "mt-8 pt-6 border-t border-gray-100 flex gap-4" >
                            <button 
              onClick={ () => { onAddToCart(product); onClose(); } }
className = "flex-1 bg-[#003366] text-white py-4 rounded-xl font-bold hover:bg-[#004488] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20 flex justify-center items-center gap-2 group"
    >
    <ShoppingCart size={ 18 } className = "group-hover:animate-bounce" /> Add to Quote
        </button>
        </div>
        </div>
        </div>
        </div>
  );
};

const CompareModal = ({ items, onClose, addToCart }) => {
    if (items.length === 0) return null;

    return (
        <div className= "fixed inset-0 z-[80] flex items-center justify-center p-4" >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick = { onClose } > </div>
            < div className = "bg-white rounded-2xl shadow-2xl w-full max-w-5xl z-10 overflow-hidden flex flex-col h-[85vh] animate-fade-in-up" >
                <div className="bg-[#003366] p-6 text-white flex justify-between items-center" >
                    <div>
                    <h3 className="font-bold text-xl" > Compare Models </h3>
                        < p className = "text-blue-200 text-sm" > { items.length } items selected </p>
                            </div>
                            < button onClick = { onClose } className = "hover:bg-white/10 p-2 rounded-full" > <X size={ 24 } /></button >
                                </div>

                                < div className = "flex-1 overflow-auto p-8 bg-gray-50" >
                                    <div className="grid grid-cols-4 min-w-[800px] bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200" >
                                        <div className="bg-gray-50 p-6 border-b border-r border-gray-100 font-bold text-gray-400 flex items-center" > Features </div>
    {
        items.map(item => (
            <div key= { item.id } className = "p-6 border-b border-r border-gray-100 text-center relative group bg-white hover:bg-blue-50/30 transition-colors" >
            <div className="h-32 mb-4 flex items-center justify-center" >
        <img src={ item.image } className = "max-h-full max-w-full rounded-lg shadow-md group-hover:scale-105 transition-transform" alt = "" />
        </div>
        < h4 className = "font-bold text-[#003366] text-lg mb-2" > { item.model } </h4>
        < button onClick = {() => addToCart(item)} className = "text-xs bg-[#003366] text-white px-4 py-2 rounded-full font-bold shadow hover:bg-blue-800 transition-colors" > Add to Quote </button>
            </div>
            ))}
{
    [...Array(3 - items.length)].map((_, i) => (
        <div key= {`empty-${i}`} className = "p-6 border-b border-r border-gray-100 bg-gray-50/50 flex flex-col items-center justify-center text-gray-300" >
            <BarChart2 size={ 32 } className = "mb-2 opacity-20" />
                <span className="text-sm font-medium" > Add Product </span>
                    </div>
            ))}

{
    ['Price', 'Specs', 'Panel', 'Ports', 'Rating', 'Resolution', 'MOQ'].map((feature) => (
        <React.Fragment key= { feature } >
        <div className="bg-gray-50 p-4 border-b border-r border-gray-100 font-semibold text-gray-500 text-sm uppercase tracking-wide flex items-center" > { feature } </div>
                {
            items.map(item => (
                <div key= {`${item.id}-${feature}`} className = "p-4 border-b border-r border-gray-100 text-sm text-gray-600 text-center flex items-center justify-center" >
                    { feature === 'Price' ? (
                        <span className= "font-bold text-lg text-[#003366]" >₹{ item.price.toLocaleString() } </span>
    ) : feature === 'Rating' ? (
        <div className= "flex gap-1 text-yellow-500 font-bold" > <Star size={ 14 } fill = "currentColor" /> { item.rating } </div>
                    ) : (
        item[feature.toLowerCase()] || '-'
    )
}
</div>
                ))}
{
    [...Array(3 - items.length)].map((_, i) => (
        <div key= {`empty-row-${feature}-${i}`} className = "border-b border-r border-gray-100 bg-gray-50/50" > </div>
                ))}
</React.Fragment>
            ))}
</div>
    </div>
    </div>
    </div>
  );
};

const Header = ({ activeTab, setActiveTab, cartCount, toggleCart, searchQuery, setSearchQuery }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className= {`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#003366]/95 backdrop-blur-md shadow-2xl py-2' : 'bg-[#003366] py-4'}`
}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8" >
        {/* Logo */ }
        < div
className = "flex items-center gap-3 cursor-pointer flex-shrink-0 group"
onClick = {() => setActiveTab('home')}
        >
    <div className="relative" >
        <div className="absolute inset-0 bg-[#FFD700] rounded blur opacity-50 group-hover:opacity-100 transition-opacity duration-500" > </div>
            < div className = "relative bg-[#FFD700] p-2 rounded text-[#003366] font-black text-2xl tracking-tighter shadow-lg group-hover:rotate-6 transition-transform" > KS </div>
                </div>
                < div className = "hidden sm:block" >
                    <h1 className="text-xl font-bold leading-none text-white tracking-wide" > { BUSINESS_CONFIG.name } </h1>
                        < p className = "text-[10px] text-blue-200 tracking-[0.2em] font-medium mt-1" > WHOLESALE ELECTRONICS </p>
                            </div>
                            </div>

{/* Search Bar (Desktop) */ }
<div className="hidden md:flex flex-1 max-w-xl relative group" >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#FFD700] rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" > </div>
        < input
type = "text"
placeholder = "Search models (e.g., 3256, QLED)..."
className = "w-full bg-[#002850] text-white placeholder-blue-300/50 rounded-full px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all shadow-inner border border-white/5"
value = { searchQuery }
onChange = {(e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) setActiveTab('catalog');
}}
          />
    < Search className = "absolute left-4 top-3.5 text-blue-300 group-hover:text-[#FFD700] transition-colors" size = { 18} />
        </div>

{/* Desktop Nav */ }
<nav className="hidden md:flex items-center gap-8 text-sm font-bold text-white" >
{
    ['Home', 'Catalog', 'History', 'Contact', 'Fast Order'].map((item) => (
        <button
              key= { item }
              onClick = {() => setActiveTab(item.toLowerCase().replace(' ', ''))}
className = {`hover:text-[#FFD700] transition-all relative py-2 ${activeTab === item.toLowerCase().replace(' ', '') ? 'text-[#FFD700]' : ''}`}
            >
    { item }
    < span className = {`absolute bottom-0 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ${activeTab === item.toLowerCase().replace(' ', '') ? 'w-full' : 'w-0 hover:w-full'}`}> </span>
        </button>
          ))}
</nav>

{/* Icons */ }
<div className="flex items-center gap-6 text-white" >
    <button 
            onClick={ toggleCart }
className = "relative p-2 hover:bg-white/10 rounded-full transition-colors group"
    >
    <ShoppingCart size={ 24 } className = "group-hover:text-[#FFD700] transition-colors" />
        { cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#FFD700] text-[#003366] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce shadow-lg ring-2 ring-[#003366]" >
                { cartCount }
                </span>
            )}
</button>
    < button
className = "md:hidden p-2 hover:bg-white/10 rounded-full"
onClick = {() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
    { isMobileMenuOpen?<X size = { 24 } /> : <Menu size={ 24 } />}
</button>
    </div>
    </div>

{/* Mobile Search & Menu */ }
{
    isMobileMenuOpen && (
        <div className="md:hidden bg-[#002244] border-t border-white/10 p-6 animate-slide-in-right shadow-2xl relative z-50" >
            <div className="relative mb-6" >
                <input 
              type="text"
    placeholder = "Search products..."
    className = "w-full bg-[#001a33] text-white p-3 pl-10 rounded-lg border border-white/10 focus:border-[#FFD700] outline-none"
    value = { searchQuery }
    onChange = {(e) => {
        setSearchQuery(e.target.value);
        if (e.target.value) setActiveTab('catalog');
    }
}
            />
    < Search className = "absolute left-3 top-3.5 text-gray-400" size = { 18} />
        </div>
        < nav className = "flex flex-col gap-2" >
        {
            ['Home', 'Catalog', 'History', 'Bulk Enquiry', 'Contact', 'Fast Order'].map((item) => (
                <button
                key= { item }
                onClick = {() => {
                setActiveTab(item.toLowerCase().replace(' ', ''));
            setIsMobileMenuOpen(false);
        }}
className = "text-left font-medium py-3 px-4 rounded-lg hover:bg-white/5 hover:text-[#FFD700] transition-colors flex justify-between items-center text-white"
    >
    { item } < ChevronRight size = { 16} />
        </button>
            ))}
</nav>
    </div>
      )}
</header>
  );
};

const Hero = ({ setActiveTab }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePos({ x, y });
    };

    return (
        <div 
      className= "relative bg-[#003366] text-white overflow-hidden min-h-[750px] flex items-center perspective-1000"
    onMouseMove = { handleMouseMove }
        >
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20" > </div>
            < div className = "absolute inset-0 z-0 bg-gradient-to-br from-[#002244] via-[#003366] to-[#001a33]" > </div>

                < div className = "absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse-slow" > </div>
                    < div className = "absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFD700]/10 rounded-full blur-[100px] animate-float" > </div>

                        < div className = "relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16" >
                            <div className="flex-1 space-y-8" >
                                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-[#FFD700] px-5 py-2 text-sm font-bold rounded-full uppercase tracking-wider animate-fade-in-up shadow-[0_0_15px_rgba(255,215,0,0.2)]" >
                                    <Zap size={ 16 } fill = "currentColor" /> Direct Factory Pricing
                                        </div>

                                        < h2 className = "text-5xl md:text-7xl font-black leading-tight animate-fade-in-up delay-100 tracking-tight" >
                                            Electronics for <br/>
                                                < span className = "text-gradient-gold drop-shadow-lg" > Scale & Growth </span>
                                                </h2>

                                                < p className = "text-blue-100 text-xl max-w-lg animate-fade-in-up delay-200 leading-relaxed font-light" >
                                                Delhi's largest wholesale hub. Zero-defect panels, GST billing, and priority dispatch for retailers.
                                                    </p>

                                                    < div className = "flex flex-wrap gap-4 pt-6 animate-fade-in-up delay-300" >
                                                        <button 
              onClick={ () => setActiveTab('catalog') }
    className = "bg-[#FFD700] text-[#003366] px-8 py-4 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center gap-3 text-lg"
        >
        Browse Catalog < ChevronRight size = { 20} />
            </button>
            < button
    onClick = {() => setActiveTab('bulkenquiry')}
className = "bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md text-lg"
    >
    Bulk Enquiry
        </button>
        </div>

        < div className = "flex gap-8 text-sm font-medium text-blue-200 animate-fade-in-up delay-300 pt-8 border-t border-white/10" >
            <div className="flex items-center gap-2" > <Truck size={ 18 } className = "text-[#FFD700]" /> 24hr Dispatch </div>
                < div className = "flex items-center gap-2" > <ShieldCheck size={ 18 } className = "text-[#FFD700]" /> 1yr Warranty </div>
                    < div className = "flex items-center gap-2" > <Users size={ 18 } className = "text-[#FFD700]" /> 500 + Dealers </div>
                        </div>
                        </div>

                        < div
className = "hidden md:block flex-1 w-full max-w-xl relative h-[500px] transition-transform duration-200 ease-out"
style = {{
    transform: `rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)`
}}
        >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/5 rounded-full animate-spin-slow" > </div>
        < div className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#FFD700]/20 rounded-full animate-spin-slow" style = {{ animationDirection: 'reverse', animationDuration: '15s' }}> </div>

            < div className = "absolute top-10 right-10 w-80 glass-dark p-5 rounded-2xl shadow-2xl animate-float z-20 border-t border-white/20" >
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse" > HOT SELLER </div>
                    < img src = "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400" className = "rounded-xl mb-4 w-full h-40 object-cover shadow-lg" alt = "" />
                        <div className="flex justify-between items-end" >
                            <div>
                            <div className="font-bold text-xl text-white" > 32" Frameless Smart</div>
                                < div className = "text-gray-400 text-sm mt-1" > Android 11.0 • 1GB / 8GB </div>
                                    </div>
                                    < div className = "text-[#FFD700] font-black text-2xl" >₹7, 100 </div>
                                        </div>
                                        </div>

                                        < div className = "absolute bottom-10 left-0 w-72 glass-card p-6 rounded-2xl shadow-2xl z-30 animate-fade-in-up delay-200 border-l-4 border-[#003366]" >
                                            <div className="flex items-center gap-3 mb-4 text-[#003366] font-bold border-b border-gray-200 pb-3" >
                                                <div className="p-2 bg-blue-100 rounded-lg" > <TrendingUp size={ 20 } /></div >
                                                    Today's Market
                                                        </div>
                                                        < div className = "space-y-4" >
                                                            <div className="flex justify-between items-center" >
                                                                <span className="text-sm font-medium text-gray-600" > 32" Demand</span> 
                                                                    < span className = "text-green-700 font-bold text-xs bg-green-100 px-2 py-1 rounded-full" > +18 % ↗</span>
                                                                        </div>
                                                                        < div className = "flex justify-between items-center" >
                                                                            <span className="text-sm font-medium text-gray-600" > 43" 4K Stock</span> 
                                                                                < span className = "text-red-600 font-bold text-xs bg-red-100 px-2 py-1 rounded-full" > Critical </span>
                                                                                    </div>
                                                                                    < div className = "w-full bg-gray-200 rounded-full h-1.5 mt-2" >
                                                                                        <div className="bg-[#003366] h-1.5 rounded-full" style = {{ width: '75%' }}> </div>
                                                                                            </div>
                                                                                            < div className = "text-xs text-gray-400 text-right" > Live Stock Update </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
  );
};

const StatsSection = () => (
    <ScrollReveal className= "bg-[#002244] py-12 relative z-20 shadow-2xl" >
    <div className="absolute inset-0 bg-grid-pattern opacity-5" > </div>
        < div className = "max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8" >
            <AnimatedCounter end={ 5000 } suffix = "+" label = "Units Sold This Month" />
                <AnimatedCounter end={ 500 } suffix = "+" label = "Active Retail Partners" />
                    <AnimatedCounter end={ 18 } label = "States Served" />
                        <AnimatedCounter end={ 98 } suffix = "%" label = "On-Time Dispatch" />
                            </div>
                            </ScrollReveal>
);

const Features = () => (
    <div className= "py-24 bg-[#F4F6F8] relative z-10" >
    <div className="max-w-7xl mx-auto px-4" >
        <ScrollReveal className="text-center mb-20" >
            <h2 className="text-4xl font-black text-[#003366] mb-4 tracking-tight" > Why Top Retailers Choose { BUSINESS_CONFIG.name } </h2>
                < p className = "text-gray-500 text-lg max-w-2xl mx-auto" > We've built an infrastructure designed for speed, reliability, and maximum profit margins for our partners.</p>
                    </ScrollReveal>

                    < div className = "grid grid-cols-1 md:grid-cols-4 gap-8" >
                    {
                        [
                        { icon: ShieldCheck, title: "Verified Panels", desc: "100% A+ Grade Zero Dot panels guaranteed." },
                        { icon: Truck, title: "Safe Shipping", desc: "Insured wooden crate packing for every order." },
                        { icon: Zap, title: "Fast Service", desc: "24/7 technical support and spare parts availability." },
                        { icon: Award, title: "Best Margins", desc: "Direct factory import rates for maximum profit." }
                        ].map((f, idx) => (
                            <ScrollReveal key= { idx } className = {`delay-${(idx + 1) * 100}`} >
                        <div className="group h-full p-8 rounded-3xl bg-white hover:bg-[#003366] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:translate-y-[-10px]" >
                            <div className="w-20 h-20 mx-auto bg-blue-50 text-[#003366] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-[#FFD700] transition-all duration-500 shadow-inner" >
                                <f.icon size={ 40 } strokeWidth = { 1.5} />
                                    </div>
                                    < h3 className = "font-bold text-gray-900 text-xl mb-3 group-hover:text-white transition-colors" > { f.title } </h3>
                                        < p className = "text-gray-500 leading-relaxed text-sm group-hover:text-blue-200 transition-colors" > { f.desc } </p>
                                            </div>
                                            </ScrollReveal>
        ))}
</div>
    </div>
    </div>
);

const Newsletter = () => (
    <div className= "py-20 bg-[#003366] relative overflow-hidden" >
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" > </div>
        < div className = "absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse-slow" > </div>

            < ScrollReveal className = "max-w-4xl mx-auto px-4 text-center relative z-10" >
                <div className="inline-block p-4 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-xl animate-float" >
                    <Mail className="text-[#FFD700]" size = { 40} />
                        </div>
                        < h2 className = "text-4xl md:text-5xl font-black text-white mb-6 tracking-tight" > Join The Inner Circle </h2>
                            < p className = "text-blue-100 mb-10 text-lg max-w-2xl mx-auto font-light" > Get access to < span className = "text-[#FFD700] font-bold" > secret price lists < /span>, flash clearance alerts, and extra margin deals directly on WhatsApp.</p >

                                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" >
                                    <input 
          type="text"
placeholder = "Enter your WhatsApp Number"
className = "flex-1 px-8 py-5 rounded-xl text-gray-900 outline-none focus:ring-4 focus:ring-yellow-400/50 text-lg shadow-inner"
    />
    <button className="bg-[#FFD700] text-[#003366] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)] text-lg" >
        Join Now
            </button>
            </div>
            < p className = "text-white/40 text-sm mt-6 flex items-center justify-center gap-2" > <CheckCircle size={ 14 } /> No spam. Only high-value business deals.</p >
                </ScrollReveal>
                </div>
);

const Testimonials = () => (
    <div className= "py-24 bg-white border-t border-gray-100" >
    <div className="max-w-7xl mx-auto px-4" >
        <ScrollReveal className="text-center mb-16" >
            <h2 className="text-4xl font-black text-[#003366] mb-4" > Trusted by 500 + Partners </h2>
                < p className = "text-gray-500 text-lg" > Real feedback from retailers growing with { BUSINESS_CONFIG.name } </p>
                </ScrollReveal>

                < div className = "grid md:grid-cols-3 gap-8" >
                {
                    [
                    { name: "Rajesh Kumar", shop: "RK Digital, Karol Bagh", text: "Best rates in Delhi market. I have been buying 43 inch models for 2 years. Zero complaints." },
                    { name: "Amit Singh", shop: "Singh Electronics, Noida", text: "The replacement policy is very fast. They understand B2B requirements properly." },
                    { name: "Vikas Jain", shop: "Jain & Sons, Jaipur", text: "Quality of the QLED series is comparable to big brands but at half the price." }
                    ].map((t, i) => (
                        <ScrollReveal key= { i } className = {`delay-${(i + 1) * 100}`} >
                    <div className="bg-[#F4F6F8] p-8 rounded-3xl relative hover:shadow-lg transition-all duration-300" >
                        <div className="absolute -top-5 left-8 bg-[#FFD700] p-3 rounded-xl shadow-lg rotate-3" >
                            <span className="text-2xl font-serif text-[#003366]" >❝</span>
                                </div>
                                < div className = "mt-6 text-[#FFD700] mb-6 flex gap-1" > <Star fill="currentColor" size = { 18} /> <Star fill="currentColor" size = { 18} /> <Star fill="currentColor" size = { 18} /> <Star fill="currentColor" size = { 18} /> <Star fill="currentColor" size = { 18} /> </div>
                                    < p className = "text-gray-700 italic mb-8 leading-relaxed font-medium" > "{t.text}" </p>
                                        < div className = "flex items-center gap-4" >
                                            <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold text-lg" >
                                                { t.name.charAt(0) }
                                                </div>
                                                < div >
                                                <h4 className="font-bold text-gray-900" > { t.name } </h4>
                                                    < p className = "text-xs text-gray-500 uppercase tracking-wide font-bold" > { t.shop } </p>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </ScrollReveal>
        ))}
</div>
    </div>
    </div>
);

const FastOrder = ({ addToCart }) => {
    const [input, setInput] = useState('');

    const handleParse = () => {
        const lines = input.split('\n');
        let addedCount = 0;

        lines.forEach(line => {
            const parts = line.trim().split(/\s+/);
            if (parts.length >= 2) {
                const modelCode = parts[0];
                const qty = parseInt(parts[1], 10) || 1;

                // Case-insensitive search
                const foundItem = PRODUCT_DATABASE.flatMap(c => c.items)
                    .find(i => i.model.toLowerCase() === modelCode.toLowerCase());

                if (foundItem) {
                    addToCart(foundItem, qty);
                    addedCount++;
                }
            }
        });

        if (addedCount > 0) alert(`Processed ${addedCount} items. Check your quote.`);
        else alert("No matching products found. Format: ModelCode Quantity");
    };

    return (
        <div className= "py-20 max-w-4xl mx-auto px-4" >
        <ScrollReveal className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8" >
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4" >
                <div className="p-3 bg-blue-50 rounded-xl text-[#003366]" > <ClipboardList size={ 32 } /></div >
                    <div>
                    <h2 className="text-2xl font-black text-[#003366]" > Fast Order Pad </h2>
                        < p className = "text-gray-500 text-sm" > Quickly add items by model number </p>
                            </div>
                            </div>

                            < div className = "grid md:grid-cols-2 gap-8" >
                                <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2" > Enter Model & Quantity </label>
                                    < textarea
    className = "w-full h-64 border border-gray-200 rounded-xl p-4 font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-[#003366] outline-none resize-none"
    placeholder = {`3256FLSM 10\n4310FLSM 5\n50QLED 2`
}
value = { input }
onChange = {(e) => setInput(e.target.value)}
            > </textarea>
    < p className = "text-xs text-gray-400 mt-2" > Format: [Model Code][Space][Quantity](One per line) </p>
        </div>
        < div className = "flex flex-col justify-center space-y-4" >
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100" >
                <h4 className="font-bold text-[#003366] mb-2 flex items-center gap-2" > <Info size={ 16 } /> Instructions</h4 >
                    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4" >
                        <li>Use standard model codes found in the catalog.</li>
                            < li > Enter quantity separated by a space.</li>
                                < li > Each item on a new line.</li>
                                    </ul>
                                    </div>
                                    < button
onClick = { handleParse }
className = "w-full bg-[#003366] text-white font-bold py-4 rounded-xl hover:bg-[#FFD700] hover:text-[#003366] transition-all shadow-lg flex justify-center items-center gap-2"
    >
    Verify & Add to Quote < ArrowUpDown size = { 16} />
        </button>
        </div>
        </div>
        </ScrollReveal>
        </div>
  );
};

// --- CORE COMPONENTS ---

const Catalog = ({ addToCart, searchQuery, onOpenProduct, compareList, setCompareList, openCompareModal }) => {
    const [filter, setFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('default');
    const [viewMode, setViewMode] = useState('grid');

    // New Filters
    const [priceRange, setPriceRange] = useState(50000);
    const [selectedResolutions, setSelectedResolutions] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]); // Array of IDs
    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    // Flattened Database
    const allProducts = PRODUCT_DATABASE.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));

    // Filter Logic
    let filtered = allProducts.filter(item => {
        // Category Filter
        if (filter !== 'all' && PRODUCT_DATABASE.find(c => c.id === filter)?.category !== item.category) return false;

        // Search Filter
        if (searchQuery && !item.model.toLowerCase().includes(searchQuery.toLowerCase())) return false;

        // Price Filter
        if (item.price > priceRange) return false;

        // Resolution Filter
        if (selectedResolutions.length > 0 && !selectedResolutions.includes(item.resolution)) return false;

        return true;
    });

    // Sort Logic
    if (sortOrder === 'lowToHigh') filtered.sort((a, b) => a.price - b.price);
    else if (sortOrder === 'highToLow') filtered.sort((a, b) => b.price - a.price);

    // Pagination Logic
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginatedItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const toggleResolution = (res) => {
        setSelectedResolutions(prev => prev.includes(res) ? prev.filter(r => r !== res) : [...prev, res]);
    };

    const toggleSelection = (id) => {
        setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const toggleCompare = (item) => {
        if (compareList.find(c => c.id === item.id)) {
            setCompareList(compareList.filter(c => c.id !== item.id));
        } else {
            if (compareList.length < 3) setCompareList([...compareList, item]);
            else alert("You can only compare up to 3 items.");
        }
    };

    const handleBulkAdd = () => {
        // Add all selected items to cart with quantity 1
        // Using a more efficient batch update to avoid multiple toasts
        const itemsToAdd = allProducts.filter(p => selectedItems.includes(p.id));

        // Since addToCart function in App handles state update, we can't easily batch update 
        // without changing App. But we can iterate. 
        // To avoid spamming toast, we could modify addToCart or just accept it.
        // For a cleaner solution, we will modify App's addToCart to accept an array, 
        // but here we will just loop for simplicity as per previous instructions.
        // However, to fix the user experience, let's just add them.
        itemsToAdd.forEach(item => addToCart(item));

        setSelectedItems([]);
    };

    const handleDownloadPriceList = () => {
        const headers = ["Category,Model,Specs,Panel,Ports,Price (INR)"];
        const rows = PRODUCT_DATABASE.flatMap(cat =>
            cat.items.map(item =>
                `"${cat.category}","${item.model}","${item.specs}","${item.panel}","${item.ports}","${item.price}"`
            )
        );
        const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "KS_Corporations_Price_List.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className= "py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8" >

        {/* Sidebar Filters */ }
        < div className = "w-full md:w-64 flex-shrink-0 space-y-8" >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24" >
                <div className="flex items-center gap-2 font-bold text-[#003366] mb-6 border-b border-gray-100 pb-2" >
                    <Sliders size={ 20 } /> Filters
                        </div>

    {/* Price Range */ }
    <div className="mb-6" >
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2" > Max Price: ₹{ priceRange.toLocaleString() } </label>
            < input
    type = "range"
    min = "5000"
    max = "50000"
    step = "1000"
    value = { priceRange }
    onChange = {(e) => setPriceRange(Number(e.target.value))}
className = "w-full accent-[#003366]"
    />
    </div>

{/* Resolutions */ }
<div className="mb-6" >
    <label className="block text-xs font-bold text-gray-500 uppercase mb-2" > Resolution </label>
        < div className = "space-y-2" >
        {
            ['HD Ready', 'FHD', '4K'].map(res => (
                <label key= { res } className = "flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-[#003366]" >
                <div 
                    onClick={() => toggleResolution(res)}
className = {`w-4 h-4 rounded border flex items-center justify-center ${selectedResolutions.includes(res) ? 'bg-[#003366] border-[#003366]' : 'border-gray-300'}`}
                  >
    { selectedResolutions.includes(res) && <CheckSquare size={ 12 } className = "text-white" />}
</div>
{ res }
</label>
              ))}
</div>
    </div>

    < button
onClick = {() => { setPriceRange(50000); setSelectedResolutions([]); setFilter('all'); }}
className = "w-full py-2 text-xs font-bold text-gray-400 hover:text-red-500 border border-dashed border-gray-300 rounded-lg hover:border-red-300 transition-colors"
    >
    Reset Filters
        </button>
        </div>
        </div>

{/* Main Content */ }
<div className="flex-1" >
    {/* Toolbar */ }
    < div className = "flex flex-wrap justify-between items-center mb-6 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100" >
        <div className="text-sm font-medium text-gray-500" >
            Showing < span className = "text-[#003366] font-bold" > { filtered.length } </span> products
                </div>

                < div className = "flex items-center gap-3" >
                    <button 
               onClick={ handleDownloadPriceList }
className = "flex items-center gap-2 px-4 py-2 border border-[#003366] text-[#003366] rounded hover:bg-blue-50 font-bold transition-colors text-xs"
    >
    <Download size={ 14 } /> Download CSV
        </button>
        < div className = "flex bg-gray-100 rounded-lg p-1" >
            <button onClick={ () => setViewMode('grid') } className = {`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow text-[#003366]' : 'text-gray-400'}`}> <Grid size={ 18 } /></button >
                <button onClick={ () => setViewMode('list') } className = {`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow text-[#003366]' : 'text-gray-400'}`}> <List size={ 18 } /></button >
                    </div>
                    < select
className = "bg-gray-100 text-sm font-medium text-gray-700 py-2 px-3 rounded-lg border-none focus:ring-0 cursor-pointer"
value = { sortOrder }
onChange = {(e) => setSortOrder(e.target.value)}
             >
    <option value="default" > Relevance </option>
        < option value = "lowToHigh" > Price: Low to High </option>
            < option value = "highToLow" > Price: High to Low </option>
                </select>
                </div>
                </div>

{/* Product Grid */ }
{
    paginatedItems.length === 0 ? (
        <div className= "text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200" >
        <Search className="mx-auto h-12 w-12 text-gray-300 mb-2" />
            <p className="text-gray-500" > No products match your criteria.</p>
                </div>
        ) : (
        <div className= {`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`
}>
{
    paginatedItems.map((item) => (
        <div 
                 key= { item.id } 
                 className = {`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex ${viewMode === 'list' ? 'flex-row items-center h-48' : 'flex-col'} relative`}
    >
    {/* Selection Checkbox */ }
    < div className = "absolute top-3 left-3 z-20" >
        <button 
                      onClick={ (e) => { e.stopPropagation(); toggleSelection(item.id); } }
className = {`w-6 h-6 rounded-md border flex items-center justify-center transition-colors shadow-sm ${selectedItems.includes(item.id) ? 'bg-[#003366] border-[#003366]' : 'bg-white border-gray-300 hover:border-[#003366]'}`}
                    >
    { selectedItems.includes(item.id) && <CheckSquare size={ 16 } className = "text-white" />}
</button>
    </div>

{/* Image */ }
<div className={ `relative overflow-hidden bg-gray-100 ${viewMode === 'list' ? 'w-48 h-full flex-shrink-0' : 'h-56'}` }>
    <img 
                     src={ item.image }
alt = { item.model }
className = "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    {/* Badges */ }
    < div className = "absolute bottom-2 left-2 flex flex-col gap-1" >
        { item.stock && <span className={ `text-[10px] font-bold px-2 py-0.5 rounded shadow-sm ${item.stock === 'High' ? 'bg-green-100 text-green-700' : item.stock === 'Low' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}` }> { item.stock } Stock </span>}
</div>
    </div>

{/* Content */ }
<div className={ `p-5 flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'h-full' : ''}` }>
    <div>
    <div className="flex justify-between items-start mb-1" >
        <h3 className="font-bold text-lg text-[#003366] group-hover:text-blue-600 transition-colors cursor-pointer" onClick = {() => onOpenProduct(item)}> { item.model } </h3>
            </div>
            < p className = "text-xs text-gray-500 mb-3" > { item.specs } </p>

                < div className = "flex flex-wrap gap-2 mb-3" >
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200" > MOQ: { item.moq } </span>
                        < span className = "text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200" > { item.resolution } </span>
                            </div>
                            </div>

                            < div className = "flex items-center justify-between border-t border-gray-50 pt-3 mt-auto" >
                                <span className="text-xl font-black text-gray-900" >₹{ item.price.toLocaleString() } </span>
                                    < div className = "flex gap-2" >
                                        <button onClick={ () => toggleCompare(item) } className = "p-2 text-gray-400 hover:text-[#003366] hover:bg-blue-50 rounded-lg transition-colors" > <BarChart2 size={ 18 } /></button >
                                            <button 
                         onClick={ () => addToCart(item) }
className = "bg-[#003366] text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#FFD700] hover:text-[#003366] transition-colors shadow-md"
    >
    Add
    </button>
    </div>
    </div>
    </div>
    </div>
             ))}
</div>
        )}

{/* Pagination */ }
{
    totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12" >
        {
            [...Array(totalPages)].map((_, i) => (
                <button 
                key= { i }
                onClick = {() => setPage(i + 1)}
    className = {`w-10 h-10 rounded-lg font-bold text-sm transition-all ${page === i + 1 ? 'bg-[#003366] text-white shadow-lg scale-110' : 'bg-white text-gray-500 hover:bg-gray-100'}`
}
              >
    { i + 1}
</button>
            ))}
</div>
        )}
</div>

{/* Floating Bulk Action Bar */ }
{
    selectedItems.length > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#003366] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-6 animate-fade-in-up border border-white/20 backdrop-blur-md" >
            <span className="font-bold" > { selectedItems.length } items selected </span>
                < div className = "h-6 w-px bg-white/20" > </div>
                    < button onClick = { handleBulkAdd } className = "bg-[#FFD700] text-[#003366] px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors text-sm shadow-sm" >
                        Add All to Quote
                            </button>
                            < button onClick = {() => setSelectedItems([])
} className = "text-white/70 hover:text-white text-sm underline" > Cancel </button>
    </div>
      )}

{/* Compare Floating Bar */ }
{
    compareList.length > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 bg-[#003366] text-white rounded-2xl shadow-2xl p-4 animate-fade-in-up w-[90%] max-w-2xl border border-white/10 backdrop-blur-md" >
            <div className="flex justify-between items-center" >
                <div className="flex items-center gap-4" >
                    <span className="font-bold text-sm uppercase tracking-wide" > Comparing({ compareList.length } / 3) </span>
                        < div className = "flex gap-2" >
                        {
                            compareList.map(c => (
                                <div key= { c.id } className = "relative group cursor-pointer" onClick = {() => toggleCompare(c)} >
                            <img src={ c.image } className = "w-10 h-10 rounded-lg object-cover border-2 border-white/20 group-hover:border-red-500 transition-colors" alt = "" />
                                <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity" > <X size={ 12 } /></div >
                                    </div>
                ))
}
</div>
    </div>
    < div className = "flex gap-3" >
        <button onClick={ () => setCompareList([]) } className = "text-xs text-blue-200 hover:text-white underline" > Clear All </button>
            < button
onClick = { openCompareModal }
className = "bg-[#FFD700] text-[#003366] px-6 py-2 rounded-lg font-bold shadow hover:bg-white transition-colors text-sm"
    >
    View Comparison
        </button>
        </div>
        </div>
        </div>
      )}
</div>
  );
};

// --- MAIN APP RENDER ---

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

    useEffect(() => {
        const savedCart = localStorage.getItem('ksc_cart');
        if (savedCart) setCart(JSON.parse(savedCart));
        const savedOrders = localStorage.getItem('ksc_orders');
        if (savedOrders) setOrders(JSON.parse(savedOrders));
    }, []);

    useEffect(() => { localStorage.setItem('ksc_cart', JSON.stringify(cart)); }, [cart]);
    useEffect(() => { localStorage.setItem('ksc_orders', JSON.stringify(orders)); }, [orders]);

    const showToast = (message, type = 'info') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
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
                    <>
                    <Hero setActiveTab= { setActiveTab } />
                    <StatsSection />
                    < Features />
                    <div className="py-24 text-center bg-white relative overflow-hidden" >
                        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent" > </div>
                            < ScrollReveal >
                            <h2 className="text-4xl font-black text-[#003366] mb-16 relative z-10" > Featured Categories </h2>
                                </ScrollReveal>
                                < div className = "max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 relative z-10" >
                                {
                                    [
                                    { title: "32\" Budget Series", desc: "Volume Driver • Starts ₹7,100", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600", action: () => { setSearchQuery(''); setActiveTab('catalog'); } },
                                    { title: "43\" Smart Series", desc: "Hotel Favorite • FHD Android", img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600", action: () => { setSearchQuery(''); setActiveTab('catalog'); } },
                                    { title: "Premium QLEDs", desc: "High Margin • 4K WebOS", img: "https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&q=80&w=600", action: () => { setSearchQuery(''); setActiveTab('catalog'); } }
                                    ].map((c, i) => (
                                        <ScrollReveal key= { i } className = {`delay-${i * 100}`} >
                                    <div onClick={ c.action } className = "group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg h-80 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3" >
                                        <img src={ c.img } className = "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt = { c.title } />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/40 to-transparent flex flex-col justify-end p-8 text-left" >
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors translate-y-2 group-hover:translate-y-0 duration-300" > { c.title } </h3>
                                                    < p className = "text-gray-300 font-medium group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300" > { c.desc } </p>
                                                        </div>
                                                        </div>
                                                        </ScrollReveal>
                ))}
</div>
    </div>
    < Newsletter />
    <Testimonials />
    < Contact />
    </>
        );
      case 'catalog': return <Catalog addToCart={ addToCart } searchQuery = { searchQuery } onOpenProduct = { setSelectedProduct } compareList = { compareList } setCompareList = { setCompareList } openCompareModal = {() => setIsCompareModalOpen(true)} />;
      case 'history': return <History orders={ orders } />;
      case 'bulkenquiry': return <EnquiryForm onFormSubmit={ () => showToast('Enquiry Sent Successfully', 'success') } />;
      case 'contact': return <Contact />;
      case 'fastorder': return <FastOrder addToCart={ addToCart } />;
      default: return <Hero setActiveTab={ setActiveTab } />;
    }
  };

return (
    <div className= "min-h-screen bg-[#F4F6F8] font-sans text-gray-800 flex flex-col" >
    <style>{ styles } </style>
{ toast && <Toast message={ toast.message } type = { toast.type } onClose = {() => setToast(null) } />}
<Header activeTab={ activeTab } setActiveTab = { setActiveTab } cartCount = { cart.reduce((a, b) => a + b.qty, 0) } toggleCart = {() => setIsCartOpen(true)} searchQuery = { searchQuery } setSearchQuery = { setSearchQuery } />
    <main className="flex-grow" > { renderContent() } </main>
        < Footer />
        <FloatingWhatsApp />
        < QuoteCart isOpen = { isCartOpen } onClose = {() => setIsCartOpen(false)} cart = { cart } updateQuantity = { updateQuantity } removeFromCart = { removeFromCart } onSaveQuote = { saveQuoteOrder } />
            <ProductModal product={ selectedProduct } isOpen = {!!selectedProduct} onClose = {() => setSelectedProduct(null)} onAddToCart = { addToCart } />
                <CompareModal items={ compareList } isOpen = { isCompareModalOpen } onClose = {() => setIsCompareModalOpen(false)} addToCart = { addToCart } />
                    </div>
  );
};

export default App;