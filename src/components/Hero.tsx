import { HERO_EDITORIAL_PATH } from '../data';
import { motion } from 'motion/react';
import { ChevronRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:py-40 flex items-center justify-center bg-transparent overflow-hidden"
    >
      {/* Editorial Background Image and Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_EDITORIAL_PATH}
          alt="Phoenix Creative Labs Editorial Hero Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-95 select-none pointer-events-none scale-100"
        />
        {/* Soft left-to-right gradient to keep the headline text perfectly readable, fading to fully clear on the right */}
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-[#0F3D2E]/85 via-[#0F3D2E]/40 to-transparent pointer-events-none" />
        
        {/* Subtle overall dark vignette of just 15% as requested, ensuring the book and pen remain beautifully clear */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Editorial Decorative Lines */}
      <div className="absolute top-0 left-12 w-px h-full bg-white/5 hidden lg:block z-10" />
      <div className="absolute top-0 right-12 w-px h-full bg-white/5 hidden lg:block z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-3xl flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#C9A664]/10 border border-[#C9A664]/20 px-4 py-1.5 rounded-full self-start mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A664]" />
            <span className="font-mono text-[11px] tracking-wider text-[#E8E6E1] uppercase font-bold">
              Idea-to-Income Creative Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#FAF7F2] leading-[1.1] tracking-tight font-black mb-6"
          >
            From Idea to <br />
            <span className="text-[#C9A664] italic font-medium">Income.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-[#E8E6E1] leading-relaxed max-w-xl mb-10 [text-shadow:_0_1px_4px_rgb(15_61_46_/_40%)]"
          >
            Publishing support and creative development for authors, creators, and experts ready to turn their ideas into finished, sellable work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#start-project"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-2xl font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C9A664]/10 group cursor-pointer"
            >
              Start Your Project
              <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#free-guide"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-[#FAF7F2] rounded-2xl font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 backdrop-blur-md group cursor-pointer"
            >
              <FileText className="mr-2 h-4 w-4 text-[#C9A664]" />
              Get Free Checklist
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
