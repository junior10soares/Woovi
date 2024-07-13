import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "../screens/Home"
import { PaymentMethod } from "../screens/PaymentMethod/PaymentMethod"
import { MethodPix } from "../screens/PaymentMethod/MethodPix"
import { MethodCreditCard } from "../screens/PaymentMethod/MethodCreditCard"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="paymentMethod"
                component={PaymentMethod}
            />
            <Screen
                name="methodPix"
                component={MethodPix}
            />
            <Screen
                name="methodCreditCard"
                component={MethodCreditCard}
            />
        </Navigator>
    )
}