import { Link } from 'react-router-dom';
import { Stethoscope, ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'Chi Sono', to: '/chi-sono' },
  { label: 'Specializzazioni', to: '/specializzazioni' },
  { label: 'Servizi e Tariffe', to: '/servizi-tariffe' },
  { label: 'Patologie', to: '/patologie' },
  { label: 'Contatti', to: '/contatti' },
];

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <Stethoscope className="w-6 h-6 text-sage-400" />
              <span className="font-display text-lg font-semibold">
                Dott.ssa Restifo
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Medico Chirurgo e Nutrizionista. Medicina empatica e innovativa
              al servizio della persona.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Navigazione</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Servizi Principali</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Nutrizione Clinica</p>
              <p>PCOS - Ovaio Policistico</p>
              <p>Metabolomica</p>
              <p>Medicina Antiaging</p>
              <p>Omeopatia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Dott.ssa Maria Catena Restifo. Tutti i diritti riservati.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            Torna su
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
