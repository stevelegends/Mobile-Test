import { StyleSheet } from "react-native";

// theme
import {colors} from "app/theme/colors";
import {spacing} from "app/theme/spacing";

export const style = StyleSheet.create({
    buttonSize: {
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        width: 50
    },
    flex1: {
        flex: 1,
    },
    listFooter: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
    },
    separatorGrey: {
        backgroundColor: colors.separator,
        height: 1,
    },
    spaceSM: {
        height: spacing.sm,
        width: spacing.sm
    },
    "width100%": {
      width: "100%",
    }
})