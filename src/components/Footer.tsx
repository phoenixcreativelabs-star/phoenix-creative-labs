import { MouseEvent } from 'react';
import { Flame, ArrowUp, Mail, Phone } from 'lucide-react';
import { navigateToSection } from '../lib/navigation';

interface FooterProps {
  onOpenAdmin: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateToSection(href);
  };

  return (
    <footer className="bg-[#0F3D2E] text-[#FAF7F2] pt-20 pb-10 border-t border-white/5 relative print:hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-px h-full bg-white/5 hidden lg:block pointer-events-none" />
      <div className="absolute top-0 right-12 w-px h-full bg-white/5 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="inline-flex items-center space-x-2 group mb-6 cursor-pointer"
              >
                <Flame className="h-6 w-6 text-[#C9A664] group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg md:text-xl tracking-wider text-[#FAF7F2] font-bold">
                    PHOENIX
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#C9A664] uppercase font-semibold -mt-1">
                    Creative Labs
                  </span>
                </div>
              </a>
              <p className="font-sans text-xs md:text-sm text-[#E8E6E1]/70 max-w-sm leading-relaxed mb-6">
                Phoenix Creative Labs helps authors, creators, and experts turn ideas into published, sellable digital products — and, as the studio grows, into full brand and digital presence work.
              </p>
            </div>
            
            <span className="font-serif text-sm italic text-[#C9A664] font-medium block">
              From Idea to Income.
            </span>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#C9A664] mb-6">
              Studio Map
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="block text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="block text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors cursor-pointer"
                >
                  Services
                </a>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, '#work')}
                  className="block text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors cursor-pointer"
                >
                  Work / Proof
                </a>
                <a
                  href="#free-guide"
                  onClick={(e) => handleNavClick(e, '#free-guide')}
                  className="block text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors cursor-pointer"
                >
                  Free Guide
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#the-lab"
                  onClick={(e) => handleNavClick(e, '#the-lab')}
                  className="block text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors cursor-pointer"
                >
                  The Lab
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="block text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#start-project"
                  onClick={(e) => handleNavClick(e, '#start-project')}
                  className="block text-xs text-[#FAF7F2] hover:text-[#C9A664] transition-colors font-semibold cursor-pointer"
                >
                  Start Project
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors cursor-pointer"
                >
                  Contact General
                </a>
              </div>
            </div>
          </div>

          {/* Quick Support / Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#C9A664] mb-6">
              Laboratory Desk
            </h4>
            <p className="font-sans text-xs text-[#E8E6E1]/75 leading-relaxed mb-6">
              Got an outstanding concept? Ping us immediately or book our desk team for custom projects.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello.phoenixcreativelabs@gmail.com"
                className="flex items-center text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors group"
              >
                <Mail className="h-4 w-4 mr-2.5 text-[#C9A664]" />
                hello.phoenixcreativelabs@gmail.com
              </a>
              <a
                href="https://wa.me/2348035105288"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center text-xs text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors"
              >
                <Phone className="h-4 w-4 mr-2.5 text-[#C9A664]" />
                +234 803 510 5288
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span className="font-sans text-[10px] text-[#E8E6E1]/40">
              © {new Date().getFullYear()} Phoenix Creative Labs. All rights reserved.
            </span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="font-sans text-[10px] text-[#E8E6E1]/40">
              Crafted in collaboration with Ebele Nweje.
            </span>
            <span className="hidden md:inline text-white/10">|</span>
            <button
              onClick={onOpenAdmin}
              className="font-sans text-[10px] text-[#C9A664] hover:text-[#FAF7F2] transition-colors inline-flex items-center gap-1 cursor-pointer underline decoration-dotted border-none bg-transparent"
              title="Access lead capture logs"
            >
              Owner Leads Hub
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 hover:bg-[#C9A664] border border-white/10 text-[#FAF7F2] hover:text-[#0F3D2E] rounded-xl transition-all cursor-pointer"
            aria-label="Back to top of page"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
