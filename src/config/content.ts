// ============================================================
// CONTENT - All editable content in one place
// CMS-friendly structure. Easy migration to Sanity/Contentful.
// ============================================================

export const collections = [
  {
    id: "gold",
    name: "Gold Collection",
    subtitle: "18K to 22K Hallmarked",
    description: "Handcrafted pieces in 18 to 22 carat gold. From everyday elegance to statement designs, each piece carries the weight of true craftsmanship.",
    longDescription: "Our gold collection spans Turkish, Italian, and traditional Indian designs. Every piece is BIS Hallmarked for certified purity. Whether you seek a delicate chain for daily wear or an elaborate bridal necklace, our master craftsmen shape each gram with nearly four decades of expertise.",
    image: "/photos/post-02.jpg",
    secondImage: "/photos/post-06.jpg",
    features: ["18K to 22K Gold", "BIS Hallmarked", "Turkish & Italian Designs"],
    enquiryMessage: "I am interested in your Gold Collection. Can you show me the latest designs?",
  },
  {
    id: "diamond",
    name: "Diamond Jewellery",
    subtitle: "Certified Brilliance",
    description: "Diamonds that speak for themselves. Our certified collection features precision-cut stones set in gold and platinum, designed to be treasured for generations.",
    longDescription: "Each diamond in our collection is certified for cut, clarity, colour, and carat. Set in 18K or 22K gold or platinum, our diamond pieces range from solitaire rings to elaborate bridal sets. We work directly with cutters to ensure every stone meets our standard.",
    image: "/photos/post-03.jpg",
    secondImage: "/photos/post-07.jpg",
    features: ["Certified Diamonds", "Custom Settings", "Lifetime Exchange"],
    enquiryMessage: "I am interested in your Diamond Collection. Can you share details?",
  },
  {
    id: "silver",
    name: "Silver Collection",
    subtitle: "925 Sterling",
    description: "Pure silver pieces with contemporary and traditional designs. Light on the pocket, heavy on style.",
    longDescription: "Our silver collection features 925 sterling silver with rhodium plating for lasting shine. From statement earrings to delicate anklets, we blend modern minimalism with traditional Indian aesthetics.",
    image: "/photos/post-04.jpg",
    secondImage: "/photos/post-08.jpg",
    features: ["925 Sterling Silver", "Antique Finishes", "Daily Wear Designs"],
    enquiryMessage: "I am interested in your Silver Collection. Can you show me options?",
  },
  {
    id: "bridal",
    name: "Bridal Sets",
    subtitle: "Complete Trousseau",
    description: "Your wedding day deserves jewellery that matches the occasion. Full bridal sets designed with love, from necklaces to maang tikka, all under one roof.",
    longDescription: "A wedding is once in a lifetime. Our bridal collection includes complete sets with necklace, earrings, maang tikka, haath phool, bangles, and anklets. We offer custom designing so every bride walks out with something made just for her.",
    image: "/photos/post-01.jpg",
    secondImage: "/photos/post-09.jpg",
    features: ["Complete Bridal Sets", "Custom Designing", "Family Heirlooms"],
    enquiryMessage: "I am looking for a Bridal Set. Can we discuss designs and budget?",
  },
];

export const featuredProducts = [
  {
    name: "Infinity Gold Necklace",
    category: "Gold",
    purity: "22K Hallmarked",
    weight: "18.5g approx.",
    price: "Price on request",
    image: "/photos/post-10.jpg",
    badge: "Bestseller",
  },
  {
    name: "Diamond Solitaire Ring",
    category: "Diamond",
    purity: "18K Gold Setting",
    weight: "0.50 Carat",
    price: "Price on request",
    image: "/photos/post-11.jpg",
    badge: "New Arrival",
  },
  {
    name: "Italian Gold Bangle Set",
    category: "Gold",
    purity: "22K Hallmarked",
    weight: "32g approx.",
    price: "Price on request",
    image: "/photos/post-12.jpg",
    badge: "Popular",
  },
  {
    name: "Bridal Kundan Set",
    category: "Bridal",
    purity: "22K Gold with Kundan",
    weight: "85g approx.",
    price: "Price on request",
    image: "/photos/post-13.jpg",
    badge: "Bridal Favourite",
  },
  {
    name: "Turkish Chain Necklace",
    category: "Gold",
    purity: "21K Hallmarked",
    weight: "24g approx.",
    price: "Price on request",
    image: "/photos/post-14.jpg",
    badge: "Trending",
  },
];

