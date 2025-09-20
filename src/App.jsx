import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { availableLanguages, getTranslations, getBrowserLanguage } from './translations/index.js';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(getBrowserLanguage());
  const [lightEntered, setLightEntered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Fonction "Entrer dans la Lumière"
  const enterLight = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Animation du bouton
    const button = document.querySelector('.enter-light-btn');
    if (button) {
      button.style.transform = 'scale(1.2)';
    }
    
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
    }, 500);
  };

  // Composant Sélecteur de langues
  const LanguageSelector = () => (
    <div className="language-selector">
      {availableLanguages.slice(0, 8).map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${currentLanguage === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          title={lang.native}
        >
          {lang.flag} {lang.code.toUpperCase()}
        </button>
      ))}
      {availableLanguages.length > 8 && (
        <button 
          className="lang-btn more-langs"
          title={`+${availableLanguages.length - 8} autres langues`}
        >
          +{availableLanguages.length - 8}
        </button>
      )}
    </div>
  );

  // Composant Message de bienvenue
  const WelcomeMessage = () => (
    showWelcome && (
      <div className="welcome-message">
        <h2>{t.welcomeTitle}</h2>
        <p>{t.welcomeMessage}</p>
      </div>
    )
  );

  return (
    <>
      {/* Background style Calm.com */}
      <div className="calm-background"></div>
      
      {/* Sélecteur de langues */}
      <LanguageSelector />
      
      {/* Container principal */}
      <div className="seraphina-container">
        <section className="hero-seraphina">
          {/* Identité SERAPHINA */}
          <div className="seraphina-identity">
            <h1>SERAPHINA</h1>
            <p className="subtitle">{t.subtitle}</p>
          </div>

          {/* Message de mission */}
          <div className="mission-message">
            <p>{t.mission}</p>
            
            <blockquote className="carlos-quote">
              "{t.quote}"
              <cite>— {t.quoteAuthor}</cite>
            </blockquote>
            
            <p className="memorial">
              <em>{t.memorial}</em>
            </p>
          </div>

          {/* Bouton "Entrer dans la Lumière" */}
          {!lightEntered && (
            <Button 
              className="enter-light-btn"
              onClick={enterLight}
              disabled={isAnimating}
            >
              {t.enterBtn}
            </Button>
          )}
        </section>
      </div>
      
      {/* Message de bienvenue */}
      <WelcomeMessage />
    </>
  );
}

export default App;
