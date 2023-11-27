import { useNavigation } from "@react-navigation/native";

import { Container, Logo, BackButton, BackIcon } from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.goBack();
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleBackNavigation}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