export const highlights = [
  { number: "1988", label: "Established", description: "Nearly four decades of trust" },
  { number: "2,700+", label: "Happy Families", description: "And growing every single day" },
  { number: "10,000+", label: "Unique Designs", description: "Okhla's largest variety" },
  { number: "100%", label: "BIS Hallmarked", description: "Certified purity, always" },
];

export const timeline = [
  {
    year: "1988",
    title: "The Beginning",
    description: "A small family shop opens in the heart of Batla House, built on a promise of honest gold and fair prices.",
  },
  {
    year: "1998",
    title: "A Decade of Trust",
    description: "Word of mouth grows the business. Families from across Okhla, Jamia Nagar, and beyond become loyal customers.",
  },
  {
    year: "2008",
    title: "Expanding the Collection",
    description: "Turkish and Italian gold designs are introduced. The shop becomes known for styles not found anywhere else in the area.",
  },
  {
    year: "2018",
    title: "Three Decades Strong",
    description: "Diamond and silver collections are added. The second generation takes an active role in the family business.",
  },
  {
    year: "2025",
    title: "The New Showroom",
    description: "Anas and Sons Jewellers opens Okhla's largest jewellery showroom. A grand inauguration marks a new chapter.",
  },
  {
    year: "Today",
    title: "The Legacy Continues",
    description: "Three generations. Thousands of families. One name they trust. The art of timeless luxury continues.",
  },
];

// ADD YOUR REAL CUSTOMER REVIEWS HERE
// Each entry needs: name, text (the quote), rating (1-5), occasion (e.g. "Wedding")
export const testimonials: { name: string; text: string; rating: number; occasion: string }[] = [
  // Example:
  // {
  //   name: "Ayesha K.",
  //   text: "We bought our entire wedding set from Anas Jewellers. Exceptional quality.",
  //   rating: 5,
  //   occasion: "Wedding",
  // },
];


export const faq = [
  {
    question: "What types of jewellery do you offer?",
    answer: "We carry a wide range of gold (18K to 22K), diamond, and silver jewellery. Our collection includes Turkish designs, Italian pieces, antique treasures, infinity designs, and complete bridal sets.",
  },
  {
    question: "Is your gold BIS Hallmarked?",
    answer: "Yes, all our gold jewellery is BIS Hallmarked, which means you get certified purity with every purchase. We believe in complete transparency.",
  },
  {
    question: "Do you offer custom jewellery designs?",
    answer: "Absolutely. Bring us your idea, a photo, or even a sketch, and our craftsmen will bring it to life. Custom orders typically take 7 to 14 working days.",
  },
  {
    question: "What is your exchange and buyback policy?",
    answer: "We offer lifetime exchange on gold jewellery purchased from our store. For buyback, we offer the best rates based on current gold prices. Bring your bill and original jewellery.",
  },
  {
    question: "Do you offer EMI or payment plans?",
    answer: "Please visit our showroom or call us to discuss payment options. We are happy to work with you on larger purchases.",
  },
  {
    question: "Where is your showroom located?",
    answer: "We are located at Shop No. 334E/1, Main Road, Batla House, Okhla, Jamia Nagar, New Delhi 110025. We are easy to find on Google Maps.",
  },
];

export const aiSuggestions = [
  { label: "Wedding jewellery", message: "I need suggestions for wedding jewellery within my budget." },
  { label: "Gift for wife", message: "I want to buy a gift for my wife. What do you recommend?" },
  { label: "Gold investment", message: "I want to buy gold as an investment. What are the best options?" },
  { label: "Festival collection", message: "Do you have any special collection for Eid or Diwali?" },
  { label: "Custom design", message: "I have a design in mind. Can you make it for me?" },
  { label: "Engagement ring", message: "I am looking for an engagement ring. Can you help?" },
];
