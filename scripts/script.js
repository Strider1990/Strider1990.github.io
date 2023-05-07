var dictionary = {
    "en": {
        "language": "EN",
        "introduction_title": "Full Stack and Data Engineer.",
        "project_mimosa_title": "Mimosa",
    },
    "zh": {
        "language": "中文（简体）",
        "introduction_title": "全栈和数据工程师。",
        "project_mimosa_title": "Mimosa",
    }
}

class HTMLLocalizer {
    constructor() {
        customElements.define(LocalizedTextElement.defaultTag, LocalizedTextElement);
    }
}

class LocalizedTextElement extends HTMLElement {
    constructor() {
        super();
        this.storageKey = "preferred-locale";
        this.dataAttribute = "data-lang";
        this.key = "key";
    }

    connectedCallback() {
        var key = this.hasAttribute(this.key) ? this.getAttribute(this.key) : ""; 
        var lang = this.hasAttribute(this.dataAttribute) ? this.getAttribute(this.dataAttribute) : this.getLang();
        this.innerHTML = this.translate(key, lang);
    }

    getLang() {
        let lang = (navigator.languages != undefined) ? navigator.languages[0] : navigator.language;
        lang = localStorage.getItem(this.storageKey) || lang;
        // Ignore country code (example: en-US -> en)
        return lang.split("-")[0];
    }
    
    translate(key, lang) {
        return (lang in dictionary) ? dictionary[lang][key] : dictionary[this.defaultLang][key];
    }

    updateLang() {
        var key = this.hasAttribute(this.key) ? this.getAttribute(this.key) : ""; 
        var lang = this.hasAttribute(this.dataAttribute) ? this.getAttribute(this.dataAttribute) : this.getLang();
        this.innerHTML = this.translate(key, lang);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateLang(newValue)
    }

    static get observedAttributes() {
        return [this.dataAttribute]
    }

    static set preferredLang(value) {
        localStorage.setItem(this.storageKey, value);
        for (const element of document.getElementsByTagName(this.defaultTag)) {
            element.setAttribute(this.dataAttribute, value);
        }
    }

    static get defaultLang() {
        return "en";
    }

    static get defaultTag() {
        return "localized-text";
    }

    static get storageKey() {
        return "preferred-locale";
    }

    static get dataAttribute() {
        return "data-lang";
    }

    static get key() {
        return "key";
    }
}

function addClassIfNeeded(classList, value) {
    if (!classList.contains(value)) {
        classList.add(value);
    }
}

function removeClassIfNeeded(classList, value) {
    if (classList.contains(value)) {
        classList.remove(value);
    }
}

function toggleClass(classList, value) {
    if (classList.contains(value)) {
        classList.remove(value);
    } else {
        classList.add(value);
    }
}

function changeClassValues(key, oldValue, newValue) {
    const menuClassList = document.getElementById(key).classList;
    removeClassIfNeeded(menuClassList, oldValue);
    addClassIfNeeded(menuClassList, newValue);
}

function getOrCreatePreference(storageKey, defaultVal) {
    const val = localStorage.getItem(storageKey);
    if (!val) {
        localStorage.setItem(storageKey, defaultVal);
    }
    return val || defaultVal;
}

function updatePreference(storageKey, value) {
    localStorage.setItem(storageKey, value);
    return value;
}