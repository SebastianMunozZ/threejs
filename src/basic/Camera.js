import * as THREE from 'three';
//crea la camara con una perspectiva de 75, ancho y alto tamaño de ventana, objeto más proximo visible 0,1 y más lejano 1000
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 10;
camera.position.y = 2;

export default camera