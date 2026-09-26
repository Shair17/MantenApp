import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardTabScreen } from '../screens/DashboardTabScreen';
import { RequestsTabScreen } from '../screens/RequestsTabScreen';
import { NewTabScreen } from '../screens/NewTabScreen';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';

export type BottomStackParams = {
  DashboardTab: undefined;
  RequestsTab: undefined;
  NewTab: undefined;
};

export const BottomStack = createBottomTabNavigator<BottomStackParams>();

export function BottomTabsStack() {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
        name="DashboardTab"
        component={DashboardTabScreen}
        options={{
          title: 'Dashboard',
          tabBarLabel: 'Dashboard',
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon(props) {
            return (
              <MaterialIcons
                name={
                  props.focused ? 'view-dashboard' : 'view-dashboard-outline'
                }
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <BottomStack.Screen
        name="RequestsTab"
        component={RequestsTabScreen}
        options={{
          title: 'Solicitudes',
          tabBarLabel: 'Solicitudes',
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon(props) {
            return (
              <MaterialIcons
                name={
                  props.focused ? 'clipboard-text' : 'clipboard-text-outline'
                }
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <BottomStack.Screen
        name="NewTab"
        component={NewTabScreen}
        options={{
          title: 'Nueva',
          tabBarLabel: 'Nueva',
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon(props) {
            return (
              <MaterialIcons
                name={props.focused ? 'plus-circle' : 'plus-circle-outline'}
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
    </BottomStack.Navigator>
  );
}
