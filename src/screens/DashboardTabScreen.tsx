import React, { useEffect } from 'react';
import { BottomStackParams } from '../navigation/BottomTabsStack';
import { HeaderRight } from '../components/HeaderRight';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<BottomStackParams, 'DashboardTab'>;

export function DashboardTabScreen({ navigation }: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight />,
    });
  }, [navigation]);

  return null;
}
