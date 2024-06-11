import React, {useEffect} from "react"

// modules
import { View } from "react-native";
// styles
import { styles } from "./styles"

// navigators
import {TabScreenProps} from "app/navigators";

// components
import {InfiniteListView} from "./InfiniteListView"
import {HeaderRightView} from "./HeaderRightView";

export const Task1 = ({navigation}: TabScreenProps<"task1">) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRightView />
        })
    }, [])

    return (
        <View style={styles.container}>
            <InfiniteListView />
        </View>
    )
}

