import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('fr')
  const [lightEntered, setLightEntered] = useState(false)

  const translations = {
    fr: {
      title: "SERAPHINA",
      subtitle: "Dans l'esprit de Saint Carlos Acutis",
      description: "Ce sanctuaire numérique continue sa mission : révéler la beauté de Dieu à travers les miracles, les lieux saints et les témoins de foi. Inspiré par saint Carlos Acutis, ce lieu virtuel partage l'émerveillement devant les signes divins.",
      quote: "Nous sommes nés pour les réalités surnaturelles, pas pour les réalités terrestres",
      memory: "En mémoire de ma maman, qui croyait avec ferveur aux miracles.",
      button: "✨ ENTRER DANS LA LUMIÈRE ✨"
    },
    en: {
      title: "SERAPHINA", 
      subtitle: "In the Spirit of Saint Carlos Acutis",
      description: "This digital sanctuary continues its mission: to reveal God's beauty through miracles, holy places and witnesses of faith. Inspired by Saint Carlos Acutis, this virtual place shares wonder at divine signs.",
      quote: "We were born for supernatural realities, not for earthly realities",
      memory: "In memory of my mother, who believed fervently in miracles.",
      button: "✨ ENTER THE LIGHT ✨"
    }
  }

  const t = translations[language] || translations.fr

  return (
    <div className={`calm-container ${lightEntered ? 'light-entered' : ''}`}>
      {/* Header */}
      <header className="calm-header">
        <button 
          className="seraphina-logo"
          onClick={() => {
            setLightEntered(false)
            window.scrollTo(0, 0)
          }}
        >
          ✨ SERAPHINA
        </button>
        
        <div className="language-selector">
          <button 
            className={language === 'fr' ? 'active' : ''}
            onClick={() => setLanguage('fr')}
          >
            🇫🇷 FR
          </button>
          <button 
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            🇬🇧 EN
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="calm-hero">
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
      </main>
    </div>
  )
}

export default App
