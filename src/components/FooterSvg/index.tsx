import { Text, View } from "react-native";

import Footer from '../../assets/footer.svg'
import LogoFooter from '../../assets/logoFooter.svg'
import { styles } from "./styles";

export default function FooterSvg() {

    return (
        <View style={styles.container}>
            <Footer />
            <Text style={styles.logoContainer}>
                <LogoFooter />
            </Text>
        </View>
    );
}
