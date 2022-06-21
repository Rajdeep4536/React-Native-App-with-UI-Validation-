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
const {height, width} = Dimensions.get('screen');
const Forgot = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  // step 2
  const emailValidate = email => {
    var Regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || email === undefined || email === null) {
      setErrorEmail('*Plese enter email,');
    } else if (!Regex.test(email)) {
      setErrorEmail('*Plese enter valid email.');
    } else {
      setErrorEmail(null);
    }
  };
  //step 3
  const Validate = () => {
    // const Flag=false;
    // var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var Regex1 =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let Flag = true;
    if (email === '') {
      setErrorEmail('Please enter email.');
      // Flag = false;
      return !Flag;
    } else if (!Regex1.test(email)) {
      setErrorEmail('*Please enter valid email');
      return !Flag;
    } else {
      setErrorEmail(null);
    }
    return Flag;
  };
  const onSubmit = () => {
    if (Validate()) {
       navigation.navigate('Otp');
      // alert('Thank you');
    } else {
      alert('something went wrong');
    }
  };
  ///
  return (
    <SafeAreaView style={styles.SAfeView}>
      <View style={styles.MainView}>
        <View style={styles.LogoView}>
          <Image
            source={require('/Users/mobiloitte/MyProject/src/Images/search.png')}
            style={styles.searchImage}
          />
        </View>
        <View style={styles.forgetView}>
          <Text style={styles.forget}>Forget Password</Text>
        </View>
        <View style={styles.EnterView}>
          <Text style={styles.EnterText}>
            Enter you details to recieve a test link
          </Text>
        </View>
        <View style={styles.EmailView}>
          <View style={styles.EmailV}>
            <View style={styles.EmaillogoV}>
              <Image
                source={require('/Users/mobiloitte/MyProject/src/Images/mail2.png')}
                style={styles.emaillogo}
              />
            </View>
            <View style={styles.ETextView}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="rgb(112,112,113)"
                keyboardType="email-address"
                maxLength={30}
                autoCapitalize={false}
                onChangeText={text => {
                  setEmail(text), emailValidate(text);
                }}
                style={styles.emailText}
              />
            </View>
          </View>
          {errorEmail !== null ? (
            <View
              style={{
                height: height * 0.035,
                width: width * 0.85,
                alignSelf: 'center',
              }}>
              <Text style={{color: 'red'}}> {errorEmail}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.sendView}>
          <TouchableOpacity
            style={styles.SendTouchable}
            onPress={() => onSubmit()}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.backView}>
          <TouchableOpacity style={styles.backTouchable}
          onPress={()=>navigation.navigate('Login')}
          >
            <Text style={styles.back}>Back To Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  SAfeView: {
    backgroundColor: 'rgb(16,16,16)',
    height: height * 1,
  },
  MainView: {
    alignItems: 'center',
    height: height * 1,
    width: width * 1,
  },
  LogoView: {
    height: height * 0.2,
    width: width * 1,
    // backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:""
  },
  searchImage: {
    height: 70,
    width: 220,
  },
  forgetView: {
    height: height * 0.07,
    width: width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  forget: {
    color: 'rgb(105,105,105)',
    fontSize: 25,
    fontWeight: '500',
  },
  EnterView: {
    height: height * 0.07,
    width: width * 0.8,
    // justifyContent:"center",
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  EnterText: {
    color: 'rgb(105,105,105)',
    fontSize: 14,
    fontWeight: '500',
  },
  EmailView: {
    height: height * 0.1,
    width: width * 0.85,
    // backgroundColor: 'cyan',
  },
  EmailV: {
    height: height * 0.06,
    width: width * 0.85,
    backgroundColor: 'rgb(36,37,38)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  EmaillogoV: {
    height: height * 0.04,
    width: width * 0.1,
    // backgroundColor:"yellow",
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgb(64,64,64)',
  },
  emaillogo: {
    height: 15,
    width: 20,
  },
  ETextView: {
    height: height * 0.04,
    width: width * 0.7,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  emailText: {
    height: height * 0.04,
    width: width * 0.65,
    // backgroundColor: 'lime',
    fontSize: 16,
    color: 'white',
  },
  sendView: {
    height: height * 0.17,
    width: width * 0.85,
    // backgroundColor:"rgb(230,0,129)"
    // backgroundColor: 'white',
  },
  SendTouchable: {
    height: height * 0.07,
    width: width * 0.85,
    backgroundColor: 'rgb(230,0,129)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    opacity: 1,
  },
  send: {
    color: 'white',
    fontSize: 22,
    fontWeight: '400',
  },
  backView: {
    height: height * 0.1,
    width: width * 0.85,
    // backgroundColor:"cyan",
    alignItems: 'center',
  },
  backTouchable: {
    height: height * 0.07,
    width: width * 0.5,
    borderWidth: 2,
    borderColor: 'rgb(230,0,129)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    opacity: 1,
  },
  back: {
    fontSize: 16,
    color: 'rgb(230,0,129)',
  },
});