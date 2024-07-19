import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";

export const styles = (size: number) => StyleSheet.create({
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: size / 2,
        width: size,
        height: size,
    },
    checkboxChecked: {
        backgroundColor: themeStyles.colors.primary,
        borderColor: themeStyles.colors.primary,
    },
    checkboxUnchecked: {
        backgroundColor: 'transparent',
        borderColor: themeStyles.colors.text.secondary,
    },
});
