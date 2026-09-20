export const brand = {
  name: "LUMARA",
  fullName: "LUMARA Kosmetikinstitut",
  claim: "Zeitlose Schönheit. Achtsame Pflege.",
  founded: 2016,
  address: {
    street: "Lindenallee 24",
    zip: "80639",
    city: "München",
  },
  phone: "+49 89 4523 8871",
  phoneHref: "+498945238871",
  email: "hallo@lumara-kosmetik.de",
  instagram: "@lumara.kosmetik",
  facebook: "LumaraKosmetik",
  coordinates: { lat: 48.1497, lng: 11.5299 },
  hours: [
    { day: "Montag – Freitag", time: "09:00 – 19:00 Uhr" },
    { day: "Samstag", time: "10:00 – 15:00 Uhr" },
    { day: "Sonntag", time: "geschlossen" },
  ],
  owner: "Lena Hartmann",
  registerCourt: "Amtsgericht München",
  registerNumber: "HRB 234567",
  vatId: "DE345678912",
};

export type ServiceItem = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  longDescription: string;
  benefits: string[];
  image: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "gesicht",
    title: "Gesichtsbehandlungen",
    intro:
      "Individuell abgestimmte Rituale für einen strahlenden, gesunden Teint – von der Tiefenreinigung bis zur intensiven Aufbaukur.",
    items: [
      {
        slug: "signature-glow-facial",
        name: "Signature Glow Facial",
        duration: "90 Min",
        price: "129 €",
        description:
          "Unsere Signature-Behandlung mit Doppelreinigung, Enzympeeling, Ampullenkur und Gesichtsmassage.",
        longDescription:
          "Unsere meistgebuchte Behandlung beginnt mit einer ausführlichen Hautanalyse und einer sanften Doppelreinigung. Ein mildes Enzympeeling bereitet die Haut auf eine individuell abgestimmte Ampullenkur vor, bevor eine ausgiebige Gesichts-, Dekolleté- und Kopfhautmassage für tiefe Entspannung sorgt. Zum Abschluss versiegelt eine pflegende Maske das Ergebnis.",
        benefits: [
          "Sofort sichtbarer, strahlender Teint",
          "Individuell abgestimmte Wirkstoffampulle",
          "Inklusive Gesichts- und Dekolletémassage",
        ],
        image: "/images/facial-1.jpg",
      },
      {
        slug: "hydra-deep-cleanse",
        name: "Hydra Deep Cleanse",
        duration: "60 Min",
        price: "89 €",
        description:
          "Porentiefe Reinigung mit Dampf, Ausreinigung und beruhigender Feuchtigkeitsmaske.",
        longDescription:
          "Diese Behandlung kombiniert warmes Dampfbad, sanfte manuelle Ausreinigung und eine intensive Feuchtigkeitsmaske. Ideal bei unreiner Haut, erweiterten Poren oder als regelmäßige Pflegeroutine für einen klaren, frischen Teint.",
        benefits: [
          "Porentiefe Reinigung ohne Reizung",
          "Reduziert Unreinheiten und Glanz",
          "Langanhaltende Feuchtigkeitsversorgung",
        ],
        image: "/images/interior-1.jpg",
      },
      {
        slug: "anti-aging-kollagen-therapie",
        name: "Anti-Aging Kollagen-Therapie",
        duration: "75 Min",
        price: "149 €",
        description:
          "Straffende Intensivbehandlung mit Kollagen-Boost-Serum und Radiofrequenz-Massage.",
        longDescription:
          "Mit einem hochkonzentrierten Kollagen-Boost-Serum und einer straffenden Radiofrequenz-Massage wirkt diese Behandlung gezielt der Hautalterung entgegen. Feine Linien werden gemindert, die Gesichtskontur wirkt definierter und die Haut spürbar elastischer.",
        benefits: [
          "Reduziert feine Linien und Fältchen",
          "Strafft und definiert die Gesichtskontur",
          "Fördert die hauteigene Kollagenproduktion",
        ],
        image: "/images/facial-3.jpg",
      },
      {
        slug: "beruhigende-aloe-behandlung",
        name: "Beruhigende Aloe-Behandlung",
        duration: "60 Min",
        price: "85 €",
        description:
          "Sanftes Pflegeritual für sensible und gereizte Haut auf Basis von Aloe vera und Panthenol.",
        longDescription:
          "Speziell für empfindliche, gerötete oder gereizte Haut entwickelt. Aloe vera, Panthenol und beruhigende Kräuterextrakte lindern Spannungsgefühle und stärken die natürliche Hautbarriere – für ein sofort angenehmeres Hautgefühl.",
        benefits: [
          "Lindert Rötungen und Spannungsgefühle",
          "Stärkt die natürliche Hautbarriere",
          "Auch für stark sensible Haut geeignet",
        ],
        image: "/images/facial-2.jpg",
      },
    ],
  },
  {
    id: "microneedling",
    title: "Microneedling & Peelings",
    intro:
      "Moderne Verfahren zur Zellerneuerung – für feinere Poren, ebenmäßige Struktur und jugendliche Frische.",
    items: [
      {
        slug: "micro-needling-refresh",
        name: "Micro-Needling Refresh",
        duration: "60 Min",
        price: "159 €",
        description:
          "Kollageninduktionstherapie zur Verfeinerung von Poren, Fältchen und Aknenarben.",
        longDescription:
          "Feinste Mikronadeln setzen minimale Impulse in der Haut und regen die körpereigene Kollagen- und Elastinproduktion an. Das Ergebnis: feinere Poren, geglättete Aknenarben und ein deutlich verfeinertes Hautbild in den Wochen nach der Behandlung.",
        benefits: [
          "Verfeinert Poren und Aknenarben",
          "Regt die natürliche Kollagenbildung an",
          "Inklusive beruhigender Aufbaupflege",
        ],
        image: "/images/product-1.jpg",
      },
      {
        slug: "fruchtsaeurepeeling",
        name: "Fruchtsäurepeeling",
        duration: "45 Min",
        price: "99 €",
        description: "Chemisches Peeling mit AHA/BHA-Komplex für strahlenden, ebenmäßigen Teint.",
        longDescription:
          "Ein fein abgestimmter AHA/BHA-Komplex löst abgestorbene Hautschüppchen und regt die Zellerneuerung an. Pigmentflecken werden gemildert, die Haut wirkt ebenmäßiger und strahlender – ideal als Kur oder punktuelle Auffrischung.",
        benefits: [
          "Ebenmäßigerer, strahlender Teint",
          "Mildert Pigmentflecken und Unreinheiten",
          "Regt die Zellerneuerung sichtbar an",
        ],
        image: "/images/texture-1.jpg",
      },
      {
        slug: "dermaplaning",
        name: "Dermaplaning",
        duration: "45 Min",
        price: "79 €",
        description:
          "Sanfte mechanische Peelingmethode zur Entfernung von Flaum und abgestorbenen Hautzellen.",
        longDescription:
          "Mit einem feinen Skalpell werden abgestorbene Hautzellen und feiner Gesichtsflaum sanft entfernt. Die Haut wirkt sofort glatter, Make-up lässt sich makelloser auftragen und Pflegeprodukte ziehen besser ein.",
        benefits: [
          "Sofort spürbar glattere Haut",
          "Bessere Aufnahme von Pflegeprodukten",
          "Schmerzfrei und ohne Ausfallzeit",
        ],
        image: "/images/texture-2.jpg",
      },
    ],
  },
  {
    id: "augen",
    title: "Augen & Wimpern",
    intro:
      "Der besondere Ausdruck – natürliche Betonung von Augen und Blick mit langanhaltendem Ergebnis.",
    items: [
      {
        slug: "wimpernlifting-toenung",
        name: "Wimpernlifting & Tönung",
        duration: "60 Min",
        price: "69 €",
        description: "Natürlicher Wimpernschwung ganz ohne Extensions, inklusive Tönung.",
        longDescription:
          "Ihre eigenen Wimpern werden sanft geschwungen und getönt – für einen wachen, offenen Blick ganz ohne künstliche Extensions. Das Ergebnis hält bis zu acht Wochen und ist morgens sofort einsatzbereit.",
        benefits: [
          "Natürlicher, offener Blick",
          "Hält bis zu 8 Wochen",
          "Kein täglicher Wimperntusche-Aufwand",
        ],
        image: "/images/team-3.jpg",
      },
      {
        slug: "augenbrauen-styling",
        name: "Augenbrauen Styling",
        duration: "30 Min",
        price: "39 €",
        description: "Zupfen, Färben und Formen für einen ausdrucksstarken Augenbrauenbogen.",
        longDescription:
          "Eine individuelle Brauenform, abgestimmt auf Ihre Gesichtszüge. Zupfen, Färben und Kämmen sorgen für einen definierten, ausdrucksstarken Augenbrauenbogen, der Ihrem Blick sofort mehr Ausdruck verleiht.",
        benefits: [
          "Individuell abgestimmte Brauenform",
          "Sofort definierterer Ausdruck",
          "Inklusive Farbberatung",
        ],
        image: "/images/product-2.jpg",
      },
      {
        slug: "lash-extensions-volumen",
        name: "Lash Extensions Volumen",
        duration: "90 Min",
        price: "119 €",
        description: "Voluminöse Wimpernverlängerung in 2D–4D-Technik, seidenweich und leicht.",
        longDescription:
          "In feiner 2D–4D-Technik werden seidenweiche Einzelwimpern aufgefächert appliziert – für ein voluminöses, dennoch federleichtes Ergebnis. Perfekt für besondere Anlässe oder als dauerhafte Pflege mit Refill alle drei bis vier Wochen.",
        benefits: [
          "Voluminöser, seidenweicher Wimpernkranz",
          "Individuell wählbare Volumenstufe",
          "Langanhaltend mit regelmäßigem Refill",
        ],
        image: "/images/lifestyle-1.jpg",
      },
    ],
  },
  {
    id: "wellness",
    title: "Wellness Ergänzungen",
    intro: "Kleine Extras für pure Entspannung – ideal in Kombination mit jeder Behandlung.",
    items: [
      {
        slug: "gesichtsmassage-deluxe",
        name: "Gesichtsmassage Deluxe",
        duration: "30 Min",
        price: "45 €",
        description: "Entspannende Massagetechnik zur Förderung der Durchblutung und Straffung.",
        longDescription:
          "Eine ausgiebige manuelle Massagetechnik fördert die Durchblutung, löst Verspannungen im Gesichtsbereich und unterstützt die natürliche Straffung der Haut. Pure Entspannung für Gesicht und Geist.",
        benefits: [
          "Fördert Durchblutung und Hautstoffwechsel",
          "Löst Verspannungen im Gesichtsbereich",
          "Ideal als Ergänzung zu jeder Behandlung",
        ],
        image: "/images/lifestyle-2.jpg",
      },
      {
        slug: "dekollete-behandlung",
        name: "Dekolleté-Behandlung",
        duration: "30 Min",
        price: "49 €",
        description:
          "Pflegende Extra-Behandlung für einen ebenmäßigen, gepflegten Dekolletébereich.",
        longDescription:
          "Der Dekolletébereich wird oft vergessen, verdient aber genauso viel Pflege wie das Gesicht. Diese Behandlung reinigt, pflegt und strafft sanft – für ein ebenmäßiges, gepflegtes Erscheinungsbild.",
        benefits: [
          "Ebenmäßigeres Hautbild am Dekolleté",
          "Intensive Feuchtigkeitspflege",
          "Perfekte Ergänzung zur Gesichtsbehandlung",
        ],
        image: "/images/interior-2.jpg",
      },
      {
        slug: "paraffin-handpflege",
        name: "Paraffin-Handpflege",
        duration: "30 Min",
        price: "39 €",
        description: "Intensiv pflegendes Paraffinbad für samtweiche, genährte Hände.",
        longDescription:
          "Ein warmes Paraffinbad versorgt beanspruchte Hände intensiv mit Feuchtigkeit und Pflegestoffen. Im Anschluss fühlen sich Hände spürbar weicher und geschmeidiger an – pure Wohltat für den Alltag.",
        benefits: [
          "Intensive Feuchtigkeitsversorgung",
          "Spürbar weichere, geschmeidige Hände",
          "Wohltuende Wärme für Entspannung",
        ],
        image: "/images/product-1.jpg",
      },
    ],
  },
];

