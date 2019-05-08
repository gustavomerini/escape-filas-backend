import googleMaps from '@google/maps';

const googleMapsClient = googleMaps.createClient({
    key: 'AIzaSyCF-4HJEeg4K0KJOEdMuqc5XiQkfM31M10',
    Promise: Promise
});

export default {
    searchPlaces: async (lat, lng) => {
        return googleMapsClient.placesNearby({ location: `${lat},${lng}`, rankby: 'distance',  type: 'establishment' }).asPromise();
    }
}