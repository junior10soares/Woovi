import { TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import LogoWoovi from '../assets/logo.svg'

export function Header() {
    const navigation = useNavigation();
    const route = useRoute();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const showBackButton = route.name === 'methodPix' || route.name === 'methodCreditCard'

    return (
        <View style={{ alignItems: 'center', marginTop: 36 }}>
            <LogoWoovi />
            {showBackButton && (
                <TouchableOpacity onPress={handleGoBack} style={{ position: 'relative', bottom: 25, right: 150 }}>
                    <Icon name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
}
