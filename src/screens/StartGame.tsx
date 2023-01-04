import {Alert, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {View, TextInput} from "../ui";
import * as React from "react";

interface InitialState {
    number: string
}

const initialState: InitialState = {
    number: ''
}

const init = (initialState: Partial<InitialState>) => {
    return initialState
}

type Action = { type: 'set_number', payload: string} | {type: 'reset', payload: Partial<InitialState>}

const reducer = (state = initialState, action: Action): InitialState => {
    const { type, payload } = action

    switch (type) {
        case 'set_number': {
            return { ...state, number: payload }
        }

        case "reset": {
            const he = init(payload)
            console.log({he})
            return he
        }

        default:
            throw Error(`Invalid action`)
    }
}

interface IProps {
    handleSetPickedNumber: (value: string) => void
}

const StartGame = (props: IProps) => {
    const { handleSetPickedNumber} = props
    const [state, dispatch] = React.useReducer(reducer, initialState, init)

    const handleNumberGuess = (text: string) => {
        dispatch({ type: 'set_number', payload: text })
    }

    const handleResetNumber = () => {
        dispatch({type: 'reset', payload: initialState})
    }

    const handleConfirm = () => {
        const { number } = state;

        if (isNaN(number)) {
            Alert.alert(
                'Invalid Number',
                'Enter a valid number',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: handleResetNumber
                }])
            return
        }

        if (number <= 0) {
            Alert.alert(
                'Invalid Number',
                'Enter a number greater than 0 and less than 99',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: handleResetNumber
                }])
            return;
        }

        handleSetPickedNumber(number)

    }

    return (
        <View className="bg-[#3b021f] mt-16 pb-8 rounded-md items-center mx-4">
            <TextInput
                value={state.number}
                onChangeText={handleNumberGuess}
                maxLength={2}
                keyboardType="number-pad"
                className='text-center h-8 border-2 border-transparent border-b-[#ddb52f] my-4 font-bold text-[#ddb52f] mx-2 w-8'
            />
            <View className='flex-row space-x-4 justify-evenly mx-4'>
                <View className='flex-1'>
                    <PrimaryButton label='Reset' onPress={handleResetNumber} />
                </View>
                <View className='flex-1'>
                    <PrimaryButton label='Confirm' onPress={handleConfirm} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default StartGame