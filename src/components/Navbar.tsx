import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { navigateToSection } from '../lib/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Free Guide', href: '#free-guide' },
    { name: 'The Lab', href: '#the-lab' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateToSection(href, () => setIsOpen(false));
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#0F3D2E]/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 group cursor-pointer"
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-sm font-medium text-[#E8E6E1]/70 hover:text-[#C9A664] transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#start-project"
            onClick={(e) => handleNavClick(e, '#start-project')}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#C9A664]/10 cursor-pointer"
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile Hamburger & Call-to-Action */}
        <div className="flex lg:hidden items-center space-x-3">
          <a
            href="#start-project"
            onClick={(e) => handleNavClick(e, '#start-project')}
            className="px-4 py-1.5 bg-[#C9A664] text-[#0F3D2E] rounded-full font-sans text-[10px] font-bold uppercase tracking-wider shadow-md cursor-pointer"
          >
            Inquire
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-[#FAF7F2] hover:text-[#C9A664] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0F3D2E]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-base font-medium text-[#E8E6E1]/90 hover:text-[#C9A664] active:text-[#C9A664] transition-colors duration-200 py-1.5 cursor-pointer block"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#start-project"
                onClick={(e) => handleNavClick(e, '#start-project')}
                className="w-full text-center py-3 bg-[#C9A664] text-[#0F3D2E] rounded-full font-sans text-sm font-bold uppercase tracking-wider mt-2 block cursor-pointer shadow-lg shadow-[#C9A664]/20"
              >
                Start Your Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
