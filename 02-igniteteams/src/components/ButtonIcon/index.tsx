import { MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlightProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableHighlightProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <>
      <Container {...rest}>
        <Icon name={icon} type={type} />
      </Container>
    </>
  );
}
