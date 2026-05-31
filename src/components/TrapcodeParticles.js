/**
 * TrapcodeParticles Component
 * Renders particle system on canvas
 */

import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import ParticleSystem from '../effects/particles';

const TrapcodeParticles = ({
  emitterPosition = { x: 0, y: 0 },
  preset = 'fire',
  particleCount = 100,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const particleSystem = new ParticleSystem(canvas, {
      emitterX: emitterPosition.x,
      emitterY: emitterPosition.y,
      particleCount,
    });

    // Apply preset
    switch (preset) {
      case 'fire':
        particleSystem.setFirePreset();
        break;
      case 'smoke':
        particleSystem.setSmokePreset();
        break;
      case 'rain':
        particleSystem.setRainPreset();
        break;
      default:
        break;
    }

    particleSystem.initializeParticles();

    let animationId;
    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastTime;
      lastTime = now;

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particleSystem.animate(deltaTime);

      // Re-initialize particles if depleted
      if (particleSystem.particles.length < particleCount / 2) {
        particleSystem.initializeParticles();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [emitterPosition, preset, particleCount]);

  return <canvas ref={canvasRef} style={styles.canvas} />;
};

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
});

export default TrapcodeParticles;
