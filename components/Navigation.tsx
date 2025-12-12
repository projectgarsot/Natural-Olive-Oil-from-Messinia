import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Η Εγκατάσταση', href: '#facility' },
  { label: 'Η Διαδικασία', href: '#process' },
  { label: 'Ποιότητα', href: '#quality' },
  { label: 'Εταιρεία', href: '#legal' },
  { label: 'Επικοινωνία', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-50/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className={`font-serif text-2xl font-bold tracking-wider transition-colors duration-300 ${scrolled ? 'text-olive-900' : 'text-stone-50 drop-shadow-md'}`}>
          ΜΕΣΣΗΝΙΑΣ<span className="text-gold-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm tracking-widest uppercase hover:text-gold-500 transition-colors duration-300 ${
                scrolled ? 'text-stone-800' : 'text-stone-100 drop-shadow-sm'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={scrolled ? 'text-stone-800' : 'text-stone-100'} />
          ) : (
            <Menu className={scrolled ? 'text-stone-800' : 'text-stone-100'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-2xl text-stone-800 hover:text-gold-500"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;