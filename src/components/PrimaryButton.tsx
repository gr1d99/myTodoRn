import Button from "./Button";
import React from "react";
import {GestureResponderEvent} from "react-native";

interface IProps {
    label: string;
    onPress?: (e: GestureResponderEvent) => void
}
const PrimaryButton = (props: IProps) => {
    const className = 'bg-[#72063c]'
    const buttonProps = {...props, className}
    return (
        <Button {...buttonProps} />
    )
}

export default PrimaryButton
