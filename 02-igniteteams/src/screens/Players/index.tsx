import { useState } from "react";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Filters } from "@components/Filters";
import { FlatList } from "react-native";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [input, setInput] = useState("");
  const [players, setPlayers] = useState([]);

  function handleAdd() {}

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Novo da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" />
        <ButtonIcon icon="add" onPress={handleAdd} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filters
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>0</NumbersOfPlayers>
      </HeaderList>
    </Container>
  );
}
