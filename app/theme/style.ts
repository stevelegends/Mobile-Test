import { StyleSheet } from "react-native";
import {colors} from "app/theme/colors";

export const style = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    listFooter: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        justifyContent: "center",
    },
    separatorGrey: {
        backgroundColor: colors.separator,
        height: 1,
    }
})