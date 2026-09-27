import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BottomStackParams } from '../navigation/BottomTabsStack';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardHero } from '../components/DashboardHero';
import { DashboardStatusFilters } from '../components/DashboardStatusFilters';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DashboardFilters } from '../components/DashboardFilters';
import { MaintenancesList } from '../components/MaintenancesList';

type Props = BottomTabScreenProps<BottomStackParams, 'DashboardTab'>;

export function DashboardTabScreen({ navigation }: Props) {
  const [filters, setFilters] = useState({
    search: '',
  });

  useEffect(() => {
    navigation.setOptions({
      header: props => <DashboardHeader {...props} />,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <DashboardHero />

      <DashboardStatusFilters />

      <DashboardFilters
        value={filters.search}
        onChangeText={text => setFilters({ ...filters, search: text })}
      />

      <MaintenancesList search={filters.search} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
