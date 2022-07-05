import { StyleSheet, Text, View,SafeAreaView,Dimensions,Image,TouchableOpacity,} from 'react-native'
import React, { useEffect,useState } from 'react'
const {height,width} = Dimensions.get("screen");
const Splash = props => {
  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        props.navigation.navigate('Onboarding');
        setIsVisible(true);
      },3000);
    
    },[]);

  return (
    <SafeAreaView>
      <View style={styles.MainView}>
        <TouchableOpacity style={styles.TrTouchable}>
          <Image source={require('/Users/mobiloitte/MyProject/src/Images/Screenshot_20220623-172318_3-removebg-preview.png')} style={styles.TrImg} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Splash

const styles = StyleSheet.create({
  MainView:{
      height:height*1,
      width:width*1,
    //   backgroundColor:"cyan",
      justifyContent:"center",
      alignItems:"center",
  },
  TrTouchable:{
      height:height*0.04,
      width:width*0.85,
      justifyContent:"center",
      alignItems:"center",
    //   backgroundColor:"red"
  },
  TrImg:{
      height:100,
      width:200
  }
});