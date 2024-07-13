import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoWoovi from '../../assets/logo.svg';
import { Card } from 'react-native-paper'

export function Home() {
    const { navigate } = useNavigation();
    const translateX = useRef(new Animated.Value(-1000)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const startAnimations = () => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 1000,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true
        }).start(() => {
            pulseAnimation();
        });
    };

    const pulseAnimation = () => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.2,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ]).start(() => {
            setTimeout(() => {
                handleGoCatalog();
            }, 1500);
        });
    };

    const handleGoCatalog = () => {
        navigate('paymentMethod');
    };

    useEffect(() => {
        startAnimations();
    }, []);

    return (
        <Card style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Animated.View style={{ transform: [{ translateX }, { scaleX: scale }, { scaleY: scale }] }}>
                <LogoWoovi width={100} height={100} />
            </Animated.View>
        </Card>
    );
}
