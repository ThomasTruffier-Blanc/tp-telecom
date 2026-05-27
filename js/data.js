var REVISION_DATA = {
  nav: [
    { href: "index.html", label: "Accueil", icon: "AC", page: "home" },
    { href: "planning.html", label: "Planning express", icon: "PL", page: "planning" },
    { href: "cours.html", label: "Cours théorique", icon: "CO", page: "cours" },
    { href: "tp.html", label: "Liste des TP", icon: "TP", page: "tp-list" },
    { href: "commandes.html", label: "Commandes", icon: "CM", page: "commandes" },
    { href: "erreurs.html", label: "Erreurs fréquentes", icon: "ER", page: "erreurs" },
    { href: "quiz.html", label: "Quiz", icon: "QZ", page: "quiz" },
    { href: "examen.html", label: "Examen blanc", icon: "EX", page: "examen" },
    { href: "comptes-rendus.html", label: "Comptes rendus", icon: "CR", page: "reports" },
    { href: "galerie.html", label: "Photos et captures", icon: "PH", page: "gallery" }
  ],

  sourceDocs: [
    { id: "doc-tp2", title: "CR TP2 - Analyse spectrale de signaux", kind: "PDF", href: "assets/docs/_S2-T2-Truffier-Blanc -Thomas - Liubchenko - Oleh - TP2.pdf" },
    { id: "doc-tp2-xlsx", title: "TP2 - Tableur DSF / TDH", kind: "XLSX", href: "assets/docs/S2-T2-TRUFFIER-BLANC-Thomas-LIUBCHENKO-Oleh-TPn°2.xlsx" },
    { id: "doc-tp2-csv", title: "TP2 - Spectre + max hold", kind: "CSV", href: "assets/docs/spectre + max hold.csv" },
    { id: "doc-tp3", title: "CR TP3 - Transmission radio", kind: "PDF", href: "assets/docs/CR TP3 Thomas Truffier-Blanc Oleh Liubchenko.pdf" },
    { id: "doc-tp4-a", title: "CR TP4 - Échantillonnage", kind: "PDF", href: "assets/docs/CR TP4 - Thomas Truffier-Blanc Oleh Liubchenko.pdf" },
    { id: "doc-tp4-b", title: "CR TP4 propre - Échantillonnage", kind: "PDF", href: "assets/docs/S2 - T2 - CR - Thomas Truffier-Blanc Oleh Liubchenko - TP4.pdf" },
    { id: "doc-tp6", title: "CR TP6 - Réception collective TNT", kind: "PDF", href: "assets/docs/CR TP6 Thomas Truffier-Blanc Oleh Liubchenko.pdf" },
    { id: "doc-tp7", title: "CR TP7 - Filtrage RLC", kind: "PDF", href: "assets/docs/S2-T2-Truffier-Blanc -Thomas - Liubchenko - TP7 - Filtrage RLC .pdf" },
    { id: "doc-tp8", title: "CR TP8 - Analyseur de spectres et modulations", kind: "PDF", href: "assets/docs/CR - TP8 - Thomas Truffier-Blanc- Oleh - Liubchenko.pdf" }
  ],

  urgentTasks: [
    { id: "urgent-objectifs", title: "Relire l'objectif de chaque TP", detail: "Tu dois pouvoir expliquer en 20 secondes ce qu'on mesure et pourquoi." },
    { id: "urgent-appareils", title: "Revoir les réglages d'appareils", detail: "GBF, oscilloscope, analyseur de spectre, mesureur de champ : fréquence, amplitude, span, RBW, VBW, ref level." },
    { id: "urgent-formules", title: "Mémoriser les formules utiles", detail: "Veff = Vpp / (2√2), dB = 20log(V2/V1), dBm, DSP = P/RBW, Q = f0/Δf." },
    { id: "urgent-erreurs", title: "Relire les erreurs fréquentes", detail: "Impédance 50 Ω, mauvaise masse, RBW trop large, aliasing, mauvais canal TNT." },
    { id: "urgent-cr", title: "S'entraîner à rédiger une conclusion", detail: "Objectif, manipulation, résultat, analyse : c'est la structure qui rapporte des points." }
  ],

  mustKnow: [
    { title: "Impédance 50 Ω", text: "Sur les analyseurs et certains GBF, une erreur High Z / 50 Ω fausse l'amplitude. Toujours vérifier la charge avant de comparer à la théorie." },
    { title: "RBW et VBW", text: "RBW règle la finesse fréquentielle ; VBW lisse l'affichage. RBW trop grande élargit la raie et augmente le bruit mesuré." },
    { title: "Span", text: "Le span est la largeur de fréquence affichée. Trop petit : on rate des raies ; trop grand : on perd en précision visuelle." },
    { title: "dB, dBm, dBµV", text: "dB compare deux grandeurs. dBm est référencé à 1 mW. dBµV est référencé à 1 µV. Ne mélange pas les unités." },
    { title: "Échantillonnage", text: "À fs = 8 kHz, les copies du spectre sont espacées de 8 kHz. Si le signal dépasse fs/2, l'aliasing apparaît." },
    { title: "Filtre RLC", text: "À la résonance, le filtre passe-bande laisse mieux passer le signal. Le gain baisse quand on s'éloigne de f0." }
  ],

  quickCards: [
    { title: "1. Planning express", text: "Une séquence de 90 minutes pour réviser comme si l'examen commençait maintenant.", href: "planning.html", action: "Ouvrir le planning" },
    { title: "2. Fiches TP", text: "Objectifs, réglages, tests, erreurs et mini comptes rendus pour les TP fournis.", href: "tp.html", action: "Voir les TP" },
    { title: "3. Examen blanc", text: "Minuteur 1h30, tirage aléatoire d'un TP, questions théoriques et checklist.", href: "examen.html", action: "Lancer une simulation" }
  ],

  planning: [
    { id: "plan-theorie", duration: "15 min", title: "Revoir les notions théoriques", detail: "Lis les fiches dB/dBm/dBµV, RBW, VBW, span, échantillonnage, Fourier, RLC, DSP, NAT/VLAN si ton sujet bascule réseau." },
    { id: "plan-commandes", duration: "20 min", title: "Revoir les commandes et réglages essentiels", detail: "Répète mentalement les menus : Preset, Center, Span, RBW, VBW, Ref Level, Measure, FFT, mode DVB-T, lissage." },
    { id: "plan-manips", duration: "30 min", title: "Refaire mentalement les manipulations des TP", detail: "Pour chaque TP : brancher, régler, mesurer, noter, interpréter. Insiste sur les TP2, TP4, TP6, TP7, TP8." },
    { id: "plan-quiz", duration: "15 min", title: "Faire le quiz", detail: "Corrige immédiatement les réponses ratées. Si tu hésites entre deux réponses, retourne à la fiche de cours." },
    { id: "plan-erreurs", duration: "10 min", title: "Relire les erreurs fréquentes", detail: "Vérifie les symptômes classiques : aucune raie, amplitude fausse, signal bruité, aliasing, canal TNT absent, filtre RLC mal câblé." }
  ],

  lastTips: [
    { title: "Pendant l'examen", text: "Lis tout le sujet avant de toucher aux câbles. Note les valeurs imposées : fréquence, amplitude, impédance, RBW, span." },
    { title: "Pour les mesures", text: "Chaque résultat doit avoir une unité. Une valeur sans unité est presque toujours une perte de points." },
    { title: "Pour le compte rendu", text: "Écris court mais structuré : objectif, manipulation, résultat, analyse. Une phrase d'interprétation vaut mieux qu'une capture seule." }
  ],

  tps: [
    {
      id: "tp2-analyse-spectrale",
      title: "TP2 - Analyse spectrale de signaux",
      shortTitle: "Analyse spectrale",
      theme: "Analyse spectrale",
      difficulty: "medium",
      difficultyLabel: "Intermédiaire",
      time: "45 à 60 min",
      href: "tp-analyse-spectrale.html",
      image: "assets/images/schema-analyse-spectrale.png",
      captures: ["assets/images/tp2-capture-1.png", "assets/images/tp2-capture-2.png", "assets/images/signal-carre-fourier.png"],
      docs: ["doc-tp2", "doc-tp2-xlsx", "doc-tp2-csv"],
      summary: "Configuration d'un GBF, vérification à l'oscilloscope, observation d'un signal sinusoïdal à l'analyseur de spectre, puis étude d'un signal carré et de ses harmoniques.",
      objective: "Savoir produire un signal propre, régler l'analyseur de spectre et interpréter les raies fréquentielles d'un sinus et d'un signal carré.",
      equipment: ["GBF", "Oscilloscope", "Analyseur de spectre", "Câbles coaxiaux", "Adaptation 50 Ω", "SoftPlot", "Tableur DSF/TDH"],
      topology: "GBF -> oscilloscope pour vérifier le signal, puis GBF -> analyseur de spectre. Attention à l'impédance d'entrée de 50 Ω de l'analyseur.",
      addressing: [
        ["Grandeur", "Valeur utilisée", "Remarque"],
        ["Sinus", "1 MHz, 100 mVeff réels", "GBF réglé autour de 282 mVeff pour compenser l'adaptation observée"],
        ["Analyseur", "Center 1 MHz, Span 1 MHz", "Ref Level 10 dBm, Range 100 dB"],
        ["RBW / Sweep", "RBW 10 kHz, Sweep 50 ms", "Compromis finesse / rapidité"],
        ["Carré", "100 kHz, 1.01 V crête-à-crête, 50 %", "Observation des harmoniques impaires jusqu'à 800 kHz"]
      ],
      steps: [
        { title: "Configurer le sinus", detail: "Régler le GBF sur un signal sinusoïdal de 1 MHz. Vérifier à l'oscilloscope que l'amplitude réelle est proche de 100 mVeff." },
        { title: "Adapter l'impédance", detail: "Tenir compte de l'entrée 50 Ω de l'analyseur. Si l'amplitude lue est divisée ou incohérente, revoir High Z / 50 Ω." },
        { title: "Régler l'analyseur", detail: "Faire Preset, placer Center à 1 MHz, Span à 1 MHz, Ref Level à 10 dBm, Range à 100 dB, RBW à 10 kHz et Sweep à 50 ms." },
        { title: "Mesurer la raie", detail: "Utiliser un marqueur pour relever la fréquence et l'amplitude. Dans le CR, la raie est mesurée autour de 1.0025 MHz et 100.12 dBµV." },
        { title: "Vérifier le doublement d'amplitude", detail: "Passer de 100 mVeff à 200 mVeff doit ajouter environ 6 dB, car 20log(2) ≈ 6 dB." },
        { title: "Étudier le signal carré", detail: "Régler un carré à 100 kHz et observer les harmoniques impaires. Compléter le tableur DSF/TDH avec les amplitudes relevées." }
      ],
      commands: [
        { label: "Réglage sinus", code: "GBF: Sine, f = 1 MHz, amplitude ajustée pour obtenir 100 mVeff\nAnalyseur: Preset, Center = 1 MHz, Span = 1 MHz\nRBW = 10 kHz, Sweep = 50 ms, Ref Level = 10 dBm" },
        { label: "Réglage carré", code: "GBF: Square, f = 100 kHz, Vpp = 1.01 V, duty = 50 %\nAnalyseur: Start = 0 Hz, Stop = 800 kHz, RBW = 5 kHz" },
        { label: "Formule utile", code: "Gain en dB = 20 * log10(V2 / V1)\nDoublement de tension: 20 * log10(2) ≈ +6 dB" }
      ],
      tests: ["La raie principale du sinus est centrée vers 1 MHz.", "Le niveau augmente d'environ 6 dB quand la tension efficace double.", "Le carré présente surtout des harmoniques impaires : 100 kHz, 300 kHz, 500 kHz, 700 kHz.", "Le tableur convertit les amplitudes en dBµV et permet le calcul du TDH."],
      expected: ["Sinus pur : une raie dominante, bruit faible autour.", "Carré : raies impaires décroissantes.", "Les valeurs pratiques restent proches des prévisions malgré les tolérances et le bruit."],
      errors: ["Oublier l'impédance 50 Ω et mesurer une amplitude fausse.", "Choisir une RBW trop grande : les raies paraissent trop larges.", "Confondre dBm, dBµV et volts.", "Ne pas réinitialiser Max Hold ou garder un ancien marqueur."],
      theoryQuestions: ["Pourquoi un signal carré contient-il des harmoniques impaires ?", "Pourquoi doubler la tension ajoute environ 6 dB ?", "Quel est le rôle du RBW ?", "Pourquoi l'impédance 50 Ω change-t-elle l'amplitude lue ?"],
      report: {
        intro: "Ce TP porte sur l'analyse spectrale de signaux simples afin de relier l'observation temporelle et fréquentielle.",
        objective: "L'objectif est de générer un sinus puis un signal carré, de régler correctement l'analyseur de spectre et de comparer les mesures aux résultats théoriques.",
        manipulation: "Le signal sinusoïdal est vérifié à l'oscilloscope puis analysé avec un center à 1 MHz, un span de 1 MHz et une RBW de 10 kHz. Le signal carré est ensuite observé sur une bande de 0 à 800 kHz.",
        results: "Le sinus donne une raie principale proche de 1 MHz. Le doublement de tension entraîne une augmentation proche de 6 dB. Le carré montre des harmoniques impaires dont l'amplitude diminue.",
        conclusion: "Les mesures sont cohérentes avec la théorie de Fourier et montrent l'importance des réglages d'impédance, de span et de RBW."
      },
      checklist: ["GBF réglé avec la bonne forme de signal", "Oscilloscope utilisé pour valider l'amplitude", "Impédance 50 Ω vérifiée", "Center, Span, RBW, Sweep et Ref Level notés", "Marqueurs placés sur les raies", "Unités écrites dans le compte rendu", "Écart théorie/pratique commenté"]
    },
    {
      id: "tp3-transmission-radio",
      title: "TP3 - Transmission radio",
      shortTitle: "Transmission radio",
      theme: "Radiofréquence",
      difficulty: "medium",
      difficultyLabel: "Intermédiaire",
      time: "50 à 70 min",
      href: "tp-transmission-radio.html",
      image: "assets/images/transmission-radio.png",
      captures: ["assets/images/tp3-capture-1.jpg", "assets/images/tp3-capture-2.png", "assets/images/analyseur-spectre.png"],
      docs: ["doc-tp3"],
      summary: "Prise en main du générateur RIGOL DG5072, réglage de l'analyseur de spectre, observation d'une transmission radio et mesure de largeur de bande occupée.",
      objective: "Configurer une chaîne d'émission/réception radio, mesurer une raie ou un canal et comprendre l'influence de la modulation sur le spectre.",
      equipment: ["Générateur RIGOL DG5072", "Analyseur de spectre", "Oscilloscope", "Antennes ou liaison filaire", "Câbles RF"],
      topology: "Émission par GBF/modulateur, réception sur analyseur de spectre. La liaison peut être filaire ou hertzienne selon l'étape.",
      addressing: [
        ["Grandeur", "Valeur du CR", "À retenir"],
        ["Signal de test", "27 MHz, valeur efficace relevée 134 mV", "Comparer avec un test à 100 kHz / 100 mV"],
        ["Span", "100 kHz", "Permet de voir la zone autour de la porteuse"],
        ["RBW", "Entre 200 Hz et 1 kHz, réglage à 300 Hz", "D'après Span/500 < RBW < Span/100"],
        ["Bruit", "Environ -82.3 dBm", "Sert à choisir l'échelle verticale"],
        ["Échelle", "5 dB/div", "Lecture plus fine du niveau"]
      ],
      steps: [
        { title: "Vérifier le générateur", detail: "Configurer le RIGOL DG5072 et contrôler l'amplitude à l'oscilloscope. Le CR note 1 MΩ côté oscilloscope et 50 Ω côté analyseur." },
        { title: "Calculer la RBW", detail: "Pour Span = 100 kHz, utiliser l'encadrement Span/500 < RBW < Span/100, donc 200 Hz < RBW < 1 kHz. Choix pratique : 300 Hz." },
        { title: "Régler l'analyseur", detail: "Ajuster le niveau de référence, l'échelle à 5 dB/div et observer le niveau de bruit autour de -82.3 dBm." },
        { title: "Mettre en place l'émission", detail: "Réaliser la transmission en liaison filaire puis hertzienne. Observer la raie centrale et les bandes latérales si modulation." },
        { title: "Mesurer l'OBW", detail: "Mesurer la largeur occupée par le canal, souvent à un seuil relatif comme -40 dB par rapport au pic." }
      ],
      commands: [
        { label: "Réglage analyseur", code: "Span = 100 kHz\nRBW = 300 Hz\nVBW: valeur faible pour lisser\nScale = 5 dB/div\nMarker sur la raie centrale" },
        { label: "Formule RBW", code: "Span / 500 < RBW < Span / 100\n100 kHz / 500 = 200 Hz\n100 kHz / 100 = 1 kHz" },
        { label: "OBW", code: "Occupied Bandwidth: mesurer la bande occupée autour de la porteuse\nSeuil utilisé dans le CR: environ -40 dB par rapport au pic" }
      ],
      tests: ["La raie centrale doit être visible et stable.", "Le bruit de fond doit être suffisamment bas pour distinguer la transmission.", "En transmission hertzienne, le niveau peut varier selon l'alignement et la distance.", "L'OBW doit augmenter si la modulation occupe plus de bande."],
      expected: ["Raie centrale observée autour de la fréquence configurée.", "Différence visible entre liaison filaire et hertzienne.", "Largeur occupée mesurable sur l'analyseur."],
      errors: ["Mauvaise impédance d'entrée.", "Antenne mal orientée ou non branchée.", "RBW trop grande qui masque les détails.", "Niveau de référence trop bas : saturation ou affichage écrasé."],
      theoryQuestions: ["À quoi sert l'OBW ?", "Pourquoi le bruit de fond limite-t-il la mesure ?", "Pourquoi une transmission hertzienne est-elle moins stable qu'une liaison filaire ?", "Comment choisir la RBW à partir du span ?"],
      report: {
        intro: "Ce TP étudie une chaîne de transmission radio en partant des réglages d'appareils jusqu'à l'observation spectrale.",
        objective: "L'objectif est de maîtriser le générateur, l'analyseur de spectre et la mesure de largeur occupée par un signal radio.",
        manipulation: "Après validation du générateur, l'analyseur est réglé avec un span de 100 kHz et une RBW de 300 Hz. La transmission est observée en filaire puis en hertzien.",
        results: "La raie centrale est visible et le bruit de fond est relevé autour de -82 dBm. La largeur occupée peut être mesurée selon le seuil demandé.",
        conclusion: "La transmission est exploitable si les réglages de span, RBW, niveau de référence et réception sont cohérents."
      },
      checklist: ["Générateur validé à l'oscilloscope", "Impédance d'entrée identifiée", "RBW calculée et notée", "Niveau de bruit relevé", "Raie centrale mesurée", "OBW notée avec son seuil", "Différence filaire/hertzien commentée"]
    },
    {
      id: "tp4-echantillonnage",
      title: "TP4 - Échantillonnage d'un signal sinusoïdal",
      shortTitle: "Échantillonnage",
      theme: "Traitement du signal",
      difficulty: "hard",
      difficultyLabel: "Avancé",
      time: "60 à 75 min",
      href: "tp-echantillonnage.html",
      image: "assets/images/echantillonnage-schema.png",
      captures: ["assets/images/tp4-capture-1.png", "assets/images/tp4-capture-2.png", "assets/images/echantillonnage-schema.png"],
      docs: ["doc-tp4-a", "doc-tp4-b"],
      summary: "Étude temporelle et fréquentielle d'un signal échantillonné : signal d'entrée, commande d'échantillonnage, signal échantillonné, repliement de spectre.",
      objective: "Comprendre comment un signal analogique est prélevé à intervalles réguliers et comment l'échantillonnage modifie son spectre.",
      equipment: ["GBF", "Oscilloscope avec FFT", "Montage d'échantillonnage", "Sondes", "Commande Ech"],
      topology: "Voie 1 : signal à échantillonner. Voie 2 : commande d'échantillonnage. Voie 3 : signal échantillonné.",
      addressing: [
        ["Grandeur", "Valeur", "Rôle"],
        ["Signal d'entrée", "1 kHz, 5 V crête-à-crête", "Signal analogique de référence"],
        ["Veff", "5 / (2√2) ≈ 1.77 V", "Conversion temporelle utile"],
        ["Niveau mesuré", "-30.27 dBV", "Mesure observée dans le CR"],
        ["Commande", "Environ 8 kHz, rapport cyclique ≈ 11 %", "Fréquence d'échantillonnage"],
        ["Limite de Nyquist", "fs/2 = 4 kHz", "Au-delà, risque d'aliasing"]
      ],
      steps: [
        { title: "Caractériser le signal d'entrée", detail: "Régler un sinus de 1 kHz et 5 V crête-à-crête. Calculer Veff puis observer le spectre FFT : une raie principale à 1 kHz." },
        { title: "Mesurer la commande", detail: "Observer la commande d'échantillonnage. Relever la fréquence proche de 8 kHz et le rapport cyclique proche de 11 %." },
        { title: "Observer les trois signaux", detail: "Afficher signal d'entrée, commande et signal échantillonné. Vérifier que le signal échantillonné prend la valeur du sinus aux instants de commande." },
        { title: "Étudier le spectre", detail: "Passer en FFT et constater des copies du spectre espacées de 8 kHz." },
        { title: "Tester l'aliasing", detail: "Augmenter la fréquence du signal d'entrée. Quand elle dépasse 4 kHz, le repliement spectral devient visible." }
      ],
      commands: [
        { label: "Calcul Veff", code: "Veff = Vpp / (2 * sqrt(2))\nVeff = 5 / (2 * sqrt(2)) ≈ 1.77 V" },
        { label: "Conversion dBµV", code: "V(dBµV) = 20 * log10(V / 1µV)\nPour 1.77 V: environ 125 dBµV" },
        { label: "Nyquist", code: "fs = 8 kHz\nfmax sans repliement = fs / 2 = 4 kHz" }
      ],
      tests: ["La FFT du sinus seul montre une raie à 1 kHz.", "La commande a une fréquence proche de 8 kHz.", "Le signal échantillonné suit le signal d'entrée aux instants de prélèvement.", "Les copies du spectre sont espacées de fs.", "L'aliasing apparaît si fentrée > fs/2."],
      expected: ["Un signal échantillonné discontinu dans le temps.", "Un spectre répété autour des multiples de 8 kHz.", "Une influence du rapport cyclique sur l'enveloppe spectrale."],
      errors: ["Confondre fréquence du signal et fréquence d'échantillonnage.", "Oublier que fs/2 est la limite utile.", "Mauvaise voie d'oscilloscope ou mauvais déclenchement.", "Rapport cyclique mal mesuré."],
      theoryQuestions: ["Que dit le critère de Nyquist-Shannon ?", "Pourquoi le spectre est-il répété après échantillonnage ?", "Que signifie aliasing ?", "Pourquoi un rapport cyclique nul est impossible en pratique ?"],
      report: {
        intro: "Ce TP met en évidence le passage d'un signal analogique continu à un signal prélevé à des instants discrets.",
        objective: "L'objectif est d'observer le signal d'entrée, la commande et le signal échantillonné, puis d'analyser l'effet en fréquence.",
        manipulation: "Un sinus de 1 kHz et 5 V crête-à-crête est appliqué au montage. La commande proche de 8 kHz pilote l'échantillonnage. Les signaux sont observés à l'oscilloscope et en FFT.",
        results: "Le signal échantillonné reprend l'amplitude du signal d'entrée aux instants de commande. En fréquence, le spectre est reproduit autour des multiples de 8 kHz.",
        conclusion: "Les observations confirment le principe de l'échantillonnage et montrent que le dépassement de fs/2 provoque un repliement spectral."
      },
      checklist: ["Vpp, Veff et dB notés", "Fréquence de commande mesurée", "Rapport cyclique mesuré", "Trois voies correctement identifiées", "Copies spectrales observées", "Cas d'aliasing expliqué", "Conclusion liée à Nyquist"]
    },
    {
      id: "tp6-reception-tnt",
      title: "TP6 - Réception collective de la TNT",
      shortTitle: "Réception TNT",
      theme: "Réception TV",
      difficulty: "medium",
      difficultyLabel: "Intermédiaire",
      time: "45 à 65 min",
      href: "tp-reception-tnt.html",
      image: "assets/images/tnt-canal.png",
      captures: ["assets/images/tp6-capture-1.png", "assets/images/tp6-capture-2.png", "assets/images/tnt-canal.png"],
      docs: ["doc-tp6"],
      summary: "Observation d'un canal DVB-T avec mesureur de champ, mesure du niveau, calcul de DSP, puissance de canal et étude d'un filtre de réception collective.",
      objective: "Savoir régler un mesureur de champ pour observer un canal TNT, mesurer sa puissance et comprendre le filtrage/amplification d'une installation collective.",
      equipment: ["Mesureur de champ", "Antenne UHF Puy de Dôme", "Câble coaxial TV", "Raccord femelle/femelle", "Filtre/amplificateur TV"],
      topology: "Arrivée antenne UHF -> mesureur de champ -> observation du canal. Pour la partie collective : entrée filtre, sélection de canaux, sortie TV et sortie test.",
      addressing: [
        ["Grandeur", "Valeur du CR", "Interprétation"],
        ["Mode", "DVB-T", "Standard TNT observé"],
        ["Span", "20 MHz", "Vue large du canal"],
        ["Mode affichage", "Lissage", "Réduit les fluctuations"],
        ["Niveau max", "-66.1 dBm", "Niveau relevé au curseur"],
        ["RBW", "100 kHz", "Base du calcul de DSP"],
        ["DSP", "≈ 2.45 × 10^-15 W/Hz", "Puissance répartie par Hz"],
        ["Bande canal", "≈ 7.7 MHz", "Pour calculer la puissance totale"]
      ],
      steps: [
        { title: "Brancher l'antenne", detail: "Relier l'arrivée UHF au mesureur avec câble coaxial et raccord adapté. Sélectionner le mode DVB-T." },
        { title: "Afficher le spectre", detail: "Activer le mode analyseur de spectre, régler le span à 20 MHz et activer le lissage." },
        { title: "Mesurer le niveau", detail: "Placer un curseur sur le maximum du canal. Le CR donne environ -66.1 dBm avec RBW = 100 kHz." },
        { title: "Calculer la DSP", detail: "Convertir la puissance en watts puis diviser par la RBW." },
        { title: "Calculer la puissance de canal", detail: "Multiplier la DSP par la bande du canal, environ 7.7 MHz, puis convertir en dBm si demandé." },
        { title: "Observer le filtre collectif", detail: "Supprimer puis sélectionner des canaux, observer le blocage des canaux non sélectionnés et l'effet d'amplification." }
      ],
      commands: [
        { label: "Réglage mesureur", code: "Mode: DVB-T\nSpectre: Span = 20 MHz\nMode affichage: Lissage\nCurseur: placer sur le maximum du canal" },
        { label: "Calcul DSP", code: "P(W) = 10^((P(dBm) - 30) / 10)\nDSP = P(W) / RBW\nAvec -66.1 dBm et RBW = 100 kHz: DSP ≈ 2.45e-15 W/Hz" },
        { label: "Puissance canal", code: "Pcanal = DSP * B\nB ≈ 7.7 MHz\nRésultat du CR: ordre de grandeur ≈ -47.2 dBm" }
      ],
      tests: ["Le canal TNT apparaît comme une bande large et plutôt plate.", "Le lissage améliore la lecture du spectre.", "Si aucun canal n'est sélectionné dans le filtre, la sortie ne laisse rien passer.", "Après sélection, les canaux choisis sont visibles en sortie."],
      expected: ["Canal visible sur le mesureur.", "Niveau et RBW correctement notés.", "DSP et puissance de canal cohérentes avec les ordres de grandeur du CR.", "Filtre collectif : sélection, translation/amplification selon réglages."],
      errors: ["Mauvais câble ou raccord mal serré.", "Mode DVB-T non sélectionné.", "Span trop petit ou trop grand.", "Oublier le lissage et croire que le canal est instable.", "Confondre puissance ponctuelle et puissance de canal."],
      theoryQuestions: ["Qu'est-ce que la DSP ?", "Pourquoi un canal TNT occupe-t-il une bande et pas une raie unique ?", "À quoi sert la sortie test d'un filtre TV ?", "Pourquoi faut-il connaître la RBW pour calculer la DSP ?"],
      report: {
        intro: "Ce TP traite de la réception collective de la TNT et de l'observation d'un canal DVB-T avec un mesureur de champ.",
        objective: "L'objectif est d'observer un canal, de mesurer son niveau, de calculer sa DSP et de comprendre l'effet d'un filtre collectif.",
        manipulation: "Le mesureur est relié à l'antenne UHF. Le mode DVB-T est sélectionné, le span est réglé à 20 MHz et le mode lissage est activé.",
        results: "Le canal apparaît sous forme d'une bande. Le niveau maximal relevé est autour de -66.1 dBm avec une RBW de 100 kHz, ce qui permet le calcul de la DSP.",
        conclusion: "Les mesures valident la réception du canal et montrent le rôle du filtrage dans une installation TV collective."
      },
      checklist: ["Antenne et câble coaxial vérifiés", "Mode DVB-T sélectionné", "Span 20 MHz noté", "Lissage activé", "Niveau max et RBW relevés", "DSP calculée", "Puissance de canal commentée", "Rôle du filtre expliqué"]
    },
    {
      id: "tp7-filtrage-rlc",
      title: "TP7 - Filtrage RLC passe-bande",
      shortTitle: "Filtrage RLC",
      theme: "Filtrage",
      difficulty: "hard",
      difficultyLabel: "Avancé",
      time: "60 à 80 min",
      href: "tp-filtrage-rlc.html",
      image: "assets/images/filtrage-rlc.png",
      captures: ["assets/images/tp7-capture-1.png", "assets/images/tp7-capture-2.jpg", "assets/images/filtrage-rlc.png"],
      docs: ["doc-tp7"],
      summary: "Réalisation d'un filtre RLC série passe-bande, vérification des composants, réglage de la résonance, mesure du gain et exploitation type Bode.",
      objective: "Monter un filtre RLC, vérifier les composants, mesurer le gain selon la fréquence et interpréter la fréquence de résonance et le facteur de qualité.",
      equipment: ["GBF", "Oscilloscope", "Résistance 1 kΩ", "Bobine 0.1 H", "Condensateur 2.5 nF", "Multimètre", "Tableur"],
      topology: "Montage RLC série. Entrée Ve(t), sortie Vs(t), masse commune M. Les points A, B et D doivent être repérés avant les mesures.",
      addressing: [
        ["Composant / grandeur", "Valeur attendue", "Valeur relevée / rôle"],
        ["Résistance", "1.0 kΩ", "1.001 kΩ, écart très faible"],
        ["Condensateur", "2.5 nF", "2.50 nF, conforme"],
        ["Bobine", "0.1 H", "Réglée par mise en phase autour de 10 kHz"],
        ["Signal GBF", "10 kHz, 5 V crête-à-crête", "Réglage de départ"],
        ["Bande passante", "Autour de 9 à 11 kHz", "Δf ≈ 2 kHz dans le CR"],
        ["Facteur Q", "Q = f0/Δf", "Ordre de grandeur expérimental ≈ 5"]
      ],
      steps: [
        { title: "Réaliser le montage", detail: "Brancher R, L et C en série. Relier toutes les masses au même noeud M. Identifier Ve(t), Vs(t), A, B et D." },
        { title: "Vérifier les composants", detail: "Mesurer R à l'ohmmètre, C au capacimètre et valider L par réglage à l'oscilloscope si le multimètre ne mesure pas l'inductance." },
        { title: "Régler la résonance", detail: "Appliquer un sinus autour de 10 kHz et ajuster la bobine pour observer des signaux cohérents, idéalement en phase au voisinage de f0." },
        { title: "Mesurer le module", detail: "Pour chaque fréquence, relever Vecc et Vscc. Calculer |T(f)| = Vscc / Vecc." },
        { title: "Calculer le gain", detail: "Convertir le module en gain : GdB = 20log10(|T(f)|). Placer les points dans un tableau ou diagramme de Bode." },
        { title: "Déterminer Q", detail: "Identifier la bande passante à -3 dB, estimer Δf puis Q = f0 / Δf." }
      ],
      commands: [
        { label: "Réglage montage", code: "GBF: Sine, f = 10 kHz, Vpp = 5 V\nOscilloscope voie 1: Ve(t)\nOscilloscope voie 2: Vs(t)\nMasse commune: point M" },
        { label: "Calcul gain", code: "|T(f)| = Vscc / Vecc\nG(dB) = 20 * log10(|T(f)|)" },
        { label: "Facteur de qualité", code: "Q = f0 / Δf(-3 dB)\nExemple CR: f0 ≈ 10 kHz, Δf ≈ 2 kHz, Q ≈ 5" }
      ],
      tests: ["À 10 kHz, la sortie doit être maximale ou proche du maximum.", "En dessous et au-dessus de f0, le gain baisse.", "Les valeurs R et C mesurées doivent être proches des valeurs attendues.", "Le diagramme de Bode doit montrer un comportement passe-bande."],
      expected: ["Filtre centré autour de 10 kHz.", "R = 1.001 kΩ et C = 2.50 nF confirmés dans le CR.", "Bande passante proche de 9-11 kHz.", "Facteur de qualité expérimental du même ordre que la théorie."],
      errors: ["Masse commune oubliée.", "Sortie mesurée au mauvais point.", "Bobine non ajustée.", "Confondre amplitude crête-à-crête et amplitude efficace.", "Calculer 20log sur Vs au lieu de Vs/Ve."],
      theoryQuestions: ["Pourquoi ce montage est-il passe-bande ?", "Que se passe-t-il à la résonance ?", "Comment calcule-t-on le gain en dB ?", "Que représente le facteur de qualité Q ?"],
      report: {
        intro: "Ce TP étudie un filtre RLC série utilisé comme filtre passe-bande.",
        objective: "L'objectif est de réaliser le montage, vérifier les composants, régler la résonance et mesurer le gain en fonction de la fréquence.",
        manipulation: "Le GBF fournit un sinus de 10 kHz et 5 V crête-à-crête. Les composants sont branchés en série avec une masse commune. Ve et Vs sont mesurés à l'oscilloscope.",
        results: "La résistance et le condensateur sont conformes. Le filtre présente un maximum autour de 10 kHz et une bande passante d'environ 2 kHz.",
        conclusion: "Le comportement mesuré correspond à un filtre passe-bande RLC, avec des écarts explicables par les tolérances et le réglage manuel de la bobine."
      },
      checklist: ["Montage RLC en série vérifié", "Masse commune M confirmée", "R et C mesurés", "Bobine ajustée", "Vecc et Vscc relevés", "Module et gain calculés", "Bode tracé ou expliqué", "Q estimé et commenté"]
    },
    {
      id: "tp8-analyseur-modulations",
      title: "TP8 - Analyseur de spectres, AM et FM",
      shortTitle: "Analyseur + modulations",
      theme: "Modulation",
      difficulty: "hard",
      difficultyLabel: "Avancé",
      time: "60 à 80 min",
      href: "tp-analyseur-modulations.html",
      image: "assets/images/analyseur-spectre.png",
      captures: ["assets/images/tp8-capture-1.png", "assets/images/tp8-capture-2.png", "assets/images/analyseur-spectre.png"],
      docs: ["doc-tp8"],
      summary: "Prise en main avancée de l'analyseur de spectres, influence RBW/VBW, puis observation de modulations d'amplitude et de fréquence.",
      objective: "Maîtriser les réglages fins de l'analyseur et relier les paramètres de modulation AM/FM à l'occupation spectrale.",
      equipment: ["GBF", "Oscilloscope", "Analyseur de spectre", "Anritsu Master Software Tools", "Câbles RF"],
      topology: "GBF vers oscilloscope et analyseur. Les captures sont récupérées via Anritsu Master Software Tools en USB.",
      addressing: [
        ["Grandeur", "Valeur / action", "Remarque"],
        ["Impédance", "50 Ω ou High Z selon appareil", "Toujours vérifier avant amplitude"],
        ["Span", "200 kHz", "Pour réglage de base"],
        ["RBW", "1 kHz puis essais 3 kHz / 10 kHz", "Plus petit = raie plus fine"],
        ["VBW", "30 Hz puis 300 Hz", "Plus petit = affichage plus lissé"],
        ["Ref Level", "10 dBm ou 20 dBm selon marge", "Éviter saturation"],
        ["Raie mesurée", "1.000 MHz, environ 7.1 dBm", "Cohérent avec théorie proche de 7 dBm"],
        ["AM Depth", "30 %, 100 %, 120 %", "Surmodulation possible à 120 %"]
      ],
      steps: [
        { title: "Vérifier l'impédance", detail: "Identifier si le générateur et l'oscilloscope sont en High Z ou 50 Ω. Le CR mentionne le menu Utility > Channel set > Imped." },
        { title: "Choisir RBW et Ref Level", detail: "Pour Span = 200 kHz, choisir RBW ≈ 1 kHz. Régler le niveau de référence à la dizaine supérieure, avec marge si besoin." },
        { title: "Comparer RBW", detail: "Observer la raie avec RBW 3 kHz puis 10 kHz. Plus la RBW augmente, plus la raie s'élargit et le bruit augmente." },
        { title: "Comparer VBW", detail: "Observer VBW 30 Hz puis 300 Hz. Une VBW plus faible lisse davantage mais ralentit l'affichage." },
        { title: "Étudier l'AM", detail: "Changer la fréquence modulante et l'indice AM Depth : 30 %, 100 %, 120 %. Observer les bandes latérales et la surmodulation." },
        { title: "Étudier la FM", detail: "Observer les variations temporelles et spectrales d'une FM. Le CR note des durées proches de 25 µs pour les variations." }
      ],
      commands: [
        { label: "Capture analyseur", code: "Anritsu Master Software Tools\nConnection > USB\nCapture current measurement" },
        { label: "Réglage base", code: "Span = 200 kHz\nRBW ≈ 1 kHz\nRef Level = 10 dBm ou 20 dBm avec marge\nScale = 10 dB/div\nMarker sur la raie principale" },
        { label: "AM", code: "AM Depth = 30 %, 100 %, 120 %\nComparer forme temporelle et occupation spectrale\nÀ 120 %, chercher la surmodulation" }
      ],
      tests: ["La raie principale doit être proche de 1 MHz et 7 dBm.", "RBW 10 kHz donne une raie plus large que RBW 3 kHz.", "VBW 30 Hz donne un affichage plus lissé que VBW 300 Hz.", "En AM, les bandes latérales dépendent de la fréquence modulante.", "AM Depth 120 % peut déformer le signal."],
      expected: ["Mesure cohérente entre théorie et marqueur.", "Influence visible de RBW/VBW.", "Modulation AM : porteuse et bandes latérales.", "Modulation FM : occupation spectrale liée à la déviation."],
      errors: ["Niveau de référence trop bas.", "Confondre RBW et VBW.", "Oublier la marge de sécurité en dBm.", "Utiliser une capture ancienne.", "Interpréter une AM surmodulée comme un signal normal."],
      theoryQuestions: ["Quelle différence entre RBW et VBW ?", "Pourquoi ajouter une marge au Ref Level ?", "Que se passe-t-il si AM Depth dépasse 100 % ?", "Pourquoi une modulation occupe-t-elle plus de bande qu'une porteuse pure ?"],
      report: {
        intro: "Ce TP approfondit l'utilisation de l'analyseur de spectres et l'observation de modulations AM et FM.",
        objective: "L'objectif est de choisir correctement RBW, VBW et niveau de référence, puis d'analyser l'effet des paramètres de modulation.",
        manipulation: "Le signal est observé avec différents réglages RBW/VBW. Les captures sont récupérées avec Anritsu Master Software Tools. Des modulations AM et FM sont ensuite testées.",
        results: "La raie principale est proche de 1 MHz et 7.1 dBm. L'augmentation de RBW élargit la raie et augmente le bruit. L'AM montre des bandes latérales, avec risque de surmodulation à 120 %.",
        conclusion: "Le TP montre que la qualité d'une mesure spectrale dépend fortement des réglages de résolution et de l'interprétation des paramètres de modulation."
      },
      checklist: ["Impédance vérifiée", "Span/RBW/VBW notés", "Ref Level choisi avec marge", "Niveau de bruit observé", "Marker placé sur la raie", "Comparaison RBW faite", "Comparaison VBW faite", "AM Depth commenté", "Capture exportée correctement"]
    }
  ],

  theoryCards: [
    { group: "Télécom / signal", title: "Signal sinusoïdal", definition: "Signal périodique composé d'une seule fréquence idéale.", purpose: "Il sert de référence car son spectre doit contenir une raie principale.", example: "Dans le TP2, le sinus est réglé à 1 MHz ; dans le TP4, le sinus d'entrée est à 1 kHz.", related: "GBF en mode Sine, oscilloscope, FFT, analyseur de spectre.", errors: "Amplitude fausse si l'impédance High Z / 50 Ω est mal réglée.", exam: "Pourquoi un sinus pur donne-t-il une seule raie sur le spectre ?" },
    { group: "Télécom / signal", title: "Valeur efficace Veff", definition: "Valeur équivalente continue qui produirait la même puissance.", purpose: "Elle permet de comparer amplitude temporelle et niveau de puissance.", example: "Pour 5 Vpp sinusoïdal : Veff = 5 / (2√2) ≈ 1.77 V.", related: "Measure sur oscilloscope, calcul Vpp / (2√2).", errors: "Confondre Vpp, Vcrête et Veff.", exam: "Calcule Veff pour un sinus de 5 Vpp." },
    { group: "Télécom / signal", title: "dB", definition: "Unité logarithmique qui compare deux grandeurs.", purpose: "Elle simplifie les rapports de gain et les variations de puissance.", example: "Doubler une tension donne 20log(2) ≈ +6 dB.", related: "G(dB) = 20log(Vs/Ve), analyseur de spectre.", errors: "Utiliser 10log pour une tension au lieu de 20log.", exam: "Pourquoi +6 dB correspond à un doublement de tension ?" },
    { group: "Télécom / signal", title: "dBm", definition: "Niveau de puissance référencé à 1 mW.", purpose: "Très utilisé sur les analyseurs de spectre RF.", example: "Dans le TP8, la raie est proche de 7.1 dBm.", related: "P(dBm) = 10log(P/1mW).", errors: "Comparer directement dBm et volts sans conversion.", exam: "Que signifie 0 dBm ?" },
    { group: "Télécom / signal", title: "dBµV", definition: "Niveau de tension référencé à 1 microvolt.", purpose: "Utile pour exprimer de très petites tensions en réception ou analyse spectrale.", example: "Le TP2 mesure environ 100.12 dBµV pour la raie du sinus.", related: "V(dBµV) = 20log(V/1µV).", errors: "Oublier que le dBµV est une tension, pas une puissance.", exam: "Quelle est la référence du dBµV ?" },
    { group: "Mesure / instrumentation", title: "Span", definition: "Largeur de fréquence affichée par l'analyseur.", purpose: "Il détermine la portion du spectre visible.", example: "TP6 : Span 20 MHz pour voir un canal TNT ; TP8 : Span 200 kHz pour une porteuse.", related: "Start/Stop ou Center/Span.", errors: "Span trop petit : on coupe le signal ; trop grand : lecture moins précise.", exam: "À quoi sert le span sur un analyseur de spectre ?" },
    { group: "Mesure / instrumentation", title: "RBW", definition: "Resolution Bandwidth, largeur du filtre de résolution.", purpose: "Elle règle la capacité à séparer deux fréquences proches.", example: "TP3 : RBW choisie à 300 Hz pour un span de 100 kHz.", related: "Menu BW, réglage RBW.", errors: "RBW trop grande : raie élargie et bruit plus élevé.", exam: "Pourquoi diminue-t-on la RBW pour une mesure fine ?" },
    { group: "Mesure / instrumentation", title: "VBW", definition: "Video Bandwidth, filtrage/lissage de l'affichage après détection.", purpose: "Elle rend la trace plus stable visuellement.", example: "TP8 : comparaison VBW 30 Hz et 300 Hz.", related: "Menu BW, réglage VBW.", errors: "Croire que VBW change la résolution fréquentielle comme RBW.", exam: "Quelle différence entre RBW et VBW ?" },
    { group: "Mesure / instrumentation", title: "Ref Level", definition: "Niveau de référence vertical affiché en haut de l'écran.", purpose: "Il évite la saturation et place le signal dans une zone lisible.", example: "TP2 : Ref Level 10 dBm ; TP8 : 10 ou 20 dBm avec marge.", related: "Amplitude / Scale / Ref Level.", errors: "Ref Level trop bas : signal écrêté ou mesure impossible.", exam: "Pourquoi ajouter une marge au niveau de référence ?" },
    { group: "Télécom / signal", title: "Série de Fourier", definition: "Décomposition d'un signal périodique en somme de sinusoïdes.", purpose: "Elle explique les harmoniques du signal carré.", example: "TP2 : carré 100 kHz avec harmoniques impaires 300, 500, 700 kHz.", related: "Analyseur de spectre, DSF, tableur.", errors: "Attendre des harmoniques paires importantes pour un carré idéal à 50 %.", exam: "Pourquoi un carré idéal contient-il des harmoniques impaires ?" },
    { group: "Télécom / signal", title: "TDH", definition: "Taux de distorsion harmonique, rapport entre harmoniques et fondamental.", purpose: "Il mesure la pureté d'un signal.", example: "Le fichier XLSX du TP2 contient un calcul de TDH à partir des amplitudes relevées.", related: "Tableur, conversion dBµV vers Veff.", errors: "Additionner les dB directement au lieu de revenir en volts.", exam: "Pourquoi faut-il convertir les dB avant de calculer un TDH ?" },
    { group: "Télécom / signal", title: "Échantillonnage", definition: "Prélèvement d'un signal à intervalles réguliers.", purpose: "C'est la première étape de la numérisation.", example: "TP4 : commande proche de 8 kHz et signal d'entrée à 1 kHz.", related: "Oscilloscope, commande Ech, FFT.", errors: "Confondre fréquence du signal et fréquence d'échantillonnage.", exam: "Que représente fs dans un système échantillonné ?" },
    { group: "Télécom / signal", title: "Aliasing", definition: "Repliement spectral quand le signal dépasse la limite fs/2.", purpose: "Il explique pourquoi un signal peut être reconstruit à une mauvaise fréquence.", example: "TP4 : si fs = 8 kHz, la limite utile est 4 kHz.", related: "Critère de Nyquist, FFT.", errors: "Penser qu'il suffit d'augmenter l'amplitude pour corriger l'aliasing.", exam: "Quand apparaît l'aliasing ?" },
    { group: "Télécom / signal", title: "Filtre RLC passe-bande", definition: "Circuit qui laisse passer une bande autour de sa fréquence de résonance.", purpose: "Il sélectionne une zone fréquentielle.", example: "TP7 : filtre centré autour de 10 kHz avec R = 1 kΩ, L = 0.1 H, C = 2.5 nF.", related: "GBF, oscilloscope, gain en dB, Bode.", errors: "Mesurer la sortie au mauvais point du montage.", exam: "Pourquoi le gain est-il maximal près de la résonance ?" },
    { group: "Télécom / signal", title: "Facteur de qualité Q", definition: "Rapport entre fréquence centrale et bande passante.", purpose: "Il indique la sélectivité du filtre.", example: "TP7 : Q ≈ 10 kHz / 2 kHz = 5.", related: "Q = f0/Δf, bande passante à -3 dB.", errors: "Prendre une bande passante sans référence au -3 dB.", exam: "Comment calcule-t-on Q expérimentalement ?" },
    { group: "Télécom / signal", title: "DSP", definition: "Densité spectrale de puissance : puissance par hertz.", purpose: "Elle décrit la répartition de puissance d'un canal large.", example: "TP6 : DSP ≈ 2.45 × 10^-15 W/Hz avec -66.1 dBm et RBW 100 kHz.", related: "DSP = P/RBW.", errors: "Oublier de convertir dBm en watts avant de diviser.", exam: "Pourquoi la RBW intervient-elle dans le calcul de DSP ?" },
    { group: "Télécom / signal", title: "Modulation AM", definition: "Variation de l'amplitude d'une porteuse par un signal modulant.", purpose: "Elle transporte une information sur une fréquence porteuse.", example: "TP8 : AM Depth 30 %, 100 %, 120 %.", related: "GBF modulation, analyseur de spectre.", errors: "Dépasser 100 % et ne pas identifier la surmodulation.", exam: "Que se passe-t-il si l'indice AM dépasse 100 % ?" },
    { group: "Télécom / signal", title: "Modulation FM", definition: "Variation de la fréquence instantanée d'une porteuse.", purpose: "Elle transporte l'information par déviation de fréquence.", example: "TP8 : observation temporelle et fréquentielle d'un signal FM.", related: "Déviation, fréquence modulante, analyseur de spectre.", errors: "Chercher uniquement une variation d'amplitude alors que la FM change la fréquence.", exam: "Quelle grandeur varie en modulation FM ?" },
    { group: "Réseaux", title: "Adresse IP", definition: "Identifiant logique d'une interface réseau.", purpose: "Permet d'envoyer des paquets à une machine sur un réseau.", example: "192.168.1.10/24 désigne une machine dans le réseau 192.168.1.0.", related: "ip a, ip addr add, ping.", errors: "Deux machines avec la même IP créent un conflit.", exam: "À quoi sert une adresse IP ?" },
    { group: "Réseaux", title: "Masque réseau", definition: "Il sépare la partie réseau et la partie hôte d'une adresse IP.", purpose: "Il permet de savoir si une destination est locale ou distante.", example: "255.255.255.0 correspond souvent à /24.", related: "ip a, plan d'adressage.", errors: "Mauvais masque : ping impossible entre machines supposées voisines.", exam: "Que signifie /24 ?" },
    { group: "Réseaux", title: "Passerelle", definition: "Routeur utilisé pour sortir du réseau local.", purpose: "Elle permet d'atteindre les réseaux distants.", example: "ip route add default via 192.168.1.1.", related: "ip route, route par défaut.", errors: "Pas de passerelle : Internet ou réseau distant inaccessible.", exam: "À quoi sert la passerelle par défaut ?" },
    { group: "Réseaux", title: "DNS", definition: "Service qui traduit les noms en adresses IP.", purpose: "Permet d'utiliser un nom comme example.com au lieu d'une IP.", example: "nslookup example.com.", related: "nslookup, dig, /etc/resolv.conf.", errors: "Ping IP fonctionne mais ping nom échoue : souvent DNS.", exam: "Comment tester si un problème vient du DNS ?" },
    { group: "Réseaux", title: "DHCP", definition: "Service qui attribue automatiquement une configuration IP.", purpose: "Évite de configurer IP, masque, passerelle et DNS à la main.", example: "dhclient eth0 demande une adresse.", related: "dhclient, ip helper-address.", errors: "Aucun bail DHCP si VLAN, relais ou service mal configuré.", exam: "Que fait la commande dhclient ?" },
    { group: "Réseaux", title: "VLAN", definition: "Réseau logique séparé sur un switch.", purpose: "Il isole des groupes de machines sur le même matériel.", example: "VLAN 10 étudiants, VLAN 20 administration.", related: "show vlan brief, switchport access vlan.", errors: "Port dans le mauvais VLAN : ping impossible.", exam: "À quoi sert un VLAN ?" },
    { group: "Réseaux", title: "Trunk", definition: "Lien qui transporte plusieurs VLAN entre équipements.", purpose: "Relie switchs ou switch-routeur en conservant l'identité VLAN.", example: "switchport mode trunk.", related: "show interfaces trunk, dot1Q.", errors: "Trunk absent : un seul VLAN passe ou aucun.", exam: "Pourquoi configure-t-on un trunk ?" },
    { group: "Réseaux", title: "Access port", definition: "Port associé à un seul VLAN pour une machine finale.", purpose: "Connecter un PC à un VLAN précis.", example: "switchport mode access puis switchport access vlan 10.", related: "Cisco interface configuration.", errors: "Laisser le port dans VLAN 1 par défaut.", exam: "Différence entre port access et trunk ?" },
    { group: "Réseaux", title: "Routage inter-VLAN", definition: "Routage qui permet aux VLAN de communiquer via un routeur ou switch L3.", purpose: "Sans routage, les VLAN sont isolés.", example: "Sous-interface dot1Q avec passerelle par VLAN.", related: "encapsulation dot1Q, ip helper-address.", errors: "Passerelle VLAN manquante.", exam: "Pourquoi faut-il un routeur pour communiquer entre VLAN ?" },
    { group: "Réseaux", title: "NAT / PAT", definition: "NAT traduit des adresses ; PAT traduit aussi les ports pour partager une IP.", purpose: "Permet à plusieurs machines privées de sortir avec une adresse publique.", example: "iptables -t nat -A POSTROUTING -j MASQUERADE.", related: "iptables, SNAT, DNAT, MASQUERADE.", errors: "Oublier d'activer le forwarding.", exam: "Différence entre NAT et PAT ?" },
    { group: "Réseaux", title: "ACL et pare-feu", definition: "Règles qui autorisent ou bloquent du trafic.", purpose: "Filtrer selon IP, port, protocole ou direction.", example: "iptables -A FORWARD -p icmp -j DROP.", related: "iptables -L, ACL Cisco.", errors: "Règle trop large qui bloque tout le trafic.", exam: "Que vérifie-t-on quand un service est inaccessible ?" },
    { group: "Réseaux", title: "Wireshark", definition: "Analyseur de paquets réseau.", purpose: "Voir les trames et comprendre ce qui circule réellement.", example: "Filtrer icmp, arp, dns, dhcp, tcp ou http.", related: "Capture interface, filtres d'affichage.", errors: "Capturer la mauvaise interface.", exam: "Pourquoi utiliser Wireshark ?" },
    { group: "Réseaux", title: "ARP et adresse MAC", definition: "ARP associe une adresse IP à une adresse MAC sur un LAN.", purpose: "Permet l'envoi réel des trames Ethernet.", example: "Avant un ping local, on observe souvent une requête ARP.", related: "arp, Wireshark filtre arp.", errors: "Pas d'ARP : machine hors VLAN, câble, interface ou masque incorrect.", exam: "À quoi sert ARP ?" },
    { group: "Réseaux", title: "Ping et route par défaut", definition: "ping teste la connectivité IP ; la route par défaut envoie le trafic inconnu vers une passerelle.", purpose: "Diagnostic rapide des problèmes de réseau.", example: "ping 8.8.8.8 puis ip route.", related: "ping, traceroute, ip route add default via.", errors: "Ping bloqué par pare-feu : ne pas conclure trop vite que le réseau est cassé.", exam: "Que vérifie ping ?" },
    { group: "Réseaux", title: "Client / serveur", definition: "Un client demande un service ; un serveur répond.", purpose: "Modèle de base du web, FTP, DNS, DHCP.", example: "Navigateur web client vers serveur HTTP.", related: "systemctl status, ports TCP.", errors: "Service installé mais non démarré.", exam: "Quelle différence entre client et serveur ?" }
  ],

  commandCategories: [
    {
      id: "instruments",
      label: "Instruments télécom",
      commands: [
        { cmd: "GBF: Sine / Square / AM / FM", utility: "Choisir la forme du signal à générer.", example: "Sine 1 MHz pour le TP2 ; Square 100 kHz pour Fourier ; AM Depth pour TP8.", expected: "Signal stable visible à l'oscilloscope.", error: "Mauvaise forme de signal ou fréquence restée d'une manipulation précédente." },
        { cmd: "GBF: High Z / 50 Ω", utility: "Adapter l'amplitude selon la charge connectée.", example: "Utility > Channel set > Imped sur le générateur.", expected: "Amplitude mesurée cohérente avec la valeur attendue.", error: "Amplitude divisée ou doublée si l'impédance est mal choisie." },
        { cmd: "Analyseur: Preset", utility: "Réinitialiser l'analyseur avant une nouvelle mesure.", example: "Preset puis régler Center, Span, RBW, VBW.", expected: "Aucun ancien réglage ne pollue la mesure.", error: "Trace Max Hold ou marqueur ancien conservé." },
        { cmd: "Analyseur: Center / Span", utility: "Placer la zone fréquentielle à observer.", example: "Center 1 MHz, Span 1 MHz pour TP2.", expected: "La raie principale est visible au centre.", error: "Signal hors écran si center ou span est faux." },
        { cmd: "Analyseur: RBW / VBW", utility: "Régler la finesse et le lissage de mesure.", example: "RBW 10 kHz pour TP2, RBW 300 Hz pour TP3, VBW 30 Hz pour lisser TP8.", expected: "Raie nette, bruit lisible, mesure stable.", error: "Confondre RBW et VBW." },
        { cmd: "Analyseur: Marker", utility: "Lire fréquence et niveau d'une raie.", example: "Marker sur 1 MHz pour relever le niveau en dBm ou dBµV.", expected: "Fréquence et amplitude affichées avec unité.", error: "Marker placé sur le bruit au lieu du pic." },
        { cmd: "Oscilloscope: Measure", utility: "Mesurer fréquence, Vpp, Veff et rapport cyclique.", example: "TP4 : fréquence de commande ≈ 8 kHz, duty ≈ 11 %.", expected: "Valeur affichée directement sur l'écran.", error: "Mesure prise sur la mauvaise voie." },
        { cmd: "Mesureur TNT: DVB-T + lissage", utility: "Observer proprement un canal TNT.", example: "Mode DVB-T, Span 20 MHz, lissage activé.", expected: "Canal large et lisible.", error: "Mode incorrect ou lissage désactivé." }
      ]
    },
    {
      id: "linux",
      label: "Linux",
      commands: [
        { cmd: "ip a", utility: "Afficher les interfaces et adresses IP.", example: "ip a", expected: "Interfaces avec état UP/DOWN et adresses.", error: "Confondre nom d'interface eth0/enp0s3." },
        { cmd: "ip link set interface up", utility: "Activer une interface.", example: "sudo ip link set eth0 up", expected: "Interface en état UP.", error: "Oublier sudo ou utiliser le mauvais nom." },
        { cmd: "ip addr add", utility: "Ajouter une IP statique.", example: "sudo ip addr add 192.168.10.2/24 dev eth0", expected: "Adresse visible avec ip a.", error: "Mettre un masque incorrect." },
        { cmd: "ip route", utility: "Afficher la table de routage.", example: "ip route", expected: "Routes connectées et default via si configurée.", error: "Chercher un problème DNS alors que la route manque." },
        { cmd: "ip route add default via", utility: "Ajouter une passerelle par défaut.", example: "sudo ip route add default via 192.168.10.1", expected: "Trafic distant envoyé vers la passerelle.", error: "Passerelle hors du réseau local." },
        { cmd: "dhclient interface", utility: "Demander une adresse DHCP.", example: "sudo dhclient eth0", expected: "Adresse IP reçue si le serveur répond.", error: "VLAN ou relais DHCP mal configuré." },
        { cmd: "systemctl status", utility: "Vérifier l'état d'un service.", example: "systemctl status apache2", expected: "active (running) si le service tourne.", error: "Service installé mais non démarré." },
        { cmd: "systemctl restart", utility: "Redémarrer un service après modification.", example: "sudo systemctl restart isc-dhcp-server", expected: "Service relancé sans erreur.", error: "Ne pas lire le message d'erreur de configuration." },
        { cmd: "ping", utility: "Tester la connectivité IP.", example: "ping 192.168.10.1", expected: "Réponses avec temps de latence.", error: "Pare-feu peut bloquer ICMP." },
        { cmd: "traceroute", utility: "Voir les routeurs traversés.", example: "traceroute 8.8.8.8", expected: "Liste des sauts réseau.", error: "Commande parfois absente ou bloquée." },
        { cmd: "nslookup / dig", utility: "Tester la résolution DNS.", example: "nslookup example.com", expected: "Adresse IP retournée.", error: "Confondre panne DNS et panne IP." },
        { cmd: "nano / cat / grep", utility: "Modifier et lire des fichiers de configuration.", example: "grep option /etc/dhcp/dhcpd.conf", expected: "Ligne trouvée ou fichier modifié.", error: "Oublier d'enregistrer ou de redémarrer le service." }
      ]
    },
    {
      id: "iptables",
      label: "iptables",
      commands: [
        { cmd: "iptables -L", utility: "Lister les règles de filtrage.", example: "sudo iptables -L -n -v", expected: "Chaînes INPUT, FORWARD, OUTPUT visibles.", error: "Oublier -n et attendre à cause du DNS." },
        { cmd: "iptables -t nat -L", utility: "Lister les règles NAT.", example: "sudo iptables -t nat -L -n -v", expected: "PREROUTING, POSTROUTING visibles.", error: "Chercher les règles NAT dans la table filter." },
        { cmd: "iptables -A FORWARD", utility: "Autoriser ou bloquer un trafic routé.", example: "sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT", expected: "Paquets routés acceptés.", error: "Sens des interfaces inversé." },
        { cmd: "iptables -t nat -A POSTROUTING", utility: "Modifier les paquets en sortie.", example: "sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE", expected: "Machines privées sortent via l'interface eth0.", error: "Forwarding IP non activé." },
        { cmd: "iptables -t nat -A PREROUTING", utility: "Rediriger un trafic entrant.", example: "sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to 192.168.1.10", expected: "Accès entrant redirigé vers le serveur.", error: "Oublier la règle FORWARD associée." },
        { cmd: "MASQUERADE / SNAT / DNAT", utility: "Traduire automatiquement ou explicitement les adresses.", example: "MASQUERADE pour IP publique dynamique ; SNAT pour IP fixe ; DNAT pour redirection.", expected: "Traduction visible dans les tests réseau.", error: "Confondre source NAT et destination NAT." }
      ]
    },
    {
      id: "cisco",
      label: "Cisco",
      commands: [
        { cmd: "enable", utility: "Passer en mode privilégié.", example: "Switch> enable", expected: "Prompt Switch#.", error: "Rester en mode utilisateur." },
        { cmd: "configure terminal", utility: "Entrer en configuration globale.", example: "Switch# configure terminal", expected: "Prompt Switch(config)#.", error: "Taper des commandes de config au mauvais niveau." },
        { cmd: "show vlan brief", utility: "Voir les VLAN et ports access.", example: "show vlan brief", expected: "VLAN, noms et ports listés.", error: "Ne pas voir les ports trunk dans cette vue." },
        { cmd: "show interfaces trunk", utility: "Vérifier les trunks.", example: "show interfaces trunk", expected: "Ports trunk et VLAN autorisés.", error: "Trunk mal configuré ou VLAN non autorisé." },
        { cmd: "show running-config", utility: "Lire la configuration active.", example: "show running-config", expected: "Interfaces, VLAN, routes, ACL visibles.", error: "Oublier de sauvegarder ensuite si demandé." },
        { cmd: "interface", utility: "Entrer dans la config d'un port.", example: "interface fa0/1", expected: "Prompt interface.", error: "Se tromper de numéro de port." },
        { cmd: "switchport mode access", utility: "Mettre un port en mode access.", example: "switchport mode access", expected: "Port associé à un seul VLAN.", error: "Oublier switchport access vlan." },
        { cmd: "switchport access vlan", utility: "Affecter le VLAN d'un port access.", example: "switchport access vlan 10", expected: "PC dans VLAN 10.", error: "VLAN inexistant ou mauvais VLAN." },
        { cmd: "switchport mode trunk", utility: "Transporter plusieurs VLAN.", example: "switchport mode trunk", expected: "Lien trunk actif.", error: "Port côté opposé non trunk." },
        { cmd: "encapsulation dot1Q", utility: "Taguer un VLAN sur sous-interface routeur.", example: "encapsulation dot1Q 10", expected: "Sous-interface liée au VLAN 10.", error: "Mauvais numéro VLAN." },
        { cmd: "ip helper-address", utility: "Relayer DHCP entre VLAN.", example: "ip helper-address 192.168.1.100", expected: "Clients VLAN reçoivent une IP DHCP.", error: "Adresse du serveur DHCP incorrecte." },
        { cmd: "no shutdown", utility: "Activer une interface Cisco.", example: "no shutdown", expected: "Interface administrativement UP.", error: "Oublier cette commande sur routeur." }
      ]
    },
    {
      id: "wireshark",
      label: "Wireshark",
      commands: [
        { cmd: "icmp", utility: "Voir les paquets ping.", example: "Filtre d'affichage: icmp", expected: "Echo request / echo reply.", error: "Ping bloqué par pare-feu." },
        { cmd: "arp", utility: "Voir la résolution IP vers MAC.", example: "Filtre: arp", expected: "Who has ... Tell ...", error: "Pas d'ARP si mauvaise interface de capture." },
        { cmd: "dns", utility: "Voir les requêtes de noms.", example: "Filtre: dns", expected: "Query puis response.", error: "Tester un site déjà en cache DNS." },
        { cmd: "dhcp", utility: "Voir l'échange DHCP.", example: "Filtre: dhcp ou bootp", expected: "Discover, Offer, Request, ACK.", error: "Relais DHCP absent ou VLAN incorrect." },
        { cmd: "tcp", utility: "Voir connexions TCP.", example: "Filtre: tcp", expected: "SYN, SYN/ACK, ACK.", error: "Confondre handshake TCP et données applicatives." },
        { cmd: "http", utility: "Voir trafic web non chiffré.", example: "Filtre: http", expected: "GET, response, codes HTTP.", error: "HTTPS ne s'affiche pas comme HTTP lisible." }
      ]
    },
    {
      id: "calculs",
      label: "Calculs utiles",
      commands: [
        { cmd: "Veff = Vpp / (2√2)", utility: "Convertir un Vpp sinusoïdal en valeur efficace.", example: "5 Vpp -> 1.77 Veff.", expected: "Valeur cohérente pour conversion en dB.", error: "Oublier le facteur 2." },
        { cmd: "G(dB) = 20log10(Vs/Ve)", utility: "Calculer un gain en tension.", example: "TP7 avec Vscc et Vecc.", expected: "Gain maximal autour de f0.", error: "Utiliser Vs seul au lieu du rapport." },
        { cmd: "P(W) = 10^((dBm - 30)/10)", utility: "Convertir dBm vers watts.", example: "-66.1 dBm -> 2.45e-10 W.", expected: "Puissance en watts pour calcul DSP.", error: "Oublier le -30." },
        { cmd: "DSP = P / RBW", utility: "Calculer une densité spectrale de puissance.", example: "TP6 : P / 100 kHz.", expected: "W/Hz.", error: "Garder RBW en kHz sans convertir en Hz." },
        { cmd: "Q = f0 / Δf", utility: "Calculer la sélectivité d'un filtre.", example: "10 kHz / 2 kHz = 5.", expected: "Q sans unité.", error: "Mesurer Δf hors points -3 dB." }
      ]
    }
  ],

  errors: [
    { group: "Mesure télécom", title: "Amplitude incohérente", symptom: "La tension mesurée n'est pas celle réglée sur le GBF.", cause: "Impédance High Z / 50 Ω mal choisie ou charge non prévue.", check: "Vérifier l'impédance du GBF, de l'oscilloscope et de l'analyseur.", fix: "Adapter le réglage ou recalculer l'amplitude attendue.", command: "Utility > Channel set > Imped ; vérifier 50 Ω / High Z" },
    { group: "Mesure télécom", title: "Aucune raie visible", symptom: "L'analyseur n'affiche pas le signal attendu.", cause: "Center/span incorrect, câble mal branché, niveau trop faible.", check: "Revenir au Preset puis régler Center et Span autour de la fréquence.", fix: "Tester le signal à l'oscilloscope puis replacer le marker.", command: "Preset ; Center = fréquence du GBF ; Span adapté" },
    { group: "Mesure télécom", title: "Raie trop large", symptom: "La raie spectrale paraît épaisse ou imprécise.", cause: "RBW trop élevée.", check: "Comparer RBW 3 kHz et 10 kHz comme dans le TP8.", fix: "Diminuer RBW en acceptant un balayage plus lent.", command: "Menu BW > RBW plus faible" },
    { group: "Mesure télécom", title: "Trace instable ou bruitée", symptom: "La courbe saute et le niveau est difficile à lire.", cause: "VBW trop élevée, bruit important ou lissage absent.", check: "Baisser VBW ou activer le lissage selon l'appareil.", fix: "Utiliser une VBW plus faible ou le mode lissage TNT.", command: "VBW 30 Hz ; mode lissage sur mesureur" },
    { group: "Mesure télécom", title: "Max Hold garde une ancienne mesure", symptom: "La trace ne correspond plus au signal réel.", cause: "Fonction Max Hold ou trace mémorisée non réinitialisée.", check: "Regarder le mode de trace actif.", fix: "Effacer la trace, revenir en Clear/Write ou refaire Preset.", command: "Trace > Clear/Write ; Preset si besoin" },
    { group: "Échantillonnage", title: "Aliasing non identifié", symptom: "La fréquence observée ne correspond pas à la fréquence envoyée.", cause: "Fréquence d'entrée supérieure à fs/2.", check: "Calculer fs/2. Dans le TP4 : 8 kHz / 2 = 4 kHz.", fix: "Diminuer la fréquence d'entrée ou augmenter fs si possible.", command: "Comparer fentrée à fs/2" },
    { group: "Filtrage RLC", title: "Filtre RLC ne résonne pas", symptom: "Aucun maximum net autour de 10 kHz.", cause: "Mauvais câblage, masse commune absente, bobine mal réglée.", check: "Vérifier R, L, C en série et les points Ve/Vs/M.", fix: "Rebrancher proprement puis ajuster la bobine.", command: "Mesurer R et C ; observer Ve et Vs à l'oscilloscope" },
    { group: "TNT", title: "Canal TNT absent", symptom: "Aucune bande DVB-T visible.", cause: "Mauvaise entrée, câble coaxial, mode ou fréquence.", check: "Vérifier câble UHF, mode DVB-T et span 20 MHz.", fix: "Rebrancher et refaire le réglage de base du mesureur.", command: "Mode DVB-T ; Span = 20 MHz ; lissage" },
    { group: "Réseaux", title: "Le ping ne fonctionne pas", symptom: "Request timeout ou destination unreachable.", cause: "IP, masque, passerelle, VLAN, route ou pare-feu incorrect.", check: "Tester ip a, ip route, ping passerelle puis destination.", fix: "Corriger IP/masque/route ou règle pare-feu.", command: "ip a ; ip route ; ping passerelle" },
    { group: "Réseaux", title: "Interface DOWN", symptom: "L'interface apparaît DOWN ou administratively down.", cause: "Câble, port désactivé, no shutdown manquant.", check: "Voir l'état avec ip a ou show interface.", fix: "Activer l'interface et vérifier le câble.", command: "ip link set eth0 up ; no shutdown" },
    { group: "Réseaux", title: "Pas d'adresse IP", symptom: "Aucune adresse sur l'interface.", cause: "DHCP absent ou configuration statique oubliée.", check: "ip a puis journal du service DHCP.", fix: "Lancer dhclient ou ajouter une IP statique.", command: "dhclient eth0 ; ip addr add ..." },
    { group: "Réseaux", title: "DHCP ne donne pas d'adresse", symptom: "Le client reste sans bail.", cause: "Serveur arrêté, relais absent, mauvais VLAN.", check: "Wireshark filtre dhcp : voit-on Discover/Offer ?", fix: "Démarrer le service, corriger ip helper-address ou VLAN.", command: "systemctl status isc-dhcp-server ; ip helper-address" },
    { group: "Réseaux", title: "Mauvaise passerelle", symptom: "Ping local OK mais réseau distant KO.", cause: "Default gateway absente ou incorrecte.", check: "ip route.", fix: "Ajouter la route par défaut correcte.", command: "ip route add default via 192.168.x.1" },
    { group: "Réseaux", title: "Mauvais VLAN", symptom: "Deux machines ne se voient pas alors qu'elles sont câblées.", cause: "Port access affecté au mauvais VLAN.", check: "show vlan brief.", fix: "Corriger switchport access vlan.", command: "switchport mode access ; switchport access vlan 10" },
    { group: "Réseaux", title: "Trunk mal configuré", symptom: "Les VLAN ne passent pas entre switchs.", cause: "Port non trunk, VLAN non autorisé, dot1Q manquant.", check: "show interfaces trunk.", fix: "Configurer trunk des deux côtés.", command: "switchport mode trunk ; encapsulation dot1Q" },
    { group: "Réseaux", title: "DNS ne répond pas", symptom: "Ping IP OK mais nom de domaine KO.", cause: "Serveur DNS absent ou resolv.conf incorrect.", check: "nslookup ou dig.", fix: "Corriger DNS ou DHCP option domain-name-servers.", command: "nslookup example.com ; dig example.com" },
    { group: "Réseaux", title: "iptables bloque le trafic", symptom: "Route présente mais paquets bloqués.", cause: "Règle DROP dans INPUT/FORWARD.", check: "iptables -L -n -v.", fix: "Autoriser le trafic nécessaire ou corriger l'ordre des règles.", command: "iptables -A FORWARD -j ACCEPT" },
    { group: "Réseaux", title: "NAT ne fonctionne pas", symptom: "Clients privés ne sortent pas vers l'extérieur.", cause: "MASQUERADE absent, forwarding désactivé, route retour manquante.", check: "iptables -t nat -L ; sysctl net.ipv4.ip_forward.", fix: "Activer forwarding et ajouter POSTROUTING.", command: "iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE" },
    { group: "Réseaux", title: "Wireshark capture la mauvaise interface", symptom: "La capture reste vide.", cause: "Interface non utilisée ou trafic sur une autre carte.", check: "Regarder les compteurs de paquets dans Wireshark.", fix: "Changer d'interface et relancer la capture.", command: "Filtrer ensuite avec icmp, arp, dns, dhcp" },
    { group: "Services", title: "Service non démarré", symptom: "Le port ou service ne répond pas.", cause: "Apache/FTP/DHCP/DNS arrêté ou erreur de configuration.", check: "systemctl status service.", fix: "Corriger le fichier puis redémarrer.", command: "systemctl restart service" }
  ],

  quizQuestions: [
    { question: "Quelle est la différence entre RBW et VBW ?", options: ["RBW règle la résolution fréquentielle, VBW lisse l'affichage", "RBW règle l'amplitude, VBW règle la fréquence centrale", "RBW sert au réseau, VBW au Wi-Fi", "Ce sont deux noms pour le même réglage"], answer: 0, explanation: "RBW est le filtre de résolution ; VBW est un lissage après détection." },
    { question: "Dans le TP2, doubler une tension efficace doit faire augmenter le niveau d'environ :", options: ["3 dB", "6 dB", "10 dB", "20 dB"], answer: 1, explanation: "Pour une tension, 20log10(2) ≈ 6 dB." },
    { question: "Pourquoi un signal carré idéal à 50 % présente surtout des harmoniques impaires ?", options: ["À cause de sa symétrie", "Parce que l'analyseur supprime les harmoniques paires", "Parce que le GBF est en 50 Ω", "Parce que la RBW est trop faible"], answer: 0, explanation: "La série de Fourier d'un carré symétrique contient des harmoniques impaires." },
    { question: "Pour un sinus de 5 V crête-à-crête, la valeur efficace vaut environ :", options: ["5 V", "2.5 V", "1.77 V", "0.5 V"], answer: 2, explanation: "Veff = Vpp / (2√2) = 5 / 2.828 ≈ 1.77 V." },
    { question: "Avec une fréquence d'échantillonnage de 8 kHz, la limite de Nyquist est :", options: ["1 kHz", "4 kHz", "8 kHz", "16 kHz"], answer: 1, explanation: "La limite est fs/2, donc 4 kHz." },
    { question: "Que signifie l'aliasing ?", options: ["Le bruit d'un analyseur", "Une erreur de câblage coaxial", "Un repliement spectral", "Une conversion dBm vers watt"], answer: 2, explanation: "L'aliasing apparaît quand le signal dépasse la limite fs/2." },
    { question: "Dans le TP7, le gain en dB du filtre se calcule avec :", options: ["10log(Vs)", "20log(Vs/Ve)", "Vs + Ve", "RBW / Span"], answer: 1, explanation: "Pour un rapport de tension, on utilise 20log10(Vs/Ve)." },
    { question: "À quoi sert le facteur de qualité Q d'un filtre ?", options: ["À mesurer sa sélectivité", "À choisir une adresse IP", "À régler le DNS", "À convertir les dBµV"], answer: 0, explanation: "Q = f0/Δf indique si le filtre est plus ou moins sélectif." },
    { question: "Dans le TP6, la DSP se calcule par :", options: ["P × RBW", "P / RBW", "RBW / P", "20log(P)"], answer: 1, explanation: "La densité spectrale de puissance est une puissance par hertz." },
    { question: "Pourquoi active-t-on le lissage sur le mesureur TNT ?", options: ["Pour réduire les fluctuations de la trace", "Pour augmenter la fréquence du canal", "Pour convertir la TNT en Wi-Fi", "Pour supprimer la puissance"], answer: 0, explanation: "Le lissage rend la lecture d'un canal large plus stable." },
    { question: "En AM, si AM Depth dépasse 100 %, on risque :", options: ["La surmodulation", "La disparition du span", "Un VLAN natif", "Une adresse DHCP"], answer: 0, explanation: "Au-delà de 100 %, l'enveloppe est déformée." },
    { question: "Que fait la commande ping ?", options: ["Elle teste une connectivité IP avec ICMP", "Elle attribue une adresse DHCP", "Elle configure un trunk", "Elle change la RBW"], answer: 0, explanation: "ping envoie des requêtes ICMP et attend des réponses." },
    { question: "À quoi sert un VLAN ?", options: ["Séparer logiquement des machines sur un switch", "Mesurer une puissance RF", "Convertir Vpp en Veff", "Lisser une trace spectrale"], answer: 0, explanation: "Un VLAN isole un domaine logique de niveau 2." },
    { question: "Pourquoi configure-t-on un trunk ?", options: ["Pour transporter plusieurs VLAN", "Pour alimenter le GBF", "Pour diminuer le bruit thermique", "Pour calculer une DSP"], answer: 0, explanation: "Un trunk transporte plusieurs VLAN grâce au marquage, souvent 802.1Q." },
    { question: "Quelle commande Cisco affiche les VLAN ?", options: ["show vlan brief", "ip a", "iptables -L", "dig vlan"], answer: 0, explanation: "show vlan brief liste les VLAN et les ports access associés." },
    { question: "Que fait dhclient ?", options: ["Demande une configuration IP à un serveur DHCP", "Affiche la FFT", "Mesure un canal TNT", "Bloque un port"], answer: 0, explanation: "dhclient lance une demande DHCP sur l'interface indiquée." },
    { question: "Différence entre NAT et PAT ?", options: ["PAT traduit aussi les ports pour partager une IP", "NAT est toujours sans route", "PAT ne concerne que Wireshark", "Aucune différence"], answer: 0, explanation: "PAT permet à plusieurs hôtes de partager une adresse via les ports." },
    { question: "À quoi sert ip helper-address ?", options: ["Relayer les requêtes DHCP vers un serveur distant", "Changer la résolution RBW", "Afficher les harmoniques", "Mesurer le duty cycle"], answer: 0, explanation: "Sur un routeur/L3, il relaie DHCP entre réseaux/VLAN." },
    { question: "Quelle erreur est probable si Wireshark ne voit aucun paquet ?", options: ["Mauvaise interface de capture", "Mauvais dBµV", "Surmodulation AM", "Filtre RLC parfait"], answer: 0, explanation: "Il faut capturer sur l'interface où passe réellement le trafic." },
    { question: "Dans le TP8, quand la RBW augmente :", options: ["La raie paraît plus large et le bruit peut augmenter", "Le signal disparaît toujours", "La fréquence centrale devient 0", "Le câble devient 50 Ω"], answer: 0, explanation: "Une RBW plus large laisse passer plus de bruit et réduit la finesse." }
  ],

  reportTemplate: [
    { title: "Introduction", text: "Présenter le thème du TP en une ou deux phrases : analyse spectrale, échantillonnage, réception TNT, filtrage ou modulation." },
    { title: "Objectif", text: "Dire ce que la manipulation doit prouver ou mesurer. Exemple : vérifier la présence d'harmoniques, mesurer une DSP, caractériser un filtre." },
    { title: "Matériel utilisé", text: "Lister les appareils : GBF, oscilloscope, analyseur de spectre, mesureur de champ, composants, câbles, logiciel." },
    { title: "Manipulations réalisées", text: "Décrire les étapes dans l'ordre : branchement, réglages, mesures, captures, calculs." },
    { title: "Résultats observés", text: "Donner les valeurs avec unités et captures associées. Ne pas mettre une image sans explication." },
    { title: "Problèmes rencontrés", text: "Noter les erreurs ou difficultés : impédance, RBW, masse, aliasing, canal absent, réglage bobine." },
    { title: "Corrections apportées", text: "Expliquer ce qui a été corrigé : changement de span, lissage, recâblage, recalcul, nouvelle mesure." },
    { title: "Conclusion", text: "Relier les résultats à la théorie en 3 ou 4 phrases. Dire si les mesures sont cohérentes et pourquoi il peut y avoir un écart." }
  ],

  gallery: [
    { title: "TP2 - Capture oscilloscope extraite", tp: "TP2 - Analyse spectrale", src: "assets/images/tp2-capture-1.png", description: "Capture extraite du compte rendu. À utiliser pour revoir la vérification temporelle du signal.", observe: "Amplitude, fréquence, forme du signal et cohérence avec le réglage GBF." },
    { title: "TP2 - Spectre extrait", tp: "TP2 - Analyse spectrale", src: "assets/images/tp2-capture-2.png", description: "Capture extraite du compte rendu d'analyse spectrale.", observe: "Raie principale, marqueur, unité en dBµV ou dBm." },
    { title: "TP3 - Transmission radio", tp: "TP3 - Transmission radio", src: "assets/images/tp3-capture-1.jpg", description: "Capture issue du CR TP3.", observe: "Raie centrale, bruit de fond et stabilité de la mesure." },
    { title: "TP3 - Réglage analyseur", tp: "TP3 - Transmission radio", src: "assets/images/tp3-capture-2.png", description: "Capture issue du CR TP3.", observe: "Span, RBW, échelle verticale, marker." },
    { title: "TP4 - Échantillonnage temporel", tp: "TP4 - Échantillonnage", src: "assets/images/tp4-capture-1.png", description: "Capture extraite du compte rendu d'échantillonnage.", observe: "Signal d'entrée, commande et signal échantillonné." },
    { title: "TP4 - Spectre échantillonné", tp: "TP4 - Échantillonnage", src: "assets/images/tp4-capture-2.png", description: "Capture extraite du compte rendu.", observe: "Copies du spectre espacées de la fréquence d'échantillonnage." },
    { title: "TP6 - Canal TNT", tp: "TP6 - Réception TNT", src: "assets/images/tp6-capture-1.png", description: "Capture extraite du CR TNT.", observe: "Canal large, niveau, lissage et largeur de bande." },
    { title: "TP6 - Mesure TNT", tp: "TP6 - Réception TNT", src: "assets/images/tp6-capture-2.png", description: "Capture extraite du CR TNT.", observe: "Curseur, niveau en dBm et paramètres du mesureur." },
    { title: "TP7 - Montage ou mesure RLC", tp: "TP7 - Filtrage RLC", src: "assets/images/tp7-capture-1.png", description: "Capture extraite du compte rendu de filtrage.", observe: "Valeurs de composants, points de mesure ou signaux Ve/Vs." },
    { title: "TP7 - Mesure complémentaire", tp: "TP7 - Filtrage RLC", src: "assets/images/tp7-capture-2.jpg", description: "Capture extraite du CR TP7.", observe: "Vérifier la conformité des composants et la cohérence des mesures." },
    { title: "TP8 - Analyseur de spectre", tp: "TP8 - Analyseur + modulations", src: "assets/images/tp8-capture-1.png", description: "Capture extraite du TP8.", observe: "RBW, VBW, niveau de référence et marqueur." },
    { title: "TP8 - Modulation", tp: "TP8 - Analyseur + modulations", src: "assets/images/tp8-capture-2.png", description: "Capture extraite du TP8.", observe: "Bandes latérales, niveau et effet de la modulation." },
    { title: "Placeholder schéma analyse spectrale", tp: "TP2 - Analyse spectrale", src: "assets/images/schema-analyse-spectrale.png", description: "Image de remplacement prête à modifier.", observe: "Remplacer par le vrai schéma du montage si nécessaire." },
    { title: "Placeholder échantillonnage", tp: "TP4 - Échantillonnage", src: "assets/images/echantillonnage-schema.png", description: "Schéma générique pour le TP4.", observe: "Voies oscilloscope et fréquence d'échantillonnage." },
    { title: "Placeholder RLC", tp: "TP7 - Filtrage RLC", src: "assets/images/filtrage-rlc.png", description: "Schéma générique du filtre.", observe: "R, L, C, Ve, Vs et masse commune." },
    { title: "Placeholder réseau VLAN", tp: "À compléter réseau", src: "assets/images/schema-vlan.png", description: "Prévu si un TP réseau doit être ajouté ensuite.", observe: "Remplacer par un vrai schéma VLAN." },
    { title: "Placeholder Wireshark", tp: "À compléter réseau", src: "assets/images/wireshark-capture.png", description: "Prévu pour une capture réseau.", observe: "Filtre, protocole et paquets utiles." }
  ],

  examTheoryPool: [
    "Explique la différence entre RBW et VBW.",
    "Pourquoi faut-il vérifier l'impédance 50 Ω / High Z avant une mesure ?",
    "Calcule la valeur efficace d'un sinus de 5 V crête-à-crête.",
    "Pourquoi doubler une tension ajoute environ 6 dB ?",
    "Explique le critère de Nyquist avec fs = 8 kHz.",
    "Définis la DSP et donne sa formule.",
    "À quoi sert le span sur un analyseur de spectre ?",
    "Que représente le facteur de qualité Q d'un filtre RLC ?",
    "Quelle différence entre NAT et PAT ?",
    "Pourquoi configure-t-on un trunk ?",
    "Que vérifie la commande ping ?",
    "Pourquoi utiliser Wireshark pendant un diagnostic réseau ?"
  ]
};
