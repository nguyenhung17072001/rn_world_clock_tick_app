import React, {memo, useEffect, useRef} from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    Animated,
    Dimensions,
    StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const Splash = () => {
    const navigation = useNavigation();
    
    
    useEffect(()=>{
        clearTimeout(timeout)
        const timeout = setTimeout(() => {
            navigation.replace("Second")
            
        }, 2000);
    },[]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <Animated.Image resizeMode='contain' style={[styles.logo, ]} source={require("../assets/images/logo.png")} />
            
            <Text style={styles.appNameText}>
                World Tick
            </Text>
            <Text style={styles.sloganText}>
            Around the world
            </Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo: {
        height: width*0.2,
        width: width*0.2,
        marginTop: -height*0.16,
        marginBottom: height*0.02
    },
    appNameText: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 18,
    },
    sloganText: {
        color: "black",
        fontSize: 11,
        //fontFamily: Fonts.regular,
    },
});

export default Splash;