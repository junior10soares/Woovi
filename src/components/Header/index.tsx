import { TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import LogoWoovi from '../../assets/logo.svg'
import { styles } from './styles';

export default function Header() {

    const navigation = useNavigation();
    const route = useRoute();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const showBackButton = route.name === 'methodPix' || route.name === 'methodCreditCard'

    return (
        <View style={styles.container}>
            <LogoWoovi />
            {showBackButton && (
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Icon name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
}
