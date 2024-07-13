import { DefaultTheme } from "react-native-paper";

export const themeStyles = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#03D69D',
        secondary: '#133A6F',
        text: {
            primary: '#4D4D4D',
            secondary: '#AFAFAF',
            disabled: '#B2B2B2',
        },
        background: '#FFFFFF',
        background2: '#E5E5E5'
    },
    fontSizes: {
        medium: 14,
        large: 16,
        eLarge: 18,
    },
    regular: {
        fontFamily: 'Nunito_600SemiBold',
        fontWeight: '600',
    },
    medium: {
        fontFamily: 'Nunito_800ExtraBold',
        fontWeight: '800',
    }
};