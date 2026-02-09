import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Dna, Microscope, HeartPulse, Leaf, Users, Brain } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import BmiCalculator from '../components/BmiCalculator';

const highlights = [
  {
    icon: Dna,
    title: 'PCOS',
    desc: 'Approccio metabolico-nutrizionale per la sindrome dell\'ovaio policistico',
  },
  {
    icon: Microscope,
    title: 'Metabolomica',
    desc: 'Dieta di precisione basata sullo studio dei metaboliti',
  },
  {
    icon: HeartPulse,
    title: 'Antiaging',
    desc: 'Prevenzione dell\'invecchiamento cellulare e longevit\u00e0',
  },
  {
    icon: Leaf,
    title: 'Omotossicologia',
    desc: 'Detossificazione e medicina complementare integrata',
  },
];

export default function HomePage() {
  const { ref: highlightRef, isInView: highlightInView } = useInView();
  const { ref: ctaRef, isInView: ctaInView } = useInView();
  const { ref: introRef, isInView: introInView } = useInView();

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Dottoressa nutrizionista"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/85 via-ocean-800/70 to-ocean-900/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <p className="text-sage-300 font-body text-sm tracking-[0.2em] uppercase mb-6 animate-fade-up opacity-0">
              Medico Chirurgo &middot; Nutrizionista &middot; Torino
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 animate-fade-up opacity-0 animate-delay-100">
              Dott.ssa Maria Catena
              <span className="block text-sage-300">Restifo</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-lg animate-fade-up opacity-0 animate-delay-200">
              Una medicina empatica e innovativa, che tratta ogni paziente nella sua unicit&agrave;.
              Oltre 10 anni di esperienza tra nutrizione clinica, metabolomica e discipline integrate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animate-delay-300">
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-ocean-800 font-semibold rounded-full hover:bg-sage-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Prenota una Visita
              </Link>
              <Link
                to="/chi-sono"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Scopri di Pi&ugrave;
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#specializzazioni-preview"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scorri verso il basso"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </section>

      <section ref={introRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-700 ${
                introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-ocean-600 font-body text-sm tracking-[0.15em] uppercase mb-3">
                Chi Sono
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean-900 mb-6">
                Medicina empatica al servizio della persona
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sono la Dott.ssa Maria Catena Restifo, Medico Chirurgo e Nutrizionista con studio a Torino.
                Da oltre dieci anni il mio impegno &egrave; dedicato a una medicina che mette la persona al centro,
                combinando rigore scientifico e sensibilit&agrave; umana.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Il mio percorso unisce una solida formazione accademica a discipline integrate come l'Omeopatia,
                la Programmazione Neuro-Linguistica e il Counselling.
              </p>
              <Link
                to="/chi-sono"
                className="inline-flex items-center gap-2 text-ocean-600 font-medium hover:text-ocean-700 transition-colors group"
              >
                Scopri il mio percorso
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div
              className={`relative transition-all duration-700 delay-200 ${
                introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Dott.ssa Maria Catena Restifo"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-ocean-600 text-white rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-3xl font-display font-bold">10+</p>
                <p className="text-sm text-white/80">Anni di esperienza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specializzazioni-preview" ref={highlightRef} className="section-padding bg-sage-50">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p
              className={`text-ocean-600 font-body text-sm tracking-[0.15em] uppercase mb-3 transition-all duration-500 ${
                highlightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Le Mie Specializzazioni
            </p>
            <h2
              className={`font-display text-3xl sm:text-4xl font-bold text-ocean-900 mb-4 transition-all duration-500 delay-100 ${
                highlightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Aree di Eccellenza
            </h2>
            <p
              className={`text-gray-600 leading-relaxed transition-all duration-500 delay-200 ${
                highlightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Ogni area di specializzazione riflette anni di studio e pratica clinica,
              con un unico obiettivo: offrire al paziente il percorso di cura pi&ugrave; efficace e personalizzato.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-7 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group ${
                  highlightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: highlightInView ? `${200 + i * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-ocean-50 flex items-center justify-center mb-5 group-hover:bg-ocean-100 transition-colors">
                  <item.icon className="w-6 h-6 text-ocean-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ocean-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/specializzazioni"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-ocean-600 text-white font-medium rounded-full hover:bg-ocean-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Scopri le Specializzazioni
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div
            className={`rounded-2xl bg-gradient-to-br from-ocean-800 to-ocean-900 p-8 sm:p-12 transition-all duration-500 ${
              ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-sage-300" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Counselling e PNL
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed text-[0.95rem] mb-4">
                  Ogni percorso nutrizionale ha una componente emotiva e comportamentale. Grazie alla formazione in
                  Counselling e Programmazione Neuro-Linguistica (PNL), accompagno i pazienti non solo nel
                  cambiamento alimentare, ma anche nella trasformazione delle abitudini mentali che lo sostengono.
                </p>
              </div>
              <div className="lg:w-auto shrink-0 flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10">
                <Users className="w-8 h-8 text-sage-300" />
                <div className="text-center">
                  <p className="text-white font-display font-bold text-lg">Adulti e Bambini</p>
                  <p className="text-white/60 text-sm">dai 6 anni in su</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BmiCalculator />
    </>
  );
}
