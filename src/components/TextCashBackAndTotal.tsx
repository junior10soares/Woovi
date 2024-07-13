import { Text, TextStyle, View } from "react-native";

import { themeStyles } from "../styles/theme";

interface Props {
    title: string;
    color?: string;
}

export function TextCashBackAndTotal({ title, color }: Props) {

    const textStyle: TextStyle = {
        fontSize: themeStyles.fontSizes.medium,
        fontWeight: '600',
        color: color,
        height: 26
    };

    return (
        <View>
            <Text style={textStyle}>
                {title}
            </Text>
        </View>
    );
}
