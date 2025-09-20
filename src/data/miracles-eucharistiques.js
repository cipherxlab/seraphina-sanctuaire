// Base de données des Miracles Eucharistiques - SERAPHINA
// Inspiré par Saint Carlos Acutis

export const miraclesEucharistiques = [
  {
    id: 1,
    name: {
      fr: "Miracle de Lanciano",
      en: "Miracle of Lanciano", 
      es: "Milagro de Lanciano",
      pt: "Milagre de Lanciano",
      it: "Miracolo di Lanciano",
      de: "Wunder von Lanciano",
      ru: "Чудо Ланчано",
      ar: "معجزة لانتشيانو",
      zh: "兰奇亚诺奇迹",
      ja: "ランチャーノの奇跡"
    },
    location: {
      city: "Lanciano",
      country: {
        fr: "Italie",
        en: "Italy",
        es: "Italia", 
        pt: "Itália",
        it: "Italia",
        de: "Italien",
        ru: "Италия",
        ar: "إيطاليا",
        zh: "意大利",
        ja: "イタリア"
      },
      coordinates: {
        lat: 42.2281,
        lng: 14.3889
      }
    },
    year: "VIIe siècle",
    type: "eucharistique",
    importance: 5,
    hasRelics: true,
    status: {
      fr: "Reconnu officiellement",
      en: "Officially recognized",
      es: "Reconocido oficialmente",
      pt: "Oficialmente reconhecido", 
      it: "Ufficialmente riconosciuto",
      de: "Offiziell anerkannt",
      ru: "Официально признано",
      ar: "معترف به رسمياً",
      zh: "官方认可",
      ja: "公式に認められた"
    },
    description: {
      fr: "Premier miracle eucharistique documenté de l'histoire. Un moine basilien doutant de la présence réelle du Christ dans l'Eucharistie vit l'hostie se transformer en chair et le vin en sang. Les analyses scientifiques modernes confirment qu'il s'agit de tissu cardiaque humain et de sang de type AB.",
      en: "First documented Eucharistic miracle in history. A Basilian monk doubting the real presence of Christ in the Eucharist saw the host transform into flesh and wine into blood. Modern scientific analyses confirm it is human cardiac tissue and type AB blood.",
      es: "Primer milagro eucarístico documentado de la historia. Un monje basiliano que dudaba de la presencia real de Cristo en la Eucaristía vio la hostia transformarse en carne y el vino en sangre. Los análisis científicos modernos confirman que es tejido cardíaco humano y sangre tipo AB.",
      pt: "Primeiro milagre eucarístico documentado da história. Um monge basiliano que duvidava da presença real de Cristo na Eucaristia viu a hóstia se transformar em carne e o vinho em sangue. Análises científicas modernas confirmam que é tecido cardíaco humano e sangue tipo AB.",
      it: "Primo miracolo eucaristico documentato della storia. Un monaco basiliano che dubitava della presenza reale di Cristo nell'Eucaristia vide l'ostia trasformarsi in carne e il vino in sangue. Le analisi scientifiche moderne confermano che si tratta di tessuto cardiaco umano e sangue di tipo AB.",
      de: "Erstes dokumentiertes eucharistisches Wunder der Geschichte. Ein Basilianer-Mönch, der an der realen Gegenwart Christi in der Eucharistie zweifelte, sah die Hostie sich in Fleisch und den Wein in Blut verwandeln. Moderne wissenschaftliche Analysen bestätigen, dass es sich um menschliches Herzgewebe und Blut der Gruppe AB handelt.",
      ru: "Первое задокументированное евхаристическое чудо в истории. Монах-василианин, сомневавшийся в реальном присутствии Христа в Евхаристии, увидел, как гостия превратилась в плоть, а вино в кровь. Современные научные анализы подтверждают, что это человеческая сердечная ткань и кровь группы AB.",
      ar: "أول معجزة إفخارستية موثقة في التاريخ. راهب باسيلي يشك في الحضور الحقيقي للمسيح في الإفخارستيا رأى القربان يتحول إلى لحم والخمر إلى دم. التحاليل العلمية الحديثة تؤكد أنه نسيج قلبي بشري ودم من فئة AB.",
      zh: "历史上第一个有记录的圣体奇迹。一位对基督在圣体中真实临在产生怀疑的巴西利安修士看到圣饼变成肉，酒变成血。现代科学分析证实这是人类心脏组织和AB型血。",
      ja: "歴史上初めて記録された聖体の奇跡。聖体におけるキリストの真の現存を疑っていたバジル会の修道士が、聖体が肉に、ぶどう酒が血に変わるのを見た。現代の科学分析により、それが人間の心臓組織とAB型の血液であることが確認されている。"
    },
    tags: ["eucharistie", "science", "médecine", "historique"],
    scientificEvidence: true,
    imageUrl: "/images/miracles/lanciano.jpg"
  },

  {
    id: 2,
    name: {
      fr: "Miracle de Buenos Aires",
      en: "Miracle of Buenos Aires",
      es: "Milagro de Buenos Aires", 
      pt: "Milagre de Buenos Aires",
      it: "Miracolo di Buenos Aires",
      de: "Wunder von Buenos Aires",
      ru: "Чудо Буэнос-Айреса",
      ar: "معجزة بوينس آيرس",
      zh: "布宜诺斯艾利斯奇迹",
      ja: "ブエノスアイレスの奇跡"
    },
    location: {
      city: "Buenos Aires",
      country: {
        fr: "Argentine",
        en: "Argentina",
        es: "Argentina",
        pt: "Argentina", 
        it: "Argentina",
        de: "Argentinien",
        ru: "Аргентина",
        ar: "الأرجنتين",
        zh: "阿根廷",
        ja: "アルゼンチン"
      },
      coordinates: {
        lat: -34.6118,
        lng: -58.3960
      }
    },
    year: "1996",
    type: "eucharistique",
    importance: 5,
    hasRelics: true,
    status: {
      fr: "Reconnu par le futur pape François",
      en: "Recognized by future Pope Francis",
      es: "Reconocido por el futuro papa Francisco",
      pt: "Reconhecido pelo futuro papa Francisco",
      it: "Riconosciuto dal futuro papa Francesco", 
      de: "Anerkannt vom zukünftigen Papst Franziskus",
      ru: "Признано будущим папой Франциском",
      ar: "معترف به من قبل البابا فرانسيس المستقبلي",
      zh: "得到未来教皇方济各的认可",
      ja: "将来の教皇フランシスコによって認められた"
    },
    description: {
      fr: "Une hostie consacrée jetée dans l'eau bénite se transforme en tissu cardiaque humain. L'archevêque Jorge Bergoglio (futur pape François) ordonne des analyses scientifiques qui révèlent un tissu cardiaque vivant, de type AB, ayant subi un traumatisme intense.",
      en: "A consecrated host thrown into holy water transforms into human cardiac tissue. Archbishop Jorge Bergoglio (future Pope Francis) orders scientific analyses that reveal living cardiac tissue, type AB, having suffered intense trauma.",
      es: "Una hostia consagrada arrojada al agua bendita se transforma en tejido cardíaco humano. El arzobispo Jorge Bergoglio (futuro papa Francisco) ordena análisis científicos que revelan tejido cardíaco vivo, tipo AB, que ha sufrido un trauma intenso.",
      pt: "Uma hóstia consagrada jogada na água benta se transforma em tecido cardíaco humano. O arcebispo Jorge Bergoglio (futuro papa Francisco) ordena análises científicas que revelam tecido cardíaco vivo, tipo AB, que sofreu trauma intenso.",
      it: "Un'ostia consacrata gettata nell'acqua santa si trasforma in tessuto cardiaco umano. L'arcivescovo Jorge Bergoglio (futuro papa Francesco) ordina analisi scientifiche che rivelano tessuto cardiaco vivente, tipo AB, che ha subito un trauma intenso.",
      de: "Eine geweihte Hostie, die in Weihwasser geworfen wurde, verwandelt sich in menschliches Herzgewebe. Erzbischof Jorge Bergoglio (der zukünftige Papst Franziskus) ordnet wissenschaftliche Analysen an, die lebendes Herzgewebe vom Typ AB zeigen, das ein intensives Trauma erlitten hat.",
      ru: "Освященная гостия, брошенная в святую воду, превращается в человеческую сердечную ткань. Архиепископ Хорхе Бергольо (будущий папа Франциск) приказывает провести научные анализы, которые выявляют живую сердечную ткань типа AB, перенесшую сильную травму.",
      ar: "قربان مقدس ألقي في الماء المقدس يتحول إلى نسيج قلبي بشري. الأسقف خورخي بيرغوليو (البابا فرانسيس المستقبلي) يأمر بإجراء تحاليل علمية تكشف عن نسيج قلبي حي من فئة AB تعرض لصدمة شديدة.",
      zh: "一个被扔进圣水中的祝圣圣饼变成了人类心脏组织。大主教豪尔赫·贝尔戈利奥（未来的教皇方济各）下令进行科学分析，结果显示这是活的心脏组织，AB型，遭受了强烈创伤。",
      ja: "聖水に投げ込まれた聖別されたホスチアが人間の心臓組織に変化した。大司教ホルヘ・ベルゴリオ（将来の教皇フランシスコ）は科学的分析を命じ、激しい外傷を受けたAB型の生きた心臓組織であることが明らかになった。"
    },
    tags: ["eucharistie", "science", "moderne", "pape François"],
    scientificEvidence: true,
    imageUrl: "/images/miracles/buenos-aires.jpg"
  },

  {
    id: 3,
    name: {
      fr: "Miracle de Bolsena",
      en: "Miracle of Bolsena",
      es: "Milagro de Bolsena",
      pt: "Milagre de Bolsena", 
      it: "Miracolo di Bolsena",
      de: "Wunder von Bolsena",
      ru: "Чудо Больсены",
      ar: "معجزة بولسينا",
      zh: "博尔塞纳奇迹", 
      ja: "ボルセーナの奇跡"
    },
    location: {
      city: "Bolsena",
      country: {
        fr: "Italie",
        en: "Italy",
        es: "Italia",
        pt: "Itália",
        it: "Italia", 
        de: "Italien",
        ru: "Италия",
        ar: "إيطاليا",
        zh: "意大利",
        ja: "イタリア"
      },
      coordinates: {
        lat: 42.6439,
        lng: 11.9853
      }
    },
    year: "1263",
    type: "eucharistique",
    importance: 5,
    hasRelics: true,
    status: {
      fr: "Origine de la Fête-Dieu",
      en: "Origin of Corpus Christi feast",
      es: "Origen de la fiesta del Corpus Christi",
      pt: "Origem da festa de Corpus Christi",
      it: "Origine della festa del Corpus Domini",
      de: "Ursprung des Fronleichnamsfestes", 
      ru: "Происхождение праздника Тела Христова",
      ar: "أصل عيد جسد المسيح",
      zh: "圣体节的起源",
      ja: "聖体の祝日の起源"
    },
    description: {
      fr: "Un prêtre bohémien en pèlerinage vers Rome, doutant de la transsubstantiation, voit l'hostie saigner pendant la messe. Le sang tache le corporal et les marches de l'autel. Le pape Urbain IV institue la Fête-Dieu suite à ce miracle.",
      en: "A Bohemian priest on pilgrimage to Rome, doubting transubstantiation, sees the host bleed during mass. The blood stains the corporal and altar steps. Pope Urban IV institutes the Corpus Christi feast following this miracle.",
      es: "Un sacerdote bohemio en peregrinación a Roma, dudando de la transubstanciación, ve la hostia sangrar durante la misa. La sangre mancha el corporal y los escalones del altar. El papa Urbano IV instituye la fiesta del Corpus Christi tras este milagro.",
      pt: "Um sacerdote boêmio em peregrinação a Roma, duvidando da transubstanciação, vê a hóstia sangrar durante a missa. O sangue mancha o corporal e os degraus do altar. O papa Urbano IV institui a festa de Corpus Christi após este milagre.",
      it: "Un sacerdote boemo in pellegrinaggio verso Roma, dubitando della transustanziazione, vede l'ostia sanguinare durante la messa. Il sangue macchia il corporale e i gradini dell'altare. Papa Urbano IV istituisce la festa del Corpus Domini in seguito a questo miracolo.",
      de: "Ein böhmischer Priester auf Pilgerreise nach Rom, der an der Transsubstantiation zweifelt, sieht die Hostie während der Messe bluten. Das Blut befleckt das Korporale und die Altarstufen. Papst Urban IV. führt das Fronleichnamsfest nach diesem Wunder ein.",
      ru: "Богемский священник, совершающий паломничество в Рим и сомневающийся в пресуществлении, видит, как гостия кровоточит во время мессы. Кровь пачкает корпорал и ступени алтаря. Папа Урбан IV учреждает праздник Тела Христова после этого чуда.",
      ar: "كاهن بوهيمي في حج إلى روما، يشك في التحول الجوهري، يرى القربان ينزف أثناء القداس. الدم يلطخ الكوربورال ودرجات المذبح. البابا أوربان الرابع يؤسس عيد جسد المسيح بعد هذه المعجزة.",
      zh: "一位前往罗马朝圣的波希米亚神父对变体论产生怀疑，在弥撒中看到圣饼流血。血液染红了圣体布和祭台台阶。教皇乌尔班四世在这个奇迹后设立了圣体节。",
      ja: "ローマへの巡礼中のボヘミアの司祭が全質変化を疑っていたところ、ミサ中にホスチアが出血するのを見た。血がコーポラルと祭壇の階段を染めた。教皇ウルバヌス4世はこの奇跡の後、聖体の祝日を制定した。"
    },
    tags: ["eucharistie", "pèlerinage", "Fête-Dieu", "historique"],
    scientificEvidence: false,
    imageUrl: "/images/miracles/bolsena.jpg"
  }

  // ... Continuer avec les 12 autres miracles eucharistiques
];

