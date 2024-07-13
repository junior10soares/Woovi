import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { FooterSvg } from '../../components/FooterSvg';
import { themeStyles } from '../../styles/theme';
import { CardItem } from '../../components/CardItem';
import { paymentMethods } from '../../utils/CardItens';
import { useNavigation } from '@react-navigation/native';

export function PaymentMethod() {

    const navigation = useNavigation()

    const [methods, setMethods] = useState(() =>
        paymentMethods.map(method => ({
            ...method,
            isChecked: false,
            color: method.color || themeStyles.colors.secondary,
            rectangleTitle: method.rectangleTitle || '',
        }))
    );

    const handleCheckboxChange = (index: number) => {
        const updatedMethods = [...methods];
        updatedMethods[index] = {
            ...updatedMethods[index],
            isChecked: !updatedMethods[index].isChecked,
        };

        if (updatedMethods[index].title === 'Pix') {
            setTimeout(() => {
                navigation.navigate('methodPix', { method: updatedMethods[index] });
            }, 300);
        } else {
            setTimeout(() => {
                navigation.navigate('methodCreditCard', { method: updatedMethods[index] });
            }, 300);
        }

        setMethods(updatedMethods);
    };


    const renderItem = ({ item, index }: { item: typeof methods[number]; index: number }) => (
        <CardItem
            title={item.title}
            width={item.width}
            style={{ marginBottom: index === 0 ? 20 : 0 }}
            value={item.value}
            numbers={item.numbers}
            subtitle={item.subtitle}
            rectangleTitle={item.rectangleTitle}
            color={index === 0 ? themeStyles.colors.primary : themeStyles.colors.text.secondary}
            isChecked={item.isChecked}
            onChange={() => handleCheckboxChange(index)}
        />
    );

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const resetMethods = methods.map(method => ({
                ...method,
                isChecked: false,
            }));
            setMethods(resetMethods);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={{ backgroundColor: themeStyles.colors.background, flex: 1 }}>
            <Header />
            <Title title="Como você quer pagar?" />

            <FlatList
                data={methods}
                style={{ marginTop: -20 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
            />

            <FooterSvg />
        </View>
    );
}
