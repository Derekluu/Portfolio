// Import the particle cursor library
import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// Initialize the particle system
const pc = particlesCursor({
    el: document.getElementById('app'),
    gpgpuSize: 512,
    colors: [0x00fffc, 0xFFFFFF], // Particle colors
    color: 0xff0000, // Particle color
    coordScale: 0.5,
    noiseIntensity: 0.005,
    noiseTimeCoef: 0.0001,
    pointSize: 1, // Lighter particle thickness
    pointDecay: 0.0025,
    sleepRadiusX: 250,
    sleepRadiusY: 250,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefY: 0.002,

    // Set the background color to white
    backgroundColor: 0xFFFFFF // White background
});
