import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, RotateCcw } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface BmiResult {
  value: number;
  category: string;
  color: string;
  barColor: string;
  message: string;
}

function calculateBmi(weight: number, heightCm: number): BmiResult | null {
  if (weight <= 0 || heightCm <= 0) return null;
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  if (bmi < 18.5)
    return {
      value: bmi,
      category: 'Sottopeso',
      color: 'text-sky-600',
      barColor: 'bg-sky-500',
      message: 'Il tuo peso risulta inferiore alla norma. Un percorso nutrizionale personalizzato pu\u00f2 aiutarti a raggiungere un peso sano.',
    };
  if (bmi < 25)
    return {
      value: bmi,
      category: 'Normopeso',
      color: 'text-emerald-600',
      barColor: 'bg-emerald-500',
      message: 'Ottimo! Il tuo peso rientra nella norma. Mantienilo con una corretta alimentazione e attivit\u00e0 fisica regolare.',
    };
  if (bmi < 30)
    return {
      value: bmi,
      category: 'Sovrappeso',
      color: 'text-amber-600',
      barColor: 'bg-amber-500',
      message: 'Il tuo peso \u00e8 leggermente superiore alla norma. Un piano alimentare mirato pu\u00f2 fare la differenza.',
    };
  return {
    value: bmi,
    category: 'Obesit\u00e0',
    color: 'text-red-600',
    barColor: 'bg-red-500',
    message: 'Il tuo BMI indica una condizione che merita attenzione medica. Un percorso nutrizionale strutturato \u00e8 fortemente consigliato.',
  };
}

function getBarWidth(bmi: number): string {
  const clamped = Math.min(Math.max(bmi, 14), 40);
  const pct = ((clamped - 14) / (40 - 14)) * 100;
  return `${pct}%`;
}

export default function BmiCalculator() {
  const { ref, isInView } = useInView();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<BmiResult | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;
    setResult(calculateBmi(w, h));
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-narrow">
        <div
          className={`max-w-xl mx-auto transition-all duration-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-ocean-50 mb-4">
              <Calculator className="w-7 h-7 text-ocean-600" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ocean-900 mb-3">
              Calcola il tuo BMI
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
              L'Indice di Massa Corporea (BMI) fornisce una prima indicazione sul rapporto peso-altezza.
              Inserisci i tuoi dati per una valutazione immediata.
            </p>
          </div>

          <div className="bg-sage-50 rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-ocean-800 mb-1.5">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="es. 68"
                  min="20"
                  max="300"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-shadow text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ocean-800 mb-1.5">
                  Altezza (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="es. 170"
                  min="100"
                  max="250"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-shadow text-sm"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCalculate}
                disabled={!weight || !height}
                className="flex-1 py-3 bg-ocean-600 text-white rounded-xl font-medium text-sm hover:bg-ocean-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Calcola BMI
              </button>
              {result && (
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {result && (
              <div className="mt-6 animate-fade-up">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Il tuo BMI</p>
                      <p className={`text-3xl font-display font-bold ${result.color}`}>
                        {result.value.toFixed(1)}
                      </p>
                    </div>
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${result.color} bg-opacity-10`}
                      style={{ backgroundColor: 'currentcolor', color: 'white' }}
                    >
                      {result.category}
                    </span>
                  </div>

                  <div className="relative h-2.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="w-[17.3%] bg-sky-200" />
                      <div className="w-[25%] bg-emerald-200" />
                      <div className="w-[19.2%] bg-amber-200" />
                      <div className="flex-1 bg-red-200" />
                    </div>
                    <div
                      className={`absolute top-0 h-full w-1 ${result.barColor} rounded-full shadow-sm transition-all duration-700`}
                      style={{ left: getBarWidth(result.value) }}
                    />
                  </div>

                  <div className="flex justify-between text-[10px] text-gray-400 mb-4">
                    <span>Sottopeso</span>
                    <span>Normopeso</span>
                    <span>Sovrappeso</span>
                    <span>Obesit&agrave;</span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{result.message}</p>

                  <Link
                    to="/contatti"
                    className="block text-center mt-4 py-2.5 rounded-xl bg-ocean-50 text-ocean-700 text-sm font-medium hover:bg-ocean-100 transition-colors"
                  >
                    Richiedi una consulenza personalizzata
                  </Link>
                </div>

                <p className="text-xs text-gray-400 text-center mt-3">
                  Il BMI &egrave; un indicatore approssimativo. Per una valutazione completa, rivolgiti a un professionista.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
