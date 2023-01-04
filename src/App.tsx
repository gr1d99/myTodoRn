import * as React from 'react'
import {StyleSheet} from 'react-native'
import {LinearGradient, ImageBackground} from "./ui";

import { registerRootComponent } from "expo"
import StartGame from "./screens/StartGame";
import {Game} from "./screens/Game";

const App = () => {
    const [userNumber, setUserNumer] = React.useState('')
    const handleSetPickedNumber = (number: string) => {
        setUserNumer(number)
    }
  return (
    <LinearGradient
        className='pt-16 mx-2 flex-1'
        colors={['#4e0329', '#ddb52f']}>
        <ImageBackground
            source={require('../assets/images/denes-kozma-bOX94WfI4YE-unsplash.jpg')}
            resizeMode={"cover"}
            className='flex-1' imageStyle={styles.backgroundImage}>
            {userNumber ? <Game /> : <StartGame handleSetPickedNumber={handleSetPickedNumber} />}
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
