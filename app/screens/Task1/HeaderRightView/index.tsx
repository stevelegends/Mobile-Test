import React from "react"

// modules
import {View} from "react-native";

// components
import {Text} from "app/components";

// styles
import {styles} from "./styles"

// store
import {useAppSelector} from "app/store/store";

export const HeaderRightView = () => {
    const page = useAppSelector(state => state.infiniteReducer?.page);
    return (
        <View style={styles.container}>
            <Text tx={"pageNumber"} txOptions={{number: page}} />
        </View>
    )
}