/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { StatusBar } from 'react-native';
 import AppLoading from 'expo-app-loading';
 import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
 import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
 
 import Routes from './src/routes';
 
 const App = () => {
   const [fontsLoaded] = useFonts({
     Roboto_400Regular,
     Roboto_500Medium,
     Ubuntu_700Bold
   });

   if(!fontsLoaded){
     return <AppLoading/>
   }

   return (
     <>
       <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
       <Routes />
     </>
   );
 };
 
 export default App;
 