import React from 'react';
import { MOCK_MAINTENANCE_REQUESTS } from '../mock/dashboard-data';
import { View } from 'react-native';
import { MaintenanceCard } from './MaintenanceCard';

type Props = {
  search: string;
};

export function MaintenancesList({ search }: Props) {
  const filteredRequests = MOCK_MAINTENANCE_REQUESTS.filter(item => {
    const query = search.toLowerCase().trim();
    if (!query) return true;

    return (
      item.title.toLowerCase().includes(query) ||
      item.equipmentCode.toLowerCase().includes(query) ||
      item.solCode.toLowerCase().includes(query) ||
      item.requestedBy.toLowerCase().includes(query)
    );
  });

  return (
    <View style={{ paddingTop: 12, paddingBottom: 32 }}>
      {filteredRequests.map(item => {
        return <MaintenanceCard key={`${item.solCode}-card`} {...item} />;
      })}
    </View>
  );
}
