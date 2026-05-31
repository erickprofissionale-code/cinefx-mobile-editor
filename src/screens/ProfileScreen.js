import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.name}>Usuário CineFX</Text>
        <Text style={styles.email}>user@cinefx.app</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        <MenuItem icon="🎨" title="Tema" value="Escuro" />
        <MenuItem icon="🔔" title="Notificações" value="Ativadas" />
        <MenuItem icon="💾" title="Armazenamento" value="2.3GB/10GB" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre</Text>
        <MenuItem icon="ℹ️" title="Versão" value="1.0.0" />
        <MenuItem icon="📱" title="Dispositivo" value="iOS" />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon, title, value }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuIcon}>{icon}</Text>
    <View style={styles.menuText}>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00d4ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  email: {
    fontSize: 13,
    color: '#999',
    marginTop: 5,
  },
  section: {
    paddingHorizontal: 20,
    marginVertical: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  menuValue: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
  },
  logoutButton: {
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 14,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ProfileScreen;
