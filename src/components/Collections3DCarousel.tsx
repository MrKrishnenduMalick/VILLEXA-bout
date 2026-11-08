"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Eye, Info } from "lucide-react";
import { COLLECTIONS, CollectionItem } from "@/data/fashionData";
import { CollectionModal } from "./CollectionModal";

export function Collections3DCarousel() {
  // Default active index is 2 (Bridal Collection, matching the reference)
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = COLLECTIONS.length;

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useCallback((direction: "prev" | "next" | number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (typeof direction === "number") {
      setActiveIndex(direction);
    } else if (direction === "prev") {
      setActiveIndex((prev) => (prev - 1 + total) % total);
    } else {
      setActiveIndex((prev) => (prev + 1) % total);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  }, [isAnimating, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigate("prev");
      } else if (e.key === "ArrowRight") {
        navigate("next");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      navigate("next");
    } else if (distance < -minSwipeDistance) {
      navigate("prev");
    }
  };

  // Circular offset relative to activeIndex (-2, -1, 0, 1, 2)
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-4 sm:py-8 px-2 sm:px-4 select-none">
      {/* 3D Carousel Stage */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative h-[490px] sm:h-[570px] md:h-[650px] flex items-center justify-center perspective-stage overflow-visible"
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => navigate("prev")}
          className="absolute left-2 sm:left-4 md:left-8 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#f5d58f]/40 bg-[#21091e]/80 backdrop-blur-xl text-[#f9e4c1] hover:text-white hover:border-[#ddb765] hover:bg-[#381134] shadow-2xl flex items-center justify-center transition-all duration-300 group focus:outline-none"
          aria-label="Previous Collection"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={() => navigate("next")}
          className="absolute right-2 sm:right-4 md:right-8 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#f5d58f]/40 bg-[#21091e]/80 backdrop-blur-xl text-[#f9e4c1] hover:text-white hover:border-[#ddb765] hover:bg-[#381134] shadow-2xl flex items-center justify-center transition-all duration-300 group focus:outline-none"
          aria-label="Next Collection"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 5 Cards with real 3D depth, perspective, rotateY and translateZ */}
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {COLLECTIONS.map((item, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;

            // Responsive spacing based on viewport width
            const isMobile = viewportWidth < 640;
            const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

            const step1 = isMobile
              ? Math.max(105, Math.min(135, viewportWidth * 0.28))
              : isTablet
              ? 180
              : 235;

            const step2 = isMobile
              ? Math.max(190, Math.min(240, viewportWidth * 0.52))
              : isTablet
              ? 330
              : 430;

            let translateX = 0;
            let translateZ = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;

            if (offset === 0) {
              // Center card: forward, largest, upright, highlighted
              translateX = 0;
              translateZ = isMobile ? 85 : 140;
              rotateY = 0;
              scale = isMobile ? 1.05 : 1.12;
              zIndex = 30;
              opacity = 1;
            } else if (offset === -1) {
              // Immediate Left card
              translateX = -step1;
              translateZ = isMobile ? -20 : -35;
              rotateY = isMobile ? 24 : 30;
              scale = isMobile ? 0.9 : 0.92;
              zIndex = 20;
              opacity = 0.94;
            } else if (offset === 1) {
              // Immediate Right card
              translateX = step1;
              translateZ = isMobile ? -20 : -35;
              rotateY = isMobile ? -24 : -30;
              scale = isMobile ? 0.9 : 0.92;
              zIndex = 20;
              opacity = 0.94;
            } else if (offset === -2) {
              // Far Left card
              translateX = -step2;
              translateZ = isMobile ? -75 : -145;
              rotateY = isMobile ? 40 : 48;
              scale = isMobile ? 0.76 : 0.78;
              zIndex = 10;
              opacity = isMobile ? 0.65 : 0.8;
            } else if (offset === 2) {
              // Far Right card
              translateX = step2;
              translateZ = isMobile ? -75 : -145;
              rotateY = isMobile ? -40 : -48;
              scale = isMobile ? 0.76 : 0.78;
              zIndex = 10;
              opacity = isMobile ? 0.65 : 0.8;
            } else {
              translateX = offset > 0 ? 600 : -600;
              translateZ = -300;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isCenter) {
                    setSelectedCollection(item);
                  } else {
                    navigate(index);
                  }
                }}
                className="absolute top-1/2 left-1/2 cursor-pointer transition-all duration-500 ease-out will-change-transform"
                style={{
                  width: "clamp(220px, 24vw, 295px)",
                  height: "clamp(345px, 42vw, 485px)",
                  transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                {/* Outer Luxury Glass Chassis with Beveled Glow */}
                <div
                  className={`group relative w-full h-full rounded-[32px] sm:rounded-[36px] p-2 sm:p-2.5 transition-all duration-500 overflow-hidden ${
                    isCenter
                      ? "bg-gradient-to-b from-[#fae7c4]/30 via-[#501740]/40 to-[#1e071c]/70 backdrop-blur-2xl"
                      : "bg-gradient-to-b from-white/15 via-[#350f2b]/30 to-[#140513]/60 backdrop-blur-xl hover:from-white/25"
                  }`}
                  style={{
                    border: isCenter
                      ? "2px solid rgba(252, 228, 168, 0.9)"
                      : "1.2px solid rgba(226, 180, 89, 0.45)",
                    boxShadow: isCenter
                      ? "0 28px 75px -12px rgba(0, 0, 0, 0.95), 0 0 55px 4px rgba(226, 180, 89, 0.55), inset 0 2px 4px rgba(255, 245, 220, 0.6), inset 0 -2px 8px rgba(226, 180, 89, 0.3)"
                      : "0 18px 48px -10px rgba(0, 0, 0, 0.85), 0 0 25px rgba(226, 180, 89, 0.22), inset 0 1px 2px rgba(255, 240, 200, 0.3)",
                  }}
                >
                  {/* Inner Image Stage */}
                  <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] overflow-hidden">
                    <Image
                      src={item.heroImage}
                      alt={item.name}
                      fill
                      priority={isCenter}
                      unoptimized
                      className={`object-cover object-top transition-transform duration-700 ease-out ${
                        isCenter
                          ? "group-hover:scale-105"
                          : "filter brightness-[0.92] contrast-[1.03] group-hover:brightness-100"
                      }`}
                      sizes="(max-width: 768px) 280px, 360px"
                    />

                    {/* Subtle contrast gradient for typography legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140412]/90 via-transparent to-transparent pointer-events-none" />

                    {/* Specular Diagonal Glass Glare / Sheen Reflection */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-[26px] sm:rounded-[30px] overflow-hidden mix-blend-overlay opacity-45"
                      style={{
                        background:
                          "linear-gradient(130deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 20%, transparent 40%, rgba(255,230,170,0.15) 70%, transparent 100%)",
                      }}
                    />

                    {/* Inner Rim Specular Highlight */}
                    <div className="absolute inset-0 border border-white/20 rounded-[26px] sm:rounded-[30px] pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/25 via-white/5 to-transparent pointer-events-none" />

                    {/* Frosted Glass Information Plaque */}
                    <div className="absolute inset-x-2.5 bottom-2.5 sm:inset-x-3 sm:bottom-3 rounded-2xl glass-panel-gold p-3 sm:p-3.5 flex flex-col items-center text-center backdrop-blur-2xl border border-[#ddb765]/40 shadow-xl">
                      {isCenter && (
                        <div className="mb-1.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#48163c]/90 border border-[#ddb765]/50 shadow-sm">
                          <Sparkles className="w-3 h-3 text-[#fce4a6]" />
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#fae7c4] font-semibold">
                            Couture Showcase
                          </span>
                        </div>
                      )}

                      <h3
                        className={`font-serif tracking-wide ${
                          isCenter
                            ? "text-lg sm:text-xl md:text-2xl text-white font-medium drop-shadow-md"
                            : "text-sm sm:text-base text-[#faecd1] group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <p className="text-[10px] sm:text-[11px] text-[#e8cf96] tracking-wider mt-0.5 font-light">
                        {item.category}
                      </p>

                      {isCenter && (
                        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#fce4a6] font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                          <Info className="w-3 h-3 text-[#ddb765]" />
                          <span>Tap to explore lookbook</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Real Mirror Floor Reflection */}
                <div
                  className="absolute top-[102%] left-0 right-0 h-24 rounded-[32px] overflow-hidden pointer-events-none opacity-20 filter blur-[1px]"
                  style={{
                    transform: "scaleY(-1)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 75%)",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 75%)",
                  }}
                >
                  <Image
                    src={item.heroImage}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="200px"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Illuminated Circular Stage Platform beneath the cards */}
        <div
          className="absolute -bottom-10 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[88%] max-w-[900px] h-[140px] pointer-events-none z-0"
          style={{
            transform: "translateX(-50%) rotateX(68deg)",
          }}
        >
          {/* Main glowing radial spotlight */}
          <div className="absolute inset-0 stage-platform" />

          {/* Outer glowing gold ring */}
          <div className="absolute inset-0 stage-ring" />

          {/* Inner ring */}
          <div className="absolute inset-[14%] stage-ring opacity-75" />

          {/* Innermost ring */}
          <div className="absolute inset-[28%] stage-ring opacity-50" />

          {/* Core bright gold spot */}
          <div className="absolute inset-[25%] rounded-full bg-gradient-to-r from-transparent via-[#f5d58f]/50 to-transparent filter blur-md" />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-14 sm:mt-16 flex items-center justify-center gap-2.5 sm:gap-3">
        {COLLECTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => navigate(i)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              i === activeIndex
                ? "w-9 h-2.5 bg-gradient-to-r from-[#fae7c4] to-[#ddb765] shadow-gold-glow-sm"
                : "w-2.5 h-2.5 bg-[#4c1e44]/70 border border-[#ddb765]/35 hover:bg-[#ddb765]/40"
            }`}
            aria-label={`Go to collection ${i + 1}`}
          />
        ))}
      </div>

      {/* Active Collection Description Strip */}
      <div className="mt-6 text-center max-w-xl mx-auto px-4">
        <p className="text-xs sm:text-sm text-[#ecd3bc]/80 leading-relaxed font-light">
          {COLLECTIONS[activeIndex].description}
        </p>
        <button
          onClick={() => setSelectedCollection(COLLECTIONS[activeIndex])}
          className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ddb765] hover:text-[#fff2db] transition-colors font-medium border-b border-[#ddb765]/40 pb-0.5"
        >
          <span>View Full Lookbook & Pricing</span>
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Modal for detailed view */}
      <CollectionModal
        collection={selectedCollection}
        onClose={() => setSelectedCollection(null)}
      />
    </div>
  );
}
