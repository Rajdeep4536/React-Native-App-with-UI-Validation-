import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import { validatePathConfig } from '@react-navigation/native';
  import DatePicker from 'react-native-date-picker';
  const {height, width} = Dimensions.get('window');
  
  const Signup = ({navigation}) => {
    const [checkBox, setCheckBox] = useState(true);
    const [checkBox1, setCheckBox1] = useState(false);
  
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [Password, setPassword] = useState('');
    // const [checkPassword, setCheckPassword] = useState();
    const [errorPassword, setErrorPassword] = useState(null);
    const [username, setUsername] = useState('');
    const [errorUsername, setErrorUsername] = useState(null);
  
    const [date, setDate] = useState('');
    const [errorDate, setErrorDate] = useState(null);
  const [date1, setDate1] = useState(new Date());
  const [open, setOpen] = useState(false);
    const emailValidate = email => {
      var Regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (email === '' || email === undefined || email === null) {
        setErrorEmail('Plese enter email,or phone number');
      } else if (!(Regex.test(email) | phoneRegex.test(email))) {
        setErrorEmail('Plese enter valid email or phone number.');
      } else {
        setErrorEmail(null);
      }
    };
    const _passwordvalidate = pass => {
      var passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (pass === '' || pass === undefined || pass === null) {
        setErrorPassword('Please enter password.');
        // setCheckPassword(false)
      } else if (!passwordRegex.test(pass)) {
        setErrorPassword('Please enter valid password.');
        // setCheckPassword(false)
      } else {
        setErrorPassword(null);
        // setCheckPassword(true)
      }
    };
    const usernameValidate = username => {
      var Regex = /^[a-zA-Z ]{2,40}$/;
      if (username === '' || username === undefined || username === null) {
        setErrorUsername('Please enter username');
      } else if (!Regex.test(username)) {
        setErrorUsername('Please enter valid username');
      } else {
        setErrorUsername(null);
      }
    };
    const dateValidate = date => {
      var Regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
      if (date === '' || date === undefined || date === null) {
        setErrorDate('Please enter start date');
      } else if (!Regex.test(date)) {
        setErrorDate('Please enter valid date');
      } else {
        setErrorDate(null);
      }
    };
  
    const Validate = () => {
      // const Flag=false;
      var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var Regex1 =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let Flag = true;
      if (email === '') {
        setErrorEmail('Please enter email or phone number.');
        //Flag = false;
        // return !Flag;
      } else if (!(Regex1.test(email) | phoneRegex.test(email))) {
        setErrorEmail('Please enter valid email or phone number');
        return !Flag;
        Flag=false;
      } else {
        setErrorEmail(null);
      }
      var Regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (Password === '') {
        setErrorPassword('Please enter password.');
        Flag = false;
        // return !Flag;
      } else if (!Regex2.test(Password)) {
        setErrorPassword('Please enter valid password');
        return !Flag;
      } else {
        setErrorPassword(null);
      }
      var Regex6 = /^[a-zA-Z ]{2,40}$/;
      if (username == '') {
        setErrorUsername('Please enter Username');
        // return !Flag;
      } else if (!Regex6.test(username)) {
        setErrorUsername('Please enter valid username');
        return !Flag;
      } else {
        setErrorUsername(null);
      }
      var Regex7 = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
      if (date === '') {
        setErrorDate('Please enter date');
        // return !Flag;
         Flag = false;
      } else if (!Regex7.test(date)) {
        setErrorDate('Please enter valid date');
        // return !Flag;
        Flag = false;
      }
      // else if(date==dateValidate()){
      //   setErrorDate(null);
      //   return !Flag;
      // }
      else {
        setErrorDate(null);
        // return !Flag;
      }
  
      return Flag;
    };
    const onSubmit = () => {
      if (Validate()) {
        navigation.navigate('Reset');
      } else {
        alert('Something went wrong');
      }
    };
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.head}>
          <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Image style={styles.img} source={require('/Users/mobiloitte/MyProject/src/Images/back.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('/Users/mobiloitte/MyProject/src/Images/search.png')} />
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.welcome}>
            <Text style={{fontSize: 25, color: 'gray', fontWeight: '400'}}>
              Getting Started
            </Text>
            <View
              style={{
                height: height * 0.07,
                width: width * 0.85,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: 'gray', fontWeight: '400'}}>
                Create an account to continue and
              </Text>
            </View>
            <Text style={{fontSize: 14, color: 'gray', fontWeight: '400'}}>
              connect with the people
            </Text>
          </View>
        </View>
        <View style={styles.totalinput}>
          <View style={styles.both}>
            <View style={styles.mail}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  // source={require('../assets/images/mail2.png')}
  
                  source={require('/Users/mobiloitte/MyProject/src/Images/mail2.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your Email or phone number"
                placeholderTextColor={'gray'}
                keyboardType="email-address"
                maxLength={40}
                onChangeText={text => {
                  setEmail(text), emailValidate(text);
                  autoCapitalize='none'
                }}
              />
            </View>
          </View>
          {errorEmail !== null ? (
            <View
              style={{
                // height: height * 0.03,
                height: 15,
                width: width * 0.85,
                // alignSelf: 'center',
                // backgroundColor:'green'
              }}>
              <Text style={{color: 'red'}}> {errorEmail}</Text>
            </View>
          ) : null}
          <View style={styles.both}>
            <View style={styles.mail}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  // source={require('../assets/images/mail.png')}
  
                  source={require('/Users/mobiloitte/MyProject/src/Images/mail.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your name"
                placeholderTextColor={'gray'}
                keyboardType="email-address"
                maxLength={20}
                onChangeText={text => {
                  setUsername(text), usernameValidate(text);
                }}
              />
            </View>
          </View>
          {errorUsername !== null ? (
            <View
              style={{
                // height: height * 0.03,
                height: 15,
                width: width * 0.85,
                // alignSelf: 'center',
              }}>
              <Text style={{color: 'red'}}>{errorUsername}</Text>
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
                placeholder="Create password"
                placeholderTextColor={'gray'}
                secureTextEntry={passwordVisible == false ? true : false}
                keyboardType="default"
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
                    source={require('/Users/mobiloitte/MyProject/src/Images/closeeye.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {errorPassword !== null ? (
            <View
              style={{
                // height: height * 0.025,
                height: 15,
                width: width * 0.85,
                alignSelf: 'center',
              }}>
              <Text style={{color: 'red'}}> {errorPassword}</Text>
            </View>
          ) : null}
          
          <View style={styles.date}>
            <View style={styles.dateinput}>
            
              <TextInput
                style={{
                  fontSize: 14,
                  color: 'gray',
                  fontWeight: 'bold',
                  width: width * 0.78,
                }}
               
                placeholder="DD/MM/YYYY"
                placeholderTextColor={'gray'}
                keyboardType="number-pad"
                maxLength={10}
                onChangeText={text => {
                  setDate(text), dateValidate(text);
                  
                }}
               
              />
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Image
                  style={{width: width * 0.08}}
                  // source={require('../assets/images/date.png')}
                  source={require('/Users/mobiloitte/MyProject/src/Images/date.png')}
                />
    <DatePicker
                modal
                open={open}
                date={date1}
                mode={'date'}
                maximumDate={new Date('2022-06-06')}
                onConfirm={date => {
                  setOpen(false);
                  setDate1(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />

              </TouchableOpacity>
            </View>
          </View>
          {errorDate !== null ? (
            <View
              style={{
                // height: height * 0.02,
                height: 15,
                width: width * 0.85,
                alignSelf: 'center',
  
                //  alignSelf:'center',
                // backgroundColor: 'green',
              }}>
              <Text style={{color: 'red', fontSize: 14}}>{errorDate}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.allcheck}>
          <View style={styles.checkbox}>
            <TouchableOpacity
              onPress={() => {
                setCheckBox(false);
                setCheckBox1(true);
              }}>
              {checkBox == true && (
                <Image
                  style={styles.imagem}
                  source={require('/Users/mobiloitte/MyProject/src/Images/malebox.png')}
                />
              )}
              {checkBox == false && (
                <Image
                  style={styles.imagem}
                  source={require('/Users/mobiloitte/MyProject/src/Images/female.png')}
                />
              )}
            </TouchableOpacity>
            <Text style={{fontSize: 17, color: 'gray', fontWeight: 'bold'}}>
              Male
            </Text>
          </View>
          <View style={styles.checkbox}>
            <TouchableOpacity
              onPress={() => {
                setCheckBox1(false);
                setCheckBox(true);
              }}>
              {checkBox1 == true && (
                <Image
                  style={styles.imagem}
                  // source={require('../assets/images/malebox.png')}
                  source={require('/Users/mobiloitte/MyProject/src/Images/malebox.png')}
                />
              )}
              {checkBox1 == false && (
                <Image
                  style={styles.imagem}
                  // source={require('../assets/images/female.png')}
                  source={require('/Users/mobiloitte/MyProject/src/Images/female.png')}
                />
              )}
            </TouchableOpacity>
            <Text style={{fontSize: 17, color: 'gray', fontWeight: 'bold'}}>
              Female
            </Text>
          </View>
        </View>
        <View style={styles.last}>
          <TouchableOpacity onPress={() => onSubmit()}>
            <View style={styles.sign}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.reg}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>
              if you have already registered?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'rgb(237,0,127)',paddingLeft:11,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Signup;
  
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
      width: width * 0.08,
      height: height * 0.02,
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
      height: height * 0.12,
    },
    totalinput: {
      width: width * 1,
      height: height * 0.4,
  
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    both: {
      width: width * 0.91,
      height: height * 0.07,
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
      width: width * 0.7,
      color: 'gray',
      fontSize: 14,
      fontWeight: 'bold',
    },
    image: {
      width: width * 0.065,
      height: height * 0.03,
      resizeMode: 'contain',
    },
    imagem: {
      width: width * 0.1,
      height: height * 0.1,
      resizeMode: 'contain',
    },
    date: {
      width: width * 0.9,
      height: height * 0.07,
      borderWidth: 0.1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(36,37,38)',
    },
    dateinput: {
      flexDirection: 'row',
      
    },
    allcheck: {
      width: width * 0.8,
      height: height * 0.1,
  
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // alignItems:'center'
    },
    checkbox: {
      width: width * 0.34,
      height: height * 0.07,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    last: {
      width: width * 1,
      height: height * 0.13,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    sign: {
      width: width * 0.9,
      height: height * 0.062,
      borderRadius: 10,
      backgroundColor: 'rgb(237,0,127)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    reg: {
      flexDirection: 'row',
    },
  });
  