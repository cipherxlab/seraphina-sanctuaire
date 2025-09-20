// Base de données des Lieux Saints et Apparitions - SERAPHINA
// Inspiré par Saint Carlos Acutis

export const lieuxSaints = [
  {
    id: 101,
    name: {
      fr: "Sanctuaire de Fatima",
      en: "Sanctuary of Fatima",
      es: "Santuario de Fátima",
      pt: "Santuário de Fátima",
      it: "Santuario di Fatima",
      de: "Heiligtum von Fatima",
      ru: "Святилище Фатимы",
      ar: "مقدس فاطمة",
      zh: "法蒂玛圣地",
      ja: "ファティマの聖地"
    },
    location: {
      city: "Fatima",
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
        lat: 39.6319,
        lng: -8.6725
      }
    },
    year: "1917",
    type: "apparition",
    importance: 5,
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
      fr: "Apparitions de la Vierge Marie à trois petits bergers : Lucie, François et Jacinthe. La Vierge demande la prière du rosaire, la pénitence et révèle trois secrets. Le miracle du soleil le 13 octobre 1917 devant 70 000 personnes confirme les apparitions.",
      en: "Apparitions of the Virgin Mary to three little shepherds: Lucia, Francisco and Jacinta. The Virgin asks for rosary prayer, penance and reveals three secrets. The miracle of the sun on October 13, 1917 before 70,000 people confirms the apparitions.",
      es: "Apariciones de la Virgen María a tres pequeños pastores: Lucía, Francisco y Jacinta. La Virgen pide la oración del rosario, la penitencia y revela tres secretos. El milagro del sol el 13 de octubre de 1917 ante 70,000 personas confirma las apariciones.",
      pt: "Aparições da Virgem Maria a três pequenos pastores: Lúcia, Francisco e Jacinta. A Virgem pede a oração do rosário, a penitência e revela três segredos. O milagre do sol em 13 de outubro de 1917 diante de 70.000 pessoas confirma as aparições.",
      it: "Apparizioni della Vergine Maria a tre piccoli pastori: Lucia, Francisco e Giacinta. La Vergine chiede la preghiera del rosario, la penitenza e rivela tre segreti. Il miracolo del sole il 13 ottobre 1917 davanti a 70.000 persone conferma le apparizioni.",
      de: "Erscheinungen der Jungfrau Maria vor drei kleinen Hirten: Lucia, Francisco und Jacinta. Die Jungfrau bittet um das Rosenkranzgebet, Buße und offenbart drei Geheimnisse. Das Sonnenwunder am 13. Oktober 1917 vor 70.000 Menschen bestätigt die Erscheinungen.",
      ru: "Явления Девы Марии трем маленьким пастушкам: Лусии, Франсиско и Жасинте. Дева просит молиться розарий, покаяние и открывает три тайны. Чудо солнца 13 октября 1917 года перед 70 000 человек подтверждает явления.",
      ar: "ظهورات العذراء مريم لثلاثة رعاة صغار: لوسيا وفرانسيسكو وجاسينتا. العذراء تطلب صلاة المسبحة والتوبة وتكشف ثلاثة أسرار. معجزة الشمس في 13 أكتوبر 1917 أمام 70,000 شخص تؤكد الظهورات.",
      zh: "圣母玛利亚向三个小牧童显现：露西亚、弗朗西斯科和雅辛塔。圣母要求念玫瑰经、做补赎并揭示了三个秘密。1917年10月13日在7万人面前发生的太阳奇迹证实了显现。",
      ja: "聖母マリアが三人の小さな羊飼いに現れた：ルシア、フランシスコ、ヤシンタ。聖母はロザリオの祈り、償いを求め、三つの秘密を明かした。1917年10月13日、7万人の前で起こった太陽の奇跡が出現を確認した。"
    },
    tags: ["apparition", "Marie", "rosaire", "secrets"],
    scientificEvidence: true,
    imageUrl: "/images/lieux/fatima.jpg"
  },

  {
    id: 102,
    name: {
      fr: "Sanctuaire de Lourdes",
      en: "Sanctuary of Lourdes",
      es: "Santuario de Lourdes", 
      pt: "Santuário de Lourdes",
      it: "Santuario di Lourdes",
      de: "Heiligtum von Lourdes",
      ru: "Святилище Лурда",
      ar: "مقدس لورد",
      zh: "卢尔德圣地",
      ja: "ルルドの聖地"
    },
    location: {
      city: "Lourdes",
      country: {
        fr: "France",
        en: "France",
        es: "Francia",
        pt: "França", 
        it: "Francia",
        de: "Frankreich",
        ru: "Франция",
        ar: "فرنسا",
        zh: "法国",
        ja: "フランス"
      },
      coordinates: {
        lat: 43.0951,
        lng: -0.0482
      }
    },
    year: "1858",
    type: "apparition",
    importance: 5,
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
      fr: "Apparitions de la Vierge Marie à Bernadette Soubirous dans la grotte de Massabielle. La Vierge se révèle comme l'Immaculée Conception et fait jaillir une source miraculeuse. Plus de 70 guérisons officiellement reconnues par l'Église.",
      en: "Apparitions of the Virgin Mary to Bernadette Soubirous in the grotto of Massabielle. The Virgin reveals herself as the Immaculate Conception and causes a miraculous spring to flow. More than 70 healings officially recognized by the Church.",
      es: "Apariciones de la Virgen María a Bernadette Soubirous en la gruta de Massabielle. La Virgen se revela como la Inmaculada Concepción y hace brotar un manantial milagroso. Más de 70 curaciones oficialmente reconocidas por la Iglesia.",
      pt: "Aparições da Virgem Maria a Bernadette Soubirous na gruta de Massabielle. A Virgem se revela como a Imaculada Conceição e faz brotar uma fonte milagrosa. Mais de 70 curas oficialmente reconhecidas pela Igreja.",
      it: "Apparizioni della Vergine Maria a Bernadette Soubirous nella grotta di Massabielle. La Vergine si rivela come l'Immacolata Concezione e fa scaturire una sorgente miracolosa. Più di 70 guarigioni ufficialmente riconosciute dalla Chiesa.",
      de: "Erscheinungen der Jungfrau Maria vor Bernadette Soubirous in der Grotte von Massabielle. Die Jungfrau offenbart sich als die Unbefleckte Empfängnis und lässt eine wundersame Quelle entspringen. Mehr als 70 Heilungen offiziell von der Kirche anerkannt.",
      ru: "Явления Девы Марии Бернадетте Субиру в гроте Массабьель. Дева открывается как Непорочное Зачатие и заставляет забить чудесный источник. Более 70 исцелений официально признаны Церковью.",
      ar: "ظهورات العذراء مريم لبرناديت سوبيرو في كهف ماسابييل. العذراء تكشف عن نفسها كالحبل بلا دنس وتجعل نبعاً معجزياً يتدفق. أكثر من 70 شفاء معترف بها رسمياً من قبل الكنيسة.",
      zh: "圣母玛利亚向伯尔纳德·苏比鲁在马萨比耶尔洞穴显现。圣母显示自己是无原罪始胎，并使奇迹泉水涌出。超过70个治愈被教会正式认可。",
      ja: "聖母マリアがマサビエルの洞窟でベルナデット・スビルーに現れた。聖母は無原罪の御宿りとして自らを現し、奇跡の泉を湧き出させた。70以上の治癒が教会によって公式に認められている。"
    },
    tags: ["apparition", "Marie", "guérisons", "source"],
    scientificEvidence: true,
    imageUrl: "/images/lieux/lourdes.jpg"
  },

  {
    id: 103,
    name: {
      fr: "Basilique Notre-Dame de Guadalupe",
      en: "Basilica of Our Lady of Guadalupe",
      es: "Basílica de Nuestra Señora de Guadalupe",
      pt: "Basílica de Nossa Senhora de Guadalupe",
      it: "Basilica di Nostra Signora di Guadalupe", 
      de: "Basilika Unserer Lieben Frau von Guadalupe",
      ru: "Базилика Богоматери Гваделупской",
      ar: "بازيليك سيدة غوادالوبي",
      zh: "瓜达卢佩圣母大教堂",
      ja: "グアダルーペの聖母大聖堂"
    },
    location: {
      city: "Mexico City",
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
        lat: 19.4847,
        lng: -99.1172
      }
    },
    year: "1531",
    type: "apparition",
    importance: 5,
    hasRelics: true,
    status: {
      fr: "Patronne des Amériques",
      en: "Patroness of the Americas",
      es: "Patrona de las Américas",
      pt: "Padroeira das Américas",
      it: "Patrona delle Americhe",
      de: "Schutzpatronin der Amerikas",
      ru: "Покровительница Америк",
      ar: "شفيعة الأمريكتين", 
      zh: "美洲主保",
      ja: "アメリカ大陸の守護聖人"
    },
    description: {
      fr: "Apparition de la Vierge Marie à Juan Diego sur la colline de Tepeyac. L'image miraculeuse imprimée sur la tilma (manteau) de Juan Diego défie toute explication scientifique. Les yeux de la Vierge reflètent la scène de l'apparition.",
      en: "Apparition of the Virgin Mary to Juan Diego on Tepeyac Hill. The miraculous image printed on Juan Diego's tilma (cloak) defies all scientific explanation. The Virgin's eyes reflect the scene of the apparition.",
      es: "Aparición de la Virgen María a Juan Diego en el cerro del Tepeyac. La imagen milagrosa impresa en la tilma (manto) de Juan Diego desafía toda explicación científica. Los ojos de la Virgen reflejan la escena de la aparición.",
      pt: "Aparição da Virgem Maria a Juan Diego no cerro de Tepeyac. A imagem milagrosa impressa na tilma (manto) de Juan Diego desafia toda explicação científica. Os olhos da Virgem refletem a cena da aparição.",
      it: "Apparizione della Vergine Maria a Juan Diego sulla collina di Tepeyac. L'immagine miracolosa impressa sulla tilma (mantello) di Juan Diego sfida ogni spiegazione scientifica. Gli occhi della Vergine riflettono la scena dell'apparizione.",
      de: "Erscheinung der Jungfrau Maria vor Juan Diego auf dem Tepeyac-Hügel. Das wundersame Bild, das auf Juan Diegos Tilma (Mantel) gedruckt ist, trotzt jeder wissenschaftlichen Erklärung. Die Augen der Jungfrau spiegeln die Szene der Erscheinung wider.",
      ru: "Явление Девы Марии Хуану Диего на холме Тепеяк. Чудесное изображение, отпечатанное на тильме (плаще) Хуана Диего, не поддается никакому научному объяснению. Глаза Девы отражают сцену явления.",
      ar: "ظهور العذراء مريم لخوان دييغو على تل تيبياك. الصورة المعجزية المطبوعة على تيلما (عباءة) خوان دييغو تتحدى كل تفسير علمي. عيون العذراء تعكس مشهد الظهور.",
      zh: "圣母玛利亚在特佩亚克山向胡安·迭戈显现。印在胡安·迭戈的蒂尔马（斗篷）上的奇迹图像无法用科学解释。圣母的眼睛反映了显现的场景。",
      ja: "聖母マリアがテペヤックの丘でファン・ディエゴに現れた。ファン・ディエゴのティルマ（マント）に印刷された奇跡の画像は、あらゆる科学的説明に反している。聖母の目は出現の場面を映している。"
    },
    tags: ["apparition", "Marie", "image", "Amériques"],
    scientificEvidence: true,
    imageUrl: "/images/lieux/guadalupe.jpg"
  }

  // ... Continuer avec les 7 autres lieux saints
];

