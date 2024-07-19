import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";

export const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        color: themeStyles.colors.text.primary,
        fontSize: themeStyles.fontSizes.medium,
        fontWeight: "800",
        fontFamily: themeStyles.regular.fontFamily,
        marginTop: 25,
        paddingBottom: 20,
    },
});