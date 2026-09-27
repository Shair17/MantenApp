import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export function DashboardHero() {
  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.subtitle}>Gestión Operativa</Text>
        <Text style={styles.title}>Solicitudes de{'\n'}mantenimiento</Text>
      </View>

      <View style={styles.badgeWrapper}>
        <View style={styles.badge}>
          <MaterialDesignIcons
            name="clipboard-text-clock-outline"
            size={16}
            color="#2563eb"
          />

          <View>
            <Text style={styles.badgeText}>4</Text>
            <Text style={styles.badgeText}>Registros</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textGroup: {
    flex: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#2563eb',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  badgeWrapper: {
    alignSelf: 'center',
  },
  badge: {
    backgroundColor: '#dce9ff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    flexShrink: 0,
  },
  badgeText: {
    fontWeight: '500',
  },
});
