import { StyleSheet } from "react-native";
import { themeStyles } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    divider: {
        backgroundColor: themeStyles.colors.text.disabled,
        width: 345,
        height: 1,
        marginTop: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    infoText: {
        marginLeft: 3,
    },
    boldText: {
        fontWeight: 'bold',
    },
    iconStyle: {
        marginLeft: 'auto',
    },
    identifierContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 19,
    },
});