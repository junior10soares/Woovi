import { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Icon } from 'react-native-elements';

import { themeStyles } from '../../styles/theme';
import { styles } from './styles';

interface Props {
    isChecked: boolean;
    onChange?: () => void;
    size?: number;
}

export default function Checkbox({ isChecked, onChange, size = 25 }: Props) {
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

    const checkboxStyles = styles(size);

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[
                checkboxStyles.checkbox,
                isChecked ? checkboxStyles.checkboxChecked : checkboxStyles.checkboxUnchecked,
            ]}
        >
            {isChecked && (
                <Icon name="check" size={size * 0.6} color={themeStyles.colors.background} />
            )}
        </TouchableOpacity>
    );
}
