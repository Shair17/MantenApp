import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export function HeaderLeft() {
  return (
    <View style={styles.contenedor}>
      <MaterialDesignIcons
        name="robot-industrial-outline"
        size={16}
        color="#2563eb"
      />

      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        Mantenimiento de maquinaria pesada
      </Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText} numberOfLines={1}>
          Planta Norte
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1, // Toma todo el espacio disponible hasta chocar con HeaderRight
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    paddingLeft: 8,
    marginRight: 8, // Margen de seguridad con HeaderRight
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    flex: 1, // Le dice al texto que se reduzca según haga falta
    flexShrink: 1,
  },
  badge: {
    backgroundColor: '#dce9ff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    flexShrink: 0, // Evita que la etiqueta "Planta Norte" se deforme
  },
  badgeText: {
    fontSize: 12,
  },
});
