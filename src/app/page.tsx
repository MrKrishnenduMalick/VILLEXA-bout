import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Crown, Sparkles, Gem, ShieldCheck } from "lucide-react";
import { GlassRibbon } from "@/components/GlassRibbon";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-12 pb-6 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-20 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ddb765]/40 bg-[#31112d]/50 backdrop-blur-md shadow-gold-glow-sm">
              <Crown className="w-3.5 h-3.5 text-[#ddb765]" />
              <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#f7e4c2] font-medium">
                Premium Fashion Boutique
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08]">
              Timeless <br className="hidden sm:inline" />
              Fashion for <br />
              <span className="font-light italic text-[#eed199] gold-text-gradient">
                a Modern You
              </span>
            </h1>

            {/* Short Brand Intro */}
            <p className="text-sm sm:text-base md:text-lg text-[#ebd4c1]/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              A curated boutique of designer wear, ethnic collections and contemporary styles crafted for every occasion. Where traditional Indian artisanal mastery meets global haute couture sensibility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/collections"
                className="gold-button px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2.5 group shadow-gold-glow"
              >
                <span>Explore Collections</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="glass-pill px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wider text-[#faecd1] hover:text-white hover:bg-white/10 transition-all flex items-center gap-2.5 border border-[#ddb765]/30"
              >
                <div className="w-5 h-5 rounded-full bg-[#ddb765]/20 flex items-center justify-center text-[#ddb765]">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Our Story</span>
              </Link>
            </div>

            {/* Micro trust indicators */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#ddb765]/80 font-light">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#ddb765]" />
                <span>Bespoke Handcrafted</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#ddb765]/40" />
              <div className="flex items-center gap-2">
                <Gem className="w-3.5 h-3.5 text-[#ddb765]" />
                <span>100% Certified Silks</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Fashion Photography Model */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Atmospheric Background Silk/Velvet Aura */}
            <div className="absolute w-[95%] h-[95%] rounded-full bg-gradient-to-tr from-[#69184d]/40 via-[#ddb765]/15 to-transparent filter blur-2xl -z-10" />

            {/* Frame with glowing gold border and luxury reflections */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[36px] overflow-hidden border border-[#ddb765]/40 shadow-2xl shadow-black/80 ring-1 ring-[#ddb765]/20 group">
              <Image
                src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1200&q=90"
                alt="Vellora Couture Luxury Fashion Model in Embroidered Blush Gold Lehenga"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Silk drape gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120410]/80 via-transparent to-[#1a0717]/20" />

              {/* Floating Glass Editorial Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-[#ddb765]/30 backdrop-blur-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#ddb765] font-semibold block">
                    Bespoke Atelier Collection
                  </span>
                  <p className="font-serif text-lg text-white font-normal mt-0.5">
                    The Noor Jahan Royal Gown
                  </p>
                  <p className="text-[11px] text-[#edd4bd]/70 font-light">
                    Hand-embroidered zardozi on tissue silk
                  </p>
                </div>
                <Link
                  href="/collections"
                  className="w-10 h-10 rounded-full bg-[#ddb765] text-[#160714] flex items-center justify-center hover:scale-105 transition-transform shrink-0 shadow-gold-glow-sm"
                  aria-label="View collection"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Top luxury badge */}
              <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#20081d]/70 border border-[#ddb765]/40 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#fae4c1]">
                Haute Couture Edition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Ribbon: Designer Collections, Premium Fabrics, Tailored Fit, Ethically Made, Worldwide Shipping */}
      <section className="relative z-20 pb-4">
        <GlassRibbon variant="home" />
      </section>
    </div>
  );
}

