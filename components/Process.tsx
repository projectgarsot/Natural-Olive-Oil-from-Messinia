import React from 'react';
import { Settings, Thermometer, FlaskConical, PackageCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    title: "Μηχανική Σύνθλιψη",
    description: "Οι ελιές συνθλίβονται με χρήση σφυρόμυλων υψηλής ταχύτητας αμέσως μετά την άφιξη. Αυτή η μηχανική δράση σπάει τα κύτταρα χωρίς να θερμαίνει την πάστα.",
    icon: Settings,
  },
  {
    title: "Θερμικός Έλεγχος",
    description: "Η φάση της μάλαξης παρακολουθείται αυστηρά ώστε να μην υπερβαίνει ποτέ τους 27°C. Θυσιάζουμε την ποσότητα για την ποιότητα, εξασφαλίζοντας μια πραγματική «Ψυχρή Έκθλιψη».",
    icon: Thermometer,
  },
  {
    title: "Ντεκάντερ Δύο Φάσεων",
    description: "Χρησιμοποιούμε προηγμένα ντεκάντερ δύο φάσεων που διαχωρίζουν το λάδι από το νερό και τα στερεά χρησιμοποιώντας φυγοκεντρική δύναμη, χωρίς να απαιτείται προσθήκη νερού.",
    icon: FlaskConical,
  },
  {
    title: "Αδρανής Αποθήκευση",
    description: "Το έτοιμο λάδι μεταφέρεται αμέσως σε ανοξείδωτες δεξαμενές με άζωτο για την αποφυγή οξείδωσης πριν εμφιαλωθεί στην αυτοματοποιημένη γραμμή μας.",
    icon: PackageCheck,
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-olive-900 text-stone-100 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="images/1000055137.jpg" 
            alt="Process Background" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
         />
      </div>
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-gold-500 uppercase tracking-widest text-sm font-bold block mb-4">Βιομηχανική Ακρίβεια</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50">Η Γραμμή Εξαγωγής</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border border-gold-600/30 bg-olive-800 flex items-center justify-center mb-6 group-hover:bg-gold-600/10 transition-colors duration-300 shadow-lg z-20 relative">
                  <step.icon size={32} className="text-gold-500" />
                </div>
                <h3 className="font-serif text-xl mb-4 text-stone-100">{step.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;