import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState([]);

  const navigation = useNavigation();

  function handleAddGroups() {
    navigation.navigate("addgroups");
  }

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com suas turmas" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={
          <ListEmpty message="Que tal Cadastrar a primeira Turma?" />
        }
      />

      <Button title="Criar nova turma" onPress={handleAddGroups} />
    </Container>
  );
}
