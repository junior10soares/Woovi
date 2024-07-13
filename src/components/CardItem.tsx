import { Card } from 'react-native-paper';
import { Text, View, TouchableOpacity } from 'react-native';

import { Label } from './Label';
import { TextCashBackAndTotal } from './TextCashBackAndTotal';
import { RectangleSvg } from './RectangleSvg';
import { Checkbox } from './Checkbox';

import { themeStyles } from '../styles/theme';

export interface PropsPaymentMethod {
    title?: string;
    width?: number;
    value?: string;
    style?: object;
    numbers: string;
    subtitle: string;
    rectangleTitle?: string;
    isChecked: boolean;
    onChange: () => void;
    color: string;
}

export function CardItem({ title, width, value, style, numbers, subtitle, rectangleTitle, isChecked, onChange, color }: PropsPaymentMethod) {

    const handleCheckboxPress = () => {
        onChange();
    };

    return (
        <TouchableOpacity onPress={handleCheckboxPress} activeOpacity={1}>
            <Card style={{ ...style, marginRight: 20, marginLeft: 20, backgroundColor: themeStyles.colors.background }}>
                <Card.Content style={{
                    borderWidth: 1,
                    borderColor: isChecked ? themeStyles.colors.primary : 'transparent',
                    backgroundColor: isChecked ? '#e6f9e0' : 'transparent',
                }}>
                    <View style={{ height: 20 }}>
                        <Label title={title} width={width} />
                    </View>
                    <View style={{ marginTop: -23, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                fontSize: themeStyles.fontSizes.eLarge,
                                fontWeight: 800
                            }}>
                                {numbers}
                            </Text>
                            <Text style={{
                                fontSize: themeStyles.fontSizes.eLarge,
                                fontWeight: 600,
                                marginLeft: 8
                            }}>
                                {value}
                            </Text>
                        </View>
                        <Checkbox isChecked={isChecked} onChange={onChange} />
                    </View>

                    <TextCashBackAndTotal color={color} title={subtitle} />
                    {rectangleTitle && <RectangleSvg rectangleTitle={rectangleTitle} />}

                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
}
