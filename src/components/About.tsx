import React, { useState, useRef } from 'react';
import { FOUNDER_PORTRAIT_PATH } from '../data';
import { motion } from 'motion/react';
import { Quote, Camera } from 'lucide-react';

export default function About() {
  const [imageUrl, setImageUrl] = useState<string>(() => {
    return localStorage.getItem('founder_image') || FOUNDER_PORTRAIT_PATH;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        try {
          localStorage.setItem('founder_image', base64String);
          setImageUrl(base64String);
        } catch (error) {
          console.error('Error saving image to localStorage (likely exceeds quota), falling back to transient URL', error);
          // Fallback to transient URL
          const objectUrl = URL.createObjectURL(file);
          setImageUrl(objectUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="bg-transparent py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual frame with Gold Outline */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -inset-4 border border-white/10 bg-white/2 rounded-3xl backdrop-blur-xl pointer-events-none" />
            <div 
              onClick={handleContainerClick}
              className="relative bg-white/5 aspect-square w-full max-w-sm overflow-hidden border border-white/10 rounded-2xl shadow-xl cursor-pointer group/upload transition-all duration-300 hover:border-[#C9A664]/50"
              title="Click to upload your own image"
            >
              <img
                src={imageUrl}
                alt="Ebele, Founder of Phoenix Creative Labs"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover/upload:grayscale-0 group-hover/upload:scale-[1.02] transition-all duration-700"
                loading="lazy"
              />
              
              {/* Sleek Golden Camera Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/upload:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#C9A664]">
                <Camera className="h-8 w-8 mb-2 transform scale-90 group-hover/upload:scale-100 transition-transform duration-300" />
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#FAF7F2]">
                  Upload Photo
                </span>
                <span className="font-sans text-[9px] text-[#E8E6E1]/60 mt-1">
                  Replaces founder portrait
                </span>
              </div>

              {/* Bottom tag bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 text-center group-hover/upload:opacity-0 transition-opacity duration-200">
                <span className="font-serif text-sm font-bold text-[#C9A664]">
                  Ebele Nweje
                </span>
                <p className="font-mono text-[9px] text-[#E8E6E1]/80 tracking-widest uppercase">
                  Studio Founder (Click to change)
                </p>
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                aria-label="Upload founder portrait image"
              />
            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
              Our Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight mb-6">
              Ideas Deserve More <br />
              <span className="text-[#C9A664] italic font-medium">Than Good Intentions</span>
            </h2>

            <div className="space-y-5 font-sans text-sm md:text-base text-[#E8E6E1]/80 leading-relaxed max-w-xl">
              <p>
                Every idea starts as a spark — a book half-written, a business half-launched, or a rich digital character living only inside someone's head. But a spark alone cannot keep the lights on or generate an income.
              </p>
              <p className="font-semibold text-[#C9A664]">
                Phoenix Creative Labs believes ideas create real impact only when they're developed, packaged, and launched with intention.
              </p>
            </div>

            {/* Divider line */}
            <div className="h-px bg-white/10 w-full max-w-md my-8" />

            {/* Founder Note Panel */}
            <div className="relative bg-white/5 p-6 md:p-8 max-w-xl border-l-2 border-[#C9A664] rounded-r-2xl border border-y-white/5 border-r-white/5 backdrop-blur-md">
              <Quote className="absolute top-4 right-4 h-10 w-10 text-[#C9A664]/10" />
              
              <h4 className="font-serif text-xs uppercase tracking-widest text-[#C9A664] font-bold mb-3">
                Founder's Note
              </h4>
              
              <p className="font-serif text-sm italic text-[#FAF7F2]/90 leading-relaxed mb-4 relative z-10">
                "I started Phoenix Creative Labs because I saw too many brilliant ideas remain half-finished, locked away in notebooks or hidden Google Docs. Writing a manuscript, designing a concept, or scripting a character is hard enough. But packaging and launching it is a completely different discipline. We exist to be the hands-on partner you need to bring those ideas into the world, transform them into income streams, and build a lasting digital presence."
              </p>

              <div className="flex items-center space-x-2">
                <span className="font-sans text-xs font-bold text-[#FAF7F2]">
                  Ebele Nweje
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A664]" />
                <span className="font-sans text-[10px] text-[#E8E6E1]/60 uppercase tracking-wider font-semibold">
                  Founder & Creative Lead
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
