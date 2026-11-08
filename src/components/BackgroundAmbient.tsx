"use client";

import React from "react";

export function BackgroundAmbient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep luxury plum base gradient */}
      <div className="absolute inset-0 bg-[#0c040b]" />

      {/* Atmospheric Silk Wave & Velvet Radial Glows */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full opacity-35 filter blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(115, 27, 78, 0.45) 0%, rgba(77, 13, 50, 0.2) 50%, transparent 70%)"
        }}
      />
      
      <div 
        className="absolute top-[25%] -right-[15%] w-[60vw] h-[60vw] rounded-full opacity-30 filter blur-[130px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(160, 40, 100, 0.35) 0%, rgba(100, 20, 65, 0.15) 50%, transparent 70%)"
        }}
      />

      <div 
        className="absolute -bottom-[20%] left-[20%] w-[65vw] h-[65vw] rounded-full opacity-25 filter blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(221, 183, 101, 0.2) 0%, rgba(138, 38, 92, 0.2) 40%, transparent 70%)"
        }}
      />

      {/* Subtle organic silk wave lines using SVG curves */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-15 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <path
          d="M-100,300 C300,100 600,600 1100,350 C1300,250 1500,400 1600,300"
          fill="none"
          stroke="url(#goldSilkGrad1)"
          strokeWidth="1.5"
        />
        <path
          d="M-100,500 C400,300 700,750 1200,450 C1400,350 1550,550 1650,450"
          fill="none"
          stroke="url(#plumSilkGrad2)"
          strokeWidth="2"
        />
        <path
          d="M-50,750 C350,600 750,900 1150,650 C1350,550 1500,750 1600,650"
          fill="none"
          stroke="url(#goldSilkGrad1)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="goldSilkGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ddb765" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#f7e4c2" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#b08130" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="plumSilkGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8a265c" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#e2b459" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#55143c" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle gold dust micro-sparkles */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, #eed199, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 140px 70px, #ddb765, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 280px 190px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 420px 120px, #eed199, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 600px 250px, #ddb765, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 800px 90px, #fff3dc, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 980px 220px, #eed199, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 1200px 160px, #ddb765, rgba(0,0,0,0))`,
          backgroundSize: "600px 400px"
        }}
      />
    </div>
  );
}

