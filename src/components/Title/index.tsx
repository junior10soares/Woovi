import { Text } from "react-native-paper";

import { styles } from "./styles";

interface PropsTitle {
    title: string
}

export default function Title({ title }: PropsTitle) {

    return (
        <Text style={styles.text}>
            {`João, ${title}`}
        </Text>
    )
}
