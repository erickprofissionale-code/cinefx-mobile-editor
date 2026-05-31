# CineFX - Setup Guide

## 🚀 Installation

### Prerequisites
- Node.js 14+ 
- npm ou yarn
- Expo CLI

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/erickprofissionale-code/cinefx-mobile-editor.git
cd cinefx-mobile-editor

# 2. Install dependencies
npm install

# 3. Start the app
npm start

# 4. Run on your device
npm run ios    # iOS
npm run android # Android
```

## 📱 Features Implemented

### ✨ Optical Flare Effect
- Realistic lens flares with multiple elements
- Customizable glow, streaks, and rings
- Position and intensity animation
- Pre-built presets

### ✨ Trapcode Particular
- 3D particle system with physics
- Multiple emitter shapes (point, sphere, box)
- Pre-built presets: Fire, Smoke, Rain, Snow
- Physics simulation: gravity, wind, turbulence

### 🎨 Visual Effects
- **Bloom** - Glow effect for bright areas
- **Chromatic Aberration** - Color channel separation
- **Motion Blur** - Temporal blur from movement
- **Color Grading** - Professional color correction

### 🎬 Editor Features
- Multi-layer timeline
- Real-time preview
- Non-destructive editing
- Project management
- Video export (MP4, MOV, WebM)

## 🎮 Usage

### Create a Project
1. Tap "Novo Projeto" on home screen
2. Select video clips from media library
3. Add clips to timeline
4. Apply effects using the Effects panel

### Apply Effects
1. Select a clip in timeline
2. Tap "Efeitos" in tool dock
3. Choose effect category (Optical Flare, Particles, Filters)
4. Tap effect to apply
5. Adjust settings in real-time

### Export Video
1. Tap "Exportar" button
2. Select quality (720p, 1080p, 4K)
3. Choose format (MP4, MOV, WebM)
4. Tap "Exportar" to process
5. Video saves to device

## 🏗️ Architecture

```
src/
├── screens/           # UI screens
├── components/        # Reusable components
├── effects/          # Effect implementations
├── rendering/        # Rendering engine
├── store/            # State management
├── utils/            # Utility functions
└── shaders/          # GLSL shaders
```

## 🔧 Configuration

### Video Export Settings
- **Quality Options**: 720p, 1080p, 4K
- **Formats**: MP4, MOV, WebM
- **Bitrate**: 5000k (default)
- **Frame Rate**: 30fps (configurable)

### Effect Parameters
Each effect has customizable parameters:
- Optical Flare: intensity, size, color, position
- Particles: count, lifetime, velocity, gravity
- Bloom: intensity, radius, threshold
- Chromatic Aberration: intensity
- Motion Blur: velocity, samples

## 📚 Technologies

- React Native + Expo
- Zustand (state management)
- WebGL (GPU rendering)
- FFmpeg (video processing)
- React Navigation
- Reanimated 3

## 🐛 Troubleshooting

### App won't start
```bash
npm install
npm start
```

### Effects not rendering
- Check WebGL support on device
- Verify shader compilation in console
- Test on different device

### Export fails
- Check disk space
- Verify video file format
- Check FFmpeg availability

## 📖 Documentation

For detailed API documentation, see individual files:
- `src/effects/opticalFlare.js` - Optical Flare API
- `src/effects/particles.js` - Particle System API
- `src/effects/bloom.js` - Bloom Effect API
- `src/utils/videoProcessor.js` - Export API

## 📄 License

MIT License - See LICENSE file

## 👨‍💻 Author

erickprofissionale-code
