import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

import { Container, Content, Icon } from "./styles";

export function AddGroups() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 20, width: "100%" }}
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
