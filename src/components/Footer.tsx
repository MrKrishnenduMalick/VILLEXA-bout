"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Instagram, Facebook, Compass } from "lucide-react";
import { BRAND_INFO } from "@/data/fashionData";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#ddb765]/20 bg-[#10040f]/90 backdrop-blur-xl pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#ddb765]/15">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#ddb765]/50 bg-gradient-to-br from-[#381132] to-[#1a0717] shadow-gold-glow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#f5d58f]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 2L14.5 8.5L21 9L16 13.5L18 20L12 16.5L6 20L8 13.5L3 9L9.5 8.5L12 2Z" fill="#ddb765" stroke="#ddb765" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.14em] uppercase font-medium text-white">
                  Vellora <span className="text-[#ddb765] font-light">Couture</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#e8cf96]/75 uppercase">
                  Fashion Boutique | Premium Apparel
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#d6beab]/80 max-w-sm leading-relaxed font-light">
              Where heritage craft transcends time. Curating authentic handcrafted ethnic heirlooms, sculpted bridal ensembles and avant-garde modern silhouettes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#ddb765]/30 flex items-center justify-center text-[#ddb765] hover:bg-[#ddb765]/10 hover:border-[#ddb765] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#ddb765]/30 flex items-center justify-center text-[#ddb765] hover:bg-[#ddb765]/10 hover:border-[#ddb765] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#ddb765]/30 flex items-center justify-center text-[#ddb765] hover:bg-[#ddb765]/10 hover:border-[#ddb765] transition-all"
                aria-label="Pinterest"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ddb765]">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#ecd3bc]/75">
              <li><Link href="/" className="hover:text-white hover:underline transition-colors">Home Page</Link></li>
              <li><Link href="/about" className="hover:text-white hover:underline transition-colors">Our Story & Heritage</Link></li>
              <li><Link href="/collections" className="hover:text-white hover:underline transition-colors">3D Runway Showroom</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:underline transition-colors">Boutique Appointment</Link></li>
            </ul>
          </div>

          {/* Featured Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ddb765]">Couture Lines</h4>
            <ul className="space-y-2 text-sm text-[#ecd3bc]/75">
              <li><Link href="/collections" className="hover:text-white transition-colors">Royal Bridal Collection</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Heritage Ethnic Wear</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Gilded Festive Ensembles</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Contemporary Tailoring</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Evening Party Wear</Link></li>
            </ul>
          </div>

          {/* Boutique Visit */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ddb765]">Visit Boutique</h4>
            <div className="space-y-2 text-sm text-[#ecd3bc]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ddb765] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ddb765] shrink-0" />
                <span>{BRAND_INFO.contact.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ddb765] shrink-0" />
                <span>{BRAND_INFO.contact.emails[0]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#eed199]/60">
          <p>© {new Date().getFullYear()} Vellora Couture. All Rights Reserved. Timeless Fashion for a Modern You.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Atelier Care Guide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

