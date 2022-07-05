import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import Icon from 'react-native-vector-icons/Feather';
  const {height, width} = Dimensions.get('window');
  
  const Reset = ({navigation}) => {
    const [isChecked, setIsChecked] = useState(false);
    const toggle = () => {
      setIsChecked(true);
    };
  
    const _toggle = () => {
      setIsChecked(false);
    };
  
    const [isChecked1, setIsChecked1] = useState(false);
    const toggle1 = () => {
      setIsChecked1(true);
    };
  
    const _toggle1 = () => {
      setIsChecked1(false);
    };
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible1, setPasswordVisible1] = useState(false);
  
    const [Password, setPassword] = useState('');
    // const [checkPassword, setCheckPassword] = useState();
    const [errorPassword, setErrorPassword] = useState(null);
    const [Passwordc, setPasswordc] = useState('');
    const [checkPasswordc, setCheckPasswordc] = useState();
    const [errorPasswordc, setErrorPasswordc] = useState(null);
  
    const _passwordvalidate = pass => {
      var passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (pass === '' || pass === undefined || pass === null) {
        setErrorPassword('Please enter password.');
        // setCheckPassword(false)
      } else if (!passwordRegex.test(pass)) {
        setErrorPassword('  *Please enter valid password.');
        // setCheckPassword(false)
      } else {
        setErrorPassword(null);
        // setCheckPassword(true)
      }
    };
    const _passwordvalidatec = passc => {
      if (passc === '' || passc === undefined || passc === null) {
        setErrorPasswordc('Please enter confirm password.');
      } else if (Password != passc) {
        setErrorPasswordc("*Password don't match");
        setCheckPasswordc(false);
      } else {
        setErrorPasswordc(null);
        setCheckPasswordc(true);
      }
    };
    const Validate = () => {
      var Regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  
      let Flag = true;
      if (Password === '') {
        setErrorPassword('Please enter password.');
        // Flag = false;
        // return !Flag;
      } else if (!Regex2.test(Password)) {
        setErrorPassword('*Please enter valid password');
        return !Flag;
      } else {
        setErrorPassword(null);
      }
      if (Passwordc === '') {
        setErrorPasswordc('Please enter confirm password.');
        // Flag = false;
        return !Flag;
      } else if (Password != Passwordc) {
        setErrorPasswordc("*Password don't match");
        return !Flag;
      } else {
        setErrorPasswordc(null);
      }
  
      return Flag;
    };
    const onSubmit = () => {
      if (Validate()) {
        navigation.navigate('Login');
      } else {
        alert('Please fill password appropriately');
      }
    };
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.head}>
          <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate('Otp')}>
              <Image
                style={styles.img}
              source={require('/Users/mobiloitte/MyProject/src/Images/Screenshot_20220621-123608_2.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={require('/Users/mobiloitte/MyProject/src/Images/search.png')}
            />
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.welcome}>
            <Text style={{fontSize: 27, color: 'gray', fontWeight: '400'}}>
              Set a new password
            </Text>
            <Text style={{fontSize: 14, color: 'gray',}}>
              Please never share with anyone for safe use
            </Text>
          </View>
        </View>
        <View style={styles.totalinput}>
          <View style={styles.all}>
            <View style={styles.mailimg}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require('/Users/mobiloitte/MyProject/src/Images/lock.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputpaas}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your new password"
                placeholderTextColor={'gray'}
                keyboardType="default"
                secureTextEntry={passwordVisible == false ? true : false}
                maxLength={25}
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
                  <Icon name="eye" size={15} color="white"/> 
                )}
                {passwordVisible == false && (
                  <Icon name="eye-off" size={15} color="white"/> 
                )}
              </TouchableOpacity>
            </View>
          </View>
          {errorPassword !== null ? (
            <View
              style={{
                height: height * 0.045,
                width: width * 0.9,
               
                alignSelf: 'center',
              }}>
              <Text style={{color: 'red'}}> {errorPassword}</Text>
            </View>
          ) : null}
          <View style={styles.all}>
            <View style={styles.mailimg}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require('/Users/mobiloitte/MyProject/src/Images/lock.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputpaas}>
              <TextInput
                style={styles.TextInput}
                placeholder="Confirm new password"
                placeholderTextColor={'gray'}
                keyboardType="default"
                secureTextEntry={passwordVisible1 == false ? true : false}
                maxLength={25}
                onChangeText={text => {
                  setPasswordc(text), _passwordvalidatec(text);
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisible1(!passwordVisible1);
                }}>
                {passwordVisible1 == true && (
                  <Icon name="eye" size={15}  color="white"  />
                )}
                {passwordVisible1 == false && (
                  <Icon name="eye-off" size={15} color="white"/> 
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {errorPasswordc !== null ? (
          <View
            style={{
              height: height * 0.035,
              width: width * 0.9,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'red'}}> {errorPasswordc}</Text>
          </View>
        ) : null}
        <View style={styles.sub}>
          <TouchableOpacity onPress={() => onSubmit()}>
            <View style={styles.submit}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Submit & Reset
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.last}>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', color: 'rgb(237,0,127)'}}>
              Back To Login
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default Reset;
  
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
      height:44,
    },
    logo: {
      width: width * 0.5,
      height: height * 0.07,
    },
    welcome: {
      width: width * 1,
      height: height * 0.09,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    middle: {
      width: width * 1,
      height: height * 0.14,
    },
    totalinput: {
      width: width * 1,
      height: height * 0.19,
  
      justifyContent: 'space-evenly',
      alignItems: 'center',
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
  
    inputpaas: {
      width: width * 0.68,
      justifyContent: 'center',
      height: height * 0.07,
      // backgroundColor:'green',
      justifyContent: 'space-evenly',
    },
    all: {
      width: width * 0.9,
      height: height * 0.065,
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
      fontSize: 15,
      fontWeight: 'bold',
    },
    image: {
      width: width * 0.085,
      height: height * 0.03,
      resizeMode: 'contain',
      
    },
   
    sub: {
      width: width * 1,
      height: height * 0.29,
  
      // justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    submit: {
      width: width * 0.9,
      height: height * 0.07,
      borderColor: 'rgb(36,37,38)',
      borderRadius: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgb(237,0,127)',
      top:12,
    },
    last: {
      width: width * 0.5,
      height: height * 0.09,
      borderColor: 'rgb(237,0,127)',
      borderRadius: 7,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });