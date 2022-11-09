// AppRouter

// Router Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components

import Footer from './components/Footer';
import Nav from './components/Nav';
// Pages
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageWork from './pages/PageWork';
import PageDetail from './pages/PageDetail';
import { AnimatePresence } from 'framer-motion';


function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav/>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/work" element={<PageWork />} />
            <Route path="work/detail/:slug" element={<PageDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
