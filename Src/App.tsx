import * as React from 'react';

import { extendTheme, NativeBaseProvider } from "native-base";
import { Button, Text, View,Dimensions,useWindowDimensions, StyleSheet } from 'react-native';
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};


const theme = extendTheme({ colors: newColorTheme });
import App from './Singed';


export default function Main() {
  
const size=useWindowDimensions();
const [orientation,setOrientation]=React.useState("PORTRAIT"); 

React.useEffect(()=>{
Dimensions.addEventListener('change',({window:{width,height}}) => 
{
  if(width<height){
    setOrientation("PORTRAIT");
  }else{

    setOrientation("LANDSCAPE")
  }
})

  })
  return (
    <NativeBaseProvider   theme={theme}>
      <App />
    </NativeBaseProvider>
  );
}