export const allServiceItems = serviceCategories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title }))
);

export const signaturePackages = [
  {
    name: "Golden Hour Ritual",
    duration: "150 Min",
    price: "219 €",
    description:
      "Unser exklusivstes Verwöhnprogramm: Signature Facial, Kollagen-Aufbaukur, Dekolleté-Pflege und Handmassage.",
  },
  {
    name: "Bridal Glow Paket",
    duration: "180 Min",
    price: "259 €",
    description:
      "Perfekt vorbereitet für den großen Tag: Gesichtsbehandlung, Wimpernlifting, Augenbrauen-Styling und Make-up-Beratung.",
  },
];

export const team = [
  {
    name: "Lena Hartmann",
    role: "Gründerin & Kosmetikexpertin",
    bio: "Mit über 12 Jahren Erfahrung verbindet Lena medizinische Hautanalyse mit achtsamer Wohlfühlpflege.",
  },
  {
    name: "Sophie Weber",
    role: "Kosmetikerin & Hautanalyse",
    bio: "Sophie ist spezialisiert auf individuelle Hautanalysen und moderne Anti-Aging-Verfahren.",
  },
  {
    name: "Mara Klein",
    role: "Visagistin & Wimpernstylistin",
    bio: "Mara verleiht jedem Blick seinen ganz eigenen Ausdruck – natürlich, präzise, langanhaltend.",
  },
  {
    name: "Nina Brandt",
    role: "Empfang & Terminplanung",
    bio: "Nina sorgt dafür, dass sich jeder Besuch bei LUMARA vom ersten Moment an stimmig anfühlt.",
  },
];

export const testimonials = [
  {
    name: "Julia M.",
    text: "Der schönste Rückzugsort für Hautpflege in München. Die Signature Facial ist jede Minute wert.",
    rating: 5,
  },
  {
    name: "Katharina S.",
    text: "Sehr persönliche Beratung und ein spürbares Ergebnis schon nach der ersten Behandlung.",
    rating: 5,
  },
  {
    name: "Anna-Lena T.",
    text: "Endlich ein Institut, das Ruhe, Kompetenz und Wohlfühlambiente perfekt verbindet.",
    rating: 5,
  },
  {
    name: "Verena H.",
    text: "Das Bridal Glow Paket hat meinen Hochzeitstag noch strahlender gemacht. Absolute Empfehlung!",
    rating: 5,
  },
];

export const stats = [
  { value: "2016", label: "Gegründet" },
  { value: "4.9/5", label: "Kundenbewertung" },
  { value: "3.200+", label: "Behandlungen pro Jahr" },
  { value: "12", label: "Jahre Erfahrung" },
];

export const giftVouchers = [
  {
    amount: "50 €",
    title: "Kleine Auszeit",
    description: "Perfekt für eine erste Kennenlernbehandlung wie Augenbrauen Styling oder Handpflege.",
  },
  {
    amount: "100 €",
    title: "Wohlfühlmoment",
    description: "Ideal für eine Gesichtsbehandlung nach Wahl inklusive Wellness-Extra.",
  },
  {
    amount: "150 €",
    title: "Verwöhnprogramm",
    description: "Reicht für unsere Signature Glow Facial samt Zusatzbehandlung.",
  },
  {
    amount: "Individuell",
    title: "Wunschbetrag",
    description: "Sie bestimmen den Betrag – wir kümmern uns um ein stilvolles Gutscheindesign.",
  },
];

