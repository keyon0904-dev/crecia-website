import React, { useState, useEffect } from 'react';
import { NavItem, SectionId } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Concept', href: `#${SectionId.CONCEPT}` },
  { label: 'Menu', href: `#${SectionId.MENU}` },
  { label: 'Access', href: `#${SectionId.ACCESS}` },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="z-50 group">
          <h1 className="text-2xl font-serif tracking-widest text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
            CRECIA
            <span className="block text-[10px] tracking-[0.3em] text-brand-gray group-hover:text-brand-gold/70">- クレシア -</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-brand-dark font-sans text-sm tracking-widest hover:text-brand-gold transition-colors duration-300 py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="tel:0000000000" 
            className="bg-brand-dark text-white px-6 py-2 rounded-sm font-serif text-sm tracking-wider hover:bg-brand-gold transition-colors duration-300 transform hover:-translate-y-0.5"
          >
            ご予約
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 space-y-1.5 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-[1px] bg-brand-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[1px] bg-brand-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1px] bg-brand-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-brand-light z-40 flex flex-col justify-center items-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-brand-dark mb-8 hover:text-brand-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};