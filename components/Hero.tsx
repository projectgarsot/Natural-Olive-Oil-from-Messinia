import React from 'react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/Koroneikiart.jpg" 
          alt="Σύγχρονο ελαιοτριβείο" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <FadeIn direction="up" delay={200}>
          <p className="text-gold-500 tracking-[0.3em] text-sm md:text-base uppercase mb-4 font-bold">
            Προηγμένη Εξαγωγή • Φιλιατρά, Μεσσηνία
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={400}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-50 mb-6 leading-tight">
            Το Ελαιοτριβείο της <br/> Μεσσηνίας
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={600}>
          <p className="text-stone-200 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Είμαστε οι δημιουργοί. Κατέχουμε τη διαδικασία από τη στιγμή που φτάνει ο καρπός μέχρι την τελική σφράγιση της φιάλης. Ζήστε την ακρίβεια της σύγχρονης μηχανικής ελαιολάδου.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={800}>
          <div className="animate-bounce mt-10">
            <a href="#facility" className="text-white hover:text-gold-500 transition-colors">
              <svg 
                className="w-8 h-8 mx-auto" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;