import React from 'react';
import FadeIn from './FadeIn';

const Quality: React.FC = () => {
  return (
    <section id="quality" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          <div className="lg:w-1/2">
             <FadeIn direction="left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-gold-500"></div>
                <span className="text-gold-500 uppercase tracking-widest text-sm font-bold">Εργαστηριακή Ανάλυση</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">
                Πιστοποιημένες Παράμετροι
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed font-light text-lg">
                Ο ρόλος μας ως παραγωγοί μας επιτρέπει να διεξάγουμε αυστηρούς ελέγχους σε κάθε παρτίδα. Δεν ελπίζουμε απλώς για ποιότητα. Την σχεδιάζουμε μέσω της αυστηρής τήρησης των πρωτοκόλλων παραγωγής.
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  "Οξύτητα < 0.3% (Πρότυπο Παραγωγής)",
                  "Ανάλυση K270 / K232",
                  "Παρακολούθηση Τιμής Υπεροξειδίων",
                  "Οργανοληπτική Αξιολόγηση"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="h-2 w-2 bg-olive-500 rounded-full"></span>
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-white border border-stone-200 shadow-sm rounded-sm">
                 <h4 className="font-serif text-lg text-olive-800 mb-2">Εγγύηση Παραγωγής</h4>
                 <p className="text-stone-600 text-sm italic">
                   "Η υπογραφή μας βρίσκεται στο μπουκάλι επειδή τα χέρια μας χειρίζονται τις μηχανές. Αναλαμβάνουμε την πλήρη ευθύνη για το λάδι από τη χοάνη μέχρι το καπάκι."
                 </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <div className="relative">
                <img 
                  src="images/1000055138.jpg" 
                  alt="Τελικό προϊόν ελαιολάδου" 
                  className="w-full h-auto object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute bottom-8 -right-8 bg-olive-900 text-stone-50 p-8 shadow-xl hidden md:block max-w-xs">
                  <p className="font-serif text-2xl italic mb-2">"100% Παραγωγή & Εμφιάλωση από Εμάς."</p>
                  <p className="text-gold-500 text-sm tracking-widest uppercase">Γεώργιος Παναγόπουλος</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quality;