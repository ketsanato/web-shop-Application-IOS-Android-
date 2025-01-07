import { Button, Text, View,StyleSheet, Alert } from 'react-native';
import {ScrollView,ZStack, Box, Center, NativeBaseProvider,HStack , VStack} from 'native-base';
import { Camera,useCameraDevices } from 'react-native-vision-camera';
import React from 'react';


const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};


export default function App({ navigation }) {



    const devices = useCameraDevices();
    const device = devices.back;
 
    const newCameraPermission =  Camera.requestCameraPermission();
   const newMicrophonePermission =  Camera.requestMicrophonePermission();  

React.useEffect(() =>{

console.log(newCameraPermission);

},[]);



    if (device == null)   return    
    <NativeBaseProvider config={config}>

    <Center flex={1} px="5">

    </Center>

</NativeBaseProvider>


    
    return (

      
      <NativeBaseProvider config={config}>

      <Center flex={1} px="5">
    
      <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
 

       photo={true} 
    />

      </Center>

    </NativeBaseProvider>
    );
  }


  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });


