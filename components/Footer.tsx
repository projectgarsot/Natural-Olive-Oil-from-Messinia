import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-olive-900 text-stone-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl text-stone-50 mb-6">
              ΜΕΣΣΗΝΙΑΣ<span className="text-gold-500">.</span>
            </h2>
            <p className="max-w-md font-light leading-relaxed mb-6">
              Αυθεντικό Εξαιρετικό Παρθένο Ελαιόλαδο που παράγεται με σεβασμό στη φύση και την παράδοση. Γευτείτε την αληθινή γεύση της Ελλάδας.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-stone-50 font-serif text-xl mb-6">Επικοινωνία</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 text-gold-500" size={18} />
                <span>Δημ. Κεφαλά 2, <br/>24300 Φιλιατρά, Μεσσηνία</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gold-500" size={18} />
                <span>+30 2761 000000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gold-500" size={18} />
                <a href="mailto:info@oliveoilofmessinia.gr" className="hover:text-white transition-colors">info@oliveoilofmessinia.gr</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-stone-50 font-serif text-xl mb-6">Μενού</h3>
             <ul className="space-y-3">
              <li><a href="#facility" className="hover:text-gold-500 transition-colors text-sm">Η Εγκατάσταση</a></li>
              <li><a href="#process" className="hover:text-gold-500 transition-colors text-sm">Η Διαδικασία</a></li>
              <li><a href="#quality" className="hover:text-gold-500 transition-colors text-sm">Ποιότητα</a></li>
              <li><a href="#legal" className="hover:text-gold-500 transition-colors text-sm">Εταιρεία</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-olive-400">
          <p>&copy; {new Date().getFullYear()} Φυσικό Ελαιόλαδο Μεσσηνίας Ι.Κ.Ε. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-200">Πολιτική Απορρήτου</a>
            <a href="#" className="hover:text-stone-200">Όροι Χρήσης</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;