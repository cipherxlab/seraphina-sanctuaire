import { useState } from 'react'
import './App.css'
import MiraclesContent from './components/MiraclesContent'

// Force deploy - Navigation moderne SERAPHINA

function App() {
  const [language, setLanguage] = useState('fr')
  const [lightEntered, setLightEntered] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [showAllLanguages, setShowAllLanguages] = useState(false)

  const translations = {
    fr: {
      title: "SERAPHINA",
      subtitle: "Dans l'esprit de Saint Carlos Acutis",
      description: "Ce sanctuaire numérique continue sa mission : révéler la beauté de Dieu à travers les miracles, les lieux saints et les témoins de foi. Inspiré par saint Carlos Acutis, ce lieu virtuel partage l'émerveillement devant les signes divins.",
      quote: "Nous sommes nés pour les réalités surnaturelles, pas pour les réalités terrestres",
      memory: "En mémoire de ma maman, qui croyait avec ferveur aux miracles.",
      button: "✨ ENTRER DANS LA LUMIÈRE ✨",
      tabs: {
        miracles: "Miracles",
        lieux: "Lieux Saints", 
        carlos: "Saint Carlos",
        carte: "Carte Monde"
      },
      content: {
        miracles: "Contenu des miracles en cours de développement...",
        lieux: "Contenu des lieux saints en cours de développement...",
        carlos: "Biographie de Saint Carlos en cours de développement...",
        carte: "Carte interactive en cours de développement..."
      }
    },
    en: {
      title: "SERAPHINA", 
      subtitle: "In the Spirit of Saint Carlos Acutis",
      description: "This digital sanctuary continues its mission: to reveal God's beauty through miracles, holy places and witnesses of faith. Inspired by Saint Carlos Acutis, this virtual place shares wonder at divine signs.",
      quote: "We were born for supernatural realities, not for earthly realities",
      memory: "In memory of my mother, who believed fervently in miracles.",
      button: "✨ ENTER THE LIGHT ✨",
      tabs: {
        miracles: "Miracles",
        lieux: "Holy Places",
        carlos: "Saint Carlos", 
        carte: "World Map"
      },
      content: {
        miracles: "Miracles content under development...",
        lieux: "Holy places content under development...",
        carlos: "Saint Carlos biography under development...",
        carte: "Interactive map under development..."
      }
    }
  }

  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'FR' },
    { code: 'en', flag: '🇬🇧', name: 'EN' },
    { code: 'es', flag: '🇪🇸', name: 'ES' },
    { code: 'pt', flag: '🇵🇹', name: 'PT' },
    { code: 'it', flag: '🇮🇹', name: 'IT' },
    { code: 'de', flag: '🇩🇪', name: 'DE' }
  ]

  const t = translations[language] || translations.fr

  const renderHomeContent = () => (
    <div className="calm-content">
      <h1 className="calm-title">{t.title}</h1>
      <h2 className="calm-subtitle">{t.subtitle}</h2>
      
      <p className="calm-description">{t.description}</p>
      
      <blockquote className="calm-quote">
        <p>"{t.quote}"</p>
        <cite>— Saint Carlos Acutis</cite>
      </blockquote>
      
      <p className="calm-memorial">{t.memory}</p>
      
      {!lightEntered && (
        <button 
          className="calm-cta"
          onClick={() => setLightEntered(true)}
        >
          {t.button}
        </button>
      )}
    </div>
  )

  const renderMiraclesContent = () => (
    <MiraclesContent language={language} />
  )

  const renderLieuxContent = () => (
    <div className="tab-content">
      <h2>{t.tabs.lieux}</h2>
      <p>{t.content.lieux}</p>
    </div>
  )

  const renderCarlosContent = () => (
    <div className="tab-content">
      <h2>{t.tabs.carlos}</h2>
      <p>{t.content.carlos}</p>
    </div>
  )

  const renderCarteContent = () => (
    <div className="tab-content">
      <h2>{t.tabs.carte}</h2>
      <p>{t.content.carte}</p>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'miracles': return renderMiraclesContent()
      case 'lieux': return renderLieuxContent()
      case 'carlos': return renderCarlosContent()
      case 'carte': return renderCarteContent()
      default: return renderHomeContent()
    }
  }

  return (
    <div className={`calm-container ${lightEntered ? 'light-entered' : ''}`}>
      {/* Header avec navigation */}
      <header className="modern-header">
        <button 
          className="seraphina-logo"
          onClick={() => {
            setActiveTab('home')
            setLightEntered(false)
            window.scrollTo(0, 0)
          }}
        >
          ✨ SERAPHINA
        </button>
        
        {/* Navigation par onglets */}
        <nav className="main-navigation">
          <button 
            className={`nav-tab ${activeTab === 'miracles' ? 'active' : ''}`}
            onClick={() => setActiveTab('miracles')}
          >
            {t.tabs.miracles}
          </button>
          <button 
            className={`nav-tab ${activeTab === 'lieux' ? 'active' : ''}`}
            onClick={() => setActiveTab('lieux')}
          >
            {t.tabs.lieux}
          </button>
          <button 
            className={`nav-tab ${activeTab === 'carlos' ? 'active' : ''}`}
            onClick={() => setActiveTab('carlos')}
          >
            {t.tabs.carlos}
          </button>
          <button 
            className={`nav-tab ${activeTab === 'carte' ? 'active' : ''}`}
            onClick={() => setActiveTab('carte')}
          >
            {t.tabs.carte}
          </button>
        </nav>
        
        {/* Sélecteur de langues */}
        <div className="language-selector">
          <div className="language-dropdown">
            <button 
              className="language-toggle"
              onClick={() => setShowAllLanguages(!showAllLanguages)}
            >
              🌍 {language.toUpperCase()} ▼
            </button>
            
            {showAllLanguages && (
              <div className="language-menu">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code)
                      setShowAllLanguages(false)
                    }}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="calm-hero">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
