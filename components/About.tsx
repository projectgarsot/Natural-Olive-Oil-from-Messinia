import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="facility" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-gold-500"></div>
                <span className="text-gold-500 uppercase tracking-widest text-sm font-bold">Η Εγκατάσταση</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                Σχεδιάζοντας Υγρό Χρυσό
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed font-light text-lg">
                Στο <strong>Φυσικό Ελαιόλαδο Μεσσηνίας</strong>, η καρδιά μας χτυπάει στο ελαιοτριβείο. Ενώ διαθέτουμε ελαιώνες, η κύρια ταυτότητά μας είναι αυτή των <strong>παραγωγών</strong>. Λειτουργούμε μια σύγχρονη μονάδα άλεσης υψηλής δυναμικότητας στα Φιλιατρά, σχεδιασμένη για έναν σκοπό: την τέλεια εξαγωγή.
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed font-light text-lg">
                Η εγκατάστασή μας είναι εξοπλισμένη με την τελευταία λέξη της <strong>τεχνολογίας φυγοκέντρησης ψυχρής έκθλιψης</strong>. Σε αντίθεση με τα παραδοσιακά πιεστήρια που εκθέτουν την πάστα στον αέρα, τα κλειστά συστήματά μας αποτρέπουν την οξείδωση, διατηρώντας τις πτητικές ενώσεις που δίνουν στο λάδι τον χαρακτήρα του.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed font-light text-lg">
                Από τις αυτοματοποιημένες γραμμές πλύσης μέχρι τους ελεγχόμενης θερμοκρασίας μαλακτήρες, κάθε μηχάνημα είναι βαθμονομημένο από τους μηχανικούς μας για να διασφαλιστεί ότι το λάδι εξάγεται στο μέγιστο των δυνατοτήτων του.
              </p>
              <div className="font-serif italic text-2xl text-olive-800 border-l-4 border-gold-500 pl-6 py-2">
                "Δεν βασιζόμαστε μόνο στη φύση. Χρησιμοποιούμε την τεχνολογία για να την τελειοποιήσουμε."
              </div>
            </FadeIn>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 relative">
            <FadeIn direction="left" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="images/3205-1.jpg" 
                  alt="Βιομηχανικός φυγοκεντρικός διαχωριστήρας" 
                  className="w-full h-64 object-cover rounded-sm shadow-xl mt-12"
                />
                <img 
                  src="images/1000055136.jpg" 
                  alt="Ανοξείδωτες δεξαμενές αποθήκευσης" 
                  className="w-full h-80 object-cover rounded-sm shadow-xl"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-olive-100 rounded-full opacity-50 blur-3xl transform translate-x-12 -translate-y-12"></div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;