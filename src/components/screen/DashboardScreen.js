
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
import WeatherListComp from '../reuse/WeatherListComp'
import ErrorScreen from './ErrorScreen'
import LottieView from 'lottie-react-native'

const DashboardScreen = () => {

    const loadingStatus = useSelector((state) => {
        console.log(state, "state")
    });

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
            {/* <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex:1
            }}>
                <LottieView
                    style={{
                        height: 300,
                        width: 300
                    }}
                    source={require("../../assets/Loader.json")}
                    autoPlay
                    loop
                />
            </View> */}

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

export default DashboardScreen;
