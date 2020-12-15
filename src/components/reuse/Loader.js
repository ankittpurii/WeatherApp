
import React from 'react';
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

const Loader = () => {

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
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
        </View>
    );
};

export default Loader;
