"use client";

import React from "react";
import { 
  Sparkles, 
  Gem, 
  Scissors, 
  Leaf, 
  Globe, 
  Crown, 
  Layers, 
  Ruler, 
  Truck 
} from "lucide-react";

interface RibbonItem {
  icon: string;
  label: string;
}

interface GlassRibbonProps {
  variant?: "home" | "collections";
  items?: RibbonItem[];
}

function CoatHangerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3a2.5 2.5 0 0 1 2.5 2.5c0 1.2-.8 2-2 2.4L2.5 16.5A1.5 1.5 0 0 0 4 19h16a1.5 1.5 0 0 0 1.5-2.5L13.5 7.9" />
      <line x1="2" y1="19" x2="22" y2="19" />
    </svg>
  );
}

export function GlassRibbon({ variant = "home" }: GlassRibbonProps) {
  const homeItems: RibbonItem[] = [
    { icon: "Hanger", label: "Designer Collections" },
    { icon: "Gem", label: "Premium Fabrics" },
    { icon: "Scissors", label: "Tailored Fit" },
    { icon: "Leaf", label: "Ethically Made" },
    { icon: "Globe", label: "Worldwide Shipping" },
  ];

  const collectionsItems: RibbonItem[] = [
    { icon: "Crown", label: "Limited Edition Designs" },
    { icon: "Layers", label: "Premium Fabrics" },
    { icon: "Scissors", label: "Custom Tailoring" },
    { icon: "Ruler", label: "Made to Measure" },
    { icon: "Truck", label: "Global Delivery" },
  ];

  const items = variant === "home" ? homeItems : collectionsItems;

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#ddb765] group-hover:scale-110 transition-transform duration-300" };
    switch (iconName) {
      case "Hanger": return <CoatHangerIcon {...props} />;
      case "Sparkles": return <Sparkles {...props} />;
      case "Gem": return <Gem {...props} />;
      case "Scissors": return <Scissors {...props} />;
      case "Leaf": return <Leaf {...props} />;
      case "Globe": return <Globe {...props} />;
      case "Crown": return <Crown {...props} />;
      case "Layers": return <Layers {...props} />;
      case "Ruler": return <Ruler {...props} />;
      case "Truck": return <Truck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-8 mb-4">
      <div className="glass-panel rounded-2xl md:rounded-full py-4 px-6 md:px-8 shadow-glass-card border border-[#ddb765]/25">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-2 items-center justify-between divide-y sm:divide-y-0 md:divide-x divide-[#ddb765]/15">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-2 py-2 group transition-all duration-300 hover:-translate-y-0.5 ${
                index > 0 ? "pt-3 sm:pt-2 md:pt-0" : ""
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#3d1534]/50 border border-[#ddb765]/30 flex items-center justify-center mb-1.5 group-hover:border-[#ddb765] group-hover:shadow-gold-glow-sm transition-all duration-300">
                {renderIcon(item.icon)}
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#f2e4c1]/90 tracking-wide group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

