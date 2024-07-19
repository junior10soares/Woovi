import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: themeStyles.fontSizes.medium,
        color: themeStyles.colors.text.primary,
    }
});
