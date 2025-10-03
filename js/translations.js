const texts = {
	fr: {
		// Navbar
		navAbout: "A Propos",
		navCourses: "Formations",
		navSkills: "Compétences",
		navOffice: "Bureautique",
		navTestimonials: "Témoignages",
		navProjects: "Projets",
		navContact: "Contact",
		navLanguage: "Langue",

		// Hero Section
		heroTitle: "Enseigner, innover, transformer.",
		heroSubtitle:
			"Plongez dans l’univers du numérique : PAO, web, bureautique et IA — les outils d’aujourd’hui pour construire demain.",
		heroButton: "Découvrir",

		// Instructor Profile Section
		instructorTitle: "À propos / Biographie",
		instructorBio:
			"J’enseigne depuis 2009 dans les domaines de la PAO, du développement web et de la bureautique. Passionné par la pédagogie et l’innovation numérique, j’ai élargi mes enseignements à l’intelligence artificielle à partir de 2023, afin de couvrir de nouveaux modules et d’accompagner mes élèves dans l’appropriation de ces nouveaux outils.<br />Ma passion ? Rendre accessibles les technologies, simplifier le complexe et accompagner chaque apprenant dans la montée en compétences.",
		tagWebDev: "Developpement Web",
		tagPAO: "PAO",
		tagOffice: "Bureautique",
		tagAI: "IA",

		// Teaching Philosophy Section
		philosophyTitle:
			"Ma philosophie d’enseignement repose sur trois piliers :",
		philosophyPillar1:
			"L’apprentissage concret — je privilégie les projets, les cas réels, les exercices pratiques.",
		philosophyPillar2:
			"La réflexion critique — je pousse les étudiants à se poser les bonnes questions (impact, usage, pertinence).",
		philosophyPillar3:
			"L’autonomie guidée — je transmets non seulement des outils, mais aussi une méthode pour continuer à apprendre par la suite.",

		// Parallax Section
		parallaxTitle: "Et si on construisait l’avenir, ensemble ?",
		parallaxSubtitle:
			"Au-delà de l’innovation, posons-nous les bonnes questions : quel impact écologique ont les nouvelles technologies, quel est leur véritable intérêt, et comment les mettre au service d’un monde plus juste et responsable ?",

		// Course Offerings Section
		coursesTitle: "Domaines d’enseignement",
		coursePAOTitle: "PAO & Design graphique",
		coursePAODescription:
			"Création de maquettes, mise en page professionnelle Retouche d’images, traitement visuel Équilibre typographique, gestion des gabarits et styles",
		courseWebDevTitle: "Développement web",
		courseWebDevDescription:
			"Frontend : HTML5, CSS3, JavaScript (ES6+), frameworks (React, Vue...) Backend : Node.js, Express, APIs REST / GraphQL Architecture, bases de données (MySQL, PostgreSQL, MongoDB) DevOps light : Docker, CI/CD, déploiement.",
		courseOfficeTitle: "Bureautique avancée",
		courseOfficeDescription:
			"Word : styles, mise en page complexe, publipostage Excel : formules avancées, tableaux croisés, automatisations PowerPoint : présentations professionnelles, masques, transitions",
		courseAITitle: "Intelligence Artificielle & outils associés",
		courseAIDescription:
			"Introduction aux concepts de l’IA (machine learning, modèles de langage) Outils accessibles (ChatGPT, intégrations, automatisations) Cas pratiques appliqués à des problématiques métiers",
		courseButton: "En savoir plus",

		// Tech Showcase Section
		techShowcaseTitle: "Technologies que je connais",

		// Skills Section
		skillsTitle: "Compétences Techniques",
		skillsFrontendTitle: "Frontend",
		skillsFrontendList: [
			"HTML5, CSS3, JavaScript (ES6+)",
			"React, Vue.js, Angular",
			"Tailwind CSS, Bootstrap, Sass",
			"Responsive Design",
		],
		skillsBackendTitle: "Backend",
		skillsBackendList: [
			"Node.js, Express",
			"Python (Django, Flask)",
			"API RESTful & GraphQL",
			"Authentification (JWT, OAuth)",
		],
		skillsDatabasesTitle: "Bases de Données",
		skillsDatabasesList: [
			"MongoDB, Mongoose",
			"PostgreSQL, MySQL",
			"Firebase",
			"Gestion de schémas",
		],
		skillsToolsDevOpsTitle: "Outils & DevOps",
		skillsToolsDevOpsList: [
			"Git, GitHub",
			"Docker, Conteneurisation",
			"Webpack, Babel",
			"CI/CD (GitHub Actions)",
		],

		// Office Skills Section
		officeSkillsTitle: "Compétences en Bureautique",
		officeWordTitle: "Microsoft Word",
		officeWordDescription:
			"Maîtrise de la mise en page, des styles, du publipostage et de la création de documents professionnels complexes.",
		officeExcelTitle: "Microsoft Excel",
		officeExcelDescription:
			"Expertise en formules avancées, tableaux croisés dynamiques, graphiques et analyse de données.",
		officePowerPointTitle: "Microsoft PowerPoint",
		officePowerPointDescription:
			"Création de présentations percutantes, avec animations, transitions et masques de diapositives personnalisés.",

		// Testimonials Section
		testimonialsTitle: "Ce que disent les étudiants",
		testimonial1:
			"\"En tant que boulanger, je ne pensais pas qu’Excel pouvait m’être aussi utile dans mon métier. Grâce à cette formation, j’ai appris à mieux gérer mes stocks de farine, levure et autres ingrédients, à suivre mes ventes au quotidien, et même à calculer mes marges plus facilement. Les tableaux et graphiques me permettent de voir tout de suite ce qui fonctionne ou pas dans ma boulangerie. C’est un vrai gain de temps et d’organisation !\"",
		testimonial1Author: "Xavier Tulipe",
		testimonial1Role: "Boulanger Artisant",
		testimonial2:
			"\"Je suis coiffeur et je n’aurais jamais pensé utiliser Excel dans mon salon. La formation m’a permis d’organiser mon planning de rendez-vous, de suivre les produits que j’utilise le plus et même d’analyser mes chiffres d’affaires par prestation. C’est devenu un outil incontournable pour mieux gérer mon activité.\"",
		testimonial2Author: "Thomas Photo",
		testimonial2Role: "Coiffeurs",
		testimonial3:
			"\"Je suis musicienne et j’ai découvert avec cette formation qu’Excel pouvait m’être utile au quotidien. Je m’en sers pour organiser mes répétitions, suivre mes cachets et prévoir mes dépenses de matériel. Un vrai plus pour mieux structurer ma carrière.\"",
		testimonial3Author: "Agathe Zeblouz",
		testimonial3Role: "Musicienne / Guitariste",
		testimonial4:
			"\"En tant que fleuriste, je voyais Excel comme quelque chose de trop technique pour moi. Finalement, j’ai appris à y gérer mes commandes de fleurs, mes ventes selon les saisons et mes dépenses. C’est simple et ça me fait gagner beaucoup de temps dans la boutique\"",
		testimonial4Author: "Nadine Rose",
		testimonial4Role: "Fleuriste",
		testimonial5:
			"\"Je suis menuisiere et je ne pensais pas qu’Excel pouvait m’aider dans mon atelier. La formation m’a permis de suivre le coût de mes matériaux, de préparer mes devis plus rapidement et de comparer mes projets en cours. Aujourd’hui, c’est un vrai soutien pour mieux gérer mes chantiers.\"",
		testimonial5Author: "Audrey Dubois",
		testimonial5Role: "Menuisiere / Ébéniste",
		testimonial6:
			"\"En tant que couturière, je pensais que le code n’était pas pour moi. Pourtant, j’ai appris à faire un site vitrine en HTML/CSS et à ajouter quelques interactions en JavaScript. Aujourd’hui, je peux montrer mes modèles en ligne et donner une image professionnelle de mon atelier.\"",
		testimonial6Author: "Sylvie Dauphin",
		testimonial6Role: "Couturière",
		testimonial7:
			"\"Je suis mécanicien et je voulais juste comprendre un peu mieux Internet. La formation m’a permis de créer une page claire avec mes services et mes tarifs. Avec JavaScript, j’ai même ajouté un petit formulaire pour les demandes de rendez-vous. Très concret et utile !\"",
		testimonial7Author: "Omar Marzouki",
		testimonial7Role: "Mécanicien",
		testimonial8:
			"\"Je suis développeur web et je me concentrais surtout sur le code. Grâce à la formation Photoshop, j’ai appris à créer mes propres maquettes et à retoucher des visuels pour mes projets. Ça m’apporte plus d’autonomie et je gagne du temps sans dépendre d’un graphiste à chaque étape.\"",
		testimonial8Author: "Allan Turning",
		testimonial8Role: "Web Dev",
		testimonial9:
			"\"Je suis agricultrice depuis de nombreuses années et je pensais que l’intelligence artificielle n’avait rien à voir avec mon métier. Pourtant, la formation m’a montré comment utiliser des outils comme ChatGPT, excel et google agenda pour mieux organiser mes récoltes, préparer mes ventes et même trouver des idées pour développer mon activité. C’est un vrai coup de pouce pour moderniser ma ferme tout en restant fidèle à mes valeurs.\"",
		testimonial9Author: "Alice Kunda",
		testimonial9Role: "Agricultrice",

		// Parallax Quote Section
		parallaxQuote:
			"\"Le code, c'est comme une histoire drôle.<br />S'il faut l'expliquer, c'est qu'il est mauvais.\"",
		parallaxAuthor: "- Katty Penflam",

		// Projects Section
		projectsTitle: "Quelques Projets & Technologies",
		project1Title: "Un jeu de tire à l'arc.",
		project1Description: "Un jeu de tire a l'arc en javascript et threeJS.",
		project1Button: "Tester &rarr;",
		project2Title: "Hommage au Jeu d'arcade : Asteroïdes",
		project2Description: "Développement d'un mini jeu en javascript vanilla.",
		project2Button: "Tester &rarr;",
		project3Title: "Un mini jeu exploitant la loi de newton",
		project3Description:
			"Développement d'un mini jeu en javascript vanilla jouable sur mobile",
		project3Button: "Tester &rarr;",
		project3ButtonCodepen: "sur CodePen &rarr;",
		project4Title: "Un jeu en 3d.",
		project4Description: "Test en javascript et threeJS.",
		project4Button: "Tester &rarr;",

		// Contact Form Section
		contactTitle: "Contactez-moi",
		contactNameLabel: "Nom complet",
		contactEmailLabel: "Email",
		contactSubjectLabel: "Sujet",
		contactMessageLabel: "Votre message",
		contactSendButton: "Envoyer le message",

		// CTA Section
		ctaTitle: "Prêt à Plonger dans le Code ?",
		ctaSubtitle:
			"Découvrez les parcours d'apprentissage et les ressources pour démarrer votre carrière.",
		ctaButton: "En savoir plus",

		// Modal
		modalTitle: "Parcours d'Apprentissage",
		modalSelfTaughtTitle: "Auto-formation",
		modalSelfTaughtDescription:
			"Des plateformes comme FreeCodeCamp, The Odin Project, et Coursera offrent des cursus complets et gratuits pour apprendre à votre rythme.",
		modalBootcampsTitle: "Bootcamps",
		modalBootcampsDescription:
			"Des formations intensives de plusieurs mois pour acquérir rapidement les compétences demandées par le marché. (Ex: Le Wagon, Ironhack).",
		modalFormalEducationTitle: "Formation Initiale",
		modalFormalEducationDescription:
			"Les diplômes en informatique (BTS, DUT, Licence, Master) restent une voie royale pour acquérir des bases solides.",

		// Footer
		footerAbout: "DevWorld",
		footerAboutText:
			"Votre guide dans l'écosystème du développement web moderne. Explorez, apprenez et construisez le futur du web.",
		footerNavTitle: "Navigation",
		footerResourcesTitle: "Ressources",
		footerBlog: "Blog",
		footerNewsletter: "Newsletter",
		footerCommunity: "Communauté",
		footerSocialTitle: "Suivez-nous",
		footerCopyright:
			"&copy; 2024 DevWorld. Créé avec <i class=\"fas fa-heart text-red-500\"></i> et du code.",
	},
	en: {
		// Navbar
		navAbout: "About",
		navCourses: "Courses",
		navSkills: "Skills",
		navOffice: "Office Suite",
		navTestimonials: "Testimonials",
		navProjects: "Projects",
		navContact: "Contact",
		navLanguage: "Language",

		// Hero Section
		heroTitle: "Teach, innovate, transform.",
		heroSubtitle:
			"Dive into the digital universe: DTP, web, office automation, and AI — today's tools to build tomorrow.",
		heroButton: "Discover",

		// Instructor Profile Section
		instructorTitle: "About / Biography",
		instructorBio:
			"I have been teaching since 2009 in the fields of DTP, web development, and office automation. Passionate about pedagogy and digital innovation, I expanded my teaching to include artificial intelligence starting in 2023, to cover new modules and to help my students adopt these new tools.<br />My passion? Making technologies accessible, simplifying the complex, and supporting each learner in their skill development.",
		tagWebDev: "Web Development",
		tagPAO: "DTP",
		tagOffice: "Office Suite",
		tagAI: "AI",

		// Teaching Philosophy Section
		philosophyTitle: "My teaching philosophy is based on three pillars:",
		philosophyPillar1:
			"Concrete learning — I prioritize projects, real cases, and practical exercises.",
		philosophyPillar2:
			"Critical thinking — I encourage students to ask the right questions (impact, use, relevance).",
		philosophyPillar3:
			"Guided autonomy — I not only provide tools but also a method for continuing to learn thereafter.",

		// Parallax Section
		parallaxTitle: "What if we built the future, together?",
		parallaxSubtitle:
			"Beyond innovation, let's ask the right questions: what is the ecological impact of new technologies, what is their real value, and how can we use them to serve a more just and responsible world?",

		// Course Offerings Section
		coursesTitle: "Teaching Areas",
		coursePAOTitle: "DTP & Graphic Design",
		coursePAODescription:
			"Creating mockups, professional layout, image retouching, visual processing, typographic balance, template and style management.",
		courseWebDevTitle: "Web Development",
		courseWebDevDescription:
			"Frontend: HTML5, CSS3, JavaScript (ES6+), frameworks (React, Vue...) Backend: Node.js, Express, REST APIs / GraphQL Architecture, databases (MySQL, PostgreSQL, MongoDB) Light DevOps: Docker, CI/CD, deployment.",
		courseOfficeTitle: "Advanced Office Suite",
		courseOfficeDescription:
			"Word: styles, complex layout, mail merge. Excel: advanced formulas, pivot tables, automations. PowerPoint: professional presentations, slide masters, transitions.",
		courseAITitle: "Artificial Intelligence & Associated Tools",
		courseAIDescription:
			"Introduction to AI concepts (machine learning, language models). Accessible tools (ChatGPT, integrations, automations). Practical case studies applied to business problems.",
		courseButton: "Learn more",

		// Tech Showcase Section
		techShowcaseTitle: "Technologies I know",

		// Skills Section
		skillsTitle: "Technical Skills",
		skillsFrontendTitle: "Frontend",
		skillsFrontendList: [
			"HTML5, CSS3, JavaScript (ES6+)",
			"React, Vue.js, Angular",
			"Tailwind CSS, Bootstrap, Sass",
			"Responsive Design",
		],
		skillsBackendTitle: "Backend",
		skillsBackendList: [
			"Node.js, Express",
			"Python (Django, Flask)",
			"RESTful & GraphQL APIs",
			"Authentication (JWT, OAuth)",
		],
		skillsDatabasesTitle: "Databases",
		skillsDatabasesList: [
			"MongoDB, Mongoose",
			"PostgreSQL, MySQL",
			"Firebase",
			"Schema Management",
		],
		skillsToolsDevOpsTitle: "Tools & DevOps",
		skillsToolsDevOpsList: [
			"Git, GitHub",
			"Docker, Containerization",
			"Webpack, Babel",
			"CI/CD (GitHub Actions)",
		],

		// Office Skills Section
		officeSkillsTitle: "Office Suite Skills",
		officeWordTitle: "Microsoft Word",
		officeWordDescription:
			"Mastery of layout, styles, mail merge, and creating complex professional documents.",
		officeExcelTitle: "Microsoft Excel",
		officeExcelDescription:
			"Expertise in advanced formulas, pivot tables, charts, and data analysis.",
		officePowerPointTitle: "Microsoft PowerPoint",
		officePowerPointDescription:
			"Creating impactful presentations with custom animations, transitions, and slide masters.",

		// Testimonials Section
		testimonialsTitle: "What students are saying",
		testimonial1:
			"\"As a baker, I never thought Excel could be so useful in my job. Thanks to this training, I learned to better manage my stocks of flour, yeast, and other ingredients, track my daily sales, and even calculate my margins more easily. The charts and graphs allow me to see right away what works and what doesn't in my bakery. It's a real time-saver and organizational tool!\"",
		testimonial1Author: "Xavier Tulipe",
		testimonial1Role: "Artisan Baker",
		testimonial2:
			"\"I'm a hairdresser and I never thought I'd use Excel in my salon. The training allowed me to organize my appointment schedule, track the products I use most, and even analyze my revenue by service. It has become an essential tool for better managing my business.\"",
		testimonial2Author: "Thomas Photo",
		testimonial2Role: "Hairdresser",
		testimonial3:
			"\"I'm a musician and I discovered with this training that Excel could be useful in my daily life. I use it to organize my rehearsals, track my fees, and plan my equipment expenses. A real plus for structuring my career better.\"",
		testimonial3Author: "Agathe Zeblouz",
		testimonial3Role: "Musician / Guitarist",
		testimonial4:
			"\"As a florist, I saw Excel as something too technical for me. In the end, I learned to manage my flower orders, my sales by season, and my expenses. It's simple and saves me a lot of time in the shop.\"",
		testimonial4Author: "Nadine Rose",
		testimonial4Role: "Florist",
		testimonial5:
			"\"I'm a carpenter and I didn't think Excel could help me in my workshop. The training allowed me to track the cost of my materials, prepare my quotes more quickly, and compare my ongoing projects. Today, it's a real support for better managing my work sites.\"",
		testimonial5Author: "Audrey Dubois",
		testimonial5Role: "Carpenter / Cabinetmaker",
		testimonial6:
			"\"As a seamstress, I thought coding wasn't for me. However, I learned to create a showcase site with HTML/CSS and add some interactions with JavaScript. Today, I can show my designs online and give a professional image of my workshop.\"",
		testimonial6Author: "Sylvie Dauphin",
		testimonial6Role: "Seamstress",
		testimonial7:
			"\"I'm a mechanic and I just wanted to understand the internet a little better. The training allowed me to create a clear page with my services and prices. With JavaScript, I even added a small form for appointment requests. Very concrete and useful!\"",
		testimonial7Author: "Omar Marzouki",
		testimonial7Role: "Mechanic",
		testimonial8:
			"\"I'm a web developer and I was mainly focused on code. Thanks to the Photoshop training, I learned to create my own mockups and retouch visuals for my projects. It gives me more autonomy and saves me time without depending on a graphic designer at every step.\"",
		testimonial8Author: "Allan Turning",
		testimonial8Role: "Web Dev",
		testimonial9:
			"\"I have been a farmer for many years and I thought that artificial intelligence had nothing to do with my profession. However, the training showed me how to use tools like ChatGPT, Excel, and Google Calendar to better organize my harvests, prepare my sales, and even find ideas to develop my business. It's a real boost to modernize my farm while staying true to my values.\"",
		testimonial9Author: "Alice Kunda",
		testimonial9Role: "Farmer",

		// Parallax Quote Section
		parallaxQuote:
			"\"Code is like a good joke.<br />If you have to explain it, it’s bad.\"",
		parallaxAuthor: "- Katty Penflam",

		// Projects Section
		projectsTitle: "Some Projects & Technologies",
		project1Title: "An archery game.",
		project1Description: "An archery game in JavaScript and Three.js.",
		project1Button: "Test it &rarr;",
		project2Title: "Tribute to the arcade game: Asteroids",
		project2Description: "Development of a mini-game in vanilla JavaScript.",
		project2Button: "Test it &rarr;",
		project3Title: "A mini-game using Newton's law",
		project3Description:
			"Development of a mini-game in vanilla JavaScript playable on mobile.",
		project3Button: "Test it &rarr;",
		project3ButtonCodepen: "on CodePen &rarr;",
		project4Title: "A 3D game.",
		project4Description: "A test with JavaScript and Three.js.",
		project4Button: "Test it &rarr;",

		// Contact Form Section
		contactTitle: "Contact me",
		contactNameLabel: "Full name",
		contactEmailLabel: "Email",
		contactSubjectLabel: "Subject",
		contactMessageLabel: "Your message",
		contactSendButton: "Send message",

		// CTA Section
		ctaTitle: "Ready to Dive into Code?",
		ctaSubtitle:
			"Discover learning paths and resources to start your career.",
		ctaButton: "Learn more",

		// Modal
		modalTitle: "Learning Paths",
		modalSelfTaughtTitle: "Self-Taught",
		modalSelfTaughtDescription:
			"Platforms like FreeCodeCamp, The Odin Project, and Coursera offer complete and free courses to learn at your own pace.",
		modalBootcampsTitle: "Bootcamps",
		modalBootcampsDescription:
			"Intensive multi-month training to quickly acquire the skills demanded by the market (e.g., Le Wagon, Ironhack).",
		modalFormalEducationTitle: "Formal Education",
		modalFormalEducationDescription:
			"Diplomas in computer science (BTS, DUT, Bachelor's, Master's) remain a prime path to acquire solid foundations.",

		// Footer
		footerAbout: "DevWorld",
		footerAboutText:
			"Your guide in the modern web development ecosystem. Explore, learn, and build the future of the web.",
		footerNavTitle: "Navigation",
		footerResourcesTitle: "Resources",
		footerBlog: "Blog",
		footerNewsletter: "Newsletter",
		footerCommunity: "Community",
		footerSocialTitle: "Follow us",
		footerCopyright:
			"&copy; 2024 DevWorld. Created with <i class=\"fas fa-heart text-red-500\"></i> and code.",
	},
	es: {
		// Navbar
		navAbout: "Acerca de",
		navCourses: "Cursos",
		navSkills: "Habilidades",
		navOffice: "Ofimática",
		navTestimonials: "Testimonios",
		navProjects: "Proyectos",
		navContact: "Contacto",
		navLanguage: "Idioma",

		// Hero Section
		heroTitle: "Enseñar, innovar, transformar.",
		heroSubtitle:
			"Sumérgete en el universo digital: autoedición, web, ofimática e IA: las herramientas de hoy para construir el mañana.",
		heroButton: "Descubrir",

		// Instructor Profile Section
		instructorTitle: "Acerca de / Biografía",
		instructorBio:
			"Enseño desde 2009 en los campos de la autoedición, el desarrollo web y la ofimática. Apasionado por la pedagogía y la innovación digital, amplié mi enseñanza para incluir la inteligencia artificial a partir de 2023, para cubrir nuevos módulos y ayudar a mis alumnos a adoptar estas nuevas herramientas.<br />¿Mi pasión? Hacer que las tecnologías sean accesibles, simplificar lo complejo y apoyar a cada alumno en su desarrollo de habilidades.",
		tagWebDev: "Desarrollo Web",
		tagPAO: "Autoedición",
		tagOffice: "Ofimática",
		tagAI: "IA",

		// Teaching Philosophy Section
		philosophyTitle:
			"Mi filosofía de enseñanza se basa en tres pilares:",
		philosophyPillar1:
			"Aprendizaje concreto: priorizo proyectos, casos reales y ejercicios prácticos.",
		philosophyPillar2:
			"Pensamiento crítico: animo a los estudiantes a hacer las preguntas correctas (impacto, uso, relevancia).",
		philosophyPillar3:
			"Autonomía guiada: no solo proporciono herramientas, sino también un método para seguir aprendiendo después.",

		// Parallax Section
		parallaxTitle: "¿Y si construimos el futuro, juntos?",
		parallaxSubtitle:
			"Más allá de la innovación, hagamos las preguntas correctas: ¿cuál es el impacto ecológico de las nuevas tecnologías, cuál es su valor real y cómo podemos usarlas para servir a un mundo más justo y responsable?",

		// Course Offerings Section
		coursesTitle: "Áreas de Enseñanza",
		coursePAOTitle: "Autoedición y Diseño Gráfico",
		coursePAODescription:
			"Creación de maquetas, maquetación profesional, retoque de imágenes, procesamiento visual, equilibrio tipográfico, gestión de plantillas y estilos.",
		courseWebDevTitle: "Desarrollo Web",
		courseWebDevDescription:
			"Frontend: HTML5, CSS3, JavaScript (ES6+), frameworks (React, Vue...) Backend: Node.js, Express, APIs REST / GraphQL Arquitectura, bases de datos (MySQL, PostgreSQL, MongoDB) DevOps ligero: Docker, CI/CD, despliegue.",
		courseOfficeTitle: "Ofimática Avanzada",
		courseOfficeDescription:
			"Word: estilos, maquetación compleja, combinación de correspondencia. Excel: fórmulas avanzadas, tablas dinámicas, automatizaciones. PowerPoint: presentaciones profesionales, patrones de diapositivas, transiciones.",
		courseAITitle: "Inteligencia Artificial y Herramientas Asociadas",
		courseAIDescription:
			"Introducción a los conceptos de IA (aprendizaje automático, modelos de lenguaje). Herramientas accesibles (ChatGPT, integraciones, automatizaciones). Casos prácticos aplicados a problemas empresariales.",
		courseButton: "Saber más",

		// Tech Showcase Section
		techShowcaseTitle: "Tecnologías que conozco",

		// Skills Section
		skillsTitle: "Habilidades Técnicas",
		skillsFrontendTitle: "Frontend",
		skillsFrontendList: [
			"HTML5, CSS3, JavaScript (ES6+)",
			"React, Vue.js, Angular",
			"Tailwind CSS, Bootstrap, Sass",
			"Diseño Responsivo",
		],
		skillsBackendTitle: "Backend",
		skillsBackendList: [
			"Node.js, Express",
			"Python (Django, Flask)",
			"APIs RESTful y GraphQL",
			"Autenticación (JWT, OAuth)",
		],
		skillsDatabasesTitle: "Bases de Datos",
		skillsDatabasesList: [
			"MongoDB, Mongoose",
			"PostgreSQL, MySQL",
			"Firebase",
			"Gestión de Esquemas",
		],
		skillsToolsDevOpsTitle: "Herramientas y DevOps",
		skillsToolsDevOpsList: [
			"Git, GitHub",
			"Docker, Contenerización",
			"Webpack, Babel",
			"CI/CD (GitHub Actions)",
		],

		// Office Skills Section
		officeSkillsTitle: "Habilidades en Ofimática",
		officeWordTitle: "Microsoft Word",
		officeWordDescription:
			"Dominio de la maquetación, estilos, combinación de correspondencia y creación de documentos profesionales complejos.",
		officeExcelTitle: "Microsoft Excel",
		officeExcelDescription:
			"Experiencia en fórmulas avanzadas, tablas dinámicas, gráficos y análisis de datos.",
		officePowerPointTitle: "Microsoft PowerPoint",
		officePowerPointDescription:
			"Creación de presentaciones impactantes con animaciones, transiciones y patrones de diapositivas personalizados.",

		// Testimonials Section
		testimonialsTitle: "Lo que dicen los estudiantes",
		testimonial1:
			"\"Como panadero, nunca pensé que Excel pudiera ser tan útil en mi trabajo. Gracias a esta formación, aprendí a gestionar mejor mis existencias de harina, levadura y otros ingredientes, a seguir mis ventas diarias e incluso a calcular mis márgenes más fácilmente. Los gráficos y tablas me permiten ver de inmediato qué funciona y qué no en mi panadería. ¡Es un verdadero ahorro de tiempo y una herramienta de organización!\"",
		testimonial1Author: "Xavier Tulipe",
		testimonial1Role: "Panadero Artesano",
		testimonial2:
			"\"Soy peluquero y nunca pensé que usaría Excel en mi salón. La formación me permitió organizar mi agenda de citas, seguir los productos que más uso e incluso analizar mis ingresos por servicio. Se ha convertido en una herramienta esencial para gestionar mejor mi negocio.\"",
		testimonial2Author: "Thomas Photo",
		testimonial2Role: "Peluquero",
		testimonial3:
			"\"Soy músico y descubrí con esta formación que Excel podría ser útil en mi vida diaria. Lo uso para organizar mis ensayos, seguir mis honorarios y planificar mis gastos de equipo. Un verdadero plus para estructurar mejor mi carrera.\"",
		testimonial3Author: "Agathe Zeblouz",
		testimonial3Role: "Músico / Guitarrista",
		testimonial4:
			"\"Como florista, veía Excel como algo demasiado técnico para mí. Al final, aprendí a gestionar mis pedidos de flores, mis ventas por temporada y mis gastos. Es simple y me ahorra mucho tiempo en la tienda.\"",
		testimonial4Author: "Nadine Rose",
		testimonial4Role: "Florista",
		testimonial5:
			"\"Soy carpintera y no pensé que Excel pudiera ayudarme en mi taller. La formación me permitió seguir el costo de mis materiales, preparar mis presupuestos más rápidamente y comparar mis proyectos en curso. Hoy, es un verdadero apoyo para gestionar mejor mis obras.\"",
		testimonial5Author: "Audrey Dubois",
		testimonial5Role: "Carpintera / Ebanista",
		testimonial6:
			"\"Como costurera, pensé que la codificación no era para mí. Sin embargo, aprendí a crear un sitio de escaparate con HTML/CSS y a agregar algunas interacciones con JavaScript. Hoy, puedo mostrar mis diseños en línea y dar una imagen profesional de mi taller.\"",
		testimonial6Author: "Sylvie Dauphin",
		testimonial6Role: "Costurera",
		testimonial7:
			"\"Soy mecánico y solo quería entender un poco mejor Internet. La formación me permitió crear una página clara con mis servicios y precios. Con JavaScript, incluso agregué un pequeño formulario para solicitudes de citas. ¡Muy concreto y útil!\"",
		testimonial7Author: "Omar Marzouki",
		testimonial7Role: "Mecánico",
		testimonial8:
			"\"Soy desarrollador web y me centraba principalmente en el código. Gracias a la formación de Photoshop, aprendí a crear mis propias maquetas y a retocar visuales para mis proyectos. Me da más autonomía y me ahorra tiempo sin depender de un diseñador gráfico en cada paso.\"",
		testimonial8Author: "Allan Turning",
		testimonial8Role: "Desarrollador Web",
		testimonial9:
			"\"He sido agricultora durante muchos años y pensé que la inteligencia artificial no tenía nada que ver con mi profesión. Sin embargo, la formación me mostró cómo usar herramientas como ChatGPT, Excel y Google Calendar para organizar mejor mis cosechas, preparar mis ventas e incluso encontrar ideas para desarrollar mi negocio. Es un verdadero impulso para modernizar mi granja sin dejar de ser fiel a mis valores.\"",
		testimonial9Author: "Alice Kunda",
		testimonial9Role: "Agricultora",

		// Parallax Quote Section
		parallaxQuote:
			"\"El código es como un buen chiste.<br />Si tienes que explicarlo, es malo.\"",
		parallaxAuthor: "- Katty Penflam",

		// Projects Section
		projectsTitle: "Algunos Proyectos y Tecnologías",
		project1Title: "Un juego de tiro con arco.",
		project1Description:
			"Un juego de tiro con arco en JavaScript y Three.js.",
		project1Button: "Probar &rarr;",
		project2Title: "Homenaje al juego de arcade: Asteroids",
		project2Description:
			"Desarrollo de un minijuego en JavaScript vanilla.",
		project2Button: "Probar &rarr;",
		project3Title: "Un minijuego que utiliza la ley de Newton",
		project3Description:
			"Desarrollo de un minijuego en JavaScript vanilla jugable en móvil.",
		project3Button: "Probar &rarr;",
		project3ButtonCodepen: "en CodePen &rarr;",
		project4Title: "Un juego en 3D.",
		project4Description: "Una prueba con JavaScript y Three.js.",
		project4Button: "Probar &rarr;",

		// Contact Form Section
		contactTitle: "Contáctame",
		contactNameLabel: "Nombre completo",
		contactEmailLabel: "Correo electrónico",
		contactSubjectLabel: "Asunto",
		contactMessageLabel: "Tu mensaje",
		contactSendButton: "Enviar mensaje",

		// CTA Section
		ctaTitle: "¿Listo para Sumérgerte en el Código?",
		ctaSubtitle:
			"Descubre rutas de aprendizaje y recursos para comenzar tu carrera.",
		ctaButton: "Saber más",

		// Modal
		modalTitle: "Rutas de Aprendizaje",
		modalSelfTaughtTitle: "Autodidacta",
		modalSelfTaughtDescription:
			"Plataformas como FreeCodeCamp, The Odin Project y Coursera ofrecen cursos completos y gratuitos para aprender a tu propio ritmo.",
		modalBootcampsTitle: "Bootcamps",
		modalBootcampsDescription:
			"Formación intensiva de varios meses para adquirir rápidamente las habilidades demandadas por el mercado (por ejemplo, Le Wagon, Ironhack).",
		modalFormalEducationTitle: "Educación Formal",
		modalFormalEducationDescription:
			"Los diplomas en informática (BTS, DUT, Licenciatura, Máster) siguen siendo un camino principal para adquirir bases sólidas.",

		// Footer
		footerAbout: "DevWorld",
		footerAboutText:
			"Tu guía en el ecosistema de desarrollo web moderno. Explora, aprende y construye el futuro de la web.",
		footerNavTitle: "Navegación",
		footerResourcesTitle: "Recursos",
		footerBlog: "Blog",
		footerNewsletter: "Boletín",
		footerCommunity: "Comunidad",
		footerSocialTitle: "Síguenos",
		footerCopyright:
			"&copy; 2024 DevWorld. Creado con <i class=\"fas fa-heart text-red-500\"></i> y código.",
	},
};