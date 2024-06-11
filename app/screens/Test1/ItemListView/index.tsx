import React from "react"

// modules
import {Pressable, View} from "react-native";

// components
import {Text} from "app/components";

// styles
import {styles} from "./styles"

interface Props {
    position: number
}

export const ItemListView = ({position}: Props) => {
    const handleOnPress = () => {
        __DEV__  && console.log("pressed at: ", position)
    }
    return (
        <Pressable onPress={handleOnPress} style={styles.container}>
            <View style={styles.tag}>
                <Text style={styles.label}>{position.toString()}</Text>
            </View>
        </Pressable>
    )
}