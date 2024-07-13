import { Text, View } from "react-native";

import { themeStyles } from "../styles/theme";

interface Props {
    title?: string
    width?: number
}
export function Label({ title, width }: Props) {

    if (!title) {
        return null
    }

    return (
        <View>
            <Text
                style={{
                    position: 'relative',
                    top: -25,
                    backgroundColor: themeStyles.colors.background2,
                    borderRadius: 100, width: width,
                    textAlign: 'center',
                    fontSize: themeStyles.fontSizes.medium,
                    fontWeight: 800
                }}
            >
                {title}
            </Text>
        </View>
    )
}