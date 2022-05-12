import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { Routes } from './src/routes/router';
import LoadingSvg from './src/assets/lottie/lf30_editor_ujsvxmpt.json'
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

export default function App() {
  const [loop, setLoop] = useState(true);

  useEffect(
    () => {
      let timer = setTimeout(() => setLoop(false), 5000);
      return () => {
        clearTimeout(timer);
      };
    }, []);

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <>
        <StatusBar barStyle='light-content' />
        <LottieView
          autoPlay
          loop={loop}
          source={LoadingSvg}
          style={{ backgroundColor: "#fff" }}
        />
      </>
    )
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );

}
