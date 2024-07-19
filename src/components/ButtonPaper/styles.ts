import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";

export const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 15,
        backgroundColor: themeStyles.colors.secondary,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        flexDirection: 'row',
    },
    buttonContent: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});