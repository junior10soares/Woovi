import React from 'react';
import { Text, View, TextStyle } from 'react-native';
import { textStyle } from './styles';

interface Props {
    title: string;
    color?: string;
}

export default function TextCashBackAndTotal({ title, color }: Props) {
    const textStyles: TextStyle = textStyle({ color });

    return (
        <View>
            <Text style={textStyles}>
                {title}
            </Text>
        </View>
    );
}
