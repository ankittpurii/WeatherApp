import Geolocation from 'react-native-geolocation-service';


export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            async (error) => {
                if (error.code == error.POSITION_UNAVAILABLE || error.code === error.TIMEOUT)
                    reject(error.message)
            },
            { enableHighAccuracy: true, timeout: 15000 },
        );
    });
};


