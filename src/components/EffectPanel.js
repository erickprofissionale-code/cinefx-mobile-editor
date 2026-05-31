import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

const EffectPanel = ({ onSelectEffect, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('optical-flare');

  const effects = {
    'optical-flare': [
      { id: 1, name: 'Classic Flare', icon: '🌟' },
      { id: 2, name: 'Bokeh Light', icon: '💡' },
      { id: 3, name: 'Lens Glow', icon: '✨' },
      { id: 4, name: 'Chromatic Flare', icon: '🌈' },
    ],
    'particles': [
      { id: 5, name: 'Fire', icon: '🔥' },
      { id: 6, name: 'Smoke', icon: '💨' },
      { id: 7, name: 'Rain', icon: '🌧️' },
      { id: 8, name: 'Snow', icon: '❄️' },
    ],
    'filters': [
      { id: 9, name: 'Bloom', icon: '💫' },
      { id: 10, name: 'Motion Blur', icon: '🌀' },
      { id: 11, name: 'Chromatic Aberration', icon: '🎨' },
      { id: 12, name: 'Color Grade', icon: '🎬' },
    ],
  };

  const currentEffects = effects[selectedCategory] || [];

  return (
    <Modal transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Efeitos</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Category Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          {Object.keys(effects).map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryTab,
                selectedCategory === category && styles.categoryTabActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryTabText,
                  selectedCategory === category && styles.categoryTabTextActive,
                ]}
              >
                {category === 'optical-flare'
                  ? 'Optical Flare'
                  : category === 'particles'
                  ? 'Partículas'
                  : 'Filtros'}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Effects Grid */}
        <ScrollView contentContainerStyle={styles.effectsGrid}>
          {currentEffects.map((effect) => (
            <TouchableOpacity
              key={effect.id}
              style={styles.effectCard}
              onPress={() => {
                onSelectEffect(effect);
              }}
            >
              <Text style={styles.effectIcon}>{effect.icon}</Text>
              <Text style={styles.effectName}>{effect.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  closeButton: {
    fontSize: 28,
    color: '#999',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  categoriesScroll: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  categoryTab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#1a1a1a',
  },
  categoryTabActive: {
    backgroundColor: '#00d4ff',
  },
  categoryTabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
  },
  categoryTabTextActive: {
    color: '#000',
  },
  effectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  effectCard: {
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  effectIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  effectName: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default EffectPanel;
