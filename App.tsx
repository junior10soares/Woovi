import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Routes } from './src/routes';
import { themeStyles } from './src/styles/theme';
import { Nunito_600SemiBold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import Loading from './src/components/Loading';
import Toast from 'react-native-toast-message';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <PaperProvider theme={themeStyles}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
      <Toast />
    </PaperProvider>
  );
}
