import {StyleSheet} from 'react-native'
import {LinearGradient, ImageBackground} from "./ui";

import { registerRootComponent } from "expo"
import StartGame from "./screens/StartGame";

const App = () => {
  return (
    <LinearGradient
        className='pt-16 mx-2 flex-1'
        colors={['#4e0329', '#ddb52f']}>
        <ImageBackground
            source={require('../assets/images/denes-kozma-bOX94WfI4YE-unsplash.jpg')}
            resizeMode={"cover"}
            className='flex-1' imageStyle={styles.backgroundImage}>
            <StartGame />
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    backgroundImage: {
        opacity: 0.15
    }
})

export default registerRootComponent(App)
