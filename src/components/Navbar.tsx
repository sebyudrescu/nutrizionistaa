import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';

const navLinks = [
  { label: 'Chi Sono', to: '/chi-sono' },
  { label: 'Specializzazioni', to: '/specializzazioni' },
  { label: 'Servizi e Tariffe', to: '/servizi-tariffe' },
  { label: 'Patologie', to: '/patologie' },
  { label: 'Contatti', to: '/contatti' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const showSolid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <Stethoscope
              className={`w-6 h-6 transition-colors duration-300 ${
                showSolid ? 'text-ocean-600' : 'text-white'
              }`}
            />
            <span
              className={`font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${
                showSolid ? 'text-ocean-800' : 'text-white'
              }`}
            >
              Dott.ssa Restifo
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                  location.pathname === link.to
                    ? showSolid
                      ? 'text-ocean-600'
                      : 'text-white'
                    : showSolid
                      ? 'text-ocean-800'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                showSolid
                  ? 'bg-ocean-600 text-white hover:bg-ocean-700'
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30'
              }`}
            >
              Prenota Visita
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              showSolid ? 'text-ocean-800' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'bg-ocean-50 text-ocean-700'
                    : 'text-ocean-800 hover:bg-sage-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              className="block mx-4 mt-3 text-center px-5 py-3 bg-ocean-600 text-white font-medium rounded-full hover:bg-ocean-700 transition-colors"
            >
              Prenota Visita
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
