import * as THREE from 'three';
//crea la escena
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();

export default light