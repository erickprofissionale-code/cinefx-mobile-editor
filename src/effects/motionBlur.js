/**
 * Motion Blur Effect
 * Simulates movement blur based on velocity
 */

export class MotionBlur {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.options = {
      velocity: options.velocity || { x: 5, y: 0 },
      samples: options.samples || 8,
      ...options,
    };
    this.prevFrames = [];
  }

  /**
   * Apply motion blur using frame averaging
   */
  apply(imageData) {
    const { samples } = this.options;
    
    // Store frame
    this.prevFrames.push(imageData);
    if (this.prevFrames.length > samples) {
      this.prevFrames.shift();
    }

    // Average frames
    const width = imageData.width;
    const height = imageData.height;
    const output = new Uint8ClampedArray(imageData.data);

    const frameCount = this.prevFrames.length;
    for (let i = 0; i < output.length; i += 4) {
      let r = 0, g = 0, b = 0, a = 0;

      for (let frame of this.prevFrames) {
        r += frame.data[i];
        g += frame.data[i + 1];
        b += frame.data[i + 2];
        a += frame.data[i + 3];
      }

      output[i] = r / frameCount;
      output[i + 1] = g / frameCount;
      output[i + 2] = b / frameCount;
      output[i + 3] = a / frameCount;
    }

    return new ImageData(output, width, height);
  }

  /**
   * Set blur velocity
   */
  setVelocity(vx, vy) {
    this.options.velocity = { x: vx, y: vy };
  }

  /**
   * Clear frame history
   */
  reset() {
    this.prevFrames = [];
  }
}

export default MotionBlur;
