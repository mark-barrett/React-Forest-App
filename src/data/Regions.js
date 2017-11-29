/* This is the Regions data service that is used to get all information
about regions.
*/
import axios from 'axios';

function getRegionLevels() {
    return new Promise((resolve, reject) => {
        // Make HTTP GET call to the regionLevels endpoint
        axios.get("http://melatupa.azurewebsites.net/regionLevels")
        // Then when it has completed
        .then(results => {
            resolve(results.data);
        })
        // Catch the error and log it
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getRegions(regionLevelID) {
    return new Promise((resolve, reject) => {
        // Make the HTTP call to the regions endpoint
        axios.get("http://melatupa.azurewebsites.net/regionLevels/"+regionLevelID+"/regions")
        // Then when it has completed
        .then(results => {
            resolve(results.data);
        })
        // Catch the error and log it
        .catch(error => {
            console.log(error);
            reject();
        })
    })
}

export default {getRegionLevels, getRegions};