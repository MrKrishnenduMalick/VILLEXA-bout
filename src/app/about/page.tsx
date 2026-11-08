import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Crown, 
  Users, 
  Globe, 
  CheckCircle2, 
  ArrowUpRight, 
  Gem, 
  Scissors, 
  HeartHandshake, 
  Leaf, 
  Compass, 
  Shirt 
} from "lucide-react";
import { BRAND_INFO } from "@/data/fashionData";

export default function AboutPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Top Editorial Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Brand Philosophy & Statistics */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ddb765]/40 bg-[#31112d]/50 backdrop-blur-md shadow-gold-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ddb765]" />
            <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#f7e4c2] font-medium">
              About Vellora Couture
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Our <span className="italic text-[#eed199] gold-text-gradient">Story</span>
          </h1>

          {/* Philosophy paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#ebd4c1]/85 font-light leading-relaxed">
            <p>
              Vellora Couture is a contemporary luxury fashion boutique where royal generational tradition meets modern cosmopolitan style. We curate exclusive, limited-edition designer pieces that celebrate individuality, artisanal craftsmanship, and timeless elegance.
            </p>
            <p className="text-xs sm:text-sm text-[#d4bead]/75">
              Born from a reverence for master weavers, zardozi needleworkers, and visionary couturiers, our atelier breathes new life into age-old techniques. Each gown, lehenga, and tailored silhouette is envisioned as an heirloom to be cherished across generations.
            </p>
          </div>

          {/* Stats Row in Glass Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
            <div className="glass-panel rounded-2xl p-4 text-center border border-[#ddb765]/25 hover:border-[#ddb765]/60 transition-all group">
              <div className="w-8 h-8 rounded-full bg-[#3d1534]/60 border border-[#ddb765]/30 flex items-center justify-center mx-auto mb-2 text-[#ddb765] group-hover:scale-110 transition-transform">
                <Crown className="w-4 h-4" />
              </div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                10+
              </div>
              <p className="text-[10px] sm:text-xs text-[#ddb765]/80 uppercase tracking-wider mt-0.5">
                Years of Excellence
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-4 text-center border border-[#ddb765]/25 hover:border-[#ddb765]/60 transition-all group">
              <div className="w-8 h-8 rounded-full bg-[#3d1534]/60 border border-[#ddb765]/30 flex items-center justify-center mx-auto mb-2 text-[#ddb765] group-hover:scale-110 transition-transform">
                <Users className="w-4 h-4" />
              </div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                25K+
              </div>
              <p className="text-[10px] sm:text-xs text-[#ddb765]/80 uppercase tracking-wider mt-0.5">
                Happy Customers
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-4 text-center border border-[#ddb765]/25 hover:border-[#ddb765]/60 transition-all group">
              <div className="w-8 h-8 rounded-full bg-[#3d1534]/60 border border-[#ddb765]/30 flex items-center justify-center mx-auto mb-2 text-[#ddb765] group-hover:scale-110 transition-transform">
                <Globe className="w-4 h-4" />
              </div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                20+
              </div>
              <p className="text-[10px] sm:text-xs text-[#ddb765]/80 uppercase tracking-wider mt-0.5">
                Countries Served
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Luxury Boutique Interior Photography */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[32px] overflow-hidden border border-[#ddb765]/40 shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=90"
              alt="Vellora Couture Luxury Boutique Salon Interior"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Ambient luxury lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#150514]/85 via-transparent to-black/20" />

            {/* Bottom interior badge */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 glass-panel rounded-2xl border border-[#ddb765]/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#ddb765] font-semibold block">
                  Private Salon
                </span>
                <p className="text-xs sm:text-sm text-white font-medium">
                  Atelier & VIP Bridal Suite — Newtown, Kolkata
                </p>
              </div>
              <Link
                href="/contact"
                className="gold-button px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1"
              >
                <span>Visit Us</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom 3-Card Editorial Section: Fabric Detail, Our Values, Our Expertise */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Card 1: Handcrafted Fabric Macro Photo */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-[#ddb765]/30 flex flex-col justify-between group">
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85"
              alt="Intricate Handcrafted Gold Zardozi Embroidery on Silk Velvet"
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b0819] via-transparent to-transparent" />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1b0819]/80 border border-[#ddb765]/40 text-[10px] uppercase tracking-widest text-[#ddb765]">
              Master Artistry
            </div>
          </div>
          <div className="p-6 space-y-2">
            <h3 className="font-serif text-xl text-white">Heirloom Embroidery</h3>
            <p className="text-xs text-[#eed199]/75 font-light leading-relaxed">
              Every motif is hand-embossed using metallic bullion wires, real freshwater pearls, and hand-twisted zari threads by multi-generational artisans.
            </p>
          </div>
        </div>

        {/* Card 2: Our Values */}
        <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-[#ddb765]/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#ddb765]/20 pb-3">
              <h3 className="font-serif text-2xl text-white">Our Values</h3>
              <HeartHandshake className="w-5 h-5 text-[#ddb765]" />
            </div>

            <div className="space-y-3.5">
              {BRAND_INFO.values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-4 h-4 text-[#ddb765] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-sm font-medium text-white group-hover:text-[#f7e4c2] transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-xs text-[#ecd3bc]/70 font-light mt-0.5 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#2e0f29]/70 border border-[#ddb765]/15 text-[11px] text-[#ddb765]/80 font-light italic">
            "Preserving couture integrity with every single stitch."
          </div>
        </div>

        {/* Card 3: Our Expertise */}
        <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-[#ddb765]/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#ddb765]/20 pb-3">
              <h3 className="font-serif text-2xl text-white">Our Expertise</h3>
              <Scissors className="w-5 h-5 text-[#ddb765]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {BRAND_INFO.expertise.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-[#280c24]/60 border border-[#ddb765]/20 hover:border-[#ddb765]/50 transition-all flex flex-col justify-between"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#3d1334]/60 border border-[#ddb765]/30 flex items-center justify-center text-[#ddb765] mb-2">
                    {idx === 0 && <Shirt className="w-3.5 h-3.5" />}
                    {idx === 1 && <Compass className="w-3.5 h-3.5" />}
                    {idx === 2 && <Crown className="w-3.5 h-3.5" />}
                    {idx === 3 && <Scissors className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white tracking-wide">
                      {exp.title}
                    </h4>
                    <p className="text-[10px] text-[#eed199]/70 font-light mt-0.5 leading-tight">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/collections"
            className="gold-button w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Explore Collections</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

