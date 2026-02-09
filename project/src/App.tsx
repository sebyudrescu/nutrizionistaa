import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ChiSonoPage from './pages/ChiSonoPage';
import SpecializzazioniPage from './pages/SpecializzazioniPage';
import ServiziTariffePage from './pages/ServiziTariffePage';
import PatologieTrattate from './pages/PatologieTrattate';
import ContattiPage from './pages/ContattiPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-sono" element={<ChiSonoPage />} />
          <Route path="/specializzazioni" element={<SpecializzazioniPage />} />
          <Route path="/servizi-tariffe" element={<ServiziTariffePage />} />
          <Route path="/patologie" element={<PatologieTrattate />} />
          <Route path="/contatti" element={<ContattiPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
