"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Sparkles, Scissors, Gem, ArrowRight } from "lucide-react";
import { CollectionItem } from "@/data/fashionData";

interface CollectionModalProps {
  collection: CollectionItem | null;
  onClose: () => void;
}

export function CollectionModal({ collection, onClose }: CollectionModalProps) {
  if (!collection) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#1c0819] border border-[#ddb765]/40 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-[#ddb765]/30 text-white/90 hover:text-white hover:border-[#ddb765] flex items-center justify-center transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-72 sm:h-96 md:h-full min-h-[340px] overflow-hidden">
            <Image
              src={collection.heroImage}
              alt={collection.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c0819] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c0819]" />
            <div className="absolute bottom-4 left-4 right-4 p-3 glass-pill rounded-xl">
              <span className="text-[10px] uppercase tracking-widest text-[#ddb765] font-semibold">Couture Palette</span>
              <div className="flex gap-2 mt-1.5">
                {collection.palette.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase border border-[#ddb765]/30 bg-[#35122e]/60 text-[#f5d58f]">
                <Sparkles className="w-3.5 h-3.5 text-[#ddb765]" />
                <span>{collection.category}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {collection.name}
              </h3>
              
              <p className="text-xs uppercase tracking-wider text-[#ddb765]">
                {collection.tagline}
              </p>

              <p className="text-sm text-[#ecd3bc]/80 leading-relaxed font-light">
                {collection.description}
              </p>

              {/* Craftsmanship Note */}
              <div className="p-3.5 rounded-xl bg-[#2a0e26]/80 border border-[#ddb765]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#f5d58f]">
                  <Scissors className="w-3.5 h-3.5 text-[#ddb765]" />
                  <span>Artisanal Craftsmanship</span>
                </div>
                <p className="text-xs text-[#eed199]/75 font-light leading-relaxed">
                  {collection.craftsmanship}
                </p>
              </div>

              {/* Featured Pieces */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ddb765]">
                  Featured Creations
                </span>
                <div className="space-y-2">
                  {collection.featuredPieces.map((piece, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-[#ddb765]/10"
                    >
                      <div>
                        <span className="font-medium text-white">{piece.title}</span>
                        <p className="text-[11px] text-[#eed199]/60">{piece.details}</p>
                      </div>
                      <span className="text-[#ddb765] font-semibold ml-2">{piece.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="gold-button flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Request Private Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl border border-[#ddb765]/30 text-xs text-[#eed199] hover:bg-white/5 transition-colors uppercase tracking-wider"
              >
                Close Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

