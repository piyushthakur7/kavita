export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  images: string[];
  sizes: string[];
  colors: string[];
  material: string;
  features: string[];
  isFeatured?: boolean;
}

export const categories = [
  "Banners",
  "Stands & Displays",
  "Table Covers & Displays",
  "Custom Flags",
  "Signs & Decals",
  "Asset Tags",
  "Marketing Materials",
  "Accessories"
];

export const products: Product[] = [
  // ─── BANNERS ───
  // ─── BANNERS: VINYL BANNERS ───
  {
    id: "banner-v-01",
    title: "Standard Vinyl Banner",
    description: "High-quality 13oz vinyl banner for versatile indoor and outdoor use. Durable, weather-resistant, and vibrant.",
    price: 1299,
    category: "Banners",
    subcategory: "Vinyl Banners",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["3x6 ft", "4x8 ft", "Custom"],
    colors: ["Full Color"],
    material: "13oz Vinyl",
    features: ["Weatherproof", "Grommets included"],
    isFeatured: true
  },
  {
    id: "banner-v-02",
    title: "Vinyl Safety Banners",
    description: "Essential safety messaging on durable vinyl. Perfect for construction sites, warehouses, and industrial zones.",
    price: 1499,
    category: "Banners",
    subcategory: "Vinyl Banners",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["2x4 ft", "3x6 ft"],
    colors: ["Safety Yellow/Red"],
    material: "Heavy-duty Vinyl",
    features: ["High Visibility", "Tear Resistant"]
  },
  {
    id: "banner-v-03",
    title: "Vinyl Advisory Banners",
    description: "Informative advisory banners for public spaces and businesses. Professional look with clear messaging.",
    price: 1399,
    category: "Banners",
    subcategory: "Vinyl Banners",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["3x5 ft", "4x8 ft"],
    colors: ["Full Color"],
    material: "Premium Vinyl",
    features: ["UV Protected", "Easy Install"]
  },

  // ─── BANNERS: CLOTH/FABRIC BANNERS ───
  {
    id: "banner-f-01",
    title: "Polyester Fabric Banners",
    description: "Elegant and lightweight polyester fabric banners. Ideal for indoor displays, trade shows, and upscale events.",
    price: 1899,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["3x6 ft", "4x8 ft"],
    colors: ["Full Color"],
    material: "Polyester Fabric",
    features: ["Wrinkle Resistant", "Washable"]
  },
  {
    id: "banner-f-02",
    title: "Step and Repeat Fabric Banners",
    description: "Professional backdrop for red carpet events and photo ops. Non-glare fabric ensures perfect photography.",
    price: 4500,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["8x8 ft", "8x10 ft"],
    colors: ["Custom Logo Pattern"],
    material: "Matte Fabric",
    features: ["Seamless", "Non-glare"],
    isFeatured: true
  },
  {
    id: "banner-f-03",
    title: "Processed Fabric Banners",
    description: "Specially treated fabric for enhanced durability and color depth. Premium feel for corporate environments.",
    price: 2199,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["3x5 ft", "4x6 ft"],
    colors: ["Vibrant Full Color"],
    material: "Treated Polyester",
    features: ["Deep Color Saturation", "Indoor/Outdoor"]
  },
  {
    id: "banner-f-04",
    title: "Fabric Mesh Banners",
    description: "Breathable fabric mesh for wind-prone areas. Combines the elegance of fabric with wind-permeable utility.",
    price: 1999,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["4x8 ft", "Custom"],
    colors: ["Full Color"],
    material: "Fabric Mesh",
    features: ["Wind Resistant", "Lightweight"]
  },
  {
    id: "banner-f-05",
    title: "Canvas Banners",
    description: "Classic canvas material for a sophisticated, artistic look. Perfect for galleries, boutique shops, and interior decor.",
    price: 2500,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["2x3 ft", "3x4 ft"],
    colors: ["Natural/Full Color"],
    material: "Cotton Canvas",
    features: ["Textured Finish", "Premium Look"]
  },
  {
    id: "banner-f-06",
    title: "Hanging Clamp Bar Banner",
    description: "Easy-to-install hanging banners with professional clamp bars. Ideal for retail window displays and ceiling mounts.",
    price: 2800,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["24x36 in", "36x48 in"],
    colors: ["Full Color"],
    material: "Polyester with Aluminum Bars",
    features: ["Includes Hardware", "Double Sided Option"]
  },
  {
    id: "banner-f-07",
    title: "Double Sided Fabric Banners",
    description: "Premium fabric banners with high-opacity liner to prevent show-through. Perfect for suspended displays and directional signage.",
    price: 3500,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["3x6 ft", "4x8 ft"],
    colors: ["Full Color Both Sides"],
    material: "High-Opacity Polyester",
    features: ["Double Sided Printing", "Blockout Liner"]
  },

  // ─── BANNERS: SAFETY BANNERS & SIGNS ───
  {
    id: "banner-s-01",
    title: "Safety Compliance Signs",
    description: "Standardized safety signs for regulatory compliance. Durable materials for long-term placement.",
    price: 899,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["12x18 in", "18x24 in"],
    colors: ["OSHA Standard Colors"],
    material: "Rigid Plastic / Vinyl",
    features: ["Regulatory Compliant", "Pre-drilled Holes"]
  },
  {
    id: "banner-s-02",
    title: "Safety Roll Up Banner Stands",
    description: "Portable safety messaging for temporary zones or training areas. Quick to deploy and easy to move.",
    price: 3200,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["33x80 in"],
    colors: ["High-Contrast Safety"],
    material: "Aluminum Stand + Vinyl",
    features: ["Retractable", "Includes Bag"]
  },
  {
    id: "banner-s-03",
    title: "Emergency Medical Tents 10x10",
    description: "Rapid-deployment medical and emergency shelter. Custom printed with cross symbols or organization logos.",
    price: 15500,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["10x10 ft"],
    colors: ["White/Red/Blue"],
    material: "Heavy-duty Water-resistant Fabric",
    features: ["Pop-up Frame", "Flame Retardant"]
  },
  {
    id: "banner-s-04",
    title: "Safety Supplies - Face Shield",
    description: "Anti-fog protective face shields for industrial and medical safety compliance. Lightweight and comfortable for long-term wear.",
    price: 150,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["One Size"],
    colors: ["Clear"],
    material: "PET / PC",
    features: ["Anti-fog", "Adjustable Band"]
  },
  {
    id: "banner-s-05",
    title: "Touch-Free Dispenser Sign",
    description: "Wall-mounted sign with integrated touch-free sanitizer dispenser support. Promotes hygiene and safety in high-traffic areas.",
    price: 2500,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["12x36 in"],
    colors: ["Custom Branding"],
    material: "Metal / PVC",
    features: ["Touch-free Design", "Custom Graphics"]
  },
  {
    id: "banner-s-06",
    title: "Promotional Face Masks",
    description: "Custom printed reusable face masks for brand visibility and safety. Breathable fabric with high-quality logo printing.",
    price: 120,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Custom Print"],
    material: "3-Layer Cotton/Polyester",
    features: ["Washable", "Adjustable Loops"]
  },

  // ─── BANNERS: POLITICAL BANNERS & SIGNS ───
  {
    id: "banner-p-01",
    title: "Political Campaign Banners",
    description: "Large format banners for political rallies and campaign headquarters. High impact and weather resistant.",
    price: 1699,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["4x8 ft", "5x10 ft"],
    colors: ["Full Color"],
    material: "13oz Vinyl",
    features: ["Bulk Discounts", "Vibrant Print"]
  },
  {
    id: "banner-p-02",
    title: "Political Yard Signs",
    description: "Classic corrugated plastic yard signs with wire H-stakes. The standard for election visibility.",
    price: 450,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["18x24 in"],
    colors: ["Full Color"],
    material: "Corrugated Plastic",
    features: ["Includes H-Stake", "Weatherproof"]
  },
  {
    id: "banner-p-03",
    title: "Political Campaign Flyers",
    description: "High-quality glossy flyers for door-to-door campaigning. Vibrant colors and sharp text to deliver your message effectively.",
    price: 5,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["A5", "A4"],
    colors: ["Full Color"],
    material: "130gsm Gloss Paper",
    features: ["Double Sided", "Bulk Discounts"]
  },
  {
    id: "banner-p-04",
    title: "Hand Held Political Flags",
    description: "Small handheld flags for rallies and parades. Lightweight and easy to wave, perfect for showing candidate support.",
    price: 85,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["12x18 in"],
    colors: ["Custom Candidate Graphics"],
    material: "Polyester with Plastic Stick",
    features: ["Lightweight", "Weather Resistant"]
  },

  // ─── BANNERS: FENCE BANNERS ───
  {
    id: "banner-fn-01",
    title: "Vinyl Fence Banners",
    description: "Custom banners designed specifically for fence mounting. Perfect for site perimeters and events.",
    price: 1450,
    category: "Banners",
    subcategory: "Fence Banners",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["3x6 ft", "4x10 ft"],
    colors: ["Full Color"],
    material: "Premium Vinyl",
    features: ["Reinforced Edges", "Grommets Every 2ft"]
  },
  {
    id: "banner-fn-02",
    title: "Fabric Mesh Fence Banners",
    description: "High-end fabric mesh for fence wraps. Breathable, elegant, and durable against wind.",
    price: 1850,
    category: "Banners",
    subcategory: "Fence Banners",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["4x8 ft", "6x12 ft"],
    colors: ["Full Color"],
    material: "Polyester Mesh",
    features: ["Wind Permeable", "Matte Finish"]
  },

  // ─── STANDS & DISPLAYS: BANNER STANDS ───
  {
    id: "stand-bs-01",
    title: "Deluxe Roll-Up Banner Stand",
    description: "Premium wide-base retractable stand for high-end displays. Sturdy, elegant, and sets up in seconds.",
    price: 3500,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["33x80 in", "47x80 in"],
    colors: ["Silver", "Black"],
    material: "Aluminum Base + Premium Vinyl",
    features: ["Retractable", "Padded Carry Bag"],
    isFeatured: true
  },
  {
    id: "stand-bs-04",
    title: "Deluxe Wide Base Single Screen Roll Up",
    description: "Extra stable wide-base retractable stand for single-sided graphics. Premium heavy-duty construction.",
    price: 4800,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["33x80 in", "48x80 in"],
    colors: ["Silver"],
    material: "Heavy-duty Aluminum",
    features: ["Extra Stability", "Premium Finish"]
  },
  {
    id: "stand-bs-05",
    title: "Adjustable X Banner Stand",
    description: "Versatile X-frame stand with adjustable height and width to fit multiple banner sizes.",
    price: 1500,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["Adjustable"],
    colors: ["Black"],
    material: "Fiberglass / Plastic",
    features: ["Fits Multiple Sizes", "Lightweight"]
  },
  {
    id: "stand-bs-06",
    title: "L Banner Stand",
    description: "Sleek L-shaped frame for a minimalist, modern display. High tension holds the banner perfectly flat.",
    price: 2200,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["31x79 in"],
    colors: ["Silver"],
    material: "Aluminum L-Frame",
    features: ["Minimalist Design", "Stable Support"]
  },
  {
    id: "stand-bs-02",
    title: "Korean X Banner Stand",
    description: "Lightweight and cost-effective X-frame stand. Easy to swap graphics and perfect for high-volume deployments.",
    price: 1200,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["24x63 in", "32x71 in"],
    colors: ["Black"],
    material: "Fiberglass / Carbon Fiber Poles",
    features: ["Quick Graphics Swap", "Portable"]
  },
  {
    id: "stand-bs-03",
    title: "EZ Extend Fabric Display",
    description: "Sleek pillowcase-style fabric display. Graphics slide over the frame for a seamless, professional look.",
    price: 5500,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["2ft", "3ft", "4ft", "5ft Wide"],
    colors: ["Full Color"],
    material: "Aluminum Tube Frame + Tension Fabric",
    features: ["Seamless Graphics", "Tool-free Assembly"]
  },

  // ─── STANDS & DISPLAYS: CANOPY TENTS ───
  {
    id: "stand-ct-01",
    title: "Custom Event Canopy 10x10",
    description: "Fully customizable pop-up tent for outdoor branding. High-quality roof print with optional side walls.",
    price: 12000,
    category: "Stands & Displays",
    subcategory: "Canopy Tents",
    images: ["/images/products/event_canopy.png"],
    sizes: ["10x10 ft"],
    colors: ["Full Color Print"],
    material: "600D Polyester + Hexagonal Aluminum Frame",
    features: ["Waterproof", "UV Protected", "Includes Bag"],
    isFeatured: true
  },
  {
    id: "stand-ct-02",
    title: "Blank Commercial Canopy",
    description: "High-quality solid color canopy tent. Durable and professional for trade shows and outdoor markets.",
    price: 8500,
    category: "Stands & Displays",
    subcategory: "Canopy Tents",
    images: ["/images/products/event_canopy.png"],
    sizes: ["10x10 ft"],
    colors: ["White", "Black", "Blue", "Red"],
    material: "Professional Grade Polyester",
    features: ["Commercial Frame", "Quick Setup"]
  },
  {
    id: "stand-ct-03",
    title: "Emergency Medical Tent 10x10",
    description: "Rapid deployment medical shelter with high-visibility branding. Water-resistant and durable for emergency use.",
    price: 14500,
    category: "Stands & Displays",
    subcategory: "Canopy Tents",
    images: ["/images/products/event_canopy.png"],
    sizes: ["10x10 ft"],
    colors: ["White/Red"],
    material: "Heavy-duty 500D Polyester",
    features: ["Medical Branding", "Flame Retardant"]
  },
  {
    id: "stand-ct-04",
    title: "Compact 6x6 Canopy",
    description: "Small footprint canopy for tight spaces, ticket booths, or individual vendor stations.",
    price: 6500,
    category: "Stands & Displays",
    subcategory: "Canopy Tents",
    images: ["/images/products/event_canopy.png"],
    sizes: ["6x6 ft"],
    colors: ["Various Solid Colors"],
    material: "Durable Polyester",
    features: ["Compact", "Easy Portability"]
  },

  // ─── STANDS & DISPLAYS: STEP & REPEAT ───
  {
    id: "stand-sr-01",
    title: "Wall Box Fabric Display",
    description: "Large format tension fabric wall for press conferences and events. Perfectly flat and vibrant surface.",
    price: 18500,
    category: "Stands & Displays",
    subcategory: "Step & Repeat Displays",
    images: ["/images/products/wall_box_display.png"],
    sizes: ["8x8 ft", "10x8 ft", "20x8 ft"],
    colors: ["Full Color"],
    material: "Aluminum Box Frame + Tension Fabric",
    features: ["Non-reflective", "Massive Presence"],
    isFeatured: true
  },

  // ─── STANDS & DISPLAYS: HANGING BANNERS ───
  {
    id: "stand-hb-01",
    title: "Sky Tube Circle Hanging Banner",
    description: "Circular hanging display for maximum visibility in trade show halls. Suspends from the ceiling to showcase your brand from all angles.",
    price: 15000,
    category: "Stands & Displays",
    subcategory: "Sky Tube Hanging Banners",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["8ft Diameter", "10ft Diameter"],
    colors: ["Full Color"],
    material: "Aluminum Tube + Fabric Pillowcase",
    features: ["360 Degree Branding", "Hanging Hardware Included"]
  },

  // ─── STANDS & DISPLAYS: INFLATABLES ───
  {
    id: "stand-inf-01",
    title: "Inflatable Tube Man",
    description: "Dynamic dancing inflatable to attract attention to your storefront. Includes high-powered blower.",
    price: 4500,
    category: "Stands & Displays",
    subcategory: "Inflatables",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["10ft", "20ft"],
    colors: ["Yellow", "Red", "Blue", "Custom"],
    material: "High-strength Rip-stop Nylon",
    features: ["Includes Blower", "Continuous Motion"]
  },
  {
    id: "stand-inf-02",
    title: "High-Powered Inflatable Blower",
    description: "Weather-resistant commercial blower for inflatable tube men and other inflatable displays.",
    price: 2800,
    category: "Stands & Displays",
    subcategory: "Inflatables",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["9 inch", "12 inch", "18 inch"],
    colors: ["Black"],
    material: "Industrial Plastic / Metal",
    features: ["Weather Resistant", "High Airflow"]
  },

  // ─── STANDS & DISPLAYS: POP-UP DISPLAYS ───
  {
    id: "stand-pup-01",
    title: "Fabric Pop Up Straight Display",
    description: "Large format straight pop-up display with seamless tension fabric. Professional backdrop for trade shows and exhibitions.",
    price: 18500,
    category: "Stands & Displays",
    subcategory: "Pop-Up Banner Display",
    images: ["/images/products/popup_display.png"],
    sizes: ["8ft", "10ft", "20ft"],
    colors: ["Full Color"],
    material: "Aluminum Scissor Frame + Tension Fabric",
    features: ["Seamless Graphics", "Tool-free Setup", "Carry Case Included"],
    isFeatured: true
  },
  {
    id: "stand-pup-02",
    title: "Fabric Pop Up Curved Display",
    description: "Elegant curved pop-up display for a wrap-around branding effect. High-impact visuals for large event spaces.",
    price: 19500,
    category: "Stands & Displays",
    subcategory: "Pop-Up Banner Display",
    images: ["/images/products/wall_box_display.png"],
    sizes: ["8ft", "10ft"],
    colors: ["Full Color"],
    material: "Aluminum Curved Frame + Tension Fabric",
    features: ["Deep Color Saturation", "Quick Assembly"]
  },
  {
    id: "stand-pup-03",
    title: "Fabric Pop Up Booth Square",
    description: "Self-contained square fabric booth for consultations or product displays. Modern and professional aesthetic.",
    price: 12500,
    category: "Stands & Displays",
    subcategory: "Pop-Up Banner Display",
    images: ["/images/products/wall_box_display.png"],
    sizes: ["Standard"],
    colors: ["Full Color"],
    material: "Aluminum Frame + Fabric Wrap",
    features: ["Portable Booth", "Internal Shelf"]
  },

  // ─── STANDS & DISPLAYS: FRAMES & SIDEWALK SIGNS ───
  {
    id: "stand-fs-01",
    title: "SEG Fabric Frame",
    description: "Silicone Edge Graphic (SEG) frames for a perfectly tensioned, frameless appearance. Ideal for retail environments.",
    price: 8500,
    category: "Stands & Displays",
    subcategory: "Frames & Sidewalk Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["2x3 ft", "3x4 ft", "Custom"],
    colors: ["Silver Frame", "Black Frame"],
    material: "Aluminum Profile + Tension Fabric",
    features: ["Frameless Look", "Easy Graphics Update"]
  },
  {
    id: "stand-fs-02",
    title: "Deluxe Sandwich Board",
    description: "Heavy-duty plastic A-frame sidewalk sign. Fillable with sand or water for maximum stability in windy conditions.",
    price: 4500,
    category: "Stands & Displays",
    subcategory: "Frames & Sidewalk Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["24x36 in"],
    colors: ["Black", "White"],
    material: "High-density Polyethylene",
    features: ["Wind Resistant", "Double Sided", "Interchangeable Signs"],
    isFeatured: true
  },
  {
    id: "stand-fs-03",
    title: "Metal A-Frame Sign",
    description: "Classic durable metal A-frame for sidewalk advertising. Sleek and professional with easy-to-change graphics.",
    price: 3800,
    category: "Stands & Displays",
    subcategory: "Frames & Sidewalk Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["24x36 in"],
    colors: ["Black"],
    material: "Powder-coated Steel",
    features: ["Heavy Duty", "Foldable", "Weatherproof"]
  },

  // ─── STANDS & DISPLAYS: TRADE SHOW PACKAGES ───
  {
    id: "stand-pkg-01",
    title: "Trade Show Canopy Kit",
    description: "All-in-one canopy package including custom printed roof, back wall, and two side walls. Complete branding solution.",
    price: 25500,
    category: "Stands & Displays",
    subcategory: "Trade Show Display Packages",
    images: ["/images/products/popup_display.png"],
    sizes: ["10x10 ft"],
    colors: ["Full Color"],
    material: "Commercial Grade Canopy Set",
    features: ["Full Walls Included", "Heavy Duty Frame", "Travel Bag"],
    isFeatured: true
  },
  {
    id: "stand-pkg-02",
    title: "Economy Display Package",
    description: "Cost-effective starter kit for trade shows. Includes a roll-up banner stand, a table runner, and a promotional counter.",
    price: 12500,
    category: "Stands & Displays",
    subcategory: "Trade Show Display Packages",
    images: ["/images/products/popup_display.png"],
    sizes: ["Standard Bundle"],
    colors: ["Full Color"],
    material: "Mixed Media",
    features: ["Essential Branding", "Coordinated Design"]
  },

  // ─── STANDS & DISPLAYS: PROMOTIONAL COUNTERS ───
  {
    id: "stand-pc-01",
    title: "Economy Promotional Counter",
    description: "Portable demo counter for product sampling and trade shows. Lightweight and includes custom branding wrap.",
    price: 7500,
    category: "Stands & Displays",
    subcategory: "Promotional Counters",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["Standard"],
    colors: ["Full Color Wrap"],
    material: "PVC / Aluminum Frame",
    features: ["Internal Storage", "Carry Bag Included"]
  },

  // ─── STANDS & DISPLAYS: SNEEZE GUARDS ───
  {
    id: "stand-sg-01",
    title: "Floor Standing Sneeze Shield",
    description: "Clear acrylic partition on a stable floor stand. Provides protection for reception desks and checkout counters.",
    price: 4500,
    category: "Stands & Displays",
    subcategory: "Sneeze Guards & Partitions",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["36x72 in"],
    colors: ["Clear"],
    material: "Premium Acrylic + Aluminum Stand",
    features: ["Easy Clean", "Portable"]
  },

  // ─── STANDS & DISPLAYS: SHADES & UMBRELLAS ───
  {
    id: "stand-su-01",
    title: "Custom Printed Cafe Umbrella",
    description: "Branded outdoor umbrella for cafes, restaurants, and outdoor events. Durable frame with vibrant canopy printing.",
    price: 9500,
    category: "Stands & Displays",
    subcategory: "Shades & Umbrellas",
    images: ["/images/products/event_canopy.png"],
    sizes: ["7ft", "9ft"],
    colors: ["Full Color Print"],
    material: "Commercial Grade Canvas + Aluminum Pole",
    features: ["Wind-vented", "UV Protected"]
  },

  // ─── TABLE COVERS & DISPLAYS: PREMIUM TABLE COVERS ───
  {
    id: "table-pr-01",
    title: "Premium Full Color Table Throw",
    description: "High-end polyester table throw with vibrant dye-sublimation printing. Covers all 4 sides for a professional look.",
    price: 3200,
    category: "Table Covers & Displays",
    subcategory: "Premium Table Covers",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["6ft", "8ft"],
    colors: ["Full Color"],
    material: "Premium 300D Polyester",
    features: ["Dye-sublimation Print", "Wrinkle Resistant", "Flame Retardant"],
    isFeatured: true
  },
  {
    id: "table-pr-02",
    title: "Convertible Table Cover",
    description: "Smart design that adjusts to fit both 6ft and 8ft tables. Versatile solution for varying event spaces.",
    price: 3800,
    category: "Table Covers & Displays",
    subcategory: "Premium Table Covers",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["6ft to 8ft Adjustable"],
    colors: ["Full Color"],
    material: "Premium Polyester",
    features: ["Adjustable Hook & Loop", "All-in-one Solution"]
  },

  // ─── TABLE COVERS & DISPLAYS: STRETCH TABLE COVERS ───
  {
    id: "table-st-01",
    title: "Round Stretch Table Cover",
    description: "Form-fitting spandex cover for high-boy or standard round tables. Creates a modern, sleek silhouette.",
    price: 2500,
    category: "Table Covers & Displays",
    subcategory: "Stretch Table Covers",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["30in Round", "42in Round"],
    colors: ["Full Color"],
    material: "4-Way Stretch Spandex",
    features: ["Reinforced Foot Pockets", "Machine Washable"]
  },
  {
    id: "table-st-02",
    title: "Cross Over Table Cover",
    description: "Unique design that allows you to mix and match colors or expose the table base. Modern and artistic.",
    price: 2900,
    category: "Table Covers & Displays",
    subcategory: "Stretch Table Covers",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["6ft", "8ft"],
    colors: ["Full Color"],
    material: "Stretch Spandex",
    features: ["Easy Install", "Dynamic Look"]
  },

  // ─── TABLE COVERS & DISPLAYS: TABLE TOP DISPLAYS ───
  {
    id: "table-td-01",
    title: "Mini X Table Top Display",
    description: "Compact X-frame stand for desks and counters. Perfect for menus, registration desks, and checkouts.",
    price: 650,
    category: "Table Covers & Displays",
    subcategory: "Table Top Displays",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["11x17 in"],
    colors: ["Black"],
    material: "Lightweight Plastic / Carbon Fiber",
    features: ["Desktop Size", "Quick Graphics Change"]
  },
  {
    id: "table-td-02",
    title: "Countertop Sneeze Guard",
    description: "Professional clear acrylic partition for customer interactions. Ensures safety without blocking visibility.",
    price: 2500,
    category: "Table Covers & Displays",
    subcategory: "Table Top Displays",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["24x24 in", "30x30 in"],
    colors: ["Clear"],
    material: "5mm Premium Acrylic",
    features: ["Pass-through Opening", "Stable Base"]
  },

  // ─── TABLE COVERS & DISPLAYS: BLANK TABLE COVERS ───
  {
    id: "table-bl-01",
    title: "Single Color Table Throw",
    description: "Simple and professional solid-color table covers. High-quality fabric at a budget-friendly price point.",
    price: 1500,
    category: "Table Covers & Displays",
    subcategory: "Blank Table Covers",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["6ft", "8ft"],
    colors: ["White", "Black", "Blue", "Red"],
    material: "Durable Polyester",
    features: ["Cost Effective", "Durable"]
  },

  // ─── TABLE COVERS & DISPLAYS: FITTED TABLE COVERS ───
  {
    id: "table-ft-01",
    title: "Open Corner Fitted Table Cover",
    description: "Fitted cover with open corners for easy access to items stored under the table. Clean and functional.",
    price: 2800,
    category: "Table Covers & Displays",
    subcategory: "Fitted Table Covers",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["6ft", "8ft"],
    colors: ["Full Color"],
    material: "Premium Polyester",
    features: ["Easy Storage Access", "Tailored Look"]
  },
  {
    id: "table-ft-02",
    title: "Pleated Table Cover",
    description: "Classic pleated design for a traditional, elegant banquet look. High-quality draping for formal events.",
    price: 3500,
    category: "Table Covers & Displays",
    subcategory: "Fitted Table Covers",
    images: ["/images/products/rollup_banner.png"],
    sizes: ["6ft", "8ft"],
    colors: ["White", "Black", "Ivory"],
    material: "Premium Table Twill",
    features: ["Traditional Pleats", "Elegant Draping"]
  },

  // ─── TABLE COVERS & DISPLAYS: CHAIR COVERS ───
  {
    id: "table-ch-01",
    title: "Banquet Chair Cover",
    description: "Custom or standard stretch chair covers. Transform ordinary chairs into branded or elegant event seating.",
    price: 450,
    category: "Table Covers & Displays",
    subcategory: "Banquet Chair Covers",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["Standard Banquet"],
    colors: ["White", "Black", "Custom Print"],
    material: "Stretch Spandex",
    features: ["Snug Fit", "Easy Install"]
  },

  // ─── CUSTOM FLAGS ───
  {
    id: "flag-01",
    title: "Feather Flag with Ground Spike",
    description: "Eye-catching feather flag with single or double-sided printing. Includes ground spike, cross base, and water bag for versatile placement.",
    price: 2500,
    category: "Custom Flags",
    subcategory: "Advertising Flags",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["8ft (Small)", "11ft (Medium)", "15ft (Large)"],
    colors: ["Full Color Print"],
    material: "110gsm Knitted Polyester",
    features: ["360° Visibility", "Ground Spike + Cross Base", "Carry Bag", "Rotating Pole"],
    isFeatured: true
  },
  {
    id: "flag-02",
    title: "Teardrop Flag Banner",
    description: "Distinctive teardrop-shaped flag perfect for outdoor events and storefronts. Fiberglass flexible pole withstands wind.",
    price: 2800,
    category: "Custom Flags",
    subcategory: "Advertising Flags",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["7ft", "10ft", "14ft"],
    colors: ["Full Color Print"],
    material: "Knitted Polyester + Fiberglass Pole",
    features: ["Wind Resistant", "Double-Sided Available", "Multiple Base Options", "Quick Assembly"]
  },
  {
    id: "flag-03",
    title: "Custom Desk Flag Set",
    description: "Elegant desk flag with chrome-plated stand. Perfect for corporate offices, conference rooms, and reception desks.",
    price: 800,
    category: "Custom Flags",
    subcategory: "Desk Flags",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["4x6 in", "6x9 in"],
    colors: ["Full Color Print"],
    material: "Satin Fabric + Chrome Stand",
    features: ["Chrome Plated Stand", "Double-Sided Print", "Gift Box Packaging", "Premium Finish"]
  },

  // ─── SIGNS & DECALS ───
  {
    id: "sign-01",
    title: "Acrylic Office Sign Board",
    description: "Professional acrylic sign with UV-printed graphics and stainless steel standoffs. Perfect for office lobbies and reception areas.",
    price: 3500,
    category: "Signs & Decals",
    subcategory: "Office Signs",
    images: ["/images/products/popup_display.png"],
    sizes: ["12x18 in", "18x24 in", "24x36 in"],
    colors: ["Clear", "Frosted", "Black"],
    material: "5mm Premium Acrylic",
    features: ["UV Direct Print", "Stainless Steel Standoffs", "Indoor/Outdoor", "Scratch Resistant"],
    isFeatured: true
  },
  {
    id: "sign-02",
    title: "Custom Floor Decals",
    description: "Anti-slip floor graphics with vibrant full-color printing. Perfect for retail stores, events, and directional signage.",
    price: 999,
    category: "Signs & Decals",
    subcategory: "Floor Decals",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["12 in Round", "18 in Round", "24x36 in Rectangle"],
    colors: ["Full Color Print"],
    material: "Anti-Slip Vinyl with Lamination",
    features: ["Anti-Slip Surface", "Easy Apply & Remove", "Scuff Resistant", "Indoor Safe"]
  },
  {
    id: "sign-03",
    title: "Vehicle Wrap & Car Decals",
    description: "Full or partial vehicle wraps with premium cast vinyl. Transform your fleet into mobile billboards with stunning graphics.",
    price: 15000,
    category: "Signs & Decals",
    subcategory: "Vehicle Wraps",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["Partial Wrap", "Half Wrap", "Full Wrap"],
    colors: ["Full Color Print"],
    material: "3M Premium Cast Vinyl",
    features: ["3M Warranty", "Paint Safe Removal", "UV Protected", "Professional Install Available"]
  },

  // ─── ASSET TAGS ───
  {
    id: "asset-01",
    title: "Metal Asset Tags - Aluminium",
    description: "Durable anodized aluminium asset tags with laser-engraved serial numbers and barcodes. Built for industrial tracking.",
    price: 45,
    category: "Asset Tags",
    subcategory: "Metal Asset Tags",
    images: ["/images/products/popup_display.png"],
    sizes: ["1x3 in", "1.5x3 in", "2x4 in"],
    colors: ["Silver", "Black", "Blue"],
    material: "Anodized Aluminium",
    features: ["Laser Engraved", "Scratch Proof", "Chemical Resistant", "Adhesive Backing"],
    isFeatured: true
  },
  {
    id: "asset-02",
    title: "QR Code Asset Tags",
    description: "Smart QR code asset tags for digital inventory management. Scan to access asset details, maintenance logs, and more.",
    price: 35,
    category: "Asset Tags",
    subcategory: "QR Asset Tags",
    images: ["/images/products/popup_display.png"],
    sizes: ["1x1 in", "1.5x1.5 in", "2x2 in"],
    colors: ["White", "Silver"],
    material: "Polyester with Lamination",
    features: ["Unique QR Codes", "Tamper Evident", "Weatherproof", "Bulk Discounts"]
  },
  {
    id: "asset-03",
    title: "Tamper-Proof Void Labels",
    description: "Security labels that reveal VOID pattern when removed. Essential for warranty seals, electronics, and high-value assets.",
    price: 25,
    category: "Asset Tags",
    subcategory: "Security Labels",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["0.75x1.5 in", "1x2 in", "1.5x3 in"],
    colors: ["Silver", "Red", "Blue"],
    material: "Tamper-Proof Polyester",
    features: ["VOID Pattern", "Serial Numbered", "Custom Print", "High Adhesion"]
  },

  // ─── MARKETING MATERIALS ───
  {
    id: "marketing-01",
    title: "Premium Business Cards",
    description: "Luxury business cards with spot UV, foil stamping, and premium 400gsm cardstock. Make unforgettable first impressions.",
    price: 999,
    category: "Marketing Materials",
    subcategory: "Business Cards",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["3.5x2 in Standard", "3.5x2 in Rounded", "Square 2.5x2.5 in"],
    colors: ["Full Color + Foil"],
    material: "400gsm Silk Laminated Card",
    features: ["Spot UV Available", "Gold/Silver Foil", "500 Cards Min Order", "Free Design Help"],
    isFeatured: true
  },
  {
    id: "marketing-02",
    title: "Tri-Fold Brochure Pack",
    description: "Professional tri-fold brochures with glossy or matte finish. Ideal for product catalogs, menus, and company profiles.",
    price: 2500,
    category: "Marketing Materials",
    subcategory: "Brochures & Flyers",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["A4 Tri-Fold", "A3 Bi-Fold", "DL Size"],
    colors: ["Full Color Both Sides"],
    material: "170gsm Art Paper",
    features: ["Gloss/Matte Lamination", "250 Pcs Min", "Custom Folds", "Pantone Matching"]
  },
  {
    id: "marketing-03",
    title: "Custom Sticker Sheets",
    description: "Die-cut custom stickers with premium vinyl material. Perfect for product labeling, packaging, and promotional giveaways.",
    price: 599,
    category: "Marketing Materials",
    subcategory: "Stickers & Labels",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["2x2 in", "3x3 in", "Custom Die-Cut"],
    colors: ["Full Color Print"],
    material: "Premium Vinyl with Lamination",
    features: ["Die-Cut Shapes", "Waterproof", "UV Protected", "Easy Peel"]
  },

  // ─── ACCESSORIES ───
  {
    id: "acc-01",
    title: "Banner Hanging Hardware Kit",
    description: "Complete hardware kit for banner installation. Includes bungee cords, S-hooks, zip ties, and ceiling hangers.",
    price: 499,
    category: "Accessories",
    subcategory: "Hardware Kits",
    images: ["/images/products/vinyl_banner.png"],
    sizes: ["Standard Kit", "Pro Kit"],
    colors: ["Silver"],
    material: "Stainless Steel & Nylon",
    features: ["Universal Fit", "Indoor/Outdoor", "Easy Install", "Reusable"]
  },
  {
    id: "acc-02",
    title: "Cross Base & Water Bag Set",
    description: "Heavy-duty cross base with water fillable bag for flag poles and banner stands. Provides stable support on any surface.",
    price: 899,
    category: "Accessories",
    subcategory: "Flag Accessories",
    images: ["/images/products/step_and_repeat.png"],
    sizes: ["Standard", "Heavy Duty"],
    colors: ["Black"],
    material: "Steel Cross Base + PVC Water Bag",
    features: ["15kg Water Capacity", "Foldable Design", "Universal Fit", "Anti-Slip Pads"]
  },
  {
    id: "acc-03",
    title: "LED Spotlight for Displays",
    description: "Adjustable LED spotlight clip for trade show displays and banner stands. Energy-efficient warm white illumination.",
    price: 1200,
    category: "Accessories",
    subcategory: "Display Lighting",
    images: ["/images/products/popup_display.png"],
    sizes: ["Single Head", "Double Head", "Triple Head"],
    colors: ["Silver", "Black"],
    material: "Aluminium + LED",
    features: ["Adjustable Angle", "Low Heat", "Clip Mount", "Energy Efficient"]
  }
];
