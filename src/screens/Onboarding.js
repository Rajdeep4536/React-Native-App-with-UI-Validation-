import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Image,
  } from 'react-native';

  import AppIntroSlider from 'react-native-app-intro-slider';
  const {height, width} = Dimensions.get('screen');
  const Onboarding = ({navigation}) => {

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
       
          <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            onDone={()=> navigation.navigate('Login')}
            onSkip={()=> navigation.navigate('Login')}
            
            showSkipButton={true}
            bottomButton
            dotClickEnabled={true}
            dotStyle={{backgroundColor: 'rgb(181,194,192)',}}
            activeDotStyle={{backgroundColor: 'rgb(126,222,207)'}}
            showSkipButton1={true}
           
          />
        
      </>
    );
  };
  
  export default Onboarding;
  
  const styles = StyleSheet.create({
    container: {
   
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
      color:'black',
     
    },
  });
  
  
  const slides = [
    {
      key: 'one',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage-removebg-preview.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage-removebg-preview.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage-removebg-preview.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 'four',
      title: 'Professional you can trust',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente unde atque nisi. Aspernatur, impedit dignissimos incidunt similique nulla vero eos, soluta, odit fugiat beatae rerum laudantium.',
      image: require('/Users/mobiloitte/MyProject/src/Images/Uimage-removebg-preview.png'),
      backgroundColor: '#22bcb5',
     
    },
  ];