import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { availableLanguages, getTranslations, getBrowserLanguage } from './translations/index.js';
import { generateMetadata } from './seo/metadata.js';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(getBrowserLanguage());
  const [lightEntered, setLightEntered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  const t = getTranslations(currentLanguage);

  // Fonction pour changer de langue avec animation et SEO
  const changeLanguage = (langCode) => {
    if (langCode === currentLanguage) return;
    
    setIsLanguageChanging(true);
    
    // Animation de transition
    setTimeout(() => {
      setCurrentLanguage(langCode);
      localStorage.setItem('seraphina-language', langCode);
      
      // Mise à jour SEO dynamique
      updateSEOMetadata(langCode);
      
      setIsLanguageChanging(false);
    }, 300);
  };

  // Fonction pour mettre à jour les métadonnées SEO
  const updateSEOMetadata = (language) => {
    const metadata = generateMetadata(language);
    
    // Mise à jour du titre
    document.title = metadata.title;
    
    // Mise à jour des meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      }
    };
    
    updateMetaTag('description', metadata.description);
    updateMetaTag('keywords', metadata.keywords);
    updateMetaTag('og:title', metadata.openGraph.title);
    updateMetaTag('og:description', metadata.openGraph.description);
    updateMetaTag('twitter:title', metadata.openGraph.title);
    updateMetaTag('twitter:description', metadata.openGraph.description);
    
    // Mise à jour de la langue HTML
    document.documentElement.lang = language;
  };

  // Charger la langue sauvegardée au démarrage et initialiser SEO
  useEffect(() => {
    const savedLanguage = localStorage.getItem('seraphina-language');
    if (savedLanguage && availableLanguages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
      updateSEOMetadata(savedLanguage);
    } else {
      updateSEOMetadata(currentLanguage);
    }
  }, []);

  // Mise à jour SEO lors du changement de langue
  useEffect(() => {
    updateSEOMetadata(currentLanguage);
  }, [currentLanguage]);

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
          <div className={`calm-content-wrapper ${isLanguageChanging ? 'language-changing' : ''}`}>
            {/* Titre principal style Calm */}
            <h1 className="calm-title">
              SERAPHINA
            </h1>
            
            {/* Sous-titre style Calm */}
            <p className="calm-subtitle">
              {t.subtitle}
            </p>
            
            {/* Description principale */}
            <p className="calm-description">
              {t.description}
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
