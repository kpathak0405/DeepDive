import { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Subscription } from './components/Subscription';
import { Footer } from './components/Footer';
import HomePage from './homepage/page';
import ApiPage from './components/wiki/apiPage';

type Page = 'landing' | 'home' | 'wiki/api';

export default function App() {
  const getInitialPage = (): Page => {
    const path = window.location.pathname.replace('/', '');
    if (path === 'home') return 'home';
    if (path === 'wiki/api') return 'wiki/api';
    return 'landing';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getInitialPage();
      navigateTo(page, false);
    };
    window.addEventListener('popstate', handlePopState);
    
    if (!window.history.state?.page) {
      window.history.replaceState({ page: currentPage }, '', window.location.pathname);
    }
    
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page, pushState = true) => {
    if (pushState) {
      window.history.pushState({ page }, '', page === 'landing' ? '/' : `/${page}`);
    }
    setIsTransitioning(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
    >
      {currentPage === 'wiki/api' ? (
        <ApiPage />
      ) : currentPage === 'home' ? (
        <HomePage onNavigate={navigateTo} />
      ) : (
        <div className="dark text-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
          <ParticleCanvas />
          <Navigation />
          <main>
            <Hero onGetStarted={() => navigateTo('home')} />
            <Subscription />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}