import {GestureResponderEvent, StyleSheet} from 'react-native'
import {Pressable} from "../ui/Pressable";
import {View} from "../ui/View";
import {Text} from "../ui/Text";

interface IProps {
    label: string;
    className: string;
    onPress?: (e: GestureResponderEvent) => void
}

const Button = (props: IProps) => {
    const { label, className, onPress } = props;
    const defaultClassName = 'rounded-full drop-shadow overflow-hidden '
    const classNames = className ? `${defaultClassName} ${className}` : defaultClassName

    const otherProps: { onPress?: IProps['onPress']} = {

    }

    if (onPress && typeof onPress === 'function') {
        otherProps.onPress = onPress
    }

    return (
        <View className={classNames}>
            <Pressable
                className='py-2 px-8'
                android_ripple={{ color: '#640233' }}
                style={({ pressed }) => {
                    return pressed ? [styles.pressed, styles.container] : styles.container
                }}
                {...otherProps}>
                <Text className='text-white text-center'>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 0,
    },
    pressed: {
        opacity: 0.1,
        backgroundColor: 'red'
    }
})

export default Button