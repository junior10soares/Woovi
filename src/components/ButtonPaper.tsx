import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import { themeStyles } from "../styles/theme";

interface Props {
    title: string;
    icon?: string;
    width: number;
    text: number;
}

export function ButtonPaper({ title, icon, width, text }: Props) {

    return (
        <Button
            mode="contained"
            style={[styles.buttonContainer, { width }]}
            contentStyle={[styles.buttonContent, { paddingHorizontal: text }]}
        >
            <>{title}</>
            {icon && <Icon name={icon} size={15} color="white" />}
        </Button>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 15,
        backgroundColor: themeStyles.colors.secondary,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        flexDirection: 'row',
    },
    buttonContent: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
