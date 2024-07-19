import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles";

interface Props {
    title: string;
    icon?: string;
    width: number;
    text: number;
}

export default function ButtonPaper({ title, icon, width, text }: Props) {

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
