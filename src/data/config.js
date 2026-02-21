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
                specs: "1GB RAM, Imported Box Speaker",
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
                specs: "Bluetooth 5.0, Voice Remote",
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
            }
        ]
    },
    {
        category: "43 Inch Series",
        id: "cat_43",
        items: [
            {
                id: "43-5",
                model: "4380GLSM",
                specs: "4K UHD, Google TV Certified",
                panel: "4K HDR10",
                ports: "3 HDMI, 2 USB, LAN",
                price: 15800,
                image: "https://images.unsplash.com/photo-1595935736128-db1f11c7821c?auto=format&fit=crop&q=80&w=600",
                rating: 5.0,
                tag: "New",
                stock: "High",
                moq: 3,
                resolution: "4K",
                highlights: ["True 4K Resolution", "HDR10 Support", "Google TV Experience"],
                longDescription: "Experience theater-like visuals with our flagship 43-inch 4K model. Certified Google TV brings all your favorite apps to one place.",
                reviews: [
                    { user: "Deepak G.", rating: 5, comment: "Crystal clear 4K. My customers love it." },
                    { user: "Priya R.", rating: 5, comment: "HDR makes a huge difference in image depth." }
                ]
            }
        ]
    },
    {
        category: "Premium QLED & WebOS",
        id: "cat_prem",
        items: [
            {
                id: "65-Q1",
                model: "65QLED-WEBOS",
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

