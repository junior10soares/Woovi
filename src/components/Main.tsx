import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

import { Checkbox } from './Checkbox';
import { themeStyles } from '../styles/theme';
import { PropsPaymentMethod } from './CardItem';

interface RouteParams {
    method: PropsPaymentMethod
}

export function Main() {

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
        <View style={{ alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Checkbox size={12} isChecked />
                    <View style={{ position: 'relative', backgroundColor: themeStyles.colors.text.secondary, width: 1, height: 13, right: 7, top: 14 }} />
                    <Text style={{ marginLeft: 3 }}>1ª entrada no Pix</Text>
                </View>
                <Text style={{ fontWeight: 'bold' }}>R$ 15.300,00</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Checkbox size={12} isChecked={false} />
                    <Text style={{ marginLeft: 3 }}>2ª no cartão</Text>
                </View>
                <Text style={{ fontWeight: 'bold' }}>{formatCurrency(remainingValue || 0)}</Text>
            </View>

            <View style={{ backgroundColor: themeStyles.colors.text.disabled, width: 345, height: 1, marginTop: 5 }} />


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={{ marginLeft: 3, marginBottom: 6 }}>CET: 0,5%</Text>
                </View>
                <Text style={{ marginLeft: 'auto' }}> {method.title === 'Pix' ? `${method.value}` : method.subtitle}</Text>
            </View>

            <View style={{ backgroundColor: themeStyles.colors.text.disabled, width: 345, height: 1, marginTop: 5 }} />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={{ marginLeft: 3, fontWeight: 'bold', marginBottom: 6 }}>Como funciona?</Text>
                </View>
                <Icon name="arrowup" size={15} color="black" style={{ marginLeft: 'auto' }} />
            </View>

            <View style={{ backgroundColor: themeStyles.colors.text.disabled, width: 345, height: 1, marginTop: 5 }} />


            <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 19 }}>
                <Text style={{ color: themeStyles.colors.text.secondary }}>Identificador:</Text>
                <Text style={{ fontWeight: 'bold' }}>2c1b951f356c4680b13ba1c9fc889c47</Text>
            </View>
        </View>
    );
}
