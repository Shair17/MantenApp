import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export function DashboardStatusFilters() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.item}>
          <View style={styles.itemIndicator} />

          <Text style={styles.itemText}>Todas</Text>

          <View style={styles.itemBadge}>
            <Text style={styles.itemBadgeText}>4</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.itemIndicator} />

          <Text style={styles.itemText}>Pendientes</Text>

          <View style={styles.itemBadge}>
            <Text style={styles.itemBadgeText}>4</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.itemIndicator} />

          <Text style={styles.itemText}>Aprobadas</Text>

          <View style={styles.itemBadge}>
            <Text style={styles.itemBadgeText}>4</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.itemIndicator} />

          <Text style={styles.itemText}>Rechazadas</Text>

          <View style={styles.itemBadge}>
            <Text style={styles.itemBadgeText}>4</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  item: {
    backgroundColor: '#000',
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
    gap: 4,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  itemIndicator: {
    alignSelf: 'center',
    backgroundColor: 'yellow',
    width: 5,
    height: 5,
    borderRadius: 50,
  },
  itemText: {
    color: '#fff',
    fontWeight: '500',
  },
  itemBadge: {
    backgroundColor: '#2a2e33',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemBadgeText: {
    color: '#fff',
  },
});
