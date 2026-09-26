import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabsStack } from './BottomTabsStack';
import { DetailsStack } from './DetailsStack';

export type RootStackParams = {
  BottomTabsStack: undefined;
  DetailsStack: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParams>();

export function RootNavigation() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabsStack"
        component={BottomTabsStack}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="DetailsStack" component={DetailsStack} />
    </RootStack.Navigator>
  );
}
