import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Button,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import AppIntroSlider from 'react-native-app-intro-slider';
  import {NavigationContainer} from '@react-navigation/native';
  const {height, width} = Dimensions.get('screen');
  const Onboarding = ({navigation}) => {
    const [showRealApp, setShowRealApp] = useState(false);
    const onDone = () => {
      setShowRealApp(true);
      // onPress={() => navigation.navigate('Login')}
      // onPress={() => navigation.navigate('Signup')}
    };
    const onSkip = () => {
      setShowRealApp(true);
    };
    const renderItem = ({item}) => {
      return (
        <SafeAreaView>
          <View style={styles.UMainView}>
            <View style={styles.MView}>
              <Image style={styles.introImageStyle} source={item.image} />
            </View>
            <View style={styles.IntroTitleView}>
              <Text style={styles.introTitleStyle}>{item.title}</Text>
            </View>
  
            <View style={styles.TextView}>
              <Text style={styles.introTextStyle}>{item.text}</Text>
            </View>
          </View>
        </SafeAreaView>
      );
    };
    return (
      <>
        {showRealApp ? (
          //   onPress={() => navigation.navigate('Signup')}
          <SafeAreaView>
            <View style={styles.container}>
              <View
                style={{
                  height: height * 0.4,
                  width: width * 0.85,
                  justifyContent: 'center',
                  alignItems: 'center',
  
                  // backgroundColor:"red"
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Image
                    source={require('/Users/mobiloitte/MyProject/src/Images/31.png')}
                    style={{
                      // height: height * 0.28,
                      // width: width * 0.6,
                      height: 220,
                      width: 220,
                      borderRadius: 110,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: height * 0.2,
                  width: width * 0.85,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{fontSize: 18, color: 'white'}}>
                  You Want to go Login Page then{' '}
                </Text>
              </View>
             
              <View
                style={{
                  height: height * 0.15,
                  width: width * 0.85,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    height: height * 0.08,
                    width: width * 0.4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderColor: 'rgb(19,47,74)',
                    backgroundColor: 'rgb(62,189,253)',
                    borderRadius: 10,
                    opacity: 1,
                    shadowOpacity: 1,
                  }}
                  onPress1={() => setShowRealApp(false)}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={{fontSize: 18, color: 'white'}}>Click Here </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  height: height * 0.08,
                  width: width * 0.85,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderColor: 'rgb(19,47,74)',
                  backgroundColor: 'rgb(62,189,253)',
                  borderRadius: 10,
                  opacity: 1,
                  shadowOpacity: 1,
                }}
                onPress={() => setShowRealApp(false)}
               
              >
                <Text style={{fontSize: 18, color: 'white'}}>
                  Go to Slider page Click Here
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        ) : (
          <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            onDone={onDone}
            onSkip={onSkip}
            showSkipButton={true}
            bottomButton
            dotClickEnabled={true}
            dotStyle={{backgroundColor: 'rgb(181,194,192)'}}
            activeDotStyle={{backgroundColor: 'rgb(126,222,207)'}}
            showSkipButton1={true}
           
          />
        )}
      </>
    );
  };
  
  export default Onboarding;
  
  const styles = StyleSheet.create({
    container: {
      // flex:1,
      height: height * 1,
      width: width * 1,
      backgroundColor: '#038fc5',
      alignItems: 'center',
      padding: 10,
      // justifyContent: 'center',
    },
    titlestyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    UMainView: {
      height: height * 1,
      width: width * 1,
      // backgroundColor: 'cyan',
      alignItems: 'center',
    },
    MView: {
      height: height * 0.4,
      width: width * 1,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    introImageStyle: {
      height: height * 0.4,
      width: width * 0.7,
    },
    IntroTitleView: {
     
      height: height * 0.15,
      width: width * 0.85,
    },
    introTitleStyle: {
      fontSize: 35,
      color: 'rgb(126,222,207)',
      fontWeight: 'bold',
    },
    TextView: {
     
      height: height * 0.3,
      width: width * 0.85,
    },
    introTextStyle: {
      fontSize: 16,
     
    },
  });
  
  
  const slides = [
    {
      key: 'one',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 'four',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage.png'),
      backgroundColor: '#22bcb5',
    },
  ];