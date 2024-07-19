import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

import { themeStyles } from '../../styles/theme';
import { PropsPaymentMethod } from '../CardItem';
import Checkbox from '../Checkbox';
import { styles } from './styles';

interface RouteParams {
    method: PropsPaymentMethod
}

export default function Main() {

    const route = useRoute();
    const { method } = route.params as RouteParams;

    const extractNumericValue = (subtitle: string): number | null => {
        const match = subtitle.match(/\d+(\.\d+)?/);
        if (match) {
            return parseFloat(match[0].replace(/\./g, '').replace(',', '.'));
        }
        return null;
    };

    const calculateRemainingValue = (subtitle: string): number | null => {
        const numericValue = extractNumericValue(subtitle);
        if (numericValue !== null) {
            return numericValue - 15300;
        }
        return null;
    };

    const formatCurrency = (value: number): string => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const remainingValue = method.title === 'Pix' ? 15300 : calculateRemainingValue(method.subtitle);

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={[styles.rowContainer, { flex: 1 }]}>
                    <Checkbox size={12} isChecked />
                    <View style={{ position: 'relative', backgroundColor: themeStyles.colors.text.secondary, width: 1, height: 13, right: 7, top: 14 }} />
                    <Text style={styles.infoText}>1ª entrada no Pix</Text>
                </View>
                <Text style={styles.boldText}>R$ 15.300,00</Text>
            </View>

            <View style={styles.rowContainer}>
                <View style={[styles.rowContainer, { flex: 1 }]}>
                    <Checkbox size={12} isChecked={false} />
                    <Text style={styles.infoText}>2ª no cartão</Text>
                </View>
                <Text style={styles.boldText}>{formatCurrency(remainingValue || 0)}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoContainer}>
                <View style={[styles.infoContainer, { flex: 1 }]}>
                    <Text style={[styles.infoText, styles.boldText, { marginBottom: 6 }]}>CET: 0,5%</Text>
                </View>
                <Text style={styles.infoText}>{method.title === 'Pix' ? `${method.value}` : method.subtitle}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoContainer}>
                <View style={[styles.infoContainer, { flex: 1 }]}>
                    <Text style={[styles.infoText, styles.boldText, { marginBottom: 6 }]}>Como funciona?</Text>
                </View>
                <Icon name="arrowup" size={15} color="black" style={styles.iconStyle} />
            </View>

            <View style={styles.divider} />

            <View style={styles.identifierContainer}>
                <Text style={{ color: themeStyles.colors.text.secondary }}>Identificador:</Text>
                <Text style={styles.boldText}>2c1b951f356c4680b13ba1c9fc889c47</Text>
            </View>
        </View>
    );
}
