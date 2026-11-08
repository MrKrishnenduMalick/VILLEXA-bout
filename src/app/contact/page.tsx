import React from "react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Compass, 
  CalendarCheck2 
} from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { BRAND_INFO } from "@/data/fashionData";

export default function ContactPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Contact Editorial & Boutique Info Cards */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ddb765]/40 bg-[#31112d]/50 backdrop-blur-md shadow-gold-glow-sm">
            <Mail className="w-3.5 h-3.5 text-[#ddb765]" />
            <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#f7e4c2] font-medium">
              Get in Touch
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Let's Style <br />
            <span className="italic text-[#eed199] gold-text-gradient">
              Your Next Look
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#ebd4c1]/80 max-w-lg font-light leading-relaxed">
            Have a question, want a custom design or wish to book a boutique visit? We'd love to hear from you. Experience bespoke bridal consultations and private fitting appointments.
          </p>

          {/* Boutique Contact Details Cards */}
          <div className="space-y-3.5 pt-2">
            {/* Call Us */}
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-[#ddb765]/25 flex items-center gap-4 group hover:border-[#ddb765]/60 transition-all">
              <div className="w-11 h-11 rounded-full bg-[#3b1534]/60 border border-[#ddb765]/40 flex items-center justify-center text-[#ddb765] group-hover:scale-105 transition-transform shrink-0 shadow-gold-glow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ddb765] font-semibold block">
                  Call Us
                </span>
                <p className="text-sm sm:text-base text-white font-medium mt-0.5">
                  {BRAND_INFO.contact.phones[0]}
                </p>
                <p className="text-xs text-[#eed199]/70 font-light">
                  {BRAND_INFO.contact.phones[1]}
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-[#ddb765]/25 flex items-center gap-4 group hover:border-[#ddb765]/60 transition-all">
              <div className="w-11 h-11 rounded-full bg-[#3b1534]/60 border border-[#ddb765]/40 flex items-center justify-center text-[#ddb765] group-hover:scale-105 transition-transform shrink-0 shadow-gold-glow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ddb765] font-semibold block">
                  Email Us
                </span>
                <p className="text-sm sm:text-base text-white font-medium mt-0.5">
                  {BRAND_INFO.contact.emails[0]}
                </p>
                <p className="text-xs text-[#eed199]/70 font-light">
                  {BRAND_INFO.contact.emails[1]}
                </p>
              </div>
            </div>

            {/* Visit Our Boutique */}
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-[#ddb765]/25 flex items-start gap-4 group hover:border-[#ddb765]/60 transition-all">
              <div className="w-11 h-11 rounded-full bg-[#3b1534]/60 border border-[#ddb765]/40 flex items-center justify-center text-[#ddb765] group-hover:scale-105 transition-transform shrink-0 shadow-gold-glow-sm mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ddb765] font-semibold block">
                  Visit Our Boutique
                </span>
                <p className="text-sm text-white font-medium mt-0.5 leading-relaxed">
                  {BRAND_INFO.contact.address}
                </p>
              </div>
            </div>

            {/* Boutique Hours */}
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-[#ddb765]/25 flex items-center gap-4 group hover:border-[#ddb765]/60 transition-all">
              <div className="w-11 h-11 rounded-full bg-[#3b1534]/60 border border-[#ddb765]/40 flex items-center justify-center text-[#ddb765] group-hover:scale-105 transition-transform shrink-0 shadow-gold-glow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ddb765] font-semibold block">
                  Boutique Hours
                </span>
                <p className="text-xs sm:text-sm text-white font-medium mt-0.5">
                  Mon – Sat : 10:00 AM – 8:00 PM
                </p>
                <p className="text-xs text-[#eed199]/70 font-light">
                  Sun : 11:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Showroom Atmosphere Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#ddb765]/25 h-44 shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=85"
              alt="Haute Couture Mannequin & Bridal Atelier Salon"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#170515]/90 via-[#170515]/40 to-transparent flex items-center p-6">
              <div className="max-w-xs space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ddb765] font-semibold">
                  VIP Fitting Lounge
                </span>
                <p className="text-sm text-white font-medium">
                  Complimentary Champagne & Private Stylist for Every Fitting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Appointment Booking Form */}
        <div className="lg:col-span-6 relative">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}

