import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
  } from 'react-native';
  import React, {useState} from 'react';
  import CodeInput from 'react-native-code-input';
  const {height, width} = Dimensions.get('window');
  
  const Otp = ({navigation}) => {
    const [Otp1, setOtp] = useState('');
    const [errorOtp1, setErrorOtp1] = useState(null);
  
    const otpValidate = Otp1 => {
      if (Otp1 === '') {
        setErrorOtp1('Enter otp');
      } else {
        setErrorOtp1(null);
      }
    };
  
    const validate = () => {
      let flag = true;
      if (Otp1 === '') {
        setErrorOtp1('*Please enter OTP');
        flag = false;
      } else {
        setErrorOtp1(null);
      }
  
      return flag;
    };
  
    const onSubmit = () => {
      if (validate()) {
        navigation.navigate('Subscribe');
      } else {
        alert('Something went wrong');
      }
    };
  
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.head}>
          <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Image
                style={styles.img}
                //   source={require('..image/back.png')}
                source={require('/Users/mobiloitte/MyProject/src/Images/Screenshot_20220621-123608_2.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              // source={require('../assets/images/search.png')}
              source={require('/Users/mobiloitte/MyProject/src/Images/search.png')}
            />
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.welcome}>
            <Text style={{fontSize: 30, color: 'gray', fontWeight: '400'}}>
              Verify OTP
            </Text>
            <View
              style={{
                height: height * 0.08,
                justifyContent: 'center',
                width: width * 0.85,
                alignItems:"center"
              }}>
              <Text style={{fontSize: 14, color: 'gray', fontWeight: '400'}}>
                Always Make Sure That You Are Visiting
              </Text>
            </View>
            <Text style={{fontSize: 14, color: 'gray', fontWeight: '400'}}>
              The Current URL
            </Text>
          </View>
        </View>
        <View style={styles.code}>
          <CodeInput
            //   ref="codeInputRef2"
            secureTextEntry
            activeColor="rgba(255, 255, 255, 1)"
            inactiveColor="rgba(255, 255, 255, 0.2)"
            autoFocus={false}
            // inputPosition='center'
            size={55}
            codeLength={4}
            space={16}
            // containerStyle={{ }}
            codeInputStyle={{ backgroundColor: 'rgb(36,37,38)',borderRadius:7.5,}}
            onSubmit={Text => {
              setOtp(Text), otpValidate(Text);
            }}
            onFulfill={() => navigation.navigate('Reset')}
          />
        </View>
        {errorOtp1 !== null ? (
          <View
            style={{
              height: height * 0.19,
              width: width * 0.69,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'red'}}> {errorOtp1}</Text>
          </View>
        ) : null}
  
        <View style={styles.time}>
          <View style={{height: height * 0.07, justifyContent: 'center',
          // backgroundColor:"yellow"
          }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>
              00:23
            </Text>
          </View>
        </View>
        <View style={styles.last}>
          <View style={{height: height * 0.1, justifyContent: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              Didn't receive the code?
            </Text>
          </View>
          <TouchableOpacity onPress={() => onSubmit()}>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: 'rgb(237,0,127)'}}>
              Send OTP again
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Otp;
  
  const styles = StyleSheet.create({
    safe: {
      height: height * 1,
      backgroundColor: 'rgb(16,16,16)',
    },
    head: {
      width: width * 0.8,
      height: height * 0.15,
      // backgroundColor:'red',
      justifyContent: 'center',
    },
    main: {
      width: width * 0.8,
      height: height * 0.08,
      // backgroundColor:'green',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    img: {
      width:45,
      height: 44,
    },
    logo: {
      width: width * 0.5,
      height: height * 0.07,
    },
    welcome: {
      width: width * 1,
      height: height * 0.095,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      // backgroundColor:'green'
    },
    middle: {
      width: width * 1,
      height: height * 0.16,
      // backgroundColor:'red'
    },
    totalotp: {
      width: width * 1,
      height: height * 0.1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    input: {
      width: width * 0.8,
      height: height * 0.03,
      borderRadius: 1,
    },
    time: {
      width: width * 1,
      height: height * 0.07,
      alignItems: 'center',
    },
    last: {
      width: width * 1,
      height: height * 0.07,
  
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    code: {
      width: width * 0.5,
      height: height * 0.12,
      justifyContent:"center",
      alignSelf:"center",
    },
  });