import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

import { themeStyles } from "../styles/theme";

export function DatePayment() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Prazo de pagamento:</Text>
            <Text style={styles.value}>15/12/2021 - 08:17</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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