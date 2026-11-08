"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#140612]/85 backdrop-blur-md border-b border-[#ddb765]/20 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-[#ddb765]/50 bg-gradient-to-br from-[#381132] to-[#1a0717] group-hover:border-[#ddb765] transition-colors shadow-gold-glow-sm">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#f5d58f] group-hover:scale-105 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 2L14.5 8.5L21 9L16 13.5L18 20L12 16.5L6 20L8 13.5L3 9L9.5 8.5L12 2Z" fill="url(#logoGoldGrad)" stroke="#ddb765" />
                <defs>
                  <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdf3de" />
                    <stop offset="100%" stopColor="#c59837" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.12em] uppercase font-medium text-white group-hover:text-[#f8e4c0] transition-colors">
                Vellora <span className="text-[#ddb765] font-light">Couture</span>
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#e8cf96]/75 uppercase -mt-0.5">
                Fashion Boutique | Premium Apparel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full border border-[#ddb765]/20 bg-[#280d25]/40 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#160714] bg-gradient-to-r from-[#fae7c4] to-[#ddb765] shadow-sm font-semibold"
                      : "text-[#ecd3bc]/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="gold-button flex items-center gap-2 px-5 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wider uppercase transition-all duration-300"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contact"
              className="gold-button px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1"
            >
              <span>Book</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#ddb765]/30 text-[#e8cf96] hover:bg-white/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-3 pb-6 border-b border-[#ddb765]/20 bg-[#160614]/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#160714] bg-gradient-to-r from-[#fae7c4] to-[#ddb765] font-semibold"
                      : "text-[#ecd3bc]/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 mt-1 border-t border-[#ddb765]/20">
              <Link
                href="/contact"
                className="gold-button w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