,

  {
    id: 4,
    name: {
      fr: "Miracle d'Orvieto",
      en: "Miracle of Orvieto",
      es: "Milagro de Orvieto",
      pt: "Milagre de Orvieto",
      it: "Miracolo di Orvieto",
      de: "Wunder von Orvieto",
      ru: "Чудо Орвието",
      ar: "معجزة أورفييتو",
      zh: "奥尔维耶托奇迹",
      ja: "オルヴィエートの奇跡"
    },
    location: {
      city: "Orvieto",
      country: {
        fr: "Italie",
        en: "Italy",
        es: "Italia",
        pt: "Itália",
        it: "Italia",
        de: "Italien",
        ru: "Италия",
        ar: "إيطاليا",
        zh: "意大利",
        ja: "イタリア"
      },
      coordinates: {
        lat: 42.7183,
        lng: 12.1108
      }
    },
    year: "1263",
    type: "eucharistique",
    importance: 4,
    hasRelics: true,
    status: {
      fr: "Reconnu par l'Église catholique",
      en: "Recognized by the Catholic Church",
      es: "Reconocido por la Iglesia Católica",
      pt: "Reconhecido pela Igreja Católica",
      it: "Riconosciuto dalla Chiesa Cattolica",
      de: "Von der katholischen Kirche anerkannt",
      ru: "Признано Католической Церковью",
      ar: "معترف به من قبل الكنيسة الكاثوليكية",
      zh: "得到天主教会认可",
      ja: "カトリック教会によって認められた"
    },
    description: {
      fr: "Lié au miracle de Bolsena, le pape Urbain IV fait construire la magnifique cathédrale d'Orvieto pour abriter les reliques du corporal taché de sang. La façade gothique raconte l'histoire des miracles eucharistiques.",
      en: "Linked to the Bolsena miracle, Pope Urban IV had the magnificent Orvieto cathedral built to house the relics of the blood-stained corporal. The Gothic facade tells the story of Eucharistic miracles.",
      es: "Vinculado al milagro de Bolsena, el papa Urbano IV hace construir la magnífica catedral de Orvieto para albergar las reliquias del corporal manchado de sangre. La fachada gótica cuenta la historia de los milagros eucarísticos.",
      pt: "Ligado ao milagre de Bolsena, o papa Urbano IV fez construir a magnífica catedral de Orvieto para abrigar as relíquias do corporal manchado de sangue. A fachada gótica conta a história dos milagres eucarísticos.",
      it: "Collegato al miracolo di Bolsena, papa Urbano IV fa costruire la magnifica cattedrale di Orvieto per custodire le reliquie del corporale macchiato di sangue. La facciata gotica racconta la storia dei miracoli eucaristici.",
      de: "Mit dem Wunder von Bolsena verbunden, ließ Papst Urban IV. die prächtige Kathedrale von Orvieto bauen, um die Reliquien des blutbefleckten Korporals zu beherbergen. Die gotische Fassade erzählt die Geschichte der eucharistischen Wunder.",
      ru: "Связанный с чудом Больсены, папа Урбан IV построил великолепный собор Орвието для хранения реликвий окровавленного корпорала. Готический фасад рассказывает историю евхаристических чудес.",
      ar: "مرتبط بمعجزة بولسينا، البابا أوربان الرابع يبني كاتدرائية أورفييتو الرائعة لإيواء آثار الكوربورال الملطخ بالدم. الواجهة القوطية تحكي قصة المعجزات الإفخارستية.",
      zh: "与博尔塞纳奇迹相关，教皇乌尔班四世建造了宏伟的奥尔维耶托大教堂来收藏染血圣体布的遗物。哥特式立面讲述了圣体奇迹的故事。",
      ja: "ボルセーナの奇跡と関連して、教皇ウルバヌス4世は血に染まったコーポラルの聖遺物を収めるために壮大なオルヴィエート大聖堂を建設した。ゴシック様式のファサードは聖体の奇跡の物語を語っている。"
    },
    tags: ["eucharistie", "cathédrale", "art", "Bolsena"],
    scientificEvidence: false,
    imageUrl: "/images/miracles/orvieto.jpg"
  },

  {
    id: 5,
    name: {
      fr: "Miracle de Santarém",
      en: "Miracle of Santarém",
      es: "Milagro de Santarém",
      pt: "Milagre de Santarém",
      it: "Miracolo di Santarém",
      de: "Wunder von Santarém",
      ru: "Чудо Сантарена",
      ar: "معجزة سانتاريم",
      zh: "圣塔伦奇迹",
      ja: "サンタレンの奇跡"
    },
    location: {
      city: "Santarém",
      country: {
        fr: "Portugal",
        en: "Portugal",
        es: "Portugal",
        pt: "Portugal",
        it: "Portogallo",
        de: "Portugal",
        ru: "Португалия",
        ar: "البرتغال",
        zh: "葡萄牙",
        ja: "ポルトガル"
      },
      coordinates: {
        lat: 39.2369,
        lng: -8.6859
      }
    },
    year: "1247",
    type: "eucharistique",
    importance: 4,
    hasRelics: true,
    status: {
      fr: "Reconnu par l'Église catholique",
      en: "Recognized by the Catholic Church",
      es: "Reconocido por la Iglesia Católica",
      pt: "Reconhecido pela Igreja Católica",
      it: "Riconosciuto dalla Chiesa Cattolica",
      de: "Von der katholischen Kirche anerkannt",
      ru: "Признано Католической Церковью",
      ar: "معترف به من قبل الكنيسة الكاثوليكية",
      zh: "得到天主教会认可",
      ja: "カトリック教会によって認められた"
    },
    description: {
      fr: "Une femme vole une hostie consacrée pour des pratiques de sorcellerie. L'hostie se met à saigner abondamment dans son mouchoir. Effrayée, elle la remet au prêtre. L'hostie continue de saigner et est conservée dans un reliquaire de cristal.",
      en: "A woman steals a consecrated host for witchcraft practices. The host begins to bleed profusely in her handkerchief. Frightened, she returns it to the priest. The host continues to bleed and is preserved in a crystal reliquary.",
      es: "Una mujer roba una hostia consagrada para prácticas de brujería. La hostia comienza a sangrar profusamente en su pañuelo. Asustada, se la devuelve al sacerdote. La hostia continúa sangrando y se conserva en un relicario de cristal.",
      pt: "Uma mulher rouba uma hóstia consagrada para práticas de feitiçaria. A hóstia começa a sangrar profusamente em seu lenço. Assustada, ela a devolve ao padre. A hóstia continua a sangrar e é preservada em um relicário de cristal.",
      it: "Una donna ruba un'ostia consacrata per pratiche di stregoneria. L'ostia inizia a sanguinare abbondantemente nel suo fazzoletto. Spaventata, la restituisce al sacerdote. L'ostia continua a sanguinare ed è conservata in un reliquiario di cristallo.",
      de: "Eine Frau stiehlt eine geweihte Hostie für Hexereipraktiken. Die Hostie beginnt stark in ihr Taschentuch zu bluten. Erschrocken gibt sie sie dem Priester zurück. Die Hostie blutet weiter und wird in einem Kristallreliquiar aufbewahrt.",
      ru: "Женщина крадет освященную гостию для колдовских практик. Гостия начинает обильно кровоточить в ее платке. Испугавшись, она возвращает ее священнику. Гостия продолжает кровоточить и хранится в хрустальном реликварии.",
      ar: "امرأة تسرق قرباناً مقدساً لممارسات السحر. القربان يبدأ بالنزف بغزارة في منديلها. خائفة، تعيده للكاهن. القربان يستمر في النزف ويُحفظ في تابوت أثر من الكريستال.",
      zh: "一个女人偷了一个祝圣的圣饼用于巫术。圣饼在她的手帕中开始大量出血。她害怕了，把它还给了神父。圣饼继续出血，被保存在水晶圣物盒中。",
      ja: "ある女性が魔術の実践のために聖別されたホスチアを盗んだ。ホスチアは彼女のハンカチの中で激しく出血し始めた。恐れた彼女はそれを司祭に返した。ホスチアは出血を続け、水晶の聖遺物容器に保存されている。"
    },
    tags: ["eucharistie", "sang", "reliquaire", "Portugal"],
    scientificEvidence: false,
    imageUrl: "/images/miracles/santarem.jpg"
  },

  {
    id: 6,
    name: {
      fr: "Miracle de Tixtla",
      en: "Miracle of Tixtla",
      es: "Milagro de Tixtla",
      pt: "Milagre de Tixtla",
      it: "Miracolo di Tixtla",
      de: "Wunder von Tixtla",
      ru: "Чудо Тикстлы",
      ar: "معجزة تيكستلا",
      zh: "蒂克斯特拉奇迹",
      ja: "ティクストラの奇跡"
    },
    location: {
      city: "Tixtla",
      country: {
        fr: "Mexique",
        en: "Mexico",
        es: "México",
        pt: "México",
        it: "Messico",
        de: "Mexiko",
        ru: "Мексика",
        ar: "المكسيك",
        zh: "墨西哥",
        ja: "メキシコ"
      },
      coordinates: {
        lat: 17.5667,
        lng: -99.4000
      }
    },
    year: "2006",
    type: "eucharistique",
    importance: 4,
    hasRelics: true,
    status: {
      fr: "Reconnu par l'évêque local",
      en: "Recognized by local bishop",
      es: "Reconocido por el obispo local",
      pt: "Reconhecido pelo bispo local",
      it: "Riconosciuto dal vescovo locale",
      de: "Vom örtlichen Bischof anerkannt",
      ru: "Признано местным епископом",
      ar: "معترف به من قبل الأسقف المحلي",
      zh: "得到当地主教认可",
      ja: "地元の司教によって認められた"
    },
    description: {
      fr: "Une hostie consacrée 'sue' du sang pendant l'adoration eucharistique. Les analyses scientifiques révèlent du sang humain de type AB avec des globules rouges vivants. Le phénomène se répète plusieurs fois devant de nombreux témoins.",
      en: "A consecrated host 'sweats' blood during Eucharistic adoration. Scientific analyses reveal human type AB blood with living red blood cells. The phenomenon repeats several times before numerous witnesses.",
      es: "Una hostia consagrada 'suda' sangre durante la adoración eucarística. Los análisis científicos revelan sangre humana tipo AB con glóbulos rojos vivos. El fenómeno se repite varias veces ante numerosos testigos.",
      pt: "Uma hóstia consagrada 'sua' sangue durante a adoração eucarística. As análises científicas revelam sangue humano tipo AB com glóbulos vermelhos vivos. O fenômeno se repete várias vezes diante de numerosas testemunhas.",
      it: "Un'ostia consacrata 'suda' sangue durante l'adorazione eucaristica. Le analisi scientifiche rivelano sangue umano di tipo AB con globuli rossi viventi. Il fenomeno si ripete più volte davanti a numerosi testimoni.",
      de: "Eine geweihte Hostie 'schwitzt' Blut während der eucharistischen Anbetung. Wissenschaftliche Analysen zeigen menschliches Blut vom Typ AB mit lebenden roten Blutkörperchen. Das Phänomen wiederholt sich mehrmals vor zahlreichen Zeugen.",
      ru: "Освященная гостия 'потеет' кровью во время евхаристического поклонения. Научные анализы выявляют человеческую кровь типа AB с живыми эритроцитами. Феномен повторяется несколько раз перед многочисленными свидетелями.",
      ar: "قربان مقدس 'يعرق' دماً أثناء السجود الإفخارستي. التحاليل العلمية تكشف عن دم بشري من فئة AB مع خلايا دم حمراء حية. الظاهرة تتكرر عدة مرات أمام شهود عديدين.",
      zh: "一个祝圣的圣饼在圣体朝拜期间'出汗'流血。科学分析显示这是AB型人血，含有活的红血球。这种现象在众多见证人面前重复了几次。",
      ja: "聖体礼拝中に聖別されたホスチアが血を'汗'として流した。科学的分析により、生きた赤血球を含むAB型の人間の血液であることが明らかになった。この現象は多くの証人の前で数回繰り返された。"
    },
    tags: ["eucharistie", "science", "moderne", "sang"],
    scientificEvidence: true,
    imageUrl: "/images/miracles/tixtla.jpg"
  }
];
