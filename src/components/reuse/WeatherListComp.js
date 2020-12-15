
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const WeatherListComp = () => {

    return (
        <View style={styles.listView}>
            <Text style={styles.textStyle}>Monday</Text>
            <View style={styles.tempCount}>
                <Text style={styles.textStyle}>8</Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        borderWidth: 1,
        borderBottomWidth: 0,
        padding: 25,
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 16
    },
    tempCount: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20
    }
})

export default WeatherListComp;
