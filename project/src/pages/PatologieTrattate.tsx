import {
  Activity, Flame, Salad, Brain, Shield, HeartPulse, CircleDot,
  ThermometerSun, Baby, Pill, Wheat, Milk, Gem, Wind, Utensils,
  Cookie, Palette, Stethoscope, ArrowRight, Droplets, Bug, Leaf,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import PageHeader from '../components/PageHeader';

const pathologyCategories = [
  {
    title: 'Metaboliche e Ormonali',
    color: 'ocean' as const,
    icon: HeartPulse,
    description: 'Condizioni legate al metabolismo e al sistema endocrino, trattate con un approccio nutrizionale mirato.',
    conditions: [
      { name: 'PCOS (Sindrome dell\'Ovaio Policistico)', icon: CircleDot, detail: 'Approccio metabolico-nutrizionale per riequilibrio ormonale e gestione dell\'insulino-resistenza.' },
      { name: 'Sindrome Metabolica', icon: Activity, detail: 'Intervento nutrizionale su glicemia, lipidi e pressione arteriosa.' },
      { name: 'Diabete di Tipo 2', icon: Pill, detail: 'Gestione glicemica attraverso piani alimentari personalizzati e a basso indice glicemico.' },
      { name: 'Diabete Gestazionale', icon: Baby, detail: 'Supporto nutrizionale durante la gravidanza per il controllo glicemico.' },
      { name: 'Insulino-resistenza', icon: Flame, detail: 'Strategie nutrizionali per migliorare la sensibilit\u00e0 insulinica.' },
      { name: 'Ipotiroidismo e Tiroidite di Hashimoto', icon: ThermometerSun, detail: 'Nutrizione specifica per supportare la funzione tiroidea.' },
      { name: 'Dislipidemie', icon: Activity, detail: 'Riduzione di colesterolo e trigliceridi attraverso l\'alimentazione.' },
      { name: 'Amenorrea', icon: CircleDot, detail: 'Riequilibrio del ciclo mestruale con supporto nutrizionale e ormonale naturale.' },
      { name: 'Menopausa', icon: Baby, detail: 'Gestione dei sintomi e prevenzione dell\'osteoporosi con nutrizione mirata.' },
    ],
  },
  {
    title: 'Gastrointestinali e Salute Intestinale',
    color: 'sage' as const,
    icon: Salad,
    description: 'Disturbi dell\'apparato digerente e della salute intestinale, con particolare attenzione al microbiota.',
    conditions: [
      { name: 'Sindrome dell\'Intestino Irritabile (IBS)', icon: Wind, detail: 'Protocolli nutrizionali specifici (es. low-FODMAP) per la gestione dei sintomi.' },
      { name: 'Malattia da Reflusso Gastroesofageo', icon: Flame, detail: 'Alimentazione anti-reflusso e gestione dello stile di vita.' },
      { name: 'Disbiosi Intestinale', icon: Bug, detail: 'Riequilibrio della flora batterica attraverso alimentazione e probiotici mirati.' },
      { name: 'Alterazione del Microbiota', icon: Droplets, detail: 'Analisi del microbiota intestinale e piano nutrizionale per il ripristino dell\'eubiosi.' },
      { name: 'SIBO', icon: Leaf, detail: 'Sovracrescita batterica del tenue: protocolli nutrizionali specifici.' },
      { name: 'Celiachia', icon: Wheat, detail: 'Gestione della dieta senza glutine equilibrata e completa.' },
      { name: 'Gonfiore Addominale e Meteorismo', icon: Wind, detail: 'Identificazione dei trigger alimentari e piano per ridurre i sintomi.' },
    ],
  },
  {
    title: 'Intolleranze Alimentari',
    color: 'sand' as const,
    icon: Shield,
    description: 'Gestione delle principali intolleranze con piani alimentari bilanciati e privi di carenze nutrizionali.',
    conditions: [
      { name: 'Intolleranza al Nickel', icon: Gem, detail: 'Dieta a basso contenuto di nickel con attenzione all\'equilibrio nutrizionale e alla variet\u00e0 alimentare.' },
      { name: 'Intolleranza al Glutine (non celiaca)', icon: Wheat, detail: 'Piano alimentare equilibrato con riduzione o eliminazione del glutine.' },
      { name: 'Intolleranza al Lattosio', icon: Milk, detail: 'Alimentazione priva di lattosio con adeguato apporto di calcio e nutrienti essenziali.' },
      { name: 'Allergie Alimentari', icon: Shield, detail: 'Piani personalizzati che escludono gli allergeni garantendo completezza nutrizionale.' },
    ],
  },
  {
    title: 'Nutrizionali e Peso Corporeo',
    color: 'ocean' as const,
    icon: Activity,
    description: 'Gestione del peso e dell\'alimentazione con percorsi sostenibili e personalizzati.',
    conditions: [
      { name: 'Sovrappeso e Obesit\u00e0', icon: Activity, detail: 'Piani alimentari sostenibili per una perdita di peso graduale e duratura.' },
      { name: 'Malnutrizione e Carenze Nutrizionali', icon: Pill, detail: 'Ripristino dello stato nutrizionale con integrazione mirata.' },
      { name: 'Nutrizione in Gravidanza', icon: Baby, detail: 'Supporto nutrizionale completo per mamma e bambino durante la gestazione.' },
      { name: 'Nutrizione Oncologica', icon: Stethoscope, detail: 'Supporto alimentare durante e dopo le terapie oncologiche.' },
      { name: 'Prevenzione Cardiovascolare', icon: HeartPulse, detail: 'Strategie nutrizionali per la salute del cuore e dei vasi sanguigni.' },
    ],
  },
  {
    title: 'Comportamento Alimentare',
    color: 'sage' as const,
    icon: Brain,
    description: 'Disturbi legati al rapporto con il cibo, trattati con un approccio integrato nutrizionale e di counselling.',
    conditions: [
      { name: 'Fame Nervosa', icon: Cookie, detail: 'Tecniche di PNL e counselling per gestire la fame emotiva e le abbuffate compulsive.' },
      { name: 'Bulimia', icon: Utensils, detail: 'Supporto nutrizionale integrato con accompagnamento psicologico.' },
      { name: 'Disturbi del Comportamento Alimentare', icon: Brain, detail: 'Approccio multidisciplinare per il recupero di un rapporto sano con il cibo.' },
    ],
  },
  {
    title: 'Altre Condizioni',
    color: 'sand' as const,
    icon: Stethoscope,
    description: 'Condizioni dermatologiche e di prevenzione generale con approccio nutrizionale integrato.',
    conditions: [
      { name: 'Dermatiti e Problemi Cutanei', icon: Palette, detail: 'Nutrizione anti-infiammatoria per il benessere della pelle.' },
      { name: 'Medicina Preventiva', icon: Stethoscope, detail: 'Strategie nutrizionali per la prevenzione delle patologie croniche.' },
    ],
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string; tagBg: string; tagText: string; border: string }> = {
  ocean: {
    bg: 'bg-ocean-50/50',
    iconBg: 'bg-ocean-100',
    iconText: 'text-ocean-700',
    tagBg: 'bg-ocean-50',
    tagText: 'text-ocean-700',
    border: 'border-ocean-100',
  },
  sage: {
    bg: 'bg-sage-50/50',
    iconBg: 'bg-sage-100',
    iconText: 'text-sage-700',
    tagBg: 'bg-sage-50',
    tagText: 'text-sage-700',
    border: 'border-sage-100',
  },
  sand: {
    bg: 'bg-sand-50/50',
    iconBg: 'bg-sand-100',
    iconText: 'text-sand-700',
    tagBg: 'bg-sand-50',
    tagText: 'text-sand-800',
    border: 'border-sand-100',
  },
};

function CategorySection({ category, index }: { category: typeof pathologyCategories[0]; index: number }) {
  const { ref, isInView } = useInView();
  const colors = colorMap[category.color];

  return (
    <section ref={ref} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-sage-50/40'}`}>
      <div className="container-narrow">
        <div
          className={`flex items-center gap-4 mb-4 transition-all duration-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
            <category.icon className={`w-6 h-6 ${colors.iconText}`} />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ocean-900">{category.title}</h2>
          </div>
        </div>
        <p
          className={`text-gray-600 leading-relaxed mb-8 max-w-3xl transition-all duration-500 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {category.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.conditions.map((cond, i) => (
            <div
              key={cond.name}
              className={`bg-white rounded-xl p-5 border ${colors.border} hover:shadow-md transition-all duration-500 hover:-translate-y-0.5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? `${200 + i * 60}ms` : '0ms' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0`}>
                  <cond.icon className={`w-4 h-4 ${colors.iconText}`} />
                </div>
                <h3 className="font-display text-sm font-semibold text-ocean-900 leading-snug">{cond.name}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{cond.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PatologieTrattate() {
  const { ref: ctaRef, isInView: ctaInView } = useInView();

  return (
    <>
      <PageHeader
        subtitle="Aree di Competenza"
        title="Patologie Trattate"
        description="Un'ampia esperienza clinica al servizio di molteplici condizioni, con un approccio personalizzato che va oltre il singolo sintomo per trattare la persona nella sua globalit&agrave;."
      />

      {pathologyCategories.map((cat, i) => (
        <CategorySection key={cat.title} category={cat} index={i} />
      ))}

      <section ref={ctaRef} className="section-padding bg-ocean-800">
        <div className="container-narrow text-center">
          <div
            className={`transition-all duration-500 ${
              ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Non trovi la tua condizione?
            </h2>
            <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
              L'elenco non &egrave; esaustivo. Se hai una condizione specifica o vuoi sapere se posso aiutarti,
              contattami per un colloquio conoscitivo gratuito.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-ocean-800 font-semibold rounded-full hover:bg-sage-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Contattami
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
