import React from 'react'
import './MiraclesContent.css'

const MiraclesContent = ({ language }) => {
  const content = {
    fr: {
      title: "Miracles Eucharistiques",
      subtitle: "Preuves Tangibles de la Présence Réelle",
      intro: "Depuis 2000 ans, l'Église catholique documente des phénomènes extraordinaires où l'hostie consacrée se transforme miraculeusement en chair et sang humains. Ces miracles, analysés par la science moderne, témoignent de la présence réelle du Christ dans l'Eucharistie.",
      
      miracles: [
        {
          id: 1,
          title: "Miracle de Lanciano",
          location: "Lanciano, Italie",
          date: "VIIe siècle (700 après J.-C.)",
          flag: "🇮🇹",
          description: "Premier miracle eucharistique documenté. Pendant la messe, un moine basilien doute de la présence réelle. L'hostie se transforme en chair et le vin en sang.",
          scientific: "Analyses 1970-1981 : tissu cardiaque humain, sang type AB, 5 caillots de poids différents mais de même poids total.",
          status: "Reconnu officiellement par l'Église",
          coordinates: [42.2281, 14.3889]
        },
        {
          id: 2,
          title: "Miracle de Buenos Aires",
          location: "Buenos Aires, Argentine",
          date: "18 août 1996",
          flag: "🇦🇷",
          description: "Une hostie profanée est retrouvée dans un bénitier. Placée dans l'eau, elle se transforme en tissu cardiaque sanglant.",
          scientific: "Analyses ADN confirment muscle cardiaque humain en état d'agonie. Groupe sanguin AB.",
          status: "Reconnu par le futur pape François",
          coordinates: [-34.6118, -58.3960]
        },
        {
          id: 3,
          title: "Miracle de Bolsena",
          location: "Bolsena, Italie", 
          date: "1263",
          flag: "🇮🇹",
          description: "Un prêtre bohémien doute de la transsubstantiation. L'hostie se met à saigner abondamment pendant la consécration.",
          scientific: "Sang humain conservé sur le corporal. Origine de la fête du Saint-Sacrement.",
          status: "Reconnu par le pape Urbain IV",
          coordinates: [42.6439, 11.9847]
        },
        {
          id: 4,
          title: "Miracle de Santarém",
          location: "Santarém, Portugal",
          date: "1247",
          flag: "🇵🇹",
          description: "Une femme vole une hostie consacrée pour un sortilège. L'hostie se met à saigner dans son mouchoir.",
          scientific: "Sang encore liquide après 750 ans. Analyses confirment sang humain type AB.",
          status: "Vénération continue, pèlerinage actif",
          coordinates: [39.2369, -8.6867]
        },
        {
          id: 5,
          title: "Miracle de Sokółka",
          location: "Sokółka, Pologne",
          date: "12 octobre 2008",
          flag: "🇵🇱",
          description: "Une hostie tombe et se brise. Placée dans l'eau, une partie se transforme en tissu cardiaque.",
          scientific: "Analyses 2009-2010 : tissu cardiaque humain en état d'agonie. Aucune contamination externe.",
          status: "Reconnu par l'évêque de Białystok",
          coordinates: [53.4011, 23.5014]
        },
        {
          id: 6,
          title: "Miracle d'Orvieto",
          location: "Orvieto, Italie",
          date: "1263",
          flag: "🇮🇹",
          description: "Suite du miracle de Bolsena. Le pape fait construire la cathédrale d'Orvieto pour abriter les reliques.",
          scientific: "Corporal taché de sang conservé. Fresques de Luca Signorelli témoignent de l'événement.",
          status: "Cathédrale dédiée au miracle",
          coordinates: [42.7183, 12.1133]
        },
        {
          id: 7,
          title: "Miracle de Tixtla",
          location: "Tixtla, Mexique",
          date: "21 octobre 2006",
          flag: "🇲🇽",
          description: "Pendant l'adoration eucharistique, une hostie se met à saigner. Le phénomène se répète plusieurs fois.",
          scientific: "Sang humain type AB, même que le Suaire de Turin. Analyses confirment l'authenticité.",
          status: "Reconnu par l'évêque de Chilpancingo",
          coordinates: [17.5647, -99.3953]
        },
        {
          id: 8,
          title: "Miracle de Chirattakonam",
          location: "Kerala, Inde",
          date: "28 avril 2001",
          flag: "🇮🇳",
          description: "Première apparition d'un miracle eucharistique en Inde. L'hostie se transforme en chair pendant la messe.",
          scientific: "Analyses confirment tissu humain. Premier miracle eucharistique documenté en Asie.",
          status: "Reconnu par l'évêque de Trivandrum",
          coordinates: [8.5241, 76.9366]
        }
      ],

      scientific_section: {
        title: "Preuves Scientifiques Communes",
        evidence: [
          "Tissu cardiaque humain (muscle du ventricule gauche)",
          "Groupe sanguin AB (donneur universel)",
          "ADN humain masculin",
          "Absence de conservation artificielle",
          "Résistance à la décomposition naturelle",
          "Présence de globules blancs (signe de vie récente)"
        ]
      },

      sources: {
        title: "Sources et Documentation",
        items: [
          {
            text: "Rapports scientifiques officiels",
            links: [
              { text: "Analyses Lanciano (1970-1981)", url: "https://www.miracolieucaristici.org/fr/Liste/list.html" },
              { text: "Études Buenos Aires", url: "https://www.miracolieucaristici.org/fr/Liste/scheda_fr.html?nat=argentina&wh=buenos&ct=Buenos%20Aires" }
            ]
          },
          {
            text: "Déclarations épiscopales",
            links: [
              { text: "Vatican - Miracles Eucharistiques", url: "https://www.vatican.va" },
              { text: "Congrégation pour la Doctrine de la Foi", url: "https://www.vatican.va/roman_curia/congregations/cfaith/" }
            ]
          },
          {
            text: "Documentation historique",
            links: [
              { text: "Site officiel Carlos Acutis", url: "https://www.carloacutis.com" },
              { text: "Exposition Miracles Eucharistiques", url: "https://www.miracolieucaristici.org" }
            ]
          },
          {
            text: "Analyses scientifiques",
            links: [
              { text: "Laboratoire de Médecine Légale", url: "#" },
              { text: "Institut de Pathologie", url: "#" }
            ]
          }
        ]
      }
    },

    en: {
      title: "Eucharistic Miracles",
      subtitle: "Tangible Proof of the Real Presence",
      intro: "For 2000 years, the Catholic Church has documented extraordinary phenomena where the consecrated host miraculously transforms into human flesh and blood. These miracles, analyzed by modern science, testify to the real presence of Christ in the Eucharist.",
      
      miracles: [
        {
          id: 1,
          title: "Miracle of Lanciano",
          location: "Lanciano, Italy",
          date: "7th century (700 AD)",
          flag: "🇮🇹",
          description: "First documented Eucharistic miracle. During Mass, a Basilian monk doubts the real presence. The host transforms into flesh and wine into blood.",
          scientific: "1970-1981 analyses: human cardiac tissue, AB blood type, 5 clots of different weights but same total weight.",
          status: "Officially recognized by the Church",
          coordinates: [42.2281, 14.3889]
        },
        {
          id: 2,
          title: "Miracle of Buenos Aires",
          location: "Buenos Aires, Argentina",
          date: "August 18, 1996",
          flag: "🇦🇷",
          description: "A desecrated host is found in a holy water font. Placed in water, it transforms into bleeding cardiac tissue.",
          scientific: "DNA analyses confirm human cardiac muscle in agony. AB blood type.",
          status: "Recognized by future Pope Francis",
          coordinates: [-34.6118, -58.3960]
        },
        {
          id: 3,
          title: "Miracle of Bolsena",
          location: "Bolsena, Italy",
          date: "1263",
          flag: "🇮🇹",
          description: "A Bohemian priest doubts transubstantiation. The host begins bleeding profusely during consecration.",
          scientific: "Human blood preserved on the corporal. Origin of the Feast of Corpus Christi.",
          status: "Recognized by Pope Urban IV",
          coordinates: [42.6439, 11.9847]
        },
        {
          id: 4,
          title: "Miracle of Santarém",
          location: "Santarém, Portugal",
          date: "1247",
          flag: "🇵🇹",
          description: "A woman steals a consecrated host for witchcraft. The host begins bleeding in her handkerchief.",
          scientific: "Blood still liquid after 750 years. Analyses confirm AB human blood.",
          status: "Continuous veneration, active pilgrimage",
          coordinates: [39.2369, -8.6867]
        },
        {
          id: 5,
          title: "Miracle of Sokółka",
          location: "Sokółka, Poland",
          date: "October 12, 2008",
          flag: "🇵🇱",
          description: "A host falls and breaks. Placed in water, part transforms into cardiac tissue.",
          scientific: "2009-2010 analyses: human cardiac tissue in agony. No external contamination.",
          status: "Recognized by Bishop of Białystok",
          coordinates: [53.4011, 23.5014]
        },
        {
          id: 6,
          title: "Miracle of Orvieto",
          location: "Orvieto, Italy",
          date: "1263",
          flag: "🇮🇹",
          description: "Continuation of Bolsena miracle. Pope builds Orvieto Cathedral to house the relics.",
          scientific: "Blood-stained corporal preserved. Luca Signorelli frescoes witness the event.",
          status: "Cathedral dedicated to the miracle",
          coordinates: [42.7183, 12.1133]
        },
        {
          id: 7,
          title: "Miracle of Tixtla",
          location: "Tixtla, Mexico",
          date: "October 21, 2006",
          flag: "🇲🇽",
          description: "During Eucharistic adoration, a host begins bleeding. The phenomenon repeats several times.",
          scientific: "AB human blood, same as Shroud of Turin. Analyses confirm authenticity.",
          status: "Recognized by Bishop of Chilpancingo",
          coordinates: [17.5647, -99.3953]
        },
        {
          id: 8,
          title: "Miracle of Chirattakonam",
          location: "Kerala, India",
          date: "April 28, 2001",
          flag: "🇮🇳",
          description: "First Eucharistic miracle in India. Host transforms into flesh during Mass.",
          scientific: "Analyses confirm human tissue. First documented Eucharistic miracle in Asia.",
          status: "Recognized by Bishop of Trivandrum",
          coordinates: [8.5241, 76.9366]
        }
      ],

      scientific_section: {
        title: "Common Scientific Evidence",
        evidence: [
          "Human cardiac tissue (left ventricle muscle)",
          "AB blood type (universal donor)",
          "Male human DNA",
          "No artificial preservation",
          "Resistance to natural decomposition",
          "Presence of white blood cells (sign of recent life)"
        ]
      },

      sources: {
        title: "Sources and Documentation",
        items: [
          {
            text: "Official scientific reports",
            links: [
              { text: "Lanciano Analyses (1970-1981)", url: "https://www.miracolieucaristici.org/en/Liste/list.html" },
              { text: "Buenos Aires Studies", url: "https://www.miracolieucaristici.org/en/Liste/scheda_en.html?nat=argentina&wh=buenos&ct=Buenos%20Aires" }
            ]
          },
          {
            text: "Episcopal declarations",
            links: [
              { text: "Vatican - Eucharistic Miracles", url: "https://www.vatican.va" },
              { text: "Congregation for the Doctrine of Faith", url: "https://www.vatican.va/roman_curia/congregations/cfaith/" }
            ]
          },
          {
            text: "Historical documentation",
            links: [
              { text: "Official Carlos Acutis Site", url: "https://www.carloacutis.com" },
              { text: "Eucharistic Miracles Exhibition", url: "https://www.miracolieucaristici.org" }
            ]
          },
          {
            text: "Scientific analyses",
            links: [
              { text: "Forensic Medicine Laboratory", url: "#" },
              { text: "Pathology Institute", url: "#" }
            ]
          }
        ]
      }
    }
  }

  const t = content[language] || content.fr

  return (
    <div className="miracles-content">
      <div className="miracles-header">
        <h1 className="miracles-title">{t.title}</h1>
        <h2 className="miracles-subtitle">{t.subtitle}</h2>
        <p className="miracles-intro">{t.intro}</p>
      </div>

      <div className="miracles-grid">
        {t.miracles.map(miracle => (
          <div key={miracle.id} className="miracle-card">
            <div className="miracle-header">
              <span className="miracle-flag">{miracle.flag}</span>
              <h3 className="miracle-title">{miracle.title}</h3>
            </div>
            
            <div className="miracle-info">
              <p className="miracle-location">📍 {miracle.location}</p>
              <p className="miracle-date">📅 {miracle.date}</p>
            </div>
            
            <p className="miracle-description">{miracle.description}</p>
            
            <div className="miracle-scientific">
              <h4>🔬 Preuves Scientifiques</h4>
              <p>{miracle.scientific}</p>
            </div>
            
            <div className="miracle-status">
              <span className="status-badge">✅ {miracle.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="scientific-evidence">
        <h2>{t.scientific_section.title}</h2>
        <div className="evidence-grid">
          {t.scientific_section.evidence.map((item, index) => (
            <div key={index} className="evidence-item">
              <span className="evidence-icon">🔬</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sources-section">
        <h2>{t.sources.title}</h2>
        <div className="sources-grid">
          {t.sources.items.map((category, index) => (
            <div key={index} className="source-category">
              <h3 className="source-category-title">{category.text}</h3>
              <ul className="source-links">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="source-link"
                    >
                      🔗 {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MiraclesContent
