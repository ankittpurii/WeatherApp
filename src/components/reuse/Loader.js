
import React from 'react';
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

const Loader = () => {

    const size = 300

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }}>
            <LottieView
                style={{
                    height: size,
                    width: size
                }}
                source={require("../../assets/Loader.json")}
                autoPlay
                loop
            />
        </View>
    );
};

export default Loader;
