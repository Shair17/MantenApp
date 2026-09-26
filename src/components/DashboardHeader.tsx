import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { getDefaultHeaderHeight } from '@react-navigation/elements';

export function DashboardHeader(props: BottomTabHeaderProps) {
  const headerHeight = getDefaultHeaderHeight(props.layout, false, 0);

  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight, backgroundColor: '#fff' }}
    >
      <View style={[styles.headerContainer, { height: headerHeight }]}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View style={styles.leftContainer}>
            <MaterialDesignIcons
              name="robot-industrial-outline"
              size={20}
              color="#2563eb"
              style={styles.iconFixed}
            />

            <Text
              style={styles.titleText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Mantenimiento de maquinaria pesada
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText} numberOfLines={1}>
                Planta Norte
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text>Carlos Mendoza</Text>
            <Text> · </Text>
            <Text>Resp. Mantenimiento</Text>
          </View>
        </View>

        {/* SECCIÓN DERECHA */}
        <View style={styles.rightContainer}>
          <MaterialDesignIcons name="bell-outline" size={24} color="#000" />

          <View style={styles.avatarContainer}>
            <MaterialDesignIcons
              name="account-outline"
              size={20}
              color="#fff"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginRight: 10,
  },
  iconFixed: {
    flexShrink: 0,
  },
  titleText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
    flex: 1,
  },
  badge: {
    backgroundColor: '#dce9ff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    flexShrink: 0,
  },
  badgeText: {
    fontSize: 12,
    color: '#1e40af',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexShrink: 0,
  },
  avatarContainer: {
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 4,
  },
});
