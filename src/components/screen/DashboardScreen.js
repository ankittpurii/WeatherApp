
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherForecast } from '../../redux/actions/getWeatherDetailAction';
import { getCurrentLocation } from '../../utils/LocationHelper';
import { hasLocationPermission } from '../../utils/PermissionHelper';
import Loader from '../reuse/Loader';
import WeatherListComp from '../reuse/WeatherListComp'
import ErrorScreen from './ErrorScreen'

/**
 * Landing screen of the application
 */
const DashboardScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getWeatherDetails()
    }, [])

    const loadingStatus = useSelector((state) => state.loadingReducer.loadingStatus);
    const weatherList = useSelector((state) => state.WeatherReducer.weatherList);
    const [error, setError] = useState(undefined)

    /**
     * get Weathers Details from API 
     */
    const getWeatherDetails = async () => {
        if (hasLocationPermission()) {
            const coords = await getCurrentLocation()
            const weatherData = await dispatch(getWeatherForecast(coords))
            if (weatherData?.error)
                setError(weatherData?.error)
        }
    }

    /**
     * return main view of the screen
     */
    const getMainView = () => {
        if (loadingStatus)
            return <Loader />
        else if (error)
            return <ErrorScreen
                onRetryClick={getWeatherDetails}
            />
        else
            return <View style={styles.container}>
                <View style={styles.headerViewStyle}>
                    <Text style={styles.todayTempFont}>{weatherList[0]?.temp?.day}</Text>
                    <Text style={styles.todayTempFont}>Delhi</Text>
                </View>
                <FlatList
                    data={weatherList.slice(1, 6)}
                    renderItem={({ item }) => <WeatherListComp item={item} />
                    }
                    style={styles.container} />
            </View>
    }

    return (
        getMainView()
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    todayTempFont: {
        fontSize: 30,
        fontWeight: 'bold'
    },
})

export default DashboardScreen
