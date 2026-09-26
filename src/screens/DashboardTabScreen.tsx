import React, { useEffect } from 'react';
import { BottomStackParams } from '../navigation/BottomTabsStack';
import { HeaderRight } from '../components/HeaderRight';
import { HeaderLeft } from '../components/HeaderLeft';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DashboardHeader } from '../components/DashboardHeader';

type Props = BottomTabScreenProps<BottomStackParams, 'DashboardTab'>;

export function DashboardTabScreen({ navigation }: Props) {
  useEffect(() => {
    navigation.setOptions({
      // headerTitle: '',
      // headerLeft: () => <HeaderLeft />,
      // headerRight: () => <HeaderRight />,
      header: props => <DashboardHeader {...props} />,
    });
  }, [navigation]);

  return null;
}
