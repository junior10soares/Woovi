import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";


export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    textInput: {
        backgroundColor: themeStyles.colors.background,
        width: '100%',
        height: 44,
    },
});