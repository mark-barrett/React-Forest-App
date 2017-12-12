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
                information: "Information",
                close: "Close",
                here: "here",
                info: "This web application is written using the React library. The source code to this application can be found",
                pdfText: "This PDF was generated by the React Forest Indicator app by Team 12: Mark Barrett, Valterri Juutilainen, Tuomo Kinnunen & Joshua O'Neill",
                contact: "Contact",
                close: "Close",
                information: "Information",
                here: "here",
                help: "Help",
                helpText1: "This is quick help information regarding how this application operates. It gives a quick tutorial on how to select and display data.",
                helpText2: "Selecting a Region Level",
                helpText3: "A region level can be selected on the left hand side of the app which. Choosing this will then prompt the next option to pop up.",
                helpText4: "Selecting a Scenario",
                helpText5: "After selecting a region, you can then select a scenario collection and then select multiple scenarios (CTRL + Mouse click to select multiple targets). Each scenario will be displayed as a seperate graph, whilst all scenarios will be in one table.",
                helpText6: "Time Period",
                helpText7: "After selecting your desired scenarios you can then pick your time period. The application will then display the number of empty graphs based on your scenario collection. Once indicators are picked the graphs will populate.",
                helpText8: "Indicators and Graphs",
                helpText9: "Once indicators are chosen on the right hand side, the graph will be populated with data. The grahs are dynamic meaning that you can add and remove indicators and these changes will reflect on the graphs instantly.",
                helpText10: "Tables",
                helpText11: "The information can also be displayed in table form. It gives a break down of the same information, with each indicator being listed as a new row, with each scenarios values displayed in relevant columns.",
                helpText12: "Save Information",
                helpText13: "Each graph and the table can all be saved to a PDF. These PDF's are then downloaded to your computer for future use",
                chartType: "Chart Type",
                pieChart: "Pie Chart",
                lineChart: "Line Chart",
                columnChart: "Column Chart",
                barChart: "Bar Chart",
                polarChart: "Polar Chart"
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
                timePeriod: "Ajanjakso",
                chooseTimePeriod: "Valitse ajankohta",
                chooseIndicator: "Indikaattoreiden valinta",
                timberProduction: "Puuntuotanto",
                gatherProducts: "Keruutuotteet",
                diversity: "Monimuotoisuus",
                coal: "Hiili",
                others: "Muut",
                emailAddress: "Sähköpostiosoite",
                emailSubject: "Sähköpostin aihe",
                emailBody: "Teksti",
                send: "Lähetä",
                information: "Informaatio",
                close: "Sulje",
                here: "täältä",
                info: "Tämä web-sovellus on kirjoitettu React-kirjastolla. Tämän sovelluksen lähdekoodi löytyy",
                pdfText: "Tämän PDF -tiedoston tuotti React Metsämittari Sovellus by Tiimi: Mark Barrett, Valtteri Juutilainen, Tuomo Kinnunen & Joshua O'Neill",
                contact: "Ota yhteyttä",
                close: "Sulje",
                information: "Informaatiota",
                here: "täältä",
                help: "Apua",
                helpText1: "Tässä on pikainen ohje siitä, miten tämä sovellus toimii. Se kertoo, kuinka valitaan ja näytetään dataa.",
                helpText2: "Aluetason valitseminen",
                helpText3: "Aluetaso voidaan valita sovelluksen vasemmalta reunalta, jonka jälkeen seuraava vaihtoehto ilmestyy.",
                helpText4: "Skenaarioiden valinta",
                helpText5: "Alueen valinnan jälkeen voit valita skenaariokokoelman ja sen jälkeen voit valita skenaariokokoelman sisältämiä skenaarioita (CTRL + Hiiren klikkauksella voi valita useampia kohteita). Jokainen skenaario näytetään omalla kaaviollaan, ellei dataa näytetä taulukossa.",
                helpText6: "Aikajaksot",
                helpText7: "Skenaarioiden valitsemisen jälkeen voit valita halutun aikajakson. Sitten sovellus näyttää tyhjiä kaavioita, jotka täyttyvät datalla kun valitset indikaattorit.",
                helpText8: "Indikaattorit ja kaaviot",
                helpText9: "Kun valitset indikaattoreita, kaaviot täyttyvät datalla. Kaaviot ovat dynaamisia, eli voit lisätä ja poistaa indikaattoreita jolloin muutokset näkyvät kaaviolla heti.",
                helpText10: "Taulukot",
                helpText11: "Informaatiota voidaan myös näyttää taulukkomuodossa. Jokainen indikaattori on omalla rivillään ja skenaariot ovat omissa sarakkeissaan",
                helpText12: "Tallenna informaatiota",
                helpText13: "Kaikki kaaviot voidaan tallentaa koneellesi PDF-muodossa.",
                chartType: "Kaavion tyyppi",
                pieChart: "Ympyrädiagrammi",
                lineChart: "Linjan Kaaviosta",
                columnChart: "Pylväskaavio",
                barChart: "Pylväsdiagrammi",
                polarChart: "Polaarinen Kaavio"
            }
        }

        // Return the phrases
        return phrases;
    }
}

export default Language;