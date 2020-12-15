
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ErrorScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMesage}>Something Went Wrong at our End</Text>
            <TouchableOpacity style={styles.retryButtonStyle}>
                <Text>Retry</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
