import { TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';

import {
    Header,
    Title,
    Input,
    ButtonPaper,
    DatePayment,
    Main,
    FooterSvg
} from '../../components';
import { PropsPaymentMethod } from '../../components/CardItem';
interface RouteParams {
    method: PropsPaymentMethod;
}

export function MethodCreditCard() {

    const route = useRoute();
    const { method } = route.params as RouteParams;

    const handlePressButton = () => {
        Toast.show({
            type: 'success',
            text1: 'Pago com sucesso!',
            visibilityTime: 2000,
        });
    };

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Header />
            <View style={{ marginTop: -20 }}>
                <Title title="Pague o restante em 1x no cartão" />

                <Input label='Nome completo' initialValue='João Linaldo Dias Fraga Santos' />
                <Input label='CPF' initialValue='40550350315' keyboardType='numeric' />
                <Input label='Número do cartão' initialValue='40550350315' keyboardType='numeric' />
                <View style={{ flexDirection: 'row' }}>
                    <Input label='Vencimento' initialValue='10/11' keyboardType='numeric' style={{ width: 200 }} />
                    <Input label='CVV' initialValue='405' keyboardType='numeric' style={{ width: 185 }} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Input
                        label='Parcelas'
                        initialValue={`${method.numbers} de ${method.value}`}
                        keyboardType='numeric'
                        style={{ width: 385 }}
                    />
                    <Icon name='arrowdown' size={15} color="black" style={{ marginLeft: -55, top: 8, zIndex: 1, position: 'relative' }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={handlePressButton} style={{ alignItems: 'center' }} activeOpacity={1}>
                        <ButtonPaper title='Pagar' width={350} text={130} />
                    </TouchableOpacity>

                    <DatePayment />

                    <Main />

                    <FooterSvg />
                </View>
            </View>
        </View>
    );
}
