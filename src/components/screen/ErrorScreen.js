import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import config from '../../utils/config'

const ErrorScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMesage}>{config.constants.ERROR_MSG}</Text>
            <TouchableOpacity
                onPress={props?.onRetryClick}
                style={styles.retryButtonStyle}>
                <Text>Retry</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    errorMesage: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    retryButtonStyle: {
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1
    }

})

export default ErrorScreen;
