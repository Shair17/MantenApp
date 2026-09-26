import React from 'react';
import { View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export function HeaderRight() {
  return (
    <View>
      <View>
        <MaterialDesignIcons name="bell-outline" size={24} />
      </View>

      <View>
        <MaterialDesignIcons name="person" size={24} />
      </View>
    </View>
  );
}
