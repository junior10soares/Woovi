import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
    label: string;
    initialValue: string;
    keyboardType?: "default" | "numeric";
    style?: object;
}

export function Input({ label, initialValue, keyboardType = "default", style }: Props) {
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
        <View style={{ paddingHorizontal: 20, marginTop: 10, ...style }}>
            <TextInput
                label={label}
                mode="outlined"
                style={{ backgroundColor: '#FFFFFF', width: '100%', height: 44 }}
                value={value}
                onChangeText={handleChangeText}
                keyboardType={keyboardType === "numeric" ? "numeric" : "default"}
            />
        </View>
    );
}
