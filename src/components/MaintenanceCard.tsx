import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// Tipos permitidos para las props dinámicas
export type StatusType = 'PENDIENTE' | 'APROBADA' | 'RECHAZADA';
export type PriorityType = 'Alta' | 'Media' | 'Crítica' | 'Baja';
export type MaintenanceType = 'Correctivo' | 'Preventivo';

export interface MaintenanceCardProps {
  solCode: string;
  plantName: string;
  title: string;
  equipmentCode: string;
  maintenanceType: MaintenanceType;
  priority: PriorityType;
  registrationDate: string;
  requestedBy: string;
  status: StatusType;
  onPressDetail?: () => void;
}

export function MaintenanceCard({
  solCode,
  plantName,
  title,
  equipmentCode,
  maintenanceType,
  priority,
  registrationDate,
  requestedBy,
  status,
  onPressDetail,
}: MaintenanceCardProps): React.JSX.Element {
  // Configuración de colores e íconos según el Estado (Status)
  const statusConfig = {
    PENDIENTE: {
      borderTopColor: '#d97706',
      badgeBg: '#ffedd5',
      badgeTextColor: '#9a3412',
      hasDot: false,
      buttonBg: '#000000',
      buttonTextColor: '#ffffff',
    },
    APROBADA: {
      borderTopColor: '#2563eb',
      badgeBg: '#dbeafe',
      badgeTextColor: '#1d4ed8',
      hasDot: true,
      buttonBg: '#e0e7ff',
      buttonTextColor: '#1d4ed8',
    },
    RECHAZADA: {
      borderTopColor: '#dc2626',
      badgeBg: '#fee2e2',
      badgeTextColor: '#991b1b',
      hasDot: true,
      buttonBg: '#e0e7ff',
      buttonTextColor: '#1d4ed8',
    },
  }[status];

  // Configuración de ícono y color según la Prioridad
  const priorityConfig = {
    Alta: { icon: 'alert', color: '#d97706' },
    Media: { icon: 'minus', color: '#6b7280' },
    Crítica: { icon: 'alert-triangle-outline', color: '#dc2626' },
    Baja: { icon: 'arrow-down', color: '#6b7280' },
  }[priority];

  // Configuración de ícono y color según Tipo de Mantenimiento
  const typeConfig = {
    Correctivo: { icon: 'cancel', color: '#dc2626' },
    Preventivo: { icon: 'calendar-text-outline', color: '#2563eb' },
  }[maintenanceType];

  return (
    <View
      style={[styles.card, { borderTopColor: statusConfig.borderTopColor }]}
    >
      {/* HEADER: Código SOL, Planta y Badge de Estado */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.solCode}>{solCode}</Text>
          <View style={styles.plantBadge}>
            <Text style={styles.plantText}>{plantName}</Text>
          </View>
        </View>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusConfig.badgeBg },
          ]}
        >
          {statusConfig.hasDot && (
            <View
              style={[
                styles.dot,
                { backgroundColor: statusConfig.badgeTextColor },
              ]}
            />
          )}
          <Text
            style={[styles.statusText, { color: statusConfig.badgeTextColor }]}
          >
            {status}
          </Text>
        </View>
      </View>

      {/* TÍTULO PRINCIPAL */}
      <Text style={styles.title}>{title}</Text>

      {/* GRID DE DETALLES TÉCNICOS */}
      <View style={styles.infoGrid}>
        <View style={styles.infoCol}>
          <Text style={styles.label}>CÓDIGO EQUIPO</Text>
          <Text style={styles.valueBold}>{equipmentCode}</Text>

          <Text style={[styles.label, styles.marginTopLabel]}>PRIORIDAD</Text>
          <View style={styles.iconValueRow}>
            <MaterialDesignIcons
              name={priorityConfig.icon as any}
              size={16}
              color={priorityConfig.color}
            />
            <Text style={[styles.valueBold, { color: priorityConfig.color }]}>
              {priority}
            </Text>
          </View>
        </View>

        <View style={styles.infoCol}>
          <Text style={styles.label}>TIPO MANTENIMIENTO</Text>
          <View style={styles.iconValueRow}>
            <MaterialDesignIcons
              name={typeConfig.icon as any}
              size={16}
              color={typeConfig.color}
            />
            <Text style={[styles.valueBold, { color: typeConfig.color }]}>
              {maintenanceType}
            </Text>
          </View>

          <Text style={[styles.label, styles.marginTopLabel]}>
            FECHA REGISTRO
          </Text>
          <Text style={styles.valueBold}>{registrationDate}</Text>
        </View>
      </View>

      {/* FOOTER: Solicitante y Botón Ver Detalle */}
      <View style={styles.footer}>
        <View style={styles.requesterContainer}>
          <View style={styles.avatarBg}>
            <MaterialDesignIcons
              name="account-outline"
              size={16}
              color="#6b7280"
            />
          </View>
          <View>
            <Text style={styles.requesterLabel}>Solicitado por</Text>
            <Text style={styles.requesterName}>{requestedBy}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.detailButton,
            { backgroundColor: statusConfig.buttonBg },
          ]}
          onPress={onPressDetail}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.detailButtonText,
              { color: statusConfig.buttonTextColor },
            ]}
          >
            Ver detalle
          </Text>
          <MaterialDesignIcons
            name="chevron-right"
            size={16}
            color={statusConfig.buttonTextColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderTopWidth: 4,
    padding: 14,
    marginBottom: 16,
    // Sombra suave para contenedor elevador
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  solCode: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563eb',
  },
  plantBadge: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  plantText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1e40af',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginTop: 6,
    marginBottom: 12,
  },
  infoGrid: {
    flexDirection: 'row',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 12,
  },
  infoCol: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
  },
  marginTopLabel: {
    marginTop: 10,
  },
  valueBold: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
    marginTop: 2,
  },
  iconValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  requesterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarBg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  requesterLabel: {
    fontSize: 10,
    color: '#64748b',
  },
  requesterName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
  },
  detailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  detailButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
