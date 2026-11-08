"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    dateTime: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const services = [
    "Bridal Couture Consultation",
    "Bespoke Ethnic Tailoring",
    "Contemporary Silhouette Fitting",
    "Festive & Occasion Wear Styling",
    "VIP Private Salon Visit",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      newErrors.phone = "Please enter a valid phone number (min 8 digits)";
    }

    if (!formData.service) {
      newErrors.service = "Please select a required service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury appointment processing
    setTimeout(() => {
      const randomRef = "VEL-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      dateTime: "",
      message: "",
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#ddb765]/50 shadow-gold-glow text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4d163f] to-[#1c0819] border border-[#ddb765] flex items-center justify-center mx-auto text-[#f9e4c1] shadow-gold-glow-sm">
          <CheckCircle2 className="w-9 h-9 text-[#ddb765]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#ddb765] font-semibold">
            Appointment Requested
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            We Look Forward to Styling You
          </h3>
          <p className="text-xs sm:text-sm text-[#ecd3bc]/80 max-w-md mx-auto leading-relaxed font-light">
            Thank you, <span className="font-medium text-white">{formData.name}</span>. Your private consultation request has been reserved with our Senior Couture Stylist.
          </p>
        </div>

        {/* Appointment summary card */}
        <div className="p-4 rounded-2xl bg-[#260e23]/70 border border-[#ddb765]/20 text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between items-center pb-2 border-b border-[#ddb765]/15">
            <span className="text-[#ddb765]">Reservation Code</span>
            <span className="font-mono font-semibold text-white tracking-wider">{bookingRef}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#ecd3bc]/70">Selected Service</span>
            <span className="font-medium text-white">{formData.service}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#ecd3bc]/70">Phone / WhatsApp</span>
            <span className="text-white">{formData.phone}</span>
          </div>
          {formData.dateTime && (
            <div className="flex justify-between items-center">
              <span className="text-[#ecd3bc]/70">Preferred Time</span>
              <span className="text-white">{formData.dateTime}</span>
            </div>
          )}
        </div>

        <p className="text-[11px] text-[#ddb765]/80">
          Our concierge will contact you via WhatsApp / Phone within 2 business hours to finalize fitting suite preparations.
        </p>

        <button
          onClick={handleReset}
          className="gold-button px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#ddb765]/35 shadow-glass-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#391232]/60 border border-[#ddb765]/30 flex items-center justify-center text-[#ddb765]">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
            Book an Appointment
          </h3>
          <p className="text-[11px] sm:text-xs text-[#ddb765]/80 uppercase tracking-widest">
            Bespoke Atelier Consultation
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-[#f2e4c1]/90 uppercase tracking-wider mb-1.5">
            Your Name <span className="text-[#ddb765]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Radhika Singhania"
              className={`w-full px-4 py-3 rounded-xl bg-[#260e22]/60 border text-sm text-white placeholder-[#be9f87]/50 focus:outline-none transition-all ${
                errors.name
                  ? "border-red-400 focus:border-red-400"
                  : "border-[#ddb765]/25 focus:border-[#ddb765] focus:ring-1 focus:ring-[#ddb765]"
              }`}
            />
            <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#ddb765]/50 pointer-events-none" />
          </div>
          {errors.name && (
            <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#f2e4c1]/90 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-[#ddb765]">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@domain.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#260e22]/60 border text-sm text-white placeholder-[#be9f87]/50 focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#ddb765]/25 focus:border-[#ddb765] focus:ring-1 focus:ring-[#ddb765]"
                }`}
              />
              <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-[#ddb765]/50 pointer-events-none" />
            </div>
            {errors.email && (
              <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-[#f2e4c1]/90 uppercase tracking-wider mb-1.5">
              Phone / WhatsApp <span className="text-[#ddb765]">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl bg-[#260e22]/60 border text-sm text-white placeholder-[#be9f87]/50 focus:outline-none transition-all ${
                  errors.phone
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#ddb765]/25 focus:border-[#ddb765] focus:ring-1 focus:ring-[#ddb765]"
                }`}
              />
              <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-[#ddb765]/50 pointer-events-none" />
            </div>
            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label className="block text-xs font-medium text-[#f2e4c1]/90 uppercase tracking-wider mb-1.5">
            Service Required <span className="text-[#ddb765]">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[#260e22]/90 border text-sm text-white focus:outline-none transition-all ${
              errors.service
                ? "border-red-400 focus:border-red-400"
                : "border-[#ddb765]/25 focus:border-[#ddb765] focus:ring-1 focus:ring-[#ddb765]"
            }`}
          >
            <option value="" className="bg-[#1c0819] text-[#ecd3bc]/60">Select Couture Service</option>
            {services.map((svc) => (
              <option key={svc} value={svc} className="bg-[#1c0819] text-white">
                {svc}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        {/* Preferred Date & Time */}
        <div>
          <label className="block text-xs font-medium text-[#f2e4c1]/90 uppercase tracking-wider mb-1.5">
            Preferred Date & Time
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.dateTime}
              onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
              placeholder="e.g. Next Saturday, 4:00 PM"
              className="w-full px-4 py-3 rounded-xl bg-[#260e22]/60 border border-[#ddb765]/25 text-sm text-white placeholder-[#be9f87]/50 focus:outline-none focus:border-[#ddb765] focus:ring-1 focus:ring-[#ddb765] transition-all"
            />
            <Clock className="absolute right-3.5 top-3.5 w-4 h-4 text-[#ddb765]/50 pointer-events-none" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-[#f2e4c1]/90 uppercase tracking-wider mb-1.5">
            Your Message / Custom Preferences
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about the occasion, color preferences or custom silhouette ideas..."
            className="w-full px-4 py-3 rounded-xl bg-[#260e22]/60 border border-[#ddb765]/25 text-sm text-white placeholder-[#be9f87]/50 focus:outline-none focus:border-[#ddb765] focus:ring-1 focus:ring-[#ddb765] transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="gold-button w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-[#160714] border-t-transparent rounded-full animate-spin" />
              Reserving Your Suite...
            </span>
          ) : (
            <>
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

