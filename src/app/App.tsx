import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import UnderConstruction from './components/UnderConstruction';

const App = () => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/contact"
          element={isLocalhost ? <ContactPage /> : <UnderConstruction />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
