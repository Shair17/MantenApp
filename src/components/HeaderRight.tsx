import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export function HeaderRight() {
  return (
    <View style={styles.contenedor}>
      <View>
        <MaterialDesignIcons name="bell-outline" size={24} />
      </View>

      <View style={styles.contenedorIcono}>
        <MaterialDesignIcons name="account-outline" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingRight: 8,
    flexShrink: 0, // Garantiza que los íconos de la derecha mantengan su tamaño intacto
  },
  contenedorIcono: {
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 4,
  },
});
