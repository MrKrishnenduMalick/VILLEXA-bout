export interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  heroImage: string;
  palette: string[];
  fabrics: string[];
  craftsmanship: string;
  featuredPieces: {
    title: string;
    details: string;
    price: string;
  }[];
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "ethnic",
    name: "Ethnic Collection",
    tagline: "Regal Heritage & Timeless Indian Grace",
    category: "Heritage Couture",
    description: "Centuries-old artisanal handloom techniques reimagined with contemporary poise. Handcrafted with bespoke dabka, gota patti, and intricate thread work on pure Banarasi brocade and raw mulberry silk.",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=92",
    palette: ["#801336", "#ee4540", "#c72c41", "#f9e4c1"],
    fabrics: ["Pure Banarasi Silk", "Tussar Georgette", "Hand-spun Chanderi"],
    craftsmanship: "Hand-embroidery by master craftsmen in Varanasi and Lucknow, taking 180+ artisan hours per ensemble.",
    featuredPieces: [
      { title: "Noor Mahal Handloom Lehenga", details: "Zardozi needlework on crimson mulberry silk", price: "$2,450" },
      { title: "Aura Tissue Saree", details: "Pure spun gold zari with scalloped pearl border", price: "$1,680" },
      { title: "Zeenat Anarkali Set", details: "Floor-length raw silk with antique marodi work", price: "$1,890" },
    ],
  },
  {
    id: "festive",
    name: "Festive Collection",
    tagline: "Gilded Radiance for Joyous Celebrations",
    category: "Festive Occasion",
    description: "Vibrant hues infused with champagne gold highlights, celebratory silhouettes designed to twirl under celebratory lights with buoyant elegance and lightweight grandeur.",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=92",
    palette: ["#d4af37", "#ffb703", "#fb8500", "#fff1d0"],
    fabrics: ["Crushed Chiffon", "Organza Silk", "Mustard Matka Silk"],
    craftsmanship: "Gilded foil-printing overlaid with sequin motifs, mirror accents, and delicate scalloped borders.",
    featuredPieces: [
      { title: "Saffron Blossom Sharara", details: "Mustard organza with mirrorwork kurti", price: "$1,450" },
      { title: "Dahlia Gilded Kaftan", details: "Fluid silk satin with hand-beaded crystal yoke", price: "$1,120" },
      { title: "Chandrika Kurta Ensemble", details: "Ivory & gold thread embroidery on dupion silk", price: "$1,380" },
    ],
  },
  {
    id: "bridal",
    name: "Bridal Collection",
    tagline: "The Crown Jewel of Haute Couture",
    category: "Royal Bridal",
    description: "Our signature opus for the modern bride who commands regal grandeur. Resplendent crimson velvets, hand-stitched real silver zari, heirloom zardozi and thousands of Swarovski crystal drops create breathtaking majesty.",
    heroImage: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1200&q=92",
    palette: ["#58081f", "#9d0208", "#d00000", "#ffba08"],
    fabrics: ["Royal Velvet", "Pure Tissue Crepe", "French Chantilly Net"],
    craftsmanship: "Created exclusively through personalized consultations over 300 to 500 meticulous craftsmanship hours.",
    featuredPieces: [
      { title: "Shahzadi Crimson Bridal Lehenga", details: "36-kalidar velvet skirt with gold bullion embroidery", price: "$5,800" },
      { title: "Rani Bagh Bridal Veil & Choli", details: "Double dupatta styling with heirloom pearl edging", price: "$3,600" },
      { title: "Mehrunisa Royal Trail Gown", details: "Bespoke bridal silhouette with Swarovski accents", price: "$4,900" },
    ],
  },
  {
    id: "contemporary",
    name: "Contemporary Collection",
    tagline: "Architectural Lines & Modern Power Dressing",
    category: "Modern Silhouette",
    description: "Sharp tailoring meets feminine grace. Sculptural blazers, cape-cut jumpsuits, asymmetrical evening wear, and high-octane luxury fusion statements for the visionary cosmopolitan woman.",
    heroImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=92",
    palette: ["#f8f9fa", "#e9ecef", "#495057", "#cda142"],
    fabrics: ["Italian Wool Crepe", "Heavy Silk Duchess", "Bonded Satin"],
    craftsmanship: "Precision structured shoulders, hidden corsetry boning, and immaculate lapel lapels.",
    featuredPieces: [
      { title: "Onyx & Pearl Sculpted Tuxedo", details: "Silk-lapel double-breasted jacket with flared trousers", price: "$1,850" },
      { title: "Aura Asymmetric Cape Dress", details: "Draped champagne silk with architectural neckline", price: "$1,420" },
      { title: "Ivory Empress Pant Set", details: "Hand-embossed brocade bustier with wide-leg crepe trousers", price: "$1,650" },
    ],
  },
  {
    id: "party",
    name: "Party Wear",
    tagline: "After-Hours Glamour & Liquid Shimmer",
    category: "Evening Glamour",
    description: "Sensational cocktail silhouettes crafted for high-society soirees and red-carpet galas. Cascading midnight bugle beads, iridescent liquid sequins, and sensuous cowl drapery.",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=92",
    palette: ["#0f172a", "#1e1b4b", "#4338ca", "#cda142"],
    fabrics: ["Liquid Sequin Mesh", "Stretch Lurex Silk", "Grosgrain Satin"],
    craftsmanship: "Micro-hand-stitched ombre sequin panels designed to catch light dynamically from every angle.",
    featuredPieces: [
      { title: "Midnight Stardust Slip Gown", details: "Deep back cowl with liquid degrade bugle beads", price: "$2,200" },
      { title: "Nebula Cocktail Saree", details: "Pre-draped shimmering georgette with crystal bustier", price: "$1,750" },
      { title: "Velvet Eclipse Corset Gown", details: "Sculpted bodice with thigh-high slit and crystal train", price: "$2,100" },
    ],
  },
];

export const BRAND_INFO = {
  name: "Vellora Couture",
  tagline: "FASHION BOUTIQUE | PREMIUM APPAREL",
  headline: "Timeless Fashion for a Modern You",
  shortIntro: "A curated boutique of designer wear, ethnic collections and contemporary styles crafted for every occasion.",
  stats: [
    { value: "10+", label: "Years of Excellence", icon: "Crown" },
    { value: "25K+", label: "Happy Customers", icon: "Users" },
    { value: "20+", label: "Countries Served", icon: "Globe" },
  ],
  values: [
    { title: "Authentic Craftsmanship", desc: "Every thread tells a story of generational master artisans." },
    { title: "Premium Quality", desc: "Only the purest mulberry silks, raw velvets, and certified stones." },
    { title: "Customer First", desc: "One-on-one bespoke bridal styling and personalized fittings." },
    { title: "Sustainable Fashion", desc: "Zero-waste cutting patterns and ethical artisan livelihoods." },
  ],
  expertise: [
    { title: "Ethnic Wear", desc: "Heritage sarees, lehengas & anarkalis" },
    { title: "Contemporary Wear", desc: "Modern power suits & sculpted gowns" },
    { title: "Occasion Wear", desc: "Cocktail, festive & sangeet ensembles" },
    { title: "Custom Designs", desc: "Bespoke bridal styling from sketch to drape" },
  ],
  contact: {
    phones: ["+91 33 4567 8900", "+91 98765 43210"],
    emails: ["hello@velloracouture.com", "support@velloracouture.com"],
    address: "Plot No. 12, Newtown Business Park, Kolkata – 700156, India",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
  },
};

