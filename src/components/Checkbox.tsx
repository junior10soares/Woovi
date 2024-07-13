import { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Icon } from 'react-native-elements';

import { themeStyles } from '../styles/theme';

interface Props {
    isChecked: boolean;
    onChange?: () => void;
    size?: number;
}

export function Checkbox({ isChecked, onChange, size = 25 }: Props) {
    const [scaleValue] = useState(new Animated.Value(1));

    const handlePress = () => {
        onChange?.();

        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 2,
                backgroundColor: isChecked ? themeStyles.colors.primary : 'transparent',
                borderColor: isChecked ? themeStyles.colors.primary : themeStyles.colors.text.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{ scale: scaleValue }],
            }}
        >
            {isChecked && (
                <Icon name="check" size={size * 0.6} color={themeStyles.colors.background} />
            )}
        </TouchableOpacity>
    );
}
