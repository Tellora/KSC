export const BUSINESS_CONFIG = {
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

export const PRODUCT_DATABASE = [
    {
        category: "32 Inch Series",
        id: "cat_32",
        items: [
            {
                id: "32-1",
                model: "3256FLSM",
                specs: "512MB RAM, Smart Android 9.0",
                panel: "A+ Grade IPS",
                ports: "2 HDMI, 2 USB",
                price: 7100,
                image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600",
                rating: 4.5,
                tag: "Best Seller",
                stock: "High",
                moq: 5,
                resolution: "HD Ready",
                highlights: ["Google Assistant Ready", "Frameless Design", "Superior Sound"],
                longDescription: "Unmatched clarity meeting affordability. This 32-inch champion is perfect for hotels and bulk installations where reliability is paramount.",
                reviews: [
                    { user: "Rahul S.", rating: 5, comment: "Best value for money for my hotel project." },
                    { user: "Amit K.", rating: 4, comment: "Sturdy build and decent picture quality." }
                ]
            },
            {
                id: "32-2",
                model: "3286FLSM",
                specs: "512MB RAM, Imported Box Speaker",
                panel: "Zero Dot A+",
                ports: "2 HDMI, 2 USB",
                price: 7300,
                image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600",
                rating: 4.2,
                stock: "Medium",
                moq: 5,
                resolution: "HD Ready",
                highlights: ["Deep Bass Audio", "Zero-Dot Panel", "Ultra Thin Profile"],
                longDescription: "The 3286FLSM comes with imported box speakers that deliver a cinematic audio experience in a compact form factor.",
                reviews: [
                    { user: "Vikram P.", rating: 4, comment: "Sound quality is impressive for this size." }
                ]
            },
            {
                id: "32-3",
                model: "3286FLSM BT",
                specs: "1GB RAM, Bluetooth 5.0, Voice Remote",
                panel: "IPS Hard Panel",
                ports: "2 HDMI, 2 USB, Aux",
                price: 7900,
                image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=80&w=600",
                rating: 4.7,
                stock: "Low",
                moq: 5,
                resolution: "HD Ready",
                highlights: ["Bluetooth Connectivity", "Smart Voice Remote", "Hard IPS Panel"],
                longDescription: "Empower your viewing experience with integrated Bluetooth and Voice control. Ideal for modern hospitality environments.",
                reviews: [
                    { user: "Suresh M.", rating: 5, comment: "The voice remote works flawlessly!" }
                ]
            },
            {
                id: "32-4",
                model: "3255GLSM",
                specs: "512MB RAM, Smart Cloud Platform",
                panel: "A+ High Brightness",
                ports: "2 HDMI, 2 USB",
                price: 8200,
                image: "https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&q=80&w=600",
                rating: 4.4,
                stock: "Medium",
                moq: 5,
                resolution: "HD Ready",
                highlights: ["Fast Boot TV", "Cloud Content Store", "Anti-Glare Screen"],
                longDescription: "The 3255GLSM series offers a premium cloud-based smart interface for faster content delivery and system stability.",
                reviews: []
            },
            {
                id: "32-5",
                model: "3255GLSM BT",
                specs: "1GB RAM, BT + Voice Command",
                panel: "Samsung/LG A+ Grade",
                ports: "2 HDMI, 2 USB",
                price: 8800,
                image: "https://images.unsplash.com/photo-1601944115942-945ec2136ee1?auto=format&fit=crop&q=80&w=600",
                rating: 4.8,
                stock: "High",
                moq: 3,
                resolution: "HD Ready",
                highlights: ["Crystal Clear Audio", "Smart Home Ready", "Thin Bezel Design"],
                longDescription: "Our high-end 32-inch model featuring seamless Bluetooth connectivity and an optimized 1GB RAM for lag-free performance.",
                reviews: []
            }
        ]
    },
    {
        category: "43 Inch Series",
        id: "cat_43",
        items: [
            {
                id: "43-1",
                model: "4310FLSM",
                specs: "512MB RAM, FHD Smart Hub",
                panel: "Full HD A+ Grade",
                ports: "2 HDMI, 2 USB",
                price: 11500,
                image: "https://images.unsplash.com/photo-1595935736128-db1f11c7821c?auto=format&fit=crop&q=80&w=600",
                rating: 4.3,
                stock: "Medium",
                moq: 5,
                resolution: "FHD",
                highlights: ["True FHD Display", "Ultra Slim Border", "Energy Efficient"],
                longDescription: "Great value 43-inch investment for commercial displays and standard hospitality rooms.",
                reviews: []
            },
            {
                id: "43-2",
                model: "4310FLSM BT",
                specs: "1GB RAM, BT Audio Support",
                panel: "Zero Dot HDR",
                ports: "2 HDMI, 2 USB",
                price: 12500,
                image: "https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&q=80&w=600",
                rating: 4.6,
                stock: "High",
                moq: 3,
                resolution: "FHD",
                highlights: ["Dual Band Wi-Fi", "Magic Audio Experience", "Voice Control"],
                longDescription: "Advanced 43-inch FHD series with Bluetooth and enhanced memory for complex enterprise applications.",
                reviews: []
            },
            {
                id: "43-3",
                model: "4319FLSM BT",
                specs: "Metal Body, Heavy Bass Speakers",
                panel: "Original IPS Panel",
                ports: "2 HDMI, 2 USB",
                price: 13000,
                image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=80&w=600",
                rating: 4.9,
                tag: "B2B Favorite",
                stock: "Medium",
                moq: 2,
                resolution: "FHD",
                highlights: ["Industrial Metal Casing", "24W Heavy Speakers", "Screen Mirroring Pro"],
                longDescription: "Designed for intensive industrial use, featuring a rugged metal body and high-fidelity heavy speakers.",
                reviews: []
            },
            {
                id: "43-4",
                model: "4319GLSM BT",
                specs: "Metal Body + Imported Box Speakers",
                panel: "Super Bright A+",
                ports: "3 HDMI, 2 USB",
                price: 13600,
                image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600",
                rating: 4.8,
                stock: "Low",
                moq: 2,
                resolution: "FHD",
                highlights: ["Audiophile Grade Sound", "Premium Metal Build", "Wide Color Gamut"],
                longDescription: "The pinnacle of our 43-inch range, combining luxury metal aesthetics with professional-grade imported audio.",
                reviews: []
            },
            {
                id: "43-5",
                model: "4380GLSM",
                specs: "4K UHD, Google TV Certified",
                panel: "4K HDR10",
                ports: "3 HDMI, 2 USB, LAN",
                price: 15800,
                image: "https://images.unsplash.com/photo-1595935736128-db1f11c7821c?auto=format&fit=crop&q=80&w=600",
                rating: 5.0,
                tag: "Premium FHD",
                stock: "High",
                moq: 3,
                resolution: "4K",
                highlights: ["True 4K Resolution", "HDR10 Support", "Google TV Experience"],
                longDescription: "Experience theater-like visuals with our flagship 43-inch 4K model. Certified Google TV brings all your favorite apps to one place.",
                reviews: []
            }
        ]
    },
    {
        category: "Premium QLED & WebOS",
        id: "cat_prem",
        items: [
            {
                id: "50-Q1",
                model: "50\" QLED 4K WebOS",
                specs: "Quantum Dot, ThinQ AI",
                panel: "Samsung QLED Panel",
                ports: "3 HDMI, 2 USB",
                price: 21500,
                image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600",
                rating: 4.9,
                tag: "New Arrival",
                stock: "Medium",
                moq: 1,
                resolution: "4K",
                highlights: ["Quantum Dot Display", "LG WebOS Platform", "Real 4K Upscaling"],
                longDescription: "Vibrant colors and deep blacks with the 50-inch QLED range. Integrated WebOS provides the world's most intuitive smart experience.",
                reviews: []
            },
            {
                id: "58-Q1",
                model: "58\" QLED 4K WebOS",
                specs: "58-inch Cinematic Display",
                panel: "A+ High Dynamic",
                ports: "3 HDMI, 2 USB",
                price: 26800,
                image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=80&w=600",
                rating: 4.7,
                stock: "High",
                moq: 1,
                resolution: "4K",
                highlights: ["Mega Screen Experience", "Dolby Vision Support", "Magic Remote UI"],
                longDescription: "The bridge between large and mid-size, this 58-inch monster delivers cinema-quality visuals for showroom and premium lounges.",
                reviews: []
            },
            {
                id: "65-Q1",
                model: "65\" QLED 4K WebOS",
                specs: "65\" Cinema Screen 4K, MEMC",
                panel: "LG Original IPS",
                ports: "3 HDMI, 2 USB, LAN",
                price: 36000,
                image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600",
                rating: 5.0,
                tag: "Premium",
                stock: "High",
                moq: 1,
                resolution: "4K",
                highlights: ["Quantum Dot Technology", "LG WebOS Platform", "Magic Remote Included", "MEMC for Smooth Motion"],
                longDescription: "Our premium 65-inch QLED offers the ultimate cinematic experience with Quantum Dot technology for billion+ colors and the intuitive WebOS platform.",
                reviews: [
                    { user: "Zoya H.", rating: 5, comment: "This is a premium TV at a wholesale price." },
                    { user: "Nitin B.", rating: 5, comment: "WebOS is so much better than standard Android." }
                ]
            }
        ]
    }
];

