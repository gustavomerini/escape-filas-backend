import googleMaps from '@google/maps';

const googleMapsClient = googleMaps.createClient({
    key: 'AIzaSyCF-4HJEeg4K0KJOEdMuqc5XiQkfM31M10',
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