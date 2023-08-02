import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import IndexPage from './pages/IndexPage';
import PostPage from './pages/PostPage';
import { UserContextProvider } from './UserContext';
import { ThemeProvider } from './common/ThemeProvider'; // Importar ThemeProvider antes de NavBar
import Layout from './common/Layout';
import NavBar from './common/NavBar';
import { FAQ } from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Resources from './pages/Resources';

function App() {
  return (
    <ThemeProvider> {/* Envuelve Layout con ThemeProvider */}
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/Resources' element={<Resources />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
