/* This is the Regions data service that is used to get all information
about regions.
*/
import axios from 'axios';

function getRegions() {
    return new Promise((resolve, reject) => {
        // Make HTTP GET call to the regionLevels endpoint
        axios.get("http://melatupa.azurewebsites.net/regionLevels")
        // Then when it has completed
        .then(results => {
            resolve(results.data);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

export default {getRegions};