// AppRouter

// Router Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
//import Header from '../components/Header';
//import Footer from '../components/Footer';
import Nav from './components/Nav';
// Pages
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageWork from './pages/PageWork';


function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav/>
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/work" element={<PageWork />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
