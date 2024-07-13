import { View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import { StyleSheet } from "react-native";

import { themeStyles } from "../styles/theme";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#03D69D" />
            <Text style={styles.text}>Carregando...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: themeStyles.fontSizes.medium,
        color: themeStyles.colors.text.primary,
    },
});

