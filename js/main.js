document.addEventListener("DOMContentLoaded", () => {
	const setLanguage = (lang) => {
		const elements = document.querySelectorAll("[data-translate]");
		elements.forEach((el) => {
			const key = el.getAttribute("data-translate");
			if (texts[lang] && texts[lang][key]) {
				if (key.includes("List")) {
					const listItems = texts[lang][key]
						.map(
							(item) =>
								`<li><i class="fas fa-check-circle text-green-500 mr-2"></i>${item}</li>`
						)
						.join("");
					el.innerHTML = listItems;
				} else {
					el.innerHTML = texts[lang][key];
				}
			}
		});

		// Handle special cases like title and meta tags if needed
		if (texts[lang] && texts[lang].pageTitle) {
			document.title = texts[lang].pageTitle;
		}
	};

	// Determine language - simple example, defaults to 'fr'
	const userLang = navigator.language.split("-")[0] || "fr";
	const supportedLangs = ["fr", "en", "es"];
	const lang = supportedLangs.includes(userLang) ? userLang : "fr";

	setLanguage(lang);
});