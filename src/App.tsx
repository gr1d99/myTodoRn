import {View} from "./ui/View";

import { registerRootComponent } from "expo"
import { StatusBar } from 'expo-status-bar';
import StartGame from "./screens/StartGame";

const App = () => {
  return (
    <View className='pt-16 mx-2 h-screen'>
      <StartGame />
      <StatusBar style="auto" />
    </View>
  );
}

export default registerRootComponent(App)
