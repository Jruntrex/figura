import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';

import UnderConstruction from './components/UnderConstruction';

const AppContent = () => {
  const [searchParams] = useSearchParams();
  // Initialize state from localStorage to avoid flash of wrong content
  const [isBypassed, setIsBypassed] = useState(() => localStorage.getItem('DEV_MODE_ENABLED') === 'true');
  const isContactUnderConstruction = import.meta.env.VITE_CONTACT_UNDER_CONSTRUCTION === 'true';

  useEffect(() => {
    // Check for ?dev=true in URL
    if (searchParams.get('dev') === 'true') {
      localStorage.setItem('DEV_MODE_ENABLED', 'true');
      setIsBypassed(true);

      // Optional: Clean up URL (requires navigation, but might complicate simple useEffect)
      // For now, just setting state is enough
    }
  }, [searchParams]);

  // Show construction if enabled in env AND not bypassed
  const showConstruction = isContactUnderConstruction && !isBypassed;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/contact"
        element={showConstruction ? <UnderConstruction /> : <ContactPage />}
      />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
