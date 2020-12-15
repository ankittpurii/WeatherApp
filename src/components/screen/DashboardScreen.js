
import React, { useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux'
import { getCurrentLocation } from '../../utils/LocationHelper';
import { hasLocationPermission } from '../../utils/PermissionHelper';
import Loader from '../reuse/Loader';
import WeatherListComp from '../reuse/WeatherListComp'
import ErrorScreen from './ErrorScreen'

const DashboardScreen = () => {

    useEffect(() => {
        hasLocationPermission() && getCurrentLocation()
    }, [])

    return (
        // <ErrorScreen/>
        <View style={styles.container}>
            <View style={styles.headerViewStyle}>
                <Text style={styles.todayTempFont}>10</Text>
                <Text style={styles.todayTempFont}>Delhi</Text>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => <WeatherListComp />
                }
                style={styles.container} />
           

            {/* <Loader /> */}
        </View>
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
