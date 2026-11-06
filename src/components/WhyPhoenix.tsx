import { motion } from 'motion/react';
import { Target, Award, HeartHandshake } from 'lucide-react';

export default function WhyPhoenix() {
  const highlights = [
    {
      title: 'Obsessed with Outcomes',
      desc: 'We do not sell abstract packages or deliverable checklists. We measure success by a live eBook, a launch-ready persona, or a live checkout funnel.',
      icon: Target,
    },
    {
      title: 'Meticulous Editorial Craft',
      desc: 'Every detail is styled under rigid artistic standards. We use high-end typography pairings, clean grids, and color palettes that represent luxury quality.',
      icon: Award,
    },
    {
      title: 'Hands-on Partnership',
      desc: 'We act as your dedicated publishing department and tech architects. We write the descriptions, set up the payment links, and formatting so you do not stall.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="bg-transparent text-[#FAF7F2] py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Golden Graphic Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A664]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A664]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Bold Statement */}
        <div className="lg:col-span-5">
          <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
            Our Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight font-black leading-tight mb-6">
            More Than a <br />
            <span className="text-[#C9A664] italic font-medium">Service Provider</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#E8E6E1]/80 leading-relaxed mb-8">
            Phoenix Creative Labs isn't a mechanical checklist of agency tasks. It is hands-on, meticulous support for finishing what you started. The focus stays anchored on tangible creative outcomes.
          </p>
          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl italic font-serif text-sm text-[#C9A664] max-w-sm backdrop-blur-md shadow-lg">
            "A manuscript becomes a real book. An idea becomes a real character. A business becomes a real brand."
          </div>
        </div>

        {/* Right Side: Key Values Card Stack */}
        <div className="lg:col-span-7 space-y-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 hover:border-[#C9A664]/50 p-6 md:p-8 rounded-2xl flex items-start space-x-6 transition-all group backdrop-blur-md"
              >
                <div className="p-3 bg-white/5 text-[#C9A664] rounded-xl border border-white/10 group-hover:bg-[#C9A664] group-hover:text-[#0F3D2E] transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#FAF7F2] mb-2 group-hover:text-[#C9A664] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#E8E6E1]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
