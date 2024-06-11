import React from "react"

// modules
import {ActivityIndicator} from "react-native";

// theme
import {colors} from "app/theme";

interface Props {
    color?: string
}

export const Indicator = ({color = colors.palette.neutral500}: Props) => {
    return <ActivityIndicator color={color} />
}