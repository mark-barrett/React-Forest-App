/* This is the scenarios data service that will get all information regarding
scenarios from the API
*/
import axios from 'axios';

function getScenarioCollection(scenarioCollectionID, regionID, language) {
    var config = {
        headers: { 'Accept-Language': language == "English" ? 'en' : 'fi' }
    }
    return new Promise((resolve, reject) => {
        // Make HTTP GET call to the regionLevels endpoint
        axios.get("http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionID+"/region/"+regionID, config)
        // Then when it has completed
        .then(results => {
            resolve(results.data);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    })
}

export default {getScenarioCollection};