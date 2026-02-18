import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';

import UnderConstruction from './components/UnderConstruction';

const App = () => {
  const isContactUnderConstruction = import.meta.env.VITE_CONTACT_UNDER_CONSTRUCTION === 'true';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/contact"
          element={isContactUnderConstruction ? <UnderConstruction /> : <ContactPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
