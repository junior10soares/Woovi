import { View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';

import { themeStyles } from "../../styles/theme";
import { styles } from './styles';

export default function Loading() {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={themeStyles.colors.primary} />
            <Text style={styles.text}>Carregando...</Text>
        </View>
    );
};



