// src/scripts/game.ts
import * as THREE from 'three';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a simple cube (player object)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera setup
camera.position.z = 5;

// Handle player movement (WASD)
let forward = false;
let backward = false;
let left = false;
let right = false;

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      forward = true;
      break;
    case 's':
      backward = true;
      break;
    case 'a':
      left = true;
      break;
    case 'd':
      right = true;
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'w':
      forward = false;
      break;
    case 's':
      backward = false;
      break;
    case 'a':
      left = false;
      break;
    case 'd':
      right = false;
      break;
  }
});

// Game loop
function animate() {
  requestAnimationFrame(animate);

  // Player movement based on key states
  if (forward) cube.position.z -= 0.1;
  if (backward) cube.position.z += 0.1;
  if (left) cube.position.x -= 0.1;
  if (right) cube.position.x += 0.1;

  // Render the scene
  renderer.render(scene, camera);
}

// Start animation loop
animate();
