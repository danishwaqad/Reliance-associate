import React, { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget';

const App = () => {
  useEffect(() => {
    const pathToSectionMap = {
      '/': 'Header',
      '/about': 'About',
      '/projects': 'Projects',
      '/testimonials': 'Testimonials',
      '/contact': 'Contact',
    };

    const scrollToPathSection = () => {
      const sectionId = pathToSectionMap[window.location.pathname] || 'Header';
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };

    scrollToPathSection();
    window.addEventListener('popstate', scrollToPathSection);
    return () => window.removeEventListener('popstate', scrollToPathSection);
  }, []);

  return (
    <div className='w-full overflow-hidden bg-slate-50 text-slate-900'>
      <ToastContainer/>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
