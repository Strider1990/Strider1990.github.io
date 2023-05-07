tailwind.config = {
    darkMode: 'class',
}

/**
 * User Preferences
 */

function getDefaultSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
}

function init() {
    const theme = getOrCreatePreference('theme', getDefaultSystemTheme());
    setTheme(theme);
}

function toggleDark() {
    const rootClassList = document.documentElement.classList;
	if (rootClassList.contains('dark')) {
		updatePreference('theme', 'light');
	} else {
		updatePreference('theme', 'dark');
	}
    toggleClass(rootClassList, 'dark');
}

function setTheme(value) {
    const rootClassList = document.documentElement.classList;
    addClassIfNeeded(rootClassList, value)
}

function setLocaleLanguage(value, tag="localized-text", key="data-lang") {
    LocalizedTextElement.preferredLang = value;
    hideMenu("language-menu")
}

function showMenu(key) {
    changeClassValues(key, "invisible", "visible");
}

function hideMenu(key) {
    changeClassValues(key, "visible", "invisible");
}

new HTMLLocalizer();
init();