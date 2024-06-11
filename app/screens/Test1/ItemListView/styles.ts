import {StyleSheet} from 'react-native';

// theme
import {colors, spacing} from "app/theme";

export const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.palette.neutral100,
        flexDirection: "row",
        height: 100,
        justifyContent: "center",
        width: '100%'
    },
    label: {
        fontSize: 18,
    },
    tag: {
        alignSelf: "center",
        backgroundColor: colors.palette.primary100,
        borderRadius: 3,
        marginLeft: spacing.sm,
        marginTop: spacing.sm,
        paddingHorizontal: spacing.xxs,
    }
})