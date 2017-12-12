class Language {

    setLanguage = ""

    constructor(language) {
        this.setLanguage = language;
        // Create empty object of phrases
        let phrases = {}
        // If English is chosen when Language object is created then populate with English
        if (this.setLanguage === "English") {

            phrases = {
                appName: "Forest Indicator App",
                team: "Team 12: Mark Barrett, Valtteri Juutilainen, Tuomo Kinnunen & Joshua O'Neill",
                openApp: "Open App",
                scenarioSelector: "Scenario Selector",
                regionLevel: "Region level",
                region: "Region",
                scenarioCollection: "Scenario collection",
                scenarios: "Scenarios",
                chooseRegionLevel: "Choose region level",
                chooseRegion: "Choose region",
                chooseScenarioCollection: "Choose scenario collection",
                timePeriod: "Time Period",
                chooseTimePeriod: "Choose time period",
                chooseIndicator: "Choose Indicator",
                timberProduction: "Timber production",
                gatherProducts: "Gather products",
                diversity: "Diversity",
                coal: "Coal",
                others: "Others",
                emailAddress: "Address",
                emailSubject: "Subject",
                emailBody: "Text",
                send: "Send",
                sendEmail: "Send email",
                close: "Close",
                info: "This web application is written using the React library. The source code to this application can be found",
                here: "here",
                information: "Information"
            }
        }
        // If Finnish is chosen when Language is created populate with English
        else if (this.setLanguage === "Finnish") {
            phrases = {
                appName: "Metsämittari Sovellus",
                team: "Tiimi: Mark Barrett, Valtteri Juutilainen, Tuomo Kinnunen & Joshua O'Neill",
                openApp: "Avaa sovellus",
                scenarioSelector: "Skenaarioiden Valinta",
                regionLevel: "Aluetaso",
                region: "Alue",
                scenarioCollection: "Skenaariokokoelma",
                scenarios: "Skenaariot",
                chooseRegionLevel: "Valitse aluetaso",
                chooseRegion: "Valitse alue",
                chooseScenarioCollection: "Valitse skenaariokokoelma",
                timePeriod: "Ajankohta",
                chooseTimePeriod: "Valitse ajankohta",
                chooseIndicator: "Indikaattoreiden valinta",
                timberProduction: "Puuntuotanto",
                gatherProducts: "Keruutuotteet",
                diversity: "Monimuotoisuus",
                coal: "Hiili",
                others: "Muut",
                emailAddress: "Osoite",
                emailSubject: "Otsikko",
                emailBody: "Teksti",
                send: "Lähetä",
                sendEmail: "Lähetä sähköpostia",
                close: "Sulje",
                info: "Tämä web-sovellus on kirjoitettu React-kirjastolla. Tämän sovelluksen lähdekoodi löytyy",
                here: "täältä",
                information: "Informaatio"
            }
        }

        // Return the phrases
        return phrases;
    }
}

export default Language;