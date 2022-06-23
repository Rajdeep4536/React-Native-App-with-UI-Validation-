import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  const {height, width} = Dimensions.get('window');
  const Login = ({navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [Password, setPassword] = useState('');
  
    const [errorPassword, setErrorPassword] = useState(null);
    const [passwordVisible1, setPasswordVisible1] = useState(true);
  
    const emailValidate = email => {
      var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var Regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email === '' || email === undefined || email === null) {
        setErrorEmail('Please enter email or Phone number,');
      } else if (!(Regex.test(email) | phoneRegex.test(email))) {
        setErrorEmail('*Please enter valid email or Phone number.');
      } else {
        setErrorEmail(null);
      }
    };
    const _passwordvalidate = pass => {
      var passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (pass === '' || email === undefined || email === null) {
        setErrorPassword('Please enter password.');
        // setCheckPassword(false)
      } else if (!passwordRegex.test(pass)) {
        setErrorPassword('*Password must contain (0-9) (a-z) (A-Z) (@-*)');
        // setCheckPassword(false)
      } else {
        setErrorPassword(null);
        // setCheckPassword(true)
      }
    };
    const Validate = () => {
      // const Flag=false;
      var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var Regex1 =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let Flag = true;
      if (email === '') {
        setErrorEmail('Please enter email.');
        // Flag = false;
        // return !Flag;
      } else if (!(Regex1.test(email) | phoneRegex.test(email))) {
        setErrorEmail('*Please enter valid email');
        return !Flag;
      } else {
        setErrorEmail(null);
      }
      var Regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (Password === '') {
        setErrorPassword('Please enter password.');
        // Flag = false;
        return !Flag;
      } else if (!Regex2.test(Password)) {
        setErrorPassword('*Please enter valid password');
        return !Flag;
      } else {
        setErrorPassword(null);
      }
      return Flag;
    };
    const onSubmit = () => {
      if (Validate()) {
        alert('Thank you');
        navigation.navigate('Onboarding');
      } else {
        alert('Something went wrong');
      }
    };
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.head}>
          <View style={styles.main}>
            <Image style={styles.img} source={require('/Users/mobiloitte/MyProject/src/Images/search.png')} />
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.welcome}>
            <Text style={{fontSize: 30, color: 'gray', fontWeight: '500'}}>
              Welcome back
            </Text>
            <Text style={{fontSize: 17, color: 'gray', fontWeight: '300'}}>
              you've been missed!
            </Text>
          </View>
        </View>
        <View style={styles.totalinput}>
          <View style={styles.both}>
            <View style={styles.mail}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require('/Users/mobiloitte/MyProject/src/Images/mail2.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your email"
                autoCapitalize={'none'}
                placeholderTextColor={'gray'}
                keyboardType="email-address"
                maxLength={30}
                onChangeText={text => {
                  setEmail(text), emailValidate(text);
                }}
              />
            </View>
          </View>
          {errorEmail !== null ? (
            <View
              style={{
                height: height * 0.036,
                width: width * 0.92,
                alignSelf: 'center',
              }}>
              <Text style={{color: 'red'}}> {errorEmail}</Text>
            </View>
          ) : null}
          <View style={styles.all}>
            <View style={styles.mailimg}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  // source={require('../assets/images/lock.png')}
                  source={require('/Users/mobiloitte/MyProject/src/Images/lock.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputpaas}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your password"
                placeholderTextColor={'gray'}
                keyboardType="default"
                secureTextEntry={passwordVisible == false ? true : false}
                maxLength={20}
                onChangeText={text => {
                  setPassword(text), _passwordvalidate(text);
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisible(!passwordVisible);
                }}>
                {passwordVisible == true && (
                  <Image
                    style={styles.image}
                    //   source={require('../assets/images/openeye.png')}
                    source={require('/Users/mobiloitte/MyProject/src/Images/openeye.png')}
                  />
                )}
                {passwordVisible == false && (
                  <Image
                    style={styles.image}
                    //   source={require('../assets/images/closeeye.png')}
                    source={require('/Users/mobiloitte/MyProject/src/Images/eye-removebg-preview.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {errorPassword !== null ? (
          <View
            style={{
              height: height * 0.045,
              width: width * 0.89,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'red'}}> {errorPassword}</Text>
          </View>
        ) : null}
        <View style={styles.total}>
          <View style={styles.checkbox}>
            <TouchableOpacity
              onPress={() => {
                setPasswordVisible1(!passwordVisible1);
              }}>
              {passwordVisible1 == true && (
                <Image
                  style={styles.image1}
                  // source={require('../assets/images/checkimg.png')}
                  source={require('/Users/mobiloitte/MyProject/src/Images/openc.png')}
                />
              )}
              {passwordVisible1 == false && (
                <Image
                  style={styles.image}
                  // source={require('../assets/images/openc.png')}
                  source={require('/Users/mobiloitte/MyProject/src/Images/checkimg.png')}
                />
              )}
            </TouchableOpacity>
            <Text style={{fontSize: 14, color: 'gray', fontWeight: 'bold',}}>
              Remember me
            </Text>
          </View>
          <View style={styles.FrgtMView}>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <View style={styles.forget}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgb(237,0,127)',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                    textDecorationColor: 'rgb(237,0,127)',borderBottomWidth:1,borderBottomColor:'rgb(237,0,127)'
                  }}>
                  Forget Password?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: height * 0.15}}>
          <View style={styles.log}>
            <TouchableOpacity onPress={() => onSubmit()}>
              <View style={styles.logbdr}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.sign}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                {' '}
                Or sign in with
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.last}>
          <View style={styles.ft}>
            <TouchableOpacity>
              <Image
                style={styles.icon}
                //   source={require('../assets/images/fffff.png')}
                source={require('/Users/mobiloitte/MyProject/src/screens/Screenshot_20220623-164927_6-removebg-preview.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.icon1}
                //   source={require('../assets/images/twi.png')}
                source={require('/Users/mobiloitte/MyProject/src/Images/Screenshot_20220623-164927_8-removebg-preview.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.account}>
            <Text style={{fontSize: 15, color: 'gray', fontWeight: 'bold'}}>
              You haven't account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'rgb(237,0,127)',
                  fontWeight: 'bold',paddingLeft:5,
                }}>
                  Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    safe: {
      height: height * 1,
      backgroundColor: 'rgb(16,16,16)',
    },
    head: {
      width: width * 1,
      height: height * 0.18,
      // backgroundColor:'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    main: {
      width: width * 1,
      height: height * 0.08,
      // backgroundColor:'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: width * 0.55,
      height: height * 0.08,
    },
    welcome: {
      width: width * 1,
      height: height * 0.09,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      // backgroundColor:'green'
    },
    middle: {
      width: width * 1,
      height: height * 0.12,
    },
    totalinput: {
      width: width * 1,
      height: height * 0.21,
      // backgroundColor:'red',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    both: {
      width: width * 0.91,
      height: height * 0.072,
      borderWidth: 2,
      borderColor: 'rgb(36,37,38)',
      borderRadius: 7,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgb(36,37,38)',
    },
    mailimg: {
      width: width * 0.07,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: height * 0.04,
      // backgroundColor:'green',
      borderRightWidth: 2,
      borderRightColor: 'rgb(48,50,50)',
    },
    mail: {
      width: width * 0.07,
      // alignItems:'center',
      justifyContent: 'space-evenly',
      height: height * 0.04,
      // backgroundColor:'green'
      borderRightWidth: 2,
      borderRightColor: 'rgb(48,50,50)',
    },
    input: {
      width: width * 0.76,
      justifyContent: 'center',
      height: height * 0.07,
      // backgroundColor:'green'
    },
    inputpaas: {
      width: width * 0.68,
      justifyContent: 'center',
      height: height * 0.07,
      // backgroundColor:'green',
      justifyContent: 'space-evenly',
    },
    all: {
      width: width * 0.9,
      height: height * 0.07,
      borderWidth: 2,
      borderColor: 'rgb(36,37,38)',
      borderRadius: 7,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgb(36,37,38)',
    },
    TextInput: {
      width: width * 0.8,
      color: 'gray',
      fontSize: 17,
      fontWeight: 'bold',
    },
    image: {
      width: width * 0.058,
      height: height * 0.028,
      resizeMode: 'contain',
    },
    image1: {
      width: width * 0.058,
      height: height * 0.023,
      resizeMode: 'contain',
    },
    total: {
      width: width * 1,
      height: height * 0.07,
      // backgroundColor:'red',
      justifyContent: 'space-around',
      // alignItems:'center',
      flexDirection: 'row',
      top:10,
    },
    checkbox: {
      width: width * 0.33,
      marginBottom:22,
      // backgroundColor:"red",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    FrgtMView: {
      width: width * 0.4,
      height: height * 0.032,
      // borderBottomWidth: 1,
      // borderBottomColor: 'rgb(237,0,127)',
    },
    forget: {
      width: width * 0.4,
      height: height * 0.032,
      // borderBottomWidth: 1,
      // borderBottomColor: 'rgb(237,0,127)',
      alignItems:"flex-end"
    },
    log: {
      width: width * 1.002,
      height: height * 0.12,
      // backgroundColor:'red',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logbdr: {
      width: width * 0.9,
      height: height * 0.062,
      borderRadius: 9,
      backgroundColor: 'rgb(237,0,127)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sign: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: width * 0.15,
      height: height * 0.067,
    },
    icon1: {
      width: width * 0.16,
      height: height * 0.074,
    },
    ft: {
      width: width * 0.5,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    last: {
      width: width * 1,
      height: height * 0.12,
      // backgroundColor:'red',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    account: {
      flexDirection: 'row',
    },
  });