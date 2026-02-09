import { Dna, Microscope, HeartPulse, Leaf, Brain, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import PageHeader from '../components/PageHeader';

function PcosSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-ocean-50 flex items-center justify-center">
                <Dna className="w-7 h-7 text-ocean-600" />
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ocean-900">PCOS</h2>
                <p className="text-ocean-600 font-medium text-sm">Sindrome dell'Ovaio Policistico</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              La Sindrome dell'Ovaio Policistico &egrave; una condizione endocrina complessa che colpisce
              fino al 10% delle donne in et&agrave; fertile. Non si tratta solo di un problema ginecologico:
              la PCOS coinvolge il metabolismo, il sistema ormonale, l'infiammazione e spesso anche
              la sfera emotiva.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Il mio approccio &egrave; <strong className="text-ocean-800">metabolico-nutrizionale</strong>:
              anzich&eacute; limitarmi a gestire i sintomi, lavoro sulle cause profonde dello squilibrio.
              Attraverso un'analisi approfondita del profilo ormonale, metabolico e infiammatorio,
              costruisco percorsi terapeutici personalizzati che agiscono su pi&ugrave; fronti contemporaneamente.
            </p>

            <div className="bg-ocean-50/60 rounded-xl p-6 mb-6">
              <h4 className="font-display font-semibold text-ocean-900 mb-4">L'approccio metabolico-nutrizionale</h4>
              <ul className="space-y-3">
                {[
                  'Riequilibrio ormonale attraverso la nutrizione mirata e l\'integrazione funzionale',
                  'Gestione dell\'insulino-resistenza, spesso alla base della PCOS',
                  'Riduzione dell\'infiammazione cronica di basso grado con protocolli anti-infiammatori',
                  'Supporto alla fertilit\u00e0 e regolarizzazione del ciclo mestruale',
                  'Gestione del peso corporeo con piani sostenibili e personalizzati',
                  'Supporto emotivo e comportamentale con tecniche di PNL e Counselling',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-ocean-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Consulenza nutrizionale personalizzata"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] mb-8"
            />
            <div className="bg-sage-50 rounded-xl p-6">
              <h4 className="font-display font-semibold text-ocean-900 mb-3">Perch&eacute; un approccio integrato?</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                La PCOS non &egrave; uguale per tutte. Esistono diversi fenotipi &mdash; con o senza insulino-resistenza,
                con predominanza androgenica o infiammatoria &mdash; e ciascuno richiede una strategia specifica.
                Il protocollo standard non basta: serve un percorso su misura.
              </p>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 text-ocean-600 font-medium hover:text-ocean-700 transition-colors group text-sm"
              >
                Prenota una consulenza PCOS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetabolomicaSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-sage-50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            className={`lg:order-2 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center">
                <Microscope className="w-7 h-7 text-sage-600" />
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ocean-900">Metabolomica</h2>
                <p className="text-sage-600 font-medium text-sm">La Scienza dei Metaboliti</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              La Metabolomica &egrave; la frontiera pi&ugrave; avanzata della medicina personalizzata. Si tratta dello
              <strong className="text-ocean-800"> studio sistematico dei metaboliti</strong> &mdash; piccole molecole
              prodotte dal metabolismo cellulare &mdash; presenti nel sangue, nelle urine e nei tessuti.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ogni individuo possiede una "firma biochimica" unica. L'analisi metabolomica permette di leggerla,
              identificando squilibri che le analisi tradizionali non riescono a cogliere. &Egrave; come avere
              una fotografia ad alta risoluzione dello stato di salute del paziente.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Questo approccio <strong className="text-ocean-800">data-driven</strong> consente di costruire
              una <strong className="text-ocean-800">dieta di precisione</strong>: un piano nutrizionale
              basato su dati oggettivi e misurabili, non su schemi generici. L'obiettivo &egrave; intervenire
              prima che lo squilibrio diventi patologia conclamata.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Diagnosi Precoce', desc: 'Identificazione di disfunzioni metaboliche prima che si manifestino clinicamente' },
                { title: 'Personalizzazione', desc: 'Piani nutrizionali costruiti su dati biochimici oggettivi del singolo paziente' },
                { title: 'Monitoraggio', desc: 'Verifica scientifica dell\'efficacia del percorso con analisi periodiche' },
                { title: 'Prevenzione', desc: 'Intervento mirato sugli squilibri per prevenire l\'insorgenza di patologie' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow">
                  <h4 className="font-display font-semibold text-ocean-900 mb-1.5 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`lg:order-1 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Analisi di laboratorio metabolomica"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] mb-8"
            />
            <div className="bg-ocean-800 rounded-xl p-6 text-white">
              <h4 className="font-display font-semibold mb-3">Come funziona?</h4>
              <ol className="space-y-3">
                {[
                  'Prelievo di un campione di sangue e/o urine',
                  'Analisi metabolomica avanzata in laboratorio specializzato',
                  'Interpretazione della "firma biochimica" individuale',
                  'Elaborazione di un piano nutrizionale di precisione',
                  'Monitoraggio e aggiustamento periodico del percorso',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/90 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AntiagingSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-ocean-50 flex items-center justify-center">
                <HeartPulse className="w-7 h-7 text-ocean-600" />
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ocean-900">Medicina Antiaging</h2>
                <p className="text-ocean-600 font-medium text-sm">Longevit&agrave; e Vitalit&agrave; Cellulare</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              L'invecchiamento non &egrave; solo una questione anagrafica: &egrave; un processo biologico su cui possiamo
              intervenire attivamente. I veri motori dell'invecchiamento cellulare sono lo
              <strong className="text-ocean-800"> stress ossidativo</strong> e l'
              <strong className="text-ocean-800">infiammazione cronica di basso grado</strong> &mdash;
              processi silenziosi che accelerano il deterioramento dei tessuti e predispongono a patologie degenerative.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Il mio approccio alla medicina antiaging si concentra sulla <strong className="text-ocean-800">prevenzione
              dell'invecchiamento cellulare</strong> attraverso strategie nutrizionali mirate, integrazione funzionale
              e protocolli basati sulle pi&ugrave; recenti evidenze scientifiche in nutrigenomica.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  title: 'Protocolli Anti-infiammatori',
                  desc: 'Piani alimentari ricchi di composti bioattivi, polifenoli e acidi grassi omega-3 per contrastare l\'infiammazione cronica silente.',
                },
                {
                  title: 'Strategie Antiossidanti',
                  desc: 'Integrazione mirata con vitamine, minerali e fitocomplessi per neutralizzare i radicali liberi e proteggere le cellule dallo stress ossidativo.',
                },
                {
                  title: 'Nutrigenomica e Longevit\u00e0',
                  desc: 'Studio dell\'interazione tra nutrienti e geni per attivare i meccanismi cellulari di riparazione e autofagia.',
                },
                {
                  title: 'Supporto Ormonale Naturale',
                  desc: 'Accompagnamento nutrizionale in menopausa e andropausa per mantenere equilibrio ormonale e qualit\u00e0 della vita.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-sage-50 rounded-xl p-5">
                  <h4 className="font-display font-semibold text-ocean-900 mb-1.5">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Stile di vita sano e longevit\u00e0"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] mb-8"
            />
            <div className="bg-gradient-to-br from-ocean-800 to-ocean-900 rounded-xl p-6 text-white">
              <h4 className="font-display font-semibold mb-3">L'obiettivo non &egrave; solo vivere di pi&ugrave;,
                ma vivere meglio.</h4>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                La medicina antiaging non promette l'eterna giovinezza, ma offre strumenti concreti per
                rallentare i processi degenerativi, mantenere energia e vitalit&agrave;, e ridurre il rischio
                di patologie legate all'et&agrave;.
              </p>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 text-sage-300 font-medium hover:text-white transition-colors group text-sm"
              >
                Inizia il tuo percorso antiaging
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherSpecializations() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-sage-50">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p
            className={`text-ocean-600 font-body text-sm tracking-[0.15em] uppercase mb-3 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Altre Competenze
          </p>
          <h2
            className={`font-display text-3xl sm:text-4xl font-bold text-ocean-900 mb-4 transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Discipline Integrate
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '200ms' : '0ms' }}
          >
            <div className="bg-sage-700 p-8">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Omotossicologia</h3>
              <p className="text-white/70 text-sm">Detossificazione e Medicina Complementare</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-[0.95rem]">
                L'Omotossicologia &egrave; l'evoluzione moderna dell'omeopatia classica. Utilizza medicinali a basse
                dosi per stimolare i naturali meccanismi di detossificazione dell'organismo, aiutando il corpo
                a eliminare tossine accumulate e ristabilire l'equilibrio biologico.
              </p>
              <ul className="space-y-2">
                {['Drenaggio e detossificazione dolce', 'Supporto immunitario con medicinali low-dose', 'Integrazione con percorsi nutrizionali'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '350ms' : '0ms' }}
          >
            <div className="bg-ocean-800 p-8">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">PNL e Counselling</h3>
              <p className="text-white/70 text-sm">Supporto Emotivo e Comportamentale</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-[0.95rem]">
                Ogni percorso nutrizionale ha una componente emotiva e comportamentale. Grazie alla Programmazione
                Neuro-Linguistica e al Counselling, accompagno i pazienti nella trasformazione delle abitudini
                mentali che sostengono il cambiamento alimentare.
              </p>
              <ul className="space-y-2">
                {['Trasformazione delle abitudini alimentari', 'Gestione della fame nervosa e dello stress', 'Aumento dell\'aderenza al piano terapeutico'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ocean-600 text-white font-medium rounded-full hover:bg-ocean-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Prenota una Consulenza
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SpecializzazioniPage() {
  return (
    <>
      <PageHeader
        subtitle="Le Mie Specializzazioni"
        title="Aree di Eccellenza"
        description="Ogni area di specializzazione riflette anni di studio e pratica clinica, con un unico obiettivo: offrire al paziente il percorso di cura pi&ugrave; efficace e personalizzato."
      />
      <PcosSection />
      <MetabolomicaSection />
      <AntiagingSection />
      <OtherSpecializations />
    </>
  );
}
