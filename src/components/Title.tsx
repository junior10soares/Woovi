import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

import { themeStyles } from "../styles/theme";

interface PropsTitle {
    title: string
}

export function Title({ title }: PropsTitle) {

    return (
        <Text style={styles.text}>
            {`João, ${title}`}
        </Text>
    )
}

const styles = StyleSheet.create({
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