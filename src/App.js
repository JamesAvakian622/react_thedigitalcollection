import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { oktaConfig } from './oktaConfig';
import Gallery from './pages/Gallery';
import Garage from './pages/Garage';
import Upload from './pages/Upload';

const oktaAuth = new OktaAuth(oktaConfig);

const theme = {
  body: '#111',
  text: '#fff',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Navbar />

      <Security oktaAuth={oktaAuth}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/callback" element={<LoginCallback />} />
          <SecureRoute path="/gallery" element={<Gallery />} />
          <SecureRoute path="/garage" element={<Garage />} />
          <SecureRoute path="/upload" element={<Upload />} />
        </Routes>
      </Security>

    </Router>
  </ThemeProvider>
);
export default App;



