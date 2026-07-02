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
    name: "Classic Bridal Choker Set",
    category: "necklaces",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "48.5g",
    price: 345000,
    priceDisplay: "₹3,45,000 approx.",
    gender: "women",
    image: "/photos/post-01.jpg",
    badge: "Bestseller",
    description: "An elegant, traditional choker designed for weddings, featuring intricate floral patterns and hand-carved detailing."
  },
  {
    id: "nec-02",
    name: "Royal Kundan Haar",
    category: "necklaces",
    material: "gold",
    purity: "22K Gold with Kundan",
    weight: "72.4g",
    price: 520000,
    priceDisplay: "₹5,20,000 approx.",
    gender: "women",
    image: "/photos/post-04.jpg",
    badge: "Trending",
    description: "A majestic long necklace set adorned with certified Kundan stones and premium green pearl droplets."
  },
  {
    id: "nec-03",
    name: "Minimalist Italian Gold Chain",
    category: "necklaces",
    material: "gold",
    purity: "18K Hallmarked",
    weight: "12.8g",
    price: 85000,
    priceDisplay: "₹85,000",
    gender: "unisex",
    image: "/photos/post-09.jpg",
    description: "A sleek, laser-cut Italian gold chain suitable for daily wear, blending contemporary charm with classic purity."
  },
  {
    id: "nec-04",
    name: "Turkish Rope Collar Necklace",
    category: "necklaces",
    material: "gold",
    purity: "21K Hallmarked",
    weight: "32.0g",
    price: 235000,
    priceDisplay: "₹2,35,000",
    gender: "women",
    image: "/photos/post-14.jpg",
    badge: "New Arrival",
    description: "Imported Turkish mesh-design collar necklace, offering a modern, textured gold pattern that captures light beautifully."
  },
  {
    id: "nec-05",
    name: "Petite Sterling Silver Collar",
    category: "necklaces",
    material: "silver",
    purity: "92.5 Sterling",
    weight: "18.2g",
    price: 8500,
    priceDisplay: "₹8,500",
    gender: "women",
    image: "/photos/post-18.jpg",
    description: "Handcrafted 925 sterling silver collar featuring a rhodium finish for extra protection and long-lasting shine."
  },
  {
    id: "nec-06",
    name: "Modern Statement Gold Bib",
    category: "necklaces",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "56.0g",
    price: 395000,
    priceDisplay: "₹3,95,000 approx.",
    gender: "women",
    image: "/photos/post-19.jpg",
    badge: "Popular",
    description: "A gorgeous, modern overlapping gold leaves bib necklace, ideal for grand celebrations and formal events."
  },

  // EARRINGS
  {
    id: "ear-01",
    name: "Antique Gold Jhumkas",
    category: "earrings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "16.5g",
    price: 120000,
    priceDisplay: "₹1,20,000",
    gender: "women",
    image: "/photos/post-02.jpg",
    badge: "Bestseller",
    description: "Traditional temple-style gold jhumkas featuring delicate filigree work and dangling gold beads."
  },
  {
    id: "ear-02",
    name: "Italian Hoop Earrings",
    category: "earrings",
    material: "gold",
    purity: "18K Hallmarked",
    weight: "6.2g",
    price: 45000,
    priceDisplay: "₹45,000",
    gender: "women",
    image: "/photos/post-07.jpg",
    description: "Sleek, textured Italian hollow hoops in 18K yellow gold, perfect for transition from workwear to evenings."
  },
  {
    id: "ear-03",
    name: "Floral Diamond Studs",
    category: "earrings",
    material: "diamond",
    purity: "18K Gold setting / VVS EF",
    weight: "4.8g",
    price: 115000,
    priceDisplay: "₹1,15,000",
    gender: "women",
    image: "/photos/post-10.jpg",
    badge: "Popular",
    description: "Sparkling diamond studs in a delicate floral layout, certified diamonds set in 18K rose gold."
  },
  {
    id: "ear-04",
    name: "Chandelier Diamond Drops",
    category: "earrings",
    material: "diamond",
    purity: "18K White Gold / VS GH",
    weight: "12.4g",
    price: 245000,
    priceDisplay: "₹2,45,000",
    gender: "women",
    image: "/photos/post-15.jpg",
    badge: "Trending",
    description: "Exquisite white gold drops set with brilliant-cut diamonds, cascading down to add red-carpet elegance."
  },
  {
    id: "ear-05",
    name: "Sterling Silver Chandbalis",
    category: "earrings",
    material: "silver",
    purity: "92.5 Sterling",
    weight: "22.0g",
    price: 9500,
    priceDisplay: "₹9,500",
    gender: "women",
    image: "/photos/post-21.jpg",
    description: "Oxidized sterling silver chandbalis decorated with custom micro-carved patterns and high-grade kundan stones."
  },
  {
    id: "ear-06",
    name: "Classic Gold Sui Dhaga Drops",
    category: "earrings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "5.5g",
    price: 39000,
    priceDisplay: "₹39,000",
    gender: "women",
    image: "/photos/post-27.jpg",
    badge: "New Arrival",
    description: "Elegant and lightweight sui dhaga threader earrings, detailed with gold stars at the tips."
  },

  // RINGS
  {
    id: "rng-01",
    name: "Solitaire Diamond Engagement Ring",
    category: "rings",
    material: "diamond",
    purity: "18K Gold Setting / 0.50ct",
    weight: "3.6g",
    price: 95000,
    priceDisplay: "₹95,000",
    gender: "unisex",
    image: "/photos/post-03.jpg",
    badge: "Bestseller",
    description: "A timeless four-prong solitaire diamond ring, celebrating certified stone brilliance and pure love."
  },
  {
    id: "rng-02",
    name: "V-Shape Wishbone Gold Ring",
    category: "rings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "4.2g",
    price: 30000,
    priceDisplay: "₹30,000",
    gender: "women",
    image: "/photos/post-05.jpg",
    description: "A trendy Chevron wishbone gold ring, beautiful on its own or stacked with other rings."
  },
  {
    id: "rng-03",
    name: "Classic Diamond Eternity Band",
    category: "rings",
    material: "diamond",
    purity: "18K Gold Setting / 0.85ct",
    weight: "4.5g",
    price: 145000,
    priceDisplay: "₹1,45,000",
    gender: "women",
    image: "/photos/post-11.jpg",
    badge: "New Arrival",
    description: "A complete circle of hand-set, brilliant-cut diamonds, representing infinite commitment and style."
  },
  {
    id: "rng-04",
    name: "Traditional Men's Gold Ring",
    category: "rings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "9.5g",
    price: 68000,
    priceDisplay: "₹68,000",
    gender: "men",
    image: "/photos/post-20.jpg",
    description: "A solid, broad men's ring with a brushed satin finish center and polished edges for premium sophistication."
  },
  {
    id: "rng-05",
    name: "Sterling Silver Couple Bands",
    category: "rings",
    material: "silver",
    purity: "92.5 Sterling",
    weight: "7.0g",
    price: 4200,
    priceDisplay: "₹4,200 (Pair)",
    gender: "unisex",
    image: "/photos/post-25.jpg",
    description: "A pair of matching sterling silver rings for couples, rhodium plated with subtle engraving slots inside."
  },
  {
    id: "rng-06",
    name: "Men's Signet Gold Ring",
    category: "rings",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "11.2g",
    price: 79000,
    priceDisplay: "₹79,000",
    gender: "men",
    image: "/photos/post-29.jpg",
    badge: "Popular",
    description: "A classic oval-faced signet ring in pure 22K gold, designed to be passed down through generations."
  },

  // PENDANTS
  {
    id: "pen-01",
    name: "Ganesha Gold Pendant",
    category: "pendants",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "3.5g",
    price: 26000,
    priceDisplay: "₹26,000",
    gender: "unisex",
    image: "/photos/post-06.jpg",
    badge: "Popular",
    description: "A detailed Ganesha idol pendant, symbol of prosperity and a lovely daily companion."
  },
  {
    id: "pen-02",
    name: "Infinity Diamond Pendant",
    category: "pendants",
    material: "diamond",
    purity: "18K Rose Gold Setting",
    weight: "2.8g",
    price: 48000,
    priceDisplay: "₹48,000",
    gender: "women",
    image: "/photos/post-12.jpg",
    badge: "Bestseller",
    description: "An elegant infinity loop pendant lined with pave diamonds, celebrating eternal connection."
  },
  {
    id: "pen-03",
    name: "Peacock Enamel Gold Pendant",
    category: "pendants",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "5.8g",
    price: 43000,
    priceDisplay: "₹43,000",
    gender: "women",
    image: "/photos/post-16.jpg",
    description: "Traditional peacock motif pendant highlighted with rich blue and green Meenakari enamel art."
  },
  {
    id: "pen-04",
    name: "Geometric Diamond Hexagon",
    category: "pendants",
    material: "diamond",
    purity: "18K Gold Setting",
    weight: "3.2g",
    price: 54000,
    priceDisplay: "₹54,000",
    gender: "women",
    image: "/photos/post-22.jpg",
    badge: "New Arrival",
    description: "A chic, geometric hexagon pendant centered with a sparkling solitaire, styled for modern luxury."
  },
  {
    id: "pen-05",
    name: "Sterling Silver Butterfly Pendant",
    category: "pendants",
    material: "silver",
    purity: "92.5 Sterling",
    weight: "4.0g",
    price: 2900,
    priceDisplay: "₹2,900",
    gender: "kids",
    image: "/photos/post-26.jpg",
    description: "A playful butterfly pendant in sterling silver with blue resin wings, ideal for teenagers and kids."
  },
  {
    id: "pen-06",
    name: "Heart Solitaire Pendant",
    category: "pendants",
    material: "diamond",
    purity: "18K White Gold Setting",
    weight: "2.5g",
    price: 65000,
    priceDisplay: "₹65,000",
    gender: "women",
    image: "/photos/post-28.jpg",
    badge: "Trending",
    description: "A gorgeous heart-shaped setting carrying a certified solitaire diamond, radiating love."
  },

  // BANGLES
  {
    id: "bng-01",
    name: "Classic Gold Kada Set",
    category: "bangles",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "36.5g",
    price: 260000,
    priceDisplay: "₹2,60,000 (Pair) approx.",
    gender: "women",
    image: "/photos/post-08.jpg",
    badge: "Bestseller",
    description: "A pair of traditional broad kadas with intricate screw locks and floral filigree detailing."
  },
  {
    id: "bng-02",
    name: "Diamond Sleek Tennis Bracelet",
    category: "bangles",
    material: "diamond",
    purity: "18K White Gold / 2.5ct",
    weight: "14.2g",
    price: 295000,
    priceDisplay: "₹2,95,000",
    gender: "women",
    image: "/photos/post-13.jpg",
    badge: "Trending",
    description: "A linear strand of matching brilliant-cut diamonds, setting a continuous ring of brilliance around the wrist."
  },
  {
    id: "bng-03",
    name: "Italian Mesh Gold Bracelet",
    category: "bangles",
    material: "gold",
    purity: "18K Hallmarked",
    weight: "22.5g",
    price: 155000,
    priceDisplay: "₹1,55,000",
    gender: "unisex",
    image: "/photos/post-17.jpg",
    description: "A flexible, premium mesh design bracelet imported from Italy, finished in high-shine yellow gold."
  },
  {
    id: "bng-04",
    name: "Solid Gold Kada for Men",
    category: "bangles",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "28.0g",
    price: 198000,
    priceDisplay: "₹1,98,000",
    gender: "men",
    image: "/photos/post-23.jpg",
    badge: "Popular",
    description: "A heavy, cylindrical plain Punjabi Kada in 22K gold, styled with sleek contours."
  },
  {
    id: "bng-05",
    name: "Sterling Silver Wire Bangle Set",
    category: "bangles",
    material: "silver",
    purity: "92.5 Sterling",
    weight: "18.5g",
    price: 6800,
    priceDisplay: "₹6,800 (Set of 4)",
    gender: "women",
    image: "/photos/post-24.jpg",
    description: "A set of four thin, stackable sterling silver wire bangles, detailed with diamond-cut sparkle finishes."
  },
  {
    id: "bng-06",
    name: "Textured Honeycomb Gold Bangle",
    category: "bangles",
    material: "gold",
    purity: "22K Hallmarked",
    weight: "19.8g",
    price: 140000,
    priceDisplay: "₹1,40,000",
    gender: "women",
    image: "/photos/post-30.jpg",
    badge: "New Arrival",
    description: "An elegant, lightweight bangle featuring a textured honeycomb design that glistens beautifully."
  }
];
