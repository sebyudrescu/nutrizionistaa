import { Check, Video, MapPin, Monitor, FlaskConical, Droplets, Atom, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import PageHeader from '../components/PageHeader';

const consultations = [
  {
    title: 'Colloquio Conoscitivo Online',
    price: '0',
    priceLabel: 'Gratuito',
    duration: '15 minuti',
    featured: false,
    highlight: true,
    description: 'Un primo incontro senza impegno per aiutarti a orientarti verso il servizio pi\u00f9 adatto alle tue esigenze.',
    features: [
      'Videochiamata gratuita di 15 minuti',
      'Presentazione del metodo di lavoro',
      'Valutazione iniziale delle tue esigenze',
      'Orientamento al percorso pi\u00f9 adatto',
      'Senza alcun impegno',
    ],
  },
  {
    title: 'Prima Visita Nutrizionale',
    price: '130',
    duration: '60-90 minuti',
    featured: true,
    features: [
      'Anamnesi completa e storia clinica',
      'Valutazione antropometrica e composizione corporea',
      'Analisi delle abitudini alimentari',
      'Piano alimentare personalizzato',
      'Obiettivi e strategia nutrizionale',
    ],
  },
  {
    title: 'Consulenza Online Completa',
    price: '120',
    duration: '60 minuti',
    featured: false,
    features: [
      'Visita nutrizionale completa in videochiamata',
      'Stesse modalit\u00e0 della visita in studio',
      'Piano alimentare personalizzato via email',
      'Ideale per chi vive fuori Torino',
      'Flessibilit\u00e0 di orario',
    ],
  },
  {
    title: 'Visita di Controllo',
    price: '100',
    priceNote: 'da',
    duration: '30-45 minuti',
    featured: false,
    features: [
      'Verifica dei progressi e aderenza al piano',
      'Aggiornamento misure antropometriche',
      'Adeguamento del piano alimentare',
      'Supporto motivazionale continuo',
      'Risposta a dubbi e difficolt\u00e0',
    ],
  },
  {
    title: 'Percorsi di Diet Coaching',
    price: '130 \u2013 290',
    duration: 'Variabile',
    featured: false,
    features: [
      'Accompagnamento continuativo personalizzato',
      'Educazione alimentare e consapevolezza',
      'Strategie per il cambiamento delle abitudini',
      'Supporto via WhatsApp tra le sedute',
      'Monitoraggio costante dei risultati',
    ],
  },
  {
    title: 'Piani Alimentari Personalizzati',
    price: '60 \u2013 130',
    duration: 'Su misura',
    featured: false,
    features: [
      'Dieta Chetogenica su misura',
      'Dieta Mediterranea personalizzata',
      'Piano nutrizionale in Gravidanza',
      'Adattamento a intolleranze e allergie',
      'Ricettario e guida pratica inclusi',
    ],
  },
];

const analyses = [
  {
    icon: FlaskConical,
    title: 'Analisi del Microbiota Intestinale',
    price: '\u20ac200',
    description: 'Test avanzato della flora batterica con referto personalizzato e piano nutrizionale mirato al riequilibrio.',
  },
  {
    icon: Atom,
    title: 'Impedenziometria (BIA)',
    price: '\u20ac40',
    description: 'Valutazione della composizione corporea: massa grassa, massa magra, idratazione e metabolismo basale.',
  },
  {
    icon: Droplets,
    title: 'Esame del Sangue Specifico',
    price: '\u20ac172',
    description: 'Pannello ematico mirato per valutare lo stato metabolico, ormonale e nutrizionale del paziente.',
  },
  {
    icon: Atom,
    title: 'Mineralogramma',
    price: 'Su richiesta',
    description: 'Analisi dei metalli pesanti e dei minerali tramite capello per valutare accumuli tossici e carenze minerali.',
    note: 'Prezzo su richiesta',
  },
];

export default function ServiziTariffePage() {
  const { ref: consultRef, isInView: consultInView } = useInView();
  const { ref: analysisRef, isInView: analysisInView } = useInView();
  const { ref: infoRef, isInView: infoInView } = useInView();

  return (
    <>
      <PageHeader
        subtitle="Listino Prezzi e Servizi"
        title="Servizi e Tariffe"
        description="Tariffe chiare e trasparenti, perch&eacute; la fiducia inizia dalla trasparenza. Tutte le prestazioni sono detraibili fiscalmente come spese sanitarie."
      />

      <section ref={consultRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div
            className={`bg-gradient-to-br from-ocean-800 to-ocean-900 rounded-2xl p-8 sm:p-10 mb-12 transition-all duration-500 ${
              consultInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-sage-300" />
                  <h3 className="font-display text-xl font-bold text-white">
                    Colloquio Conoscitivo Gratuito
                  </h3>
                </div>
                <p className="text-white/80 text-[0.95rem] leading-relaxed">
                  Non sai da dove iniziare? Prenota un colloquio conoscitivo gratuito di <strong className="text-white">15 minuti</strong> in
                  videochiamata. &Egrave; un'occasione per conoscerci, capire le tue esigenze e orientarti verso il
                  percorso pi&ugrave; adatto a te. <strong className="text-white">Senza alcun impegno.</strong>
                </p>
              </div>
              <Link
                to="/contatti"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-ocean-800 font-semibold rounded-full hover:bg-sage-50 transition-all duration-300 hover:shadow-lg text-sm"
              >
                Prenota Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <h3
            className={`font-display text-2xl font-bold text-ocean-800 mb-8 transition-all duration-500 ${
              consultInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Consulenze Nutrizionali
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultations.filter(c => !c.highlight).map((service, i) => (
              <div
                key={service.title}
                className={`relative bg-white rounded-2xl p-7 transition-all duration-500 hover:shadow-lg flex flex-col border ${
                  service.featured ? 'ring-2 ring-ocean-500 border-ocean-100' : 'border-gray-100'
                } ${consultInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: consultInView ? `${250 + i * 80}ms` : '0ms' }}
              >
                {service.featured && (
                  <span className="absolute -top-3 left-6 bg-ocean-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Pi&ugrave; Richiesta
                  </span>
                )}

                <h4 className="font-display text-lg font-semibold text-ocean-900 mb-1">
                  {service.title}
                </h4>
                {service.duration && (
                  <p className="text-xs text-gray-500 mb-3">{service.duration}</p>
                )}

                <div className="flex items-baseline gap-1.5 mb-5">
                  {service.priceNote && (
                    <span className="text-sm text-gray-500">{service.priceNote}</span>
                  )}
                  {'priceLabel' in service && service.priceLabel ? (
                    <span className="text-2xl font-display font-bold text-emerald-600">
                      {service.priceLabel}
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-ocean-700">&euro;</span>
                      <span className="text-3xl font-display font-bold text-ocean-800">
                        {service.price}
                      </span>
                    </>
                  )}
                </div>

                <div className="border-t border-gray-100 mb-5" />

                <ul className="space-y-2.5 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-ocean-500" />
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contatti"
                  className={`block text-center py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    service.featured
                      ? 'bg-ocean-600 text-white hover:bg-ocean-700'
                      : 'bg-ocean-50 text-ocean-700 hover:bg-ocean-100'
                  }`}
                >
                  Prenota Ora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={analysisRef} className="section-padding bg-sage-50">
        <div className="container-narrow">
          <h3
            className={`font-display text-2xl font-bold text-ocean-800 mb-8 transition-all duration-500 ${
              analysisInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Analisi e Test Avanzati
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {analyses.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-lg ${
                  analysisInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: analysisInView ? `${200 + i * 80}ms` : '0ms' }}
              >
                <div className="w-11 h-11 rounded-xl bg-ocean-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-ocean-600" />
                </div>
                <h4 className="font-display text-base font-semibold text-ocean-900 mb-1.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xl font-display font-bold text-ocean-700 mb-3">
                  {item.price}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {item.note && (
                  <p className="text-xs text-ocean-600 font-medium mt-2">{item.note}</p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Per percorsi personalizzati (Omeopatia, Omotossicologia, Metabolomica) i costi vengono concordati in fase di consulto iniziale.
          </p>
        </div>
      </section>

      <section ref={infoRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 transition-all duration-500 ${
              infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-ocean-50 flex items-center justify-center">
                <Video className="w-5 h-5 text-ocean-600" />
              </div>
              <div>
                <p className="font-medium text-ocean-900 text-sm">Consulenze Online</p>
                <p className="text-xs text-gray-500">Comodamente da casa tua</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-sage-600" />
              </div>
              <div>
                <p className="font-medium text-ocean-900 text-sm">Visite in Studio</p>
                <p className="text-xs text-gray-500">Torino, su appuntamento</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-sand-600" />
              </div>
              <div>
                <p className="font-medium text-ocean-900 text-sm">Adulti e Bambini</p>
                <p className="text-xs text-gray-500">A partire dai 6 anni</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
