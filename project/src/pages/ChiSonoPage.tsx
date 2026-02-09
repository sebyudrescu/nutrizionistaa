import { GraduationCap, Heart, Brain, Leaf, Microscope, Building2, Stethoscope, Quote, Eye, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import PageHeader from '../components/PageHeader';

const formation = [
  {
    year: 'Formazione Accademica',
    icon: GraduationCap,
    title: 'Laurea in Medicina e Chirurgia',
    institution: 'Universit\u00e0 del Piemonte Orientale',
    description: 'Solida preparazione medico-scientifica con focus su anatomia, fisiologia e biochimica clinica.',
  },
  {
    year: 'Specializzazione',
    icon: Microscope,
    title: 'Patologia Clinica e Diagnostica',
    institution: 'Diagnostica avanzata e medicina di laboratorio',
    description: 'Competenze avanzate nell\'interpretazione di analisi cliniche, fondamentali per una diagnosi nutrizionale precisa.',
  },
  {
    year: 'Sanit\u00e0 Pubblica',
    icon: Stethoscope,
    title: 'Igiene e Medicina Preventiva',
    institution: 'Formazione in sanit\u00e0 pubblica e prevenzione',
    description: 'Approccio preventivo alla salute, con focus sull\'epidemiologia e la promozione di stili di vita sani.',
  },
  {
    year: 'Discipline Integrate',
    icon: Leaf,
    title: 'Omeopatia e Omotossicologia',
    institution: 'Percorso pluriennale \u2014 PRM Academy',
    description: 'Studio approfondito della medicina complementare per integrare approcci dolci e naturali nella pratica clinica.',
  },
  {
    year: 'Comunicazione',
    icon: Brain,
    title: 'Master in PNL',
    institution: 'Programmazione Neuro-Linguistica applicata alla salute',
    description: 'Tecniche avanzate di comunicazione terapeutica per supportare il cambiamento comportamentale e alimentare del paziente.',
  },
  {
    year: 'Ascolto',
    icon: Heart,
    title: 'Scuola di Counselling',
    institution: 'Ascolto empatico e comunicazione terapeutica',
    description: 'Formazione nell\'arte dell\'ascolto attivo e della relazione d\'aiuto, pilastro della medicina empatica.',
  },
];

const clinicalExperience = [
  {
    icon: Building2,
    location: 'Ospedale di Novara',
    description: 'Pratica clinica ospedaliera e formazione sul campo in ambiente multidisciplinare.',
  },
  {
    icon: Building2,
    location: 'Direzione Medica ASL TO4 \u2014 Ciri\u00e8',
    description: 'Esperienza in sanit\u00e0 pubblica, igiene e medicina preventiva territoriale.',
  },
];

const visionPillars = [
  {
    icon: Eye,
    title: 'Visione Globale',
    description: 'Ogni persona \u00e8 un sistema complesso in cui corpo, mente e emozioni sono interconnessi. Non tratto solo il sintomo, ma cerco le cause profonde dello squilibrio.',
  },
  {
    icon: Sparkles,
    title: 'Medicina Integrata',
    description: 'Unisco il rigore della medicina convenzionale con le discipline complementari: omeopatia, omotossicologia, PNL e counselling per un approccio terapeutico completo.',
  },
  {
    icon: Users,
    title: 'Relazione Terapeutica',
    description: 'La cura inizia dall\'ascolto. Dedico tempo a conoscere ogni paziente, costruendo un rapporto di fiducia che \u00e8 il fondamento di ogni percorso di guarigione.',
  },
];

export default function ChiSonoPage() {
  const { ref: bioRef, isInView: bioInView } = useInView();
  const { ref: visionRef, isInView: visionInView } = useInView();
  const { ref: timelineRef, isInView: timelineInView } = useInView();
  const { ref: expRef, isInView: expInView } = useInView();

  return (
    <>
      <PageHeader
        subtitle="Medico Chirurgo &middot; Nutrizionista"
        title="Chi Sono"
        description="Un percorso professionale guidato dalla passione per la medicina empatica e dalla convinzione che ogni paziente meriti un approccio unico e personalizzato."
      />

      <section ref={bioRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="relative sticky top-24">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                  alt="Dott.ssa Maria Catena Restifo"
                  className={`w-full rounded-2xl shadow-xl object-cover aspect-[4/5] transition-all duration-700 ${
                    bioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                />
                <div className="absolute -bottom-6 -right-6 bg-ocean-600 text-white rounded-2xl px-6 py-4 shadow-lg">
                  <p className="text-3xl font-display font-bold">10+</p>
                  <p className="text-sm text-white/80">Anni di esperienza</p>
                </div>
              </div>
            </div>

            <div>
              <div
                className={`relative border-l-4 border-ocean-400 bg-ocean-50/60 rounded-r-xl pl-6 pr-6 py-5 mb-8 transition-all duration-600 delay-200 ${
                  bioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Quote className="w-8 h-8 text-ocean-300 mb-2" />
                <p className="text-ocean-800 font-display text-lg italic leading-relaxed">
                  Accompagno i pazienti in un percorso di salute e guarigione, ascoltando i disagi fisici
                  ed emotivi per creare soluzioni terapeutiche personalizzate. Offro una medicina empatica
                  e innovativa.
                </p>
                <p className="text-ocean-600 text-sm mt-3 font-medium">&mdash; Dott.ssa Maria Catena Restifo</p>
              </div>

              <div
                className={`space-y-4 text-gray-600 leading-relaxed transition-all duration-500 delay-300 ${
                  bioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p>
                  Sono la Dott.ssa Maria Catena Restifo, Medico Chirurgo e Nutrizionista con studio a Torino.
                  Da oltre dieci anni il mio impegno &egrave; dedicato a una medicina che mette la persona al centro,
                  combinando rigore scientifico e sensibilit&agrave; umana.
                </p>
                <p>
                  Il mio percorso unisce una solida formazione accademica &mdash; dalla Laurea in Medicina alla
                  Specializzazione in Patologia Clinica &mdash; a discipline integrate come l'Omeopatia, la
                  Programmazione Neuro-Linguistica e il Counselling. Questa visione multidisciplinare mi
                  permette di comprendere e trattare il paziente nella sua globalit&agrave;, andando oltre il
                  singolo sintomo.
                </p>
                <p>
                  La mia pratica quotidiana si fonda sull'ascolto: ogni paziente ha una storia unica, e solo
                  comprendendo a fondo le sue esigenze fisiche ed emotive posso costruire un percorso terapeutico
                  realmente efficace. Questo approccio integrato &mdash; che unisce nutrizione clinica, metabolomica
                  e discipline complementari &mdash; rappresenta il cuore della mia professione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={visionRef} className="section-padding bg-sage-50">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p
              className={`text-ocean-600 font-body text-sm tracking-[0.15em] uppercase mb-3 transition-all duration-500 ${
                visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              La Mia Filosofia
            </p>
            <h2
              className={`font-display text-3xl sm:text-4xl font-bold text-ocean-900 mb-4 transition-all duration-500 delay-100 ${
                visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Visione Olistica della Salute
            </h2>
            <p
              className={`text-gray-600 leading-relaxed transition-all duration-500 delay-200 ${
                visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              La salute non &egrave; semplicemente l'assenza di malattia, ma uno stato di equilibrio
              tra corpo, mente e spirito. Il mio approccio olistico si fonda su tre pilastri fondamentali.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: visionInView ? `${250 + i * 120}ms` : '0ms' }}
              >
                <div className="w-14 h-14 rounded-xl bg-ocean-50 flex items-center justify-center mb-5">
                  <pillar.icon className="w-7 h-7 text-ocean-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ocean-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[0.95rem]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p
              className={`text-ocean-600 font-body text-sm tracking-[0.15em] uppercase mb-3 transition-all duration-500 ${
                timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Percorso Formativo
            </p>
            <h2
              className={`font-display text-3xl sm:text-4xl font-bold text-ocean-900 mb-4 transition-all duration-500 delay-100 ${
                timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Formazione e Crescita Professionale
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-ocean-200 -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-12">
              {formation.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center transition-all duration-600 ${
                    timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: timelineInView ? `${200 + i * 100}ms` : '0ms' }}
                >
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-ocean-600 items-center justify-center z-10 shadow-md">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="bg-sage-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3 lg:hidden">
                        <div className="w-10 h-10 rounded-full bg-ocean-600 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-ocean-600 tracking-wider uppercase">{item.year}</span>
                      </div>
                      <span className="hidden lg:inline-block text-xs font-semibold text-ocean-600 tracking-wider uppercase mb-2">{item.year}</span>
                      <h3 className="font-display text-lg font-semibold text-ocean-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-ocean-600 font-medium mb-2">{item.institution}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {i % 2 === 0 && <div className="hidden lg:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={expRef} className="section-padding bg-sage-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p
              className={`text-ocean-600 font-body text-sm tracking-[0.15em] uppercase mb-3 transition-all duration-500 ${
                expInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Esperienza Clinica
            </p>
            <h3
              className={`font-display text-2xl sm:text-3xl font-bold text-ocean-900 transition-all duration-500 delay-100 ${
                expInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Tirocini e Pratica sul Campo
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {clinicalExperience.map((item, i) => (
              <div
                key={item.location}
                className={`relative bg-white rounded-xl p-6 border border-ocean-100 transition-all duration-500 hover:shadow-md hover:border-ocean-200 ${
                  expInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: expInView ? `${300 + i * 120}ms` : '0ms' }}
              >
                <div className="w-11 h-11 rounded-lg bg-ocean-200/60 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-ocean-700" />
                </div>
                <h4 className="font-display text-lg font-semibold text-ocean-900 mb-2">{item.location}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-ocean-600 text-white font-medium rounded-full hover:bg-ocean-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Prenota una Consulenza
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
