import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;



const OnBoarding = (props) => {
  const { navigate } = useNavigation();
  const [next, setNext] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [
    {
      key: "1",
      title: 'Quản lý thông tin',
      text: '',
      image: require("../../assets/images/b1.jpg"),
      backgroundColor: 'white',
    },
    {
      key: "2",
      title: 'Chăm sóc tận tâm',
      text: '',
      image: require("../../assets/images/b2.jpg"),
      backgroundColor: 'white',
    },
    
  ];

  useEffect(() => {
    if (currentSlideIndex == 2) {
      setNext(false);
    }
    if (currentSlideIndex < 2) {
      setNext(true);
    }
  }, [currentSlideIndex]);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const ref = useRef(null);
  /* const nextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  }; */
  /* const backSlide = () => {
    const backSlideIndex = currentSlideIndex - 1;
    if (backSlideIndex != slides.length) {
      const offset = backSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(backSlideIndex);
      return;
    }
  }; */
  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.indicator}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.circle,
                currentSlideIndex == index && {
                  backgroundColor: "white",
                  width: 14,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.naviContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> navigate("Third")} style={styles.buttonLogin}>
              <Text style={[styles.textButton, {color: 'white'}]}>
                Go
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=> navigate(Routes.SignUp)} style={styles.buttonRegis}>
              <Text style={styles.textButton}>
                Đăng ký
              </Text>
            </TouchableOpacity> */}
          </View>
          
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{...styles.container}}>
      <StatusBar
        translucent={true}
       
        backgroundColor={'rgba(0,0,0,0)'}
        barStyle="light-content"
      />
  
      <FlatList
      
        removeClippedSubviews
        data={slides}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item, index}) => (
          <View style={{...styles.slide, backgroundColor: "#27A2DB"}}>
              
              <Image
                style={[styles.imageSlide, 
                  index==0 && {borderBottomLeftRadius: 25},
                  index==slides.length-1 && {borderBottomRightRadius: 25}
                ]}
                resizeMode="cover"
                source={item.image}
                //source={{uri: "https://www.xero.com/content/dam/xero/pilot-images/guides/how-to-start-an-online-business-guide/htsob-guide-hero.1648510683285.png"}}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
                {/* <Text style={styles.text}>Dịch vụ của chúng tôi tiện lợi cho các doanh nghiệp</Text> */}
              </View>
              

              
            
          </View>
        )}
      />

      <Footer />
    </SafeAreaView>
  );
};

export default OnBoarding;
