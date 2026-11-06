import { motion } from 'motion/react';
import { Paintbrush, Box, Rocket, ArrowRight } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      id: 'publish-package',
      title: 'Publish & Package',
      description: 'We turn your raw manuscripts, guides, or courses into professional, validated eBooks (ePub/PDF) and premium print editions (paperback & hardcover).',
      icon: Box,
    },
    {
      id: 'create',
      title: 'Create (AI Jobs)',
      description: 'We model custom photorealistic AI character personas, virtual influencers, and highly consistent narrative graphics to elevate your visual storytelling.',
      icon: Paintbrush,
    },
    {
      id: 'launch',
      title: 'Launch & Brand',
      description: 'We design complete brand systems (logos, palettes, typography) and build premium, custom-designed websites and high-converting landing pages to securely host and sell your creations.',
      icon: Rocket,
    },
  ];

  return (
    <section id="how-we-work" className="bg-transparent py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
            Our Method
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight">
            How We Work
          </h2>
          <p className="font-sans text-sm text-[#E8E6E1]/70 mt-4 leading-relaxed">
            Going from raw manuscripts, creative AI jobs, or designing premium branding assets to a live, revenue-generating digital presence demands absolute systemization. We guide you through our three core execution pillars to publish, create, and launch with precision.
          </p>
        </div>

        {/* Steps Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Decorative connectors line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block z-0" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.a
                key={step.id}
                href="#start-project"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-white/5 border border-white/10 p-8 relative z-10 hover:border-[#C9A664]/50 hover:bg-white/[0.08] rounded-2xl transition-all group shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full cursor-pointer no-underline block"
              >
                <div>
                  {/* Step index circle */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#C9A664] font-bold tracking-widest uppercase">
                      Phase 0{index + 1}
                    </span>
                    <div className="p-2.5 bg-white/5 text-[#C9A664] border border-white/10 rounded-xl group-hover:bg-[#C9A664] group-hover:text-[#0F3D2E] transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mb-3 group-hover:text-[#C9A664] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-[#E8E6E1]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="font-mono text-[9px] text-[#C9A664] tracking-widest uppercase font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">
                    Get Started <ArrowRight className="h-3 w-3" />
                  </span>
                  <span className="font-mono text-[9px] text-[#E8E6E1]/40 tracking-widest uppercase group-hover:opacity-0 transition-opacity duration-300">
                    Execution Step
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C9A664]" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Centered CTA Section Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#start-project"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#C9A664]/10 hover:shadow-[#C9A664]/20 hover:scale-[1.02] cursor-pointer"
          >
            Start Your Custom Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
