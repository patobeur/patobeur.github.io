document.documentElement.classList.add("js");

const translations = {
	fr: {
		skip: "Aller au contenu", openMenu: "Ouvrir le menu", navProjects: "Projets", navExpertise: "Expertise", navAbout: "À propos", navContact: "Contact",
		availability: "Disponible pour rejoindre un studio", heroEyebrow: "GAMEPLAY · 3D · WEBGL", heroTitle: "Je construis des jeux qui transforment une idée en expérience jouable.",
		heroLead: "Créateur de jeux web et développeur de systèmes de gameplay, je conçois des mondes procéduraux, des interactions 3D et des simulations directement dans le navigateur.",
		seeProjects: "Voir mes projets", githubProfile: "Profil GitHub", playNow: "Jouer maintenant ↗", selectedWork: "SELECTED WORK · 2026",
		projectsTitle: "Des prototypes complets, pas seulement des concepts.", projectsIntro: "Chaque projet explore un problème différent : génération procédurale, simulation, navigation 3D, agents autonomes ou économie de jeu.",
		backroomsType: "EXPLORATION HORRIFIQUE · JEU 3D", backroomsSummary: "Un labyrinthe infini en vue subjective, construit autour d’une génération continue, d’une ambiance sonore synthétisée et d’interactions contextuelles.",
		backroomsFeature1: "Labyrinthes procéduraux et chargement dynamique", backroomsFeature2: "Inventaire 3D, survie et objets combinables", backroomsFeature3: "Web Audio génératif et suite de tests automatisés",
		driverType: "CONDUITE ARCADE · SIMULATION 3D", driverSummary: "Une expérience de conduite avec routes continues, trafic autonome, véhicules configurables et vingt environnements progressifs.",
		labycubeType: "PUZZLE · NAVIGATION 3D", labycubeSummary: "Un jeu de réflexion sur les six faces d’un cube : labyrinthes procéduraux, transitions de caméra, ennemis et boss articulé.",
		beestoryType: "GESTION · SIMULATION ISOMÉTRIQUE", beestorySummary: "Un jeu de gestion apicole avec abeilles autonomes, météo, saisons, artisanat, économie et progression du rucher.",
		playProject: "Jouer au projet", viewCode: "Voir le code", expertiseEyebrow: "CE QUE J’APPORTE", expertiseTitle: "Du prototype à un système jouable et maintenable.",
		expertiseIntro: "Je travaille à l’intersection du code, du game design et de l’expérience utilisateur. Mon objectif : produire vite, observer le jeu, puis consolider ce qui fonctionne.",
		expertise1Title: "Systèmes de gameplay", expertise1Text: "Interactions, inventaires, progression, économie, contrôles clavier et tactiles.",
		expertise2Title: "Génération procédurale", expertise2Text: "Labyrinthes, routes, environnements et contenus renouvelés à chaque session.",
		expertise3Title: "3D temps réel", expertise3Text: "Three.js, WebGL, caméras, éclairage, culling et optimisation navigateur.",
		expertise4Title: "Architecture & qualité", expertise4Text: "Modules ES, données configurables, persistance locale et tests des parcours critiques.",
		aboutEyebrow: "À PROPOS", aboutTitle: "Créer, expliquer, recommencer.", aboutLead: "Développeur web et formateur depuis 2009, j’ai construit une pratique fondée sur l’expérimentation, la transmission et la réalisation de projets concrets.",
		aboutText: "Aujourd’hui, je souhaite mettre cette expérience au service d’un studio de jeux vidéo. J’aime transformer des mécaniques en systèmes lisibles, prototyper sans lourdeur et faire évoluer un projet à partir des retours de jeu.",
		focusLabel: "FOCUS", focusValue: "Gameplay · outils · jeux web", locationLabel: "LOCALISATION", locationValue: "France · Ouvert au télétravail", allRepos: "Explorer tous mes dépôts",
		contactEyebrow: "PARLONS DU PROCHAIN PROJET", contactTitle: "Vous cherchez quelqu’un qui aime autant construire que comprendre ?", contactIntro: "Je suis disponible pour échanger avec des studios, équipes créatives et développeurs autour d’un poste ou d’une collaboration.",
		nameLabel: "Nom", emailLabel: "E-mail", subjectLabel: "Sujet", messageLabel: "Message", sendMessage: "Envoyer le message", formNote: "Les champs sont nécessaires pour pouvoir vous répondre.",
		footerText: "Game & Creative Developer · JavaScript / Three.js / WebGL", backTop: "Retour en haut"
	},
	en: {
		skip: "Skip to content", openMenu: "Open menu", navProjects: "Projects", navExpertise: "Expertise", navAbout: "About", navContact: "Contact",
		availability: "Available to join a game studio", heroEyebrow: "GAMEPLAY · 3D · WEBGL", heroTitle: "I build games that turn an idea into a playable experience.",
		heroLead: "Game creator and gameplay systems developer, I design procedural worlds, 3D interactions and simulations that run directly in the browser.",
		seeProjects: "View my projects", githubProfile: "GitHub profile", playNow: "Play now ↗", selectedWork: "SELECTED WORK · 2026",
		projectsTitle: "Complete prototypes, not just concepts.", projectsIntro: "Each project tackles a different challenge: procedural generation, simulation, 3D navigation, autonomous agents or game economy.",
		backroomsType: "HORROR EXPLORATION · 3D GAME", backroomsSummary: "An infinite first-person maze built around continuous generation, synthesized sound design and contextual interactions.",
		backroomsFeature1: "Procedural mazes and dynamic world loading", backroomsFeature2: "3D inventory, survival and combinable items", backroomsFeature3: "Generative Web Audio and automated test suite",
		driverType: "ARCADE DRIVING · 3D SIMULATION", driverSummary: "A driving experience featuring continuous roads, autonomous traffic, configurable vehicles and twenty progressive environments.",
		labycubeType: "PUZZLE · 3D NAVIGATION", labycubeSummary: "A puzzle game across all six faces of a cube, with procedural mazes, camera transitions, enemies and an articulated boss.",
		beestoryType: "MANAGEMENT · ISOMETRIC SIMULATION", beestorySummary: "A beekeeping management game featuring autonomous bees, weather, seasons, crafting, economy and apiary progression.",
		playProject: "Play project", viewCode: "View code", expertiseEyebrow: "WHAT I BRING", expertiseTitle: "From prototype to a playable, maintainable system.",
		expertiseIntro: "I work where code, game design and user experience meet. My approach is to build quickly, observe the game, then strengthen what works.",
		expertise1Title: "Gameplay systems", expertise1Text: "Interactions, inventories, progression, economy, keyboard and touch controls.",
		expertise2Title: "Procedural generation", expertise2Text: "Mazes, roads, environments and content renewed for every session.",
		expertise3Title: "Real-time 3D", expertise3Text: "Three.js, WebGL, cameras, lighting, culling and browser optimization.",
		expertise4Title: "Architecture & quality", expertise4Text: "ES modules, data-driven configuration, local persistence and critical-path testing.",
		aboutEyebrow: "ABOUT", aboutTitle: "Create, explain, iterate.", aboutLead: "A web developer and educator since 2009, I have built a practice rooted in experimentation, knowledge sharing and concrete projects.",
		aboutText: "I now want to bring this experience to a game studio. I enjoy turning mechanics into readable systems, prototyping without unnecessary weight and evolving a project through playtesting feedback.",
		focusLabel: "FOCUS", focusValue: "Gameplay · tools · web games", locationLabel: "LOCATION", locationValue: "France · Open to remote work", allRepos: "Explore all repositories",
		contactEyebrow: "LET’S TALK ABOUT THE NEXT PROJECT", contactTitle: "Looking for someone who enjoys building as much as understanding?", contactIntro: "I am available to talk with game studios, creative teams and developers about a role or collaboration.",
		nameLabel: "Name", emailLabel: "Email", subjectLabel: "Subject", messageLabel: "Message", sendMessage: "Send message", formNote: "These fields are required so I can get back to you.",
		footerText: "Game & Creative Developer · JavaScript / Three.js / WebGL", backTop: "Back to top"
	}
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const languageButton = document.querySelector("[data-language]");

function closeMenu() {
	menuButton?.setAttribute("aria-expanded", "false");
	navigation?.classList.remove("open");
}

menuButton?.addEventListener("click", () => {
	const open = menuButton.getAttribute("aria-expanded") === "true";
	menuButton.setAttribute("aria-expanded", String(!open));
	navigation?.classList.toggle("open", !open);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });

window.addEventListener("scroll", () => header?.classList.toggle("scrolled", window.scrollY > 18), { passive: true });

function setLanguage(language) {
	const lang = translations[language] ? language : "fr";
	document.documentElement.lang = lang;
	document.querySelectorAll("[data-i18n]").forEach((element) => {
		const key = element.dataset.i18n;
		if (translations[lang][key]) element.textContent = translations[lang][key];
	});

	if (languageButton) {
		languageButton.textContent = lang === "fr" ? "EN" : "FR";
		languageButton.setAttribute("aria-label", lang === "fr" ? "Afficher le site en anglais" : "Afficher le site en français");
	}

	document.title = lang === "fr" ? "Patobeur — Game & Creative Developer" : "Patobeur — Game & Creative Developer Portfolio";
	const description = document.querySelector('meta[name="description"]');
	if (description) description.content = lang === "fr"
		? "Portfolio de Patobeur, créateur de jeux web et développeur de systèmes de gameplay en JavaScript, Three.js et WebGL."
		: "Patobeur's portfolio: web game creator and gameplay systems developer working with JavaScript, Three.js and WebGL.";

	try { localStorage.setItem("portfolio-language", lang); } catch (_) { /* Storage may be unavailable. */ }
}

let initialLanguage = "fr";
try { initialLanguage = localStorage.getItem("portfolio-language") || "fr"; } catch (_) { /* Keep French. */ }
setLanguage(initialLanguage);
languageButton?.addEventListener("click", () => setLanguage(document.documentElement.lang === "fr" ? "en" : "fr"));

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");
if (reducedMotion || !("IntersectionObserver" in window)) {
	revealElements.forEach((element) => element.classList.add("visible"));
} else {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add("visible");
			observer.unobserve(entry.target);
		});
	}, { threshold: 0.12 });
	revealElements.forEach((element) => observer.observe(element));
}

document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = String(new Date().getFullYear()); });
