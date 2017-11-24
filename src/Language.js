class Language {

    constructor(language) {
        // Create empty object of phrases
        let phrases = {}
        // If English is chosen when Language object is created then populate with English
        if (language === "English") {
            phrases = {
                appName: "Forest Indicator App"
            }
        }
        // If Finnish is chosen when Languaeg is created populate with English
        else if (language === "Finnish") {
            phrases = {
                appName: "Finnish Here"
            }
        }

        // Return the phrases
        return phrases;
    }
}

export default Language;