import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import { styles } from "./styles";

interface Props {
    label: string;
    initialValue: string;
    keyboardType?: "default" | "numeric";
    style?: object;
}

export default function Input({ label, initialValue, keyboardType = "default", style }: Props) {

    const [value, setValue] = useState(initialValue);

    const handleChangeText = (text: string) => {
        if (keyboardType === "numeric") {
            const numericValue = text.replace(/[^0-9]/g, "");
            setValue(numericValue);
        } else {
            setValue(text);
        }
    };

    return (
        <View style={[styles.container, style]}>
            <TextInput
                label={label}
                mode="outlined"
                style={styles.textInput}
                value={value}
                onChangeText={handleChangeText}
                keyboardType={keyboardType === 'numeric' ? 'numeric' : 'default'}
            />
        </View>
    );
}
