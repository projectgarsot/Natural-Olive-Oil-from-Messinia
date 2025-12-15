import React, { useState, useRef } from 'react';
import FadeIn from './FadeIn';
import { CompanyDetail, FinancialDoc, DocType } from '../types';
import { FileText, MapPin, Building2, UserCheck, Lock, Plus, X, FileBarChart, FileSpreadsheet, Download, Upload, Trash2 } from 'lucide-react';

const details: CompanyDetail[] = [
  { label: 'Επωνυμία', value: 'Φυσικό Ελαιόλαδο Μεσσηνίας Ι.Κ.Ε.' },
  { label: 'Αγγλική Επωνυμία', value: 'Natural Olive Oil of Messinia P.C.' },
  { label: 'ΑΦΜ', value: 'EL 801332669' },
  { label: 'Αρ. ΓΕΜΗ', value: '015458744500' },
  { label: 'Νομική Μορφή', value: 'Ιδιωτική Κεφαλαιουχική Εταιρεία (Ι.Κ.Ε.)' },
  { label: 'Ημερομηνία Ίδρυσης', value: '27 Μαρτίου 2020' },
  { label: 'Νόμιμος Εκπρόσωπος', value: 'Γεώργιος Παναγόπουλος' },
  { label: 'Έδρα', value: 'Δημ. Κεφαλά 2, 24300 Φιλιατρά, Μεσσηνία' },
];

// Initial Mock Data matching the screenshot style (2015-2019)
const initialDocs: FinancialDoc[] = [
  { id: '1', year: '2019', type: 'balance', title: 'ΙΣΟΛΟΓΙΣΜΟΣ ΕΛΠ 2019', url: '#' },
  { id: '2', year: '2018', type: 'balance', title: 'ΙΣΟΛΟΓΙΣΜΟΣ ΕΛΠ 2018', url: '#' },
  { id: '3', year: '2019', type: 'income', title: 'ΑΠΟΤΕΛΕΣΜΑΤΑ ΧΡΗΣΗΣ ΕΛΠ 2019', url: '#' },
  { id: '4', year: '2018', type: 'income', title: 'ΑΠΟΤΕΛΕΣΜΑΤΑ ΧΡΗΣΗΣ ΕΛΠ 2018', url: '#' },
];

