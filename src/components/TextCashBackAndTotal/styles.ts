import { TextStyle } from "react-native";
import { themeStyles } from "../../styles/theme";

interface TextStyleProps {
    color?: string;
}

export const textStyle = ({ color }: TextStyleProps): TextStyle => ({
    fontSize: themeStyles.fontSizes.medium,
    fontWeight: '600',
    color: color || themeStyles.colors.text.primary,
    height: 26
});
