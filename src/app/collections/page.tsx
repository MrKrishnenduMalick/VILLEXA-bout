import React from "react";
import { Sparkles } from "lucide-react";
import { Collections3DCarousel } from "@/components/Collections3DCarousel";
import { GlassRibbon } from "@/components/GlassRibbon";

export default function CollectionsPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden py-6 sm:py-8">
      {/* Decorative Luxury Floral Sprig (matching reference) */}
      <div className="absolute top-2 left-2 sm:top-6 sm:left-6 w-36 sm:w-56 h-36 sm:h-56 pointer-events-none opacity-40 select-none z-0">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Branch */}
          <path d="M-10,40 Q50,70 110,60 T180,120" stroke="#7a2a4f" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50,70 Q70,40 100,30" stroke="#7a2a4f" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M110,60 Q130,90 150,85" stroke="#7a2a4f" strokeWidth="1.5" strokeLinecap="round" />
          {/* Cherry Blossom Flowers */}
          <circle cx="50" cy="70" r="10" fill="#fbb9aa" opacity="0.85" />
          <circle cx="50" cy="70" r="4" fill="#ddb765" />
          <circle cx="100" cy="30" r="12" fill="#ffd5cc" opacity="0.9" />
          <circle cx="100" cy="30" r="4.5" fill="#e2b459" />
          <circle cx="110" cy="60" r="9" fill="#fbb9aa" opacity="0.8" />
          <circle cx="110" cy="60" r="3.5" fill="#ddb765" />
          <circle cx="150" cy="85" r="11" fill="#fedcd5" opacity="0.9" />
          <circle cx="150" cy="85" r="4" fill="#e2b459" />
          <circle cx="175" cy="118" r="8" fill="#fbb9aa" opacity="0.8" />
          <circle cx="175" cy="118" r="3" fill="#ddb765" />
        </svg>
      </div>

      {/* Header Section */}
      <section className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ddb765]/40 bg-[#31112d]/50 backdrop-blur-md shadow-gold-glow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#ddb765]" />
          <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#f7e4c2] font-medium">
            Our Collections
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
          Explore Our <span className="italic text-[#eed199] gold-text-gradient">Collections</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-[#ebd4c1]/80 max-w-2xl mx-auto font-light leading-relaxed">
          A handpicked range of designer wear for every occasion, from timeless ethnic elegance to modern contemporary styles.
        </p>
      </section>

      {/* Main 3D Fashion Runway Carousel */}
      <section className="relative z-20 my-4 sm:my-6 w-full">
        <Collections3DCarousel />
      </section>

      {/* Bottom Glassmorphism Feature Ribbon */}
      <section className="relative z-10 pb-4">
        <GlassRibbon variant="collections" />
      </section>
    </div>
  );
}

