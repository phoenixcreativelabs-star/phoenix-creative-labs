import { motion } from 'motion/react';
import { HelpCircle, ArrowUpRight } from 'lucide-react';

export default function Problem() {
  return (
    <section className="bg-transparent py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center mb-6"
        >
          <div className="p-3 bg-white/5 border border-white/10 rounded-full">
            <HelpCircle className="h-6 w-6 text-[#C9A664]" />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-mono text-xs tracking-[0.2em] text-[#C9A664] uppercase font-bold block mb-4"
        >
          The Unseen Gap
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight mb-8"
        >
          Great Ideas Don't Grow <br />by Themselves
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="relative max-w-2xl mx-auto glass-card p-8 md:p-12 text-left"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A664]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A664]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A664]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A664]" />

          <p className="font-sans text-base md:text-lg text-[#E8E6E1]/80 leading-relaxed mb-6">
            Most authors and experts have something valuable sitting unfinished — a manuscript that stalled, a course that never got packaged, or an idea that stayed an idea.
          </p>
          <p className="font-sans text-base md:text-lg text-[#FAF7F2]/90 leading-relaxed font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F2] to-[#FAF7F2]/70">
            Turning that into something people can actually read, buy, or engage with takes a different set of skills than having the idea in the first place. Phoenix Creative Labs exists to close that gap.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="font-mono text-xs text-[#C9A664] uppercase tracking-wider font-semibold">
              Ready to break the stall?
            </span>
            <a
              href="#services"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:text-[#C9A664] group transition-colors cursor-pointer"
            >
              See how we do it
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg width="100%" height="100%" className="text-[#C9A664]/20">
          <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="50%" cy="50%" r="20%" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