export const faqItems = [
  {
    question: "Wie oft sollte ich eine Gesichtsbehandlung buchen?",
    answer:
      "Für ein optimales Ergebnis empfehlen wir eine professionelle Gesichtsbehandlung alle vier bis sechs Wochen, passend zum natürlichen Erneuerungszyklus Ihrer Haut.",
  },
  {
    question: "Muss ich mich auf meinen Termin vorbereiten?",
    answer:
      "Nein. Kommen Sie einfach ungeschminkt oder mit leichtem Make-up. Bei speziellen Behandlungen wie Microneedling erhalten Sie vorab individuelle Hinweise von unserem Team.",
  },
  {
    question: "Bieten Sie auch Behandlungen für empfindliche Haut an?",
    answer:
      "Ja, unsere beruhigende Aloe-Behandlung sowie viele weitere Anwendungen sind speziell auf sensible und gereizte Haut abgestimmt. Wir beraten Sie vorab ausführlich.",
  },
  {
    question: "Kann ich einen Gutschein online einlösen?",
    answer:
      "Gutscheine können telefonisch, per E-Mail oder direkt vor Ort eingelöst werden. Nennen Sie uns einfach den Gutscheincode bei Ihrer Terminvereinbarung.",
  },
  {
    question: "Wie kurzfristig kann ich einen Termin stornieren?",
    answer:
      "Terminabsagen sind bis 24 Stunden vor dem gebuchten Termin kostenfrei möglich. Bei kurzfristigeren Absagen behalten wir uns die Berechnung eines Ausfallhonorars vor.",
  },
  {
    question: "Gibt es Parkmöglichkeiten beim Institut?",
    answer:
      "In der Lindenallee sowie in den umliegenden Seitenstraßen stehen ausreichend öffentliche Parkplätze zur Verfügung. Alternativ ist unser Institut gut mit der U-Bahn erreichbar.",
  },
];

export const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/galerie", label: "Galerie" },
  { href: "/gutscheine", label: "Gutscheine" },
  { href: "/kontakt", label: "Kontakt" },
];

export const legalLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];
