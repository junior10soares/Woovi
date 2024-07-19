import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
    title?: string
    width?: number
}
export default function Label({ title, width }: Props) {

    if (!title) {
        return null
    }

    return (
        <View>
            <Text style={[styles.container, { width: width }]}>
                {title}
            </Text>
        </View>
    );
}