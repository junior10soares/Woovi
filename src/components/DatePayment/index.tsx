import { View, Text } from "react-native";

import { styles } from "./styles";

export default function DatePayment() {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Prazo de pagamento:</Text>
            <Text style={styles.value}>15/12/2021 - 08:17</Text>
        </View>
    );
}

