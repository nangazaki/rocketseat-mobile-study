import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { AddGroups } from "@screens/AddGroups";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="addgroups" component={AddGroups} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
