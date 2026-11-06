import { SERVICES_DATA } from '../data';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      {/* Decorative vertical divider line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 -translate-x-1/2 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight">
              Turn Ideas Into <br />
              <span className="text-[#C9A664] italic font-medium">Digital Assets</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-base text-[#E8E6E1]/70 leading-relaxed">
              We offer structured, end-to-end support across three creative pillars. Whether you need book publishing, consistent visual personas, or conversion-focused websites, we design with commercial intent.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const isFlagship = service.id === 'publish-package';
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 md:p-10 flex flex-col justify-between transition-all duration-300 rounded-3xl ${
                  isFlagship
                    ? 'bg-white/[0.08] text-[#FAF7F2] border-2 border-[#C9A664]/40 shadow-[0_20px_50px_rgba(201,166,100,0.15)] backdrop-blur-2xl'
                    : 'glass-card text-[#FAF7F2] hover:border-[#C9A664]/50'
                }`}
              >
                {/* Top Corner Badge for Flagship or New services */}
                {isFlagship && (
                  <div className="absolute top-0 right-0 bg-[#C9A664] text-[#0F3D2E] font-mono text-[9px] tracking-wider uppercase font-bold py-1.5 px-4 rounded-bl-xl rounded-tr-[22px]">
                    Flagship Offering
                  </div>
                )}
                {service.isNew && (
                  <div className="absolute top-0 right-0 bg-white/10 text-[#FAF7F2] font-mono text-[9px] tracking-wider uppercase font-bold py-1.5 px-4 flex items-center rounded-bl-xl rounded-tr-2xl border-l border-b border-white/5">
                    <Sparkles className="h-3 w-3 mr-1 text-[#C9A664]" />
                    New Offering
                  </div>
                )}

                <div>
                  {/* Number counter */}
                  <span
                    className={`font-mono text-4xl font-extrabold block mb-6 ${
                      isFlagship ? 'text-[#C9A664]/50' : 'text-[#FAF7F2]/10'
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className="font-serif text-2xl font-black mb-4 text-[#FAF7F2]"
                  >
                    {service.title}
                  </h3>

                  <p
                    className="font-sans text-sm leading-relaxed mb-8 text-[#E8E6E1]/70"
                  >
                    {service.description}
                  </p>

                  <div className="h-px w-full mb-8 bg-white/10" />

                  {/* Bullet points */}
                  <ul className="space-y-4 mb-10">
                    {service.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start text-xs leading-normal">
                        <Check
                          className="h-4 w-4 mr-3 shrink-0 mt-0.5 text-[#C9A664]"
                        />
                        <span className="text-[#E8E6E1]/80">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer note & button */}
                <div>
                  {service.id === 'launch' && (
                    <p className="font-sans text-[11px] italic text-[#E8E6E1]/55 mb-6 block">
                      "Available as Phoenix Creative Labs' newest service line for clients ready to build a full online presence."
                    </p>
                  )}
                  <a
                    href="#start-project"
                    className={`inline-flex items-center font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-200 group cursor-pointer ${
                      isFlagship
                        ? 'text-[#C9A664] hover:text-[#FAF7F2]'
                        : 'text-[#E8E6E1]/80 hover:text-[#C9A664]'
                    }`}
                  >
                    Inquire about {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
