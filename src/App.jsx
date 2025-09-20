import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { availableLanguages, getTranslations, getBrowserLanguage } from './translations/index.js';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(getBrowserLanguage());
  const [lightEntered, setLightEntered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  const t = getTranslations(currentLanguage);

  // Fonction pour changer de langue
  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('seraphina-language', langCode);
  };

  // Charger la langue sauvegardée au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('seraphina-language');
    if (savedLanguage && availableLanguages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Fonction "Entrer dans la Lumière" style Calm
  const enterLight = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      // Changement background plus lumineux
      document.body.classList.add('light-entered');
      setLightEntered(true);
      
      // Afficher le message de bienvenue
      setShowWelcome(true);
      
      // Masquer le message après 4 secondes
      setTimeout(() => {
        setShowWelcome(false);
        setIsAnimating(false);
      }, 4000);
    }, 300);
  };

  // Fonction pour retourner à l'accueil
  const goToHome = () => {
    // Réinitialiser l'état si nécessaire
    if (lightEntered) {
      document.body.classList.remove('light-entered');
      setLightEntered(false);
      setShowWelcome(false);
      setIsAnimating(false);
    }
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Composant Header style Calm.com
  const CalmHeader = () => (
    <header className="calm-header">
      <button 
        className="calm-logo"
        onClick={goToHome}
        title="Retour à l'accueil"
      >
        <div className="seraphina-icon">
          ✨
        </div>
        SERAPHINA
      </button>
      
      <div className="calm-language-selector">
        {(showAllLanguages ? availableLanguages : availableLanguages.slice(0, 6)).map((lang) => (
          <button
            key={lang.code}
            className={`calm-lang-btn ${currentLanguage === lang.code ? 'active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
            title={lang.native}
          >
            {lang.flag} {lang.code.toUpperCase()}
          </button>
        ))}
        {!showAllLanguages && availableLanguages.length > 6 && (
          <button 
            className="calm-lang-btn"
            onClick={() => setShowAllLanguages(true)}
            title={`Afficher les ${availableLanguages.length - 6} autres langues`}
          >
            +{availableLanguages.length - 6}
          </button>
        )}
        {showAllLanguages && (
          <button 
            className="calm-lang-btn"
            onClick={() => setShowAllLanguages(false)}
            title="Réduire la sélection"
          >
            ✕
          </button>
        )}
      </div>
    </header>
  );

  // Composant Message de bienvenue style Calm
  const CalmWelcomeMessage = () => (
    showWelcome && (
      <div className="calm-welcome-message">
        <h2 className="calm-welcome-title">{t.welcomeTitle}</h2>
        <p className="calm-welcome-text">{t.welcomeMessage}</p>
      </div>
    )
  );

  return (
    <>
      {/* Hero Section EXACT style Calm.com */}
      <div className="calm-hero">
        <CalmHeader />
        
        <main className="calm-main-content">
          <div className="calm-content-wrapper">
            {/* Titre principal style Calm */}
            <h1 className="calm-title">
              SERAPHINA
            </h1>
            
            {/* Sous-titre style Calm */}
            <p className="calm-subtitle">
              {t.subtitle}
            </p>
            
            {/* Description style Calm */}
            <p className="calm-description">
              {t.mission}
            </p>
            
            {/* Citation de Saint Carlos Acutis */}
            <div className="calm-quote">
              <p className="calm-quote-text">
                "{t.quote}"
              </p>
              <p className="calm-quote-author">
                — {t.quoteAuthor}
              </p>
            </div>
            
            {/* Mémoire */}
            <p className="calm-memorial">
              {t.memorial}
            </p>
            
            {/* Bouton CTA style Calm.com */}
            {!lightEntered && (
              <Button 
                className="calm-cta-button"
                onClick={enterLight}
                disabled={isAnimating}
              >
                {t.enterBtn}
              </Button>
            )}
          </div>
        </main>
      </div>
      
      {/* Message de bienvenue */}
      <CalmWelcomeMessage />
    </>
  );
}

export default App;
