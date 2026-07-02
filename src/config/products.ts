export interface Product {
  id: string;
  name: string;
  category: "rings" | "earrings" | "pendants" | "bangles" | "necklaces";
  material: "gold" | "diamond" | "silver";
  purity: string;
  weight: string;
  price: number;
  priceDisplay: string;
  gender: "women" | "men" | "kids" | "unisex";
  image: string;
  badge?: "Bestseller" | "New Arrival" | "Trending" | "Popular";
  description: string;
}

export const products: Product[] = [
  // NECKLACES
  {
    id: "nec-01",
    name: "Luxury Showroom Display Set",
    category: "necklaces",
    material: "gold",
    purity: "22K Hallmarked & Silver",
    weight: "85.2g",
    price: 420000,
    priceDisplay: "₹4,20,000 approx.",
    gender: "unisex",
    image: "/products/product-necklace-01.jpg",
    badge: "Popular",
    description: "An elite collection showing heavy gold chokers and fine silver carvings on customized display stands."
  },
  {
    id: "nec-02",
    name: "Emerald Luxury Gold Choker",
    category: "necklaces",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "38.6g",
    price: 285000,
    priceDisplay: "₹2,85,000",
    gender: "women",
    image: "/products/product-necklace-02.jpg",
    badge: "Trending",
    description: "A statement gold choker detailed with rich oval emeralds and dangling micro gold beads, showcasing Indian atelier artistry."
  },
  {
    id: "nec-03",
    name: "Heritage Kundan Bridal Haar",
    category: "necklaces",
    material: "gold",
    purity: "22K Gold with Kundan",
    weight: "74.8g",
    price: 540000,
    priceDisplay: "₹5,40,000 approx.",
    gender: "women",
    image: "/products/product-necklace-03.jpg",
    badge: "Bestseller",
    description: "A traditional bridal haar adorned with certified Kundan stones, colored gemstone fillings, and royal hanging pearls."
  },
  {
    id: "nec-04",
    name: "Pearl & Gold Heritage Haar",
    category: "necklaces",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "52.4g",
    price: 365000,
    priceDisplay: "₹3,65,000",
    gender: "women",
    image: "/products/product-necklace-04.jpg",
    description: "A beautiful layered gold necklace woven with natural south sea pearls, bringing a touch of vintage royalty to wedding wear."
  },
  {
    id: "nec-05",
    name: "Turkish Textured Gold Chain",
    category: "necklaces",
    material: "gold",
    purity: "21K Hallmarked",
    weight: "18.5g",
    price: 125000,
    priceDisplay: "₹1,25,000",
    gender: "unisex",
    image: "/products/product-necklace-05.jpg",
    description: "Sleek Turkish mesh chain detailing that flows like silk on the collar, crafted in certified high-purity yellow gold."
  },
  {
    id: "nec-06",
    name: "Diamond Solitaire Necklace Set",
    category: "necklaces",
    material: "diamond",
    purity: "18K Gold Setting / VS GH",
    weight: "62.0g",
    price: 480000,
    priceDisplay: "₹4,80,000 approx.",
    gender: "women",
    image: "/products/product-necklace-06.jpg",
    badge: "New Arrival",
    description: "An magnificent diamond set decorated with brilliant-cut diamonds and teardrop outline cuts, matching high-fashion bridal needs."
  },

  // EARRINGS
  {
    id: "ear-01",
    name: "Gemstone Luxury Drop Earrings",
    category: "earrings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "12.4g",
    price: 85000,
    priceDisplay: "₹85,000",
    gender: "women",
    image: "/products/product-earring-01.jpg",
    description: "Elegant gold drops accented with faceted red gemstones and pearl caps, designed to add elegance to festive wear."
  },
  {
    id: "ear-02",
    name: "Royal Pearl Chandelier Earrings",
    category: "earrings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "22.8g",
    price: 150000,
    priceDisplay: "₹1,50,000",
    gender: "women",
    image: "/products/product-earring-02.jpg",
    badge: "Popular",
    description: "Grand Spanish-inspired chandelier earrings featuring intricate gold mesh layers and dropping teardrop pearls."
  },
  {
    id: "ear-03",
    name: "Minimalist Diamond Studs",
    category: "earrings",
    material: "diamond",
    purity: "18K Gold Setting / VVS EF",
    weight: "4.2g",
    price: 95000,
    priceDisplay: "₹95,000",
    gender: "women",
    image: "/products/product-earring-03.jpg",
    badge: "Bestseller",
    description: "Timeless floral studs set with certified brilliant-cut diamonds, styled for everyday luxury and brilliance."
  },
  {
    id: "ear-04",
    name: "Emerald & Diamond Silver Drops",
    category: "earrings",
    material: "diamond",
    purity: "18K White Gold Setting",
    weight: "14.5g",
    price: 210000,
    priceDisplay: "₹2,10,000",
    gender: "women",
    image: "/products/product-earring-04.jpg",
    badge: "New Arrival",
    description: "Breathtaking chandelier drops featuring green emerald solitaires surrounded by multiple diamonds in a platinum-plated setting."
  },

  // RINGS
  {
    id: "rng-01",
    name: "Floral Diamond Cluster Ring",
    category: "rings",
    material: "diamond",
    purity: "18K Gold Setting / 0.72ct",
    weight: "3.8g",
    price: 75000,
    priceDisplay: "₹75,000",
    gender: "women",
    image: "/products/product-ring-01.jpg",
    badge: "Bestseller",
    description: "An exquisite cluster of certified diamonds shaped into a delicate floral petal layout in 18K rose gold."
  },
  {
    id: "rng-02",
    name: "Blue Sapphire Solitaire Ring",
    category: "rings",
    material: "diamond",
    purity: "18K White Gold / 1.25ct",
    weight: "4.5g",
    price: 135000,
    priceDisplay: "₹1,35,000",
    gender: "women",
    image: "/products/product-ring-02.jpg",
    badge: "Trending",
    description: "A striking royal blue sapphire solitaire claw-set on a diamond-encrusted band, bringing royal distinction."
  },
  {
    id: "rng-03",
    name: "Antique Indian Gold Ring",
    category: "rings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "6.8g",
    price: 45000,
    priceDisplay: "₹45,000",
    gender: "women",
    image: "/products/product-ring-03.jpg",
    description: "Hand-engraved antique gold band featuring classical floral motifs and flat-cut diamonds (Polki)."
  },
  {
    id: "rng-04",
    name: "Classic Gold Wedding Bands",
    category: "rings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "9.2g",
    price: 65000,
    priceDisplay: "₹65,000 (Pair)",
    gender: "unisex",
    image: "/products/product-ring-04.jpg",
    description: "A pair of matching comfort-fit wedding rings, polished in pure gold with fine satin-finish grooves."
  },

  // PENDANTS
  {
    id: "pen-01",
    name: "Atelier Diamond Loop Pendant",
    category: "pendants",
    material: "diamond",
    purity: "18K Gold Setting",
    weight: "3.5g",
    price: 58000,
    priceDisplay: "₹58,000",
    gender: "women",
    image: "/products/product-pendant-01.jpg",
    badge: "Popular",
    description: "A modern overlapping gold loop pendant highlighted with micro-pave certified diamonds."
  },
  {
    id: "pen-02",
    name: "Heart Solitaire Pendant",
    category: "pendants",
    material: "diamond",
    purity: "18K White Gold / 0.35ct",
    weight: "2.4g",
    price: 32000,
    priceDisplay: "₹32,000",
    gender: "women",
    image: "/products/product-pendant-02.jpg",
    description: "A delicate, romantic heart outline pendant set with a brilliant round solitaire diamond at the center."
  },

  // BANGLES
  {
    id: "bng-01",
    name: "Exquisite Gold Gemstone Bangles",
    category: "bangles",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "32.4g",
    price: 240000,
    priceDisplay: "₹2,40,000 approx.",
    gender: "women",
    image: "/products/product-bangle-01.jpg",
    badge: "Trending",
    description: "A pair of rigid bangles detailed with floral carvings, lined with colored gemstones and ruby beads."
  },
  {
    id: "bng-02",
    name: "Heritage Gold Kada Set",
    category: "bangles",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "44.2g",
    price: 310000,
    priceDisplay: "₹3,10,000 (Pair) approx.",
    gender: "women",
    image: "/products/product-bangle-02.jpg",
    badge: "Bestseller",
    description: "Broad traditional kadas decorated with wire-work filigree and high-polish gold beads, secured with a screw clasp."
  },
  {
    id: "bng-03",
    name: "Bridal Gold Bangles Set",
    category: "bangles",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "39.5g",
    price: 290000,
    priceDisplay: "₹2,90,000 approx.",
    gender: "women",
    image: "/products/product-bangle-03.jpg",
    description: "A premium set of gold bangles, perfect for bridal wear and grand events, detailed with classic flower patterns."
  },
  {
    id: "bng-04",
    name: "Gold & Gemstone Kada Pair",
    category: "bangles",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "26.8g",
    price: 180000,
    priceDisplay: "₹1,80,000",
    gender: "women",
    image: "/products/product-bangle-04.jpg",
    badge: "New Arrival",
    description: "Elegant, lightweight bangles styled with textured gold leaves and lined with red enamel paint drops."
  }
];