const LegalInfo: React.FC = () => {
  const [docs, setDocs] = useState<FinancialDoc[]>(initialDocs);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  
  // Form State
  const [newDocYear, setNewDocYear] = useState(new Date().getFullYear().toString());
  const [newDocType, setNewDocType] = useState<DocType>('balance');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'petrides') {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword('');
    } else {
      alert('Λάθος κωδικός');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddDoc = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert("Παρακαλώ επιλέξτε ένα αρχείο PDF ή εικόνας.");
      return;
    }

    // Create a fake URL for the uploaded file so it works in the browser session
    const objectUrl = URL.createObjectURL(selectedFile);

    const titleBase = newDocType === 'balance' ? 'ΙΣΟΛΟΓΙΣΜΟΣ ΕΛΠ' : 'ΑΠΟΤΕΛΕΣΜΑΤΑ ΧΡΗΣΗΣ ΕΛΠ';
    
    const newDoc: FinancialDoc = {
      id: Math.random().toString(36).substr(2, 9),
      year: newDocYear,
      type: newDocType,
      title: `${titleBase} ${newDocYear}`,
      url: objectUrl
    };

    // Add to top of list
    setDocs([newDoc, ...docs]);
    
    // Reset Form
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDeleteDoc = (id: string) => {
    if (window.confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το έγγραφο;')) {
      setDocs(docs.filter(doc => doc.id !== id));
    }
  };

  const balanceSheets = docs.filter(d => d.type === 'balance');
  const incomeStatements = docs.filter(d => d.type === 'income');

  return (
    <section id="legal" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 relative">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">Εταιρική Διαφάνεια</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Λειτουργούμε με πλήρη διαφάνεια και συμμόρφωση με το ελληνικό εταιρικό δίκαιο.
            </p>
            
            {/* Admin Trigger */}
            <button 
              onClick={() => isAdmin ? setIsAdmin(false) : setShowLogin(true)}
              className="absolute right-0 top-0 text-stone-300 hover:text-gold-500 transition-colors p-2"
              title={isAdmin ? "Έξοδος Διαχειριστή" : "Είσοδος Διαχειριστή"}
            >
              {isAdmin ? <UserCheck size={20} /> : <Lock size={20} />}
            </button>
          </div>
        </FadeIn>

        {/* --- OFFICIAL DETAILS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <FadeIn direction="up" delay={100}>
            <div className="bg-white p-8 shadow-sm border-t-4 border-olive-600 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-olive-600" size={24} />
                <h3 className="font-serif text-2xl text-stone-800">Ταυτότητα Εταιρείας</h3>
              </div>
              <dl className="space-y-4">
                {details.slice(0, 5).map((detail) => (
                  <div key={detail.label} className="border-b border-stone-100 pb-3 last:border-0">
                    <dt className="text-xs uppercase tracking-wider text-stone-400 mb-1">{detail.label}</dt>
                    <dd className="text-stone-800 font-medium">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="bg-white p-8 shadow-sm border-t-4 border-gold-500 h-full">
               <div className="flex items-center gap-3 mb-6">
                <UserCheck className="text-gold-500" size={24} />
                <h3 className="font-serif text-2xl text-stone-800">Διοίκηση & Τοποθεσία</h3>
              </div>
              <dl className="space-y-4">
                {details.slice(5).map((detail) => (
                  <div key={detail.label} className="border-b border-stone-100 pb-3 last:border-0">
                    <dt className="text-xs uppercase tracking-wider text-stone-400 mb-1">{detail.label}</dt>
                    <dd className="text-stone-800 font-medium">{detail.value}</dd>
                  </div>
                ))}
                <div className="mt-6 pt-4">
                  <div className="flex items-start space-x-2 text-stone-500 text-sm">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <span>Με έδρα την καρδιά της Μεσσηνίας, Ελλάδα. <br/>Δ.Ο.Υ. Καλαμάτας</span>
                  </div>
                   <div className="flex items-start space-x-2 text-stone-500 text-sm mt-2">
                    <FileText size={16} className="mt-1 flex-shrink-0" />
                    <span>Διπλογραφικά Βιβλία (Κατηγορία Γ')</span>
                  </div>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>

        {/* --- FINANCIAL STATEMENTS (GEMI STYLE) --- */}
        <div className="max-w-5xl mx-auto border-t border-stone-200 pt-16">
          <FadeIn>
            <h3 className="font-serif text-4xl text-stone-800 mb-1">Δημοσιεύσεις Γ.Ε.ΜΗ.</h3>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-0.5 w-10 bg-orange-600"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-stone-400 uppercase">Εταιρικη Διαφανεια & Οικονομικα Στοιχεια</span>
            </div>
            
            {/* Admin Add Panel */}
            {isAdmin && (
              <div className="mb-12 bg-stone-200 p-6 rounded-lg border border-stone-300 animate-pulse">
                <h4 className="font-bold text-olive-900 mb-4 flex items-center gap-2">
                  <Plus size={20} /> Προσθήκη Νέας Δημοσίευσης
                </h4>
                <form onSubmit={handleAddDoc} className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="w-full md:w-auto">
                    <label className="block text-xs font-bold text-stone-600 mb-1">Έτος Χρήσης</label>
                    <input 
                      type="number" 
                      value={newDocYear}
                      onChange={e => setNewDocYear(e.target.value)}
                      className="p-2 border border-stone-300 rounded w-full md:w-32"
                    />
                  </div>
                  <div className="w-full md:w-auto">
                    <label className="block text-xs font-bold text-stone-600 mb-1">Τύπος Εγγράφου</label>
                    <select 
                      value={newDocType}
                      onChange={e => setNewDocType(e.target.value as DocType)}
                      className="p-2 border border-stone-300 rounded w-full md:w-64"
                    >
                      <option value="balance">Ισολογισμός</option>
                      <option value="income">Αποτελέσματα Χρήσης</option>
                    </select>
                  </div>
                  <div className="w-full md:w-auto flex-grow">
                     <label className="block text-xs font-bold text-stone-600 mb-1">Αρχείο PDF/Εικόνα</label>
                     <div className="relative">
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full p-1.5 bg-white border border-stone-300 rounded text-sm text-stone-600 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-olive-50 file:text-olive-700 hover:file:bg-olive-100"
                        />
                     </div>
                  </div>
                  <button type="submit" disabled={!selectedFile} className="bg-olive-600 text-white px-6 py-2 rounded hover:bg-olive-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center">
                    <Upload size={16} /> Δημοσίευση
                  </button>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Balance Sheets Column */}
              <div className="bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                  <FileSpreadsheet className="text-gold-600" size={24} />
                  <h4 className="font-serif text-xl text-stone-800 font-bold">Ισολογισμοί</h4>
                </div>
                <div className="space-y-3">
                  {balanceSheets.map(doc => (
                    <div key={doc.id} className="flex items-center gap-2 group">
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-between p-3 bg-stone-50 hover:bg-stone-100 transition-colors border border-transparent hover:border-stone-200 rounded text-stone-600 hover:text-olive-700">
                        <span className="text-sm font-medium">{doc.title}</span>
                        <Download size={16} className="text-stone-300 group-hover:text-gold-500" />
                      </a>
                      {isAdmin && (
                        <button 
                          onClick={() => handleDeleteDoc(doc.id)}
                          className="p-3 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Διαγραφή"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                  {balanceSheets.length === 0 && <p className="text-sm text-stone-400 italic">Δεν υπάρχουν καταχωρήσεις.</p>}
                </div>
              </div>

              {/* Income Statements Column */}
              <div className="bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                  <FileBarChart className="text-olive-600" size={24} />
                  <h4 className="font-serif text-xl text-stone-800 font-bold">Αποτελέσματα Χρήσης</h4>
                </div>
                <div className="space-y-3">
                  {incomeStatements.map(doc => (
                    <div key={doc.id} className="flex items-center gap-2 group">
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-between p-3 bg-stone-50 hover:bg-stone-100 transition-colors border border-transparent hover:border-stone-200 rounded text-stone-600 hover:text-olive-700">
                        <span className="text-sm font-medium">{doc.title}</span>
                        <Download size={16} className="text-stone-300 group-hover:text-gold-500" />
                      </a>
                      {isAdmin && (
                        <button 
                          onClick={() => handleDeleteDoc(doc.id)}
                          className="p-3 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Διαγραφή"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                  {incomeStatements.length === 0 && <p className="text-sm text-stone-400 italic">Δεν υπάρχουν καταχωρήσεις.</p>}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm">
            <div className="bg-white p-8 rounded shadow-2xl max-w-sm w-full relative">
              <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-stone-400 hover:text-red-500">
                <X size={20} />
              </button>
              <h3 className="font-serif text-xl mb-6 text-center">Είσοδος Διαχειριστή</h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-stone-600 mb-1">Κωδικός Πρόσβασης</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-stone-300 rounded focus:border-gold-500 outline-none"
                    placeholder="••••••••"
                  />
                </div>
                <button type="submit" className="w-full bg-olive-900 text-white py-2 rounded hover:bg-olive-800 transition-colors">
                  Είσοδος
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default LegalInfo;