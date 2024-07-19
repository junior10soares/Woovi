import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: {
        fontSize: themeStyles.fontSizes.medium,
        color: themeStyles.colors.text.disabled,
    },
    value: {
        fontSize: themeStyles.fontSizes.medium,
        color: themeStyles.colors.text.primary,
        fontWeight: 'bold',
    },
});