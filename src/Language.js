class Language {

    constructor(language) {
        // Create empty object of phrases
        let phrases = {}
        // If English is chosen when Language object is created then populate with English
        if (language === "English") {
            phrases = {
                appName: "Forest Indicator App",
                team: "Team 12: Mark Barrett, Valtteri Juutilainen, Tuomo Kinnunen & Joshua O'Neill",
                openApp: "Open App",
                scenarioSelector: "Scenario Selector",
                regionLevel: "Region Level",
                region: "Region",
                scenarioCollection: "Scenario Collection",
                scenarios: "Scenarios",
                chooseRegionLevel: "Choose region level"
            }
        }
        // If Finnish is chosen when Languaeg is created populate with English
        else if (language === "Finnish") {
            phrases = {
                appName: "Metsämittari Sovellus",
                team: "Tiimi: Mark Barrett, Valtteri Juutilainen, Tuomo Kinnunen & Joshua O'Neill",
                openApp: "Avaa sovellus",
                scenarioSelector: "Skenaarioiden Valinta",
                regionLevel: "Aluetaso",
                region: "Alue",
                scenarioCollection: "Skenaariokokoelma",
                scenarios: "Skenaariot",
                chooseRegionLevel: "Valitse aluetaso"
            }
        }

        // Return the phrases
        return phrases;
    }
}

export default Language;