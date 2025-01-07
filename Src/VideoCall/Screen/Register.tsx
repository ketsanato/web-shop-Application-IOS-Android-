import { Button, Text, View,StyleSheet } from 'react-native';
import {ScrollView,ZStack, Box, Center, NativeBaseProvider,HStack , VStack} from 'native-base';
import Video from 'react-native-video'; 


const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};


export default function App({ navigation }) {
    return (

      
      <NativeBaseProvider config={config}>

      <Center flex={1} px="5">
    


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

