import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/groups';
import { Players } from '@screens/players';
import { NewGroup } from '@screens/newGroup';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator>
      <Screen 
        name="groups"
        component={Groups}
      />

      <Screen 
        name="new"
        component={NewGroup}
      />

      <Screen 
        name="players"
        component={Players}
      />
    </Navigator>
  );
}