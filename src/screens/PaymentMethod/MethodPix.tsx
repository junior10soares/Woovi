import { View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Qrcode from '../../assets/qrcode.svg';
import { ButtonPaper } from '../../components/ButtonPaper';
import { DatePayment } from '../../components/DatePayment';
import { FooterSvg } from '../../components/FooterSvg';
import { themeStyles } from '../../styles/theme';
import { Main } from '../../components/Main';
import { Header } from '../../components/Header';
import { PropsPaymentMethod } from '../../components/CardItem';
import { Title } from '../../components/Title';

interface RouteParams {
    method: PropsPaymentMethod;
}

export function MethodPix() {
    const route = useRoute();
    const { method } = route.params as RouteParams;

    const handlePressButton = () => {
        Toast.show({
            type: 'success',
            text1: 'Qrcode Copiado com sucesso!',
            visibilityTime: 2000,
        });
    };

    console.log('Dados recebidos em method:', method);

    return (
        <View style={{ alignItems: 'center', backgroundColor: themeStyles.colors.background }}>
            <Header />
            <View style={{ marginTop: -20, alignItems: 'center' }}>
                <Title title={`Pague a entrada de ${method.value} pelo ${method.title}`} />

                <Qrcode />

                <TouchableOpacity onPress={handlePressButton} activeOpacity={1}>
                    <ButtonPaper title="Clique para copiar QR CODE" icon="copy1" text={16} width={280} />
                </TouchableOpacity>

                <DatePayment />

                <Main />

                <FooterSvg />
            </View>
        </View>
    );
}
