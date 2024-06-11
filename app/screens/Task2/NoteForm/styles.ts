import {StyleSheet} from 'react-native';

// theme
import {colors, spacing} from "app/theme";

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginTop: spacing.md,
    },
    container: {
        backgroundColor: colors.palette.neutral100,
        padding: spacing.md,
        position: "absolute",
        width: "100%"
    }
})