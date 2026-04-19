import { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Subscription } from './components/Subscription';
import { Footer } from './components/Footer';
import HomePage from './homepage/page';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'home'>('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || 'landing';
      navigateTo(page, false);
    };

    window.addEventListener('popstate', handlePopState);
    window.history.replaceState({ page: 'landing' }, '', '/');

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'landing' | 'home', pushState = true) => {
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
      {currentPage === 'home' ? (
        <HomePage />
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
