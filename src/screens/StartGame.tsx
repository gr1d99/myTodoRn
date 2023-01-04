import { StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {View, TextInput} from "../ui";

const StartGame = () => {
    return (
        <View className="bg-[#3b021f] mt-16 pb-8 rounded-md items-center mx-4">
            <TextInput
                maxLength={2}
                keyboardType="number-pad"
                className='text-center h-8 border-2 border-transparent border-b-[#ddb52f] my-4 font-bold text-[#ddb52f] mx-2 w-8'
            />
            <View className='flex-row space-x-4 justify-evenly mx-4'>
                <View className='flex-1'>
                    <PrimaryButton label='Reset' />
                </View>
                <View className='flex-1'>
                    <PrimaryButton label='Confirm' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default StartGame