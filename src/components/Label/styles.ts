import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";


export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: -25,
        backgroundColor: themeStyles.colors.background2,
        borderRadius: 100,
        textAlign: 'center',
        fontSize: themeStyles.fontSizes.medium,
        fontWeight: '800',
    },
});

