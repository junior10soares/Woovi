import { Text, View } from "react-native";

import { themeStyles } from "../styles/theme";
import Footer from '../assets/footer.svg'
import LogoFooter from '../assets/logoFooter.svg'

export function FooterSvg() {
    return (
        <View
            style={{
                marginTop: 8,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Footer />
            <Text
                style={{
                    marginLeft: -55,
                    color: themeStyles.colors.text.primary
                }}>
                <LogoFooter />
            </Text>
        </View>
    )
}