,

  {
    id: 104,
    name: {
      fr: "Basilique Saint-François d'Assise",
      en: "Basilica of Saint Francis of Assisi",
      es: "Basílica de San Francisco de Asís",
      pt: "Basílica de São Francisco de Assis",
      it: "Basilica di San Francesco d'Assisi",
      de: "Basilika des Heiligen Franziskus von Assisi",
      ru: "Базилика Святого Франциска Ассизского",
      ar: "بازيليك القديس فرنسيس الأسيزي",
      zh: "阿西西圣方济各大教堂",
      ja: "アッシジの聖フランチェスコ大聖堂"
    },
    location: {
      city: "Assise",
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
        lat: 43.0717,
        lng: 12.6056
      }
    },
    year: "1228",
    type: "basilique",
    importance: 5,
    hasRelics: true,
    status: {
      fr: "Patrimoine mondial UNESCO",
      en: "UNESCO World Heritage Site",
      es: "Patrimonio Mundial de la UNESCO",
      pt: "Patrimônio Mundial da UNESCO",
      it: "Patrimonio Mondiale UNESCO",
      de: "UNESCO-Weltkulturerbe",
      ru: "Объект Всемирного наследия ЮНЕСКО",
      ar: "موقع التراث العالمي لليونسكو",
      zh: "联合国教科文组织世界遗产",
      ja: "ユネスコ世界遺産"
    },
    description: {
      fr: "Lieu de naissance et tombeau de saint François d'Assise, fondateur de l'ordre franciscain. La basilique abrite les fresques de Giotto racontant la vie du saint. Haut lieu de pèlerinage et de spiritualité franciscaine.",
      en: "Birthplace and tomb of Saint Francis of Assisi, founder of the Franciscan order. The basilica houses Giotto's frescoes telling the saint's life. Major pilgrimage site and center of Franciscan spirituality.",
      es: "Lugar de nacimiento y tumba de san Francisco de Asís, fundador de la orden franciscana. La basílica alberga los frescos de Giotto que narran la vida del santo. Gran lugar de peregrinación y espiritualidad franciscana.",
      pt: "Local de nascimento e túmulo de são Francisco de Assis, fundador da ordem franciscana. A basílica abriga os afrescos de Giotto narrando a vida do santo. Grande local de peregrinação e espiritualidade franciscana.",
      it: "Luogo di nascita e tomba di san Francesco d'Assisi, fondatore dell'ordine francescano. La basilica ospita gli affreschi di Giotto che raccontano la vita del santo. Grande luogo di pellegrinaggio e spiritualità francescana.",
      de: "Geburtsort und Grab des heiligen Franziskus von Assisi, Gründer des Franziskanerordens. Die Basilika beherbergt Giottos Fresken, die das Leben des Heiligen erzählen. Wichtiger Wallfahrtsort und Zentrum franziskanischer Spiritualität.",
      ru: "Место рождения и гробница святого Франциска Ассизского, основателя францисканского ордена. Базилика хранит фрески Джотто, рассказывающие о жизни святого. Важное место паломничества и францисканской духовности.",
      ar: "مكان ولادة ومقبرة القديس فرنسيس الأسيزي، مؤسس الرهبانية الفرنسيسكانية. البازيليك يضم جداريات جيوتو التي تحكي حياة القديس. مكان حج رئيسي ومركز للروحانية الفرنسيسكانية.",
      zh: "阿西西圣方济各的出生地和陵墓，方济各会的创始人。大教堂收藏了乔托描绘圣人生平的壁画。重要的朝圣地和方济各会灵性中心。",
      ja: "フランシスコ会の創設者、アッシジの聖フランチェスコの生誕地と墓所。大聖堂にはジョットによる聖人の生涯を描いたフレスコ画がある。重要な巡礼地でありフランシスコ会の霊性の中心地。"
    },
    tags: ["saint François", "franciscain", "art", "pèlerinage"],
    scientificEvidence: false,
    imageUrl: "/images/lieux/assise.jpg"
  },

  {
    id: 105,
    name: {
      fr: "Sanctuaire de Medjugorje",
      en: "Sanctuary of Medjugorje",
      es: "Santuario de Medjugorje",
      pt: "Santuário de Medjugorje",
      it: "Santuario di Medjugorje",
      de: "Heiligtum von Medjugorje",
      ru: "Святилище Меджугорье",
      ar: "مقدس مديوغوريه",
      zh: "默主哥耶圣地",
      ja: "メジュゴリエの聖地"
    },
    location: {
      city: "Medjugorje",
      country: {
        fr: "Bosnie-Herzégovine",
        en: "Bosnia and Herzegovina",
        es: "Bosnia y Herzegovina",
        pt: "Bósnia e Herzegovina",
        it: "Bosnia ed Erzegovina",
        de: "Bosnien und Herzegowina",
        ru: "Босния и Герцеговина",
        ar: "البوسنة والهرسك",
        zh: "波斯尼亚和黑塞哥维那",
        ja: "ボスニア・ヘルツェゴビナ"
      },
      coordinates: {
        lat: 43.1919,
        lng: 17.6756
      }
    },
    year: "1981",
    type: "apparition",
    importance: 4,
    hasRelics: false,
    status: {
      fr: "Pèlerinages autorisés par le Vatican",
      en: "Pilgrimages authorized by the Vatican",
      es: "Peregrinaciones autorizadas por el Vaticano",
      pt: "Peregrinações autorizadas pelo Vaticano",
      it: "Pellegrinaggi autorizzati dal Vaticano",
      de: "Wallfahrten vom Vatikan genehmigt",
      ru: "Паломничества разрешены Ватиканом",
      ar: "الحج مصرح به من الفاتيكان",
      zh: "梵蒂冈授权朝圣",
      ja: "バチカンによって巡礼が認可された"
    },
    description: {
      fr: "Apparitions continues de la Vierge Marie à six voyants depuis 1981. Messages de paix, prière, jeûne et conversion. Millions de pèlerins visitent ce lieu malgré les controverses. Phénomènes inexpliqués rapportés.",
      en: "Continuous apparitions of the Virgin Mary to six visionaries since 1981. Messages of peace, prayer, fasting and conversion. Millions of pilgrims visit this place despite controversies. Unexplained phenomena reported.",
      es: "Apariciones continuas de la Virgen María a seis videntes desde 1981. Mensajes de paz, oración, ayuno y conversión. Millones de peregrinos visitan este lugar a pesar de las controversias. Fenómenos inexplicados reportados.",
      pt: "Aparições contínuas da Virgem Maria a seis videntes desde 1981. Mensagens de paz, oração, jejum e conversão. Milhões de peregrinos visitam este local apesar das controvérsias. Fenômenos inexplicados relatados.",
      it: "Apparizioni continue della Vergine Maria a sei veggenti dal 1981. Messaggi di pace, preghiera, digiuno e conversione. Milioni di pellegrini visitano questo luogo nonostante le controversie. Fenomeni inspiegabili riportati.",
      de: "Kontinuierliche Erscheinungen der Jungfrau Maria vor sechs Sehern seit 1981. Botschaften von Frieden, Gebet, Fasten und Bekehrung. Millionen von Pilgern besuchen diesen Ort trotz Kontroversen. Unerklärliche Phänomene berichtet.",
      ru: "Непрерывные явления Девы Марии шести провидцам с 1981 года. Послания мира, молитвы, поста и обращения. Миллионы паломников посещают это место, несмотря на споры. Сообщается о необъяснимых явлениях.",
      ar: "ظهورات مستمرة للعذراء مريم لستة رائين منذ 1981. رسائل السلام والصلاة والصوم والتوبة. ملايين الحجاج يزورون هذا المكان رغم الجدل. ظواهر غير مفسرة مُبلغ عنها.",
      zh: "自1981年以来圣母玛利亚持续向六位神视者显现。传达和平、祈祷、斋戒和皈依的信息。尽管存在争议，数百万朝圣者仍访问此地。报告了无法解释的现象。",
      ja: "1981年以来、聖母マリアが6人の幻視者に継続的に現れている。平和、祈り、断食、回心のメッセージ。論争があるにもかかわらず、何百万人もの巡礼者がこの場所を訪れている。説明のつかない現象が報告されている。"
    },
    tags: ["apparition", "Marie", "paix", "controverse"],
    scientificEvidence: false,
    imageUrl: "/images/lieux/medjugorje.jpg"
  }
];
