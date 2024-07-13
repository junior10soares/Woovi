import Svg, { Path, Text } from 'react-native-svg';
import { View } from 'react-native';

import { themeStyles } from '../styles/theme';

type Props = {
    rectangleTitle?: string,
}

export const RectangleSvg = ({ rectangleTitle }: Props) => {

    return (
        <View style={{ marginTop: -5 }}>
            <Svg width="328" height="25" viewBox="0 0 470 28" fill="none">
                <Path
                    d="M0 4C0 1.79086 1.79086 0 4 0H382.073C383.869 0 384.755 2.18257 383.467 3.43408L371.502 15.0659C370.694 15.8513 370.694 17.1487 371.502 17.9341L383.467 29.5659C384.755 30.8174 383.869 33 382.073 33H4C1.79086 33 0 31.2091 0 29V4Z"
                    fill="#133A6F"
                />
                <Text
                    x="32%"
                    y="30%"
                    fontSize={themeStyles.fontSizes.medium}
                    fill={themeStyles.colors.background}
                    textAnchor="middle"
                    alignmentBaseline="center"
                >
                    {rectangleTitle}
                </Text>
            </Svg>
        </View>
    );
};
