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
        // Store the selected language
		localStorage.setItem('language', lang);
	};

    // Language switcher logic
    const languageSwitcherButton = document.getElementById("language-switcher-button");
    const languageDropdown = document.getElementById("language-dropdown");
    const languageOptions = document.querySelectorAll("#language-switcher [data-lang]");
    const mobileLanguageOptions = document.querySelectorAll("#mobile-menu [data-lang]");

    if (languageSwitcherButton && languageDropdown) {
        languageSwitcherButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent the document click listener from firing immediately
            languageDropdown.classList.toggle("hidden");
        });
    }

    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (languageDropdown && !languageDropdown.classList.contains('hidden') && !languageSwitcherButton.contains(e.target)) {
            languageDropdown.classList.add("hidden");
        }
    });

    const handleLanguageSelection = (e) => {
        e.preventDefault();
        const lang = e.target.getAttribute("data-lang");
        setLanguage(lang);
        if (languageDropdown) {
            languageDropdown.classList.add("hidden");
        }
    };

    languageOptions.forEach(option => {
        option.addEventListener("click", handleLanguageSelection);
    });

    mobileLanguageOptions.forEach(option => {
        option.addEventListener("click", handleLanguageSelection);
    });

	// Determine initial language
    const savedLang = localStorage.getItem('language');
	const userLang = navigator.language.split("-")[0] || "fr";
	const supportedLangs = ["fr", "en", "es"];

    let initialLang = "fr";
    if (savedLang && supportedLangs.includes(savedLang)) {
        initialLang = savedLang;
    } else if (supportedLangs.includes(userLang)) {
        initialLang = userLang;
    }

	setLanguage(initialLang);
});