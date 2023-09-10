import { StyleSheet, Dimensions, Platform } from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
    },
    imageSlide: {
        marginTop: 100,
        height: HEIGHT* 0.4,
        width: WIDTH
        //backgroundColor: 'red',
        //borderBottomLeftRadius: 25,
        //borderBottomRightRadius: 25
    },
    tab: {
        width: WIDTH,
        height: HEIGHT *0.3,
        //backgroundColor: 'white',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        //fontFamily: Fonts.regular,
        color: "white",
    },
    text: {
        fontSize: 19,
        //fontFamily: Fonts.bold,
        textAlign: 'left',
        width: WIDTH * 0.8,
        color: "white",
        lineHeight: 22,
        letterSpacing: 0.12,
    },
    textContainer: {
        position: 'absolute',
        top: HEIGHT* 0.6
    },
  
   
    footer: {
        //justifyContent: 'center',
        alignItems: 'center',
        height: HEIGHT*0.3,
        width: WIDTH,
        backgroundColor:"#27A2DB",
        //flex: 1
    },
  
    indicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: HEIGHT*0.01
      //position: 'absolute',
      //top: - HEIGHT * 0,
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 5,
        backgroundColor: '#B9B8B8',
        marginHorizontal: 2,
    },
    naviContainer: {
        justifyContent: 'space-evenly',
        backgroundColor: "#27A2DB",
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: WIDTH*0.05,
        justifyContent: 'space-between'
    },
    buttonLogin: {
        backgroundColor: "#27A2DB",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        height: HEIGHT * 0.065,
        width: WIDTH * 0.4,
        marginHorizontal: WIDTH*0.03
    },
    buttonRegis: {
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: HEIGHT * 0.065,
        width: WIDTH * 0.4,
       marginHorizontal: WIDTH*0.03
    },
    contactText: {
        color: "white",
        fontSize: 13,
        textAlign: 'center'
    },
    textButton: {
        color: "#27A2DB",
        //fontFamily: Fonts.bold,
        fontSize: 15,
    },
    skip: {
        color: "white",
        position: 'absolute',
        top: WIDTH * 0.04,
        right: WIDTH * 0.04,
        fontSize: 16,
        //fontFamily: Fonts.regular
    }
  });
export default styles;