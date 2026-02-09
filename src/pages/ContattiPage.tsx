import { useState, type FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2, Clock, CreditCard, Smartphone, Building, Banknote, Globe, Languages } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useInView } from '../hooks/useInView';
import PageHeader from '../components/PageHeader';

const serviceOptions = [
  'Colloquio Conoscitivo Gratuito',
  'Prima Visita Nutrizionale',
  'Visita Specialistica PCOS',
  'Controllo di Follow-up',
  'Consulenza Online Completa',
  'Consulto Omeopatico',
  'Percorso Metabolomica',
  'Altro',
];

const paymentMethods = [
  { icon: CreditCard, label: 'Carta di Credito / Debito' },
  { icon: Smartphone, label: 'Satispay' },
  { icon: Building, label: 'Bonifico Bancario (anche istantaneo)' },
  { icon: Banknote, label: 'Contanti' },
];

const languages = [
  { label: 'Italiano' },
  { label: 'Francese' },
  { label: 'Inglese' },
];

export default function ContattiPage() {
  const { ref: formRef, isInView: formInView } = useInView();
  const { ref: infoRef, isInView: infoInView } = useInView();
  const { ref: mapRef, isInView: mapInView } = useInView();

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase.from('contact_requests').insert([formData]);

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ full_name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <PageHeader
        subtitle="Contatti"
        title="Prenota il tuo Appuntamento"
        description="Compila il modulo per richiedere un appuntamento o per qualsiasi informazione. Ti risponder&ograve; entro 24 ore."
      />

      <section ref={formRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div
              className={`lg:col-span-3 transition-all duration-500 ${
                formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {status === 'success' ? (
                <div className="bg-sage-50 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="w-14 h-14 text-ocean-600 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-ocean-900 mb-2">
                    Richiesta Inviata!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Grazie per avermi contattato. Risponder&ograve; alla tua richiesta il prima possibile.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-ocean-600 font-medium hover:text-ocean-700 transition-colors"
                  >
                    Invia un'altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nome e Cognome *
                      </label>
                      <input
                        id="full_name"
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-sm"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-sm"
                        placeholder="mario@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Telefono
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-sm"
                        placeholder="+39 333 1234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Servizio di Interesse
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Seleziona un servizio</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-sm resize-none"
                      placeholder="Descrivi brevemente il motivo della tua richiesta..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      Si &egrave; verificato un errore. Riprova o contattami direttamente via email.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-ocean-600 text-white font-medium rounded-full hover:bg-ocean-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Invia Richiesta
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div
              className={`lg:col-span-2 space-y-6 transition-all duration-500 delay-200 ${
                formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-ocean-900 mb-4">
                  Informazioni di Contatto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-ocean-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Studio Medico</p>
                      <p className="text-sm text-gray-600">Via Claudio Beaumont 28</p>
                      <p className="text-sm text-gray-600">10138 Torino (TO)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-ocean-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Telefono</p>
                      <p className="text-sm text-gray-600">Su richiesta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-ocean-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Email</p>
                      <p className="text-sm text-gray-600">Su richiesta</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sage-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-ocean-600" />
                  <h4 className="font-display text-base font-semibold text-ocean-900">
                    Orari di Ricevimento
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Luned&igrave; - Venerd&igrave;</span>
                    <span className="font-medium text-gray-800">Su appuntamento</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span className="font-medium text-gray-800">Su appuntamento</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span className="text-gray-400">Chiuso</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Tutte le visite si svolgono esclusivamente su appuntamento.
                </p>
              </div>

              <div className="bg-ocean-50 rounded-xl p-6">
                <h4 className="font-display text-base font-semibold text-ocean-900 mb-3">
                  Metodi di Pagamento
                </h4>
                <ul className="space-y-2.5">
                  {paymentMethods.map((method) => (
                    <li key={method.label} className="flex items-center gap-3 text-gray-700">
                      <method.icon className="w-4 h-4 text-ocean-600 shrink-0" />
                      <span className="text-sm">{method.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-ocean-700 mt-3 font-medium">
                  Tutte le prestazioni sono detraibili fiscalmente.
                </p>
              </div>

              <div className="bg-sand-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-sand-600" />
                  <h4 className="font-display text-base font-semibold text-ocean-900">Lingue Disponibili</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <div
                      key={lang.label}
                      className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-sand-200"
                    >
                      <Languages className="w-3.5 h-3.5 text-sand-600" />
                      <span className="text-sm font-medium text-gray-700">{lang.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={mapRef} className="bg-sage-50">
        <div
          className={`container-narrow px-4 sm:px-6 lg:px-8 py-16 transition-all duration-500 ${
            mapInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-ocean-900 mb-2">Dove Trovarmi</h3>
            <p className="text-gray-600 text-sm">Via Claudio Beaumont 28, 10138 Torino (TO)</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Studio Medico Dott.ssa Restifo - Torino"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.9!2d7.6689!3d45.0896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlhIENsYXVkaW8gQmVhdW1vbnQgMjgsIFRvcmlubw!5e0!3m2!1sit!2sit!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://maps.google.com/?q=Via+Claudio+Beaumont+28+Torino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-medium text-sm transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Apri in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section ref={infoRef} className="section-padding bg-white">
        <div className="container-narrow">
          <div
            className={`bg-ocean-50 rounded-xl p-6 max-w-2xl mx-auto transition-all duration-500 ${
              infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm text-ocean-800 leading-relaxed">
              <span className="font-semibold">Nota:</span> Le visite si svolgono
              previo appuntamento. Per urgenze mediche, contattare il proprio medico
              di base o il Pronto Soccorso.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
