import { StyleSheet, Text, View,SafeAreaView,Dimensions,Image,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
const {height,width} = Dimensions.get("screen");
const Splash = props => {
    useEffect(() => {
      setTimeout(() => {
        props.navigation.navigate('Onboarding');
      },3000);
    });
  return (
    <SafeAreaView>
      <View style={styles.MainView}>
        <TouchableOpacity style={styles.TrTouchable}>
          <Image source={require('/Users/mobiloitte/MyProject/src/Images/Tr.png')} style={styles.TrImg} />
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
      height:height*0.7,
      width:width*0.85,
      justifyContent:"center",
      alignItems:"center",
    //   backgroundColor:"red"
  },
  TrImg:{
      height:100,
      width:300
  }
});