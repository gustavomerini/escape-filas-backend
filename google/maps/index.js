import googleMaps from '@google/maps';
require('dotenv').config()

const googleMapsClient = googleMaps.createClient({
    key: process.env.GOOGLE_MAPS_API_KEY,
    Promise: Promise
});

export default {
    /**
     * @param {{
     *      lat: String,
     *      lng: String,
     *      radius?: Number
     * }} options
     */
    searchPlaces: async (options) => {
        let searchOptions = { location: `${options.lat},${options.lng}`,  type: 'establishment' };
        if(options.radius) {
            searchOptions.radius = options.radius;
        } else {
            searchOptions.rankby = 'distance'
        }
        return googleMapsClient.placesNearby(searchOptions).asPromise();
    }
}