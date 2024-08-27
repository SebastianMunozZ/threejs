import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import scene from './basic/Scene.js';
import camera from './basic/Camera.js';
import renderer from './basic/Renderer.js';
import light from './basic/Light.js';
import keyCode from './basic/KeyCode.js';
import keyListener from './basic/KeyListener.js';

const loader = new GLTFLoader();

//Agrega luz a la escena
scene.add(light);


let model;
loader.load( './models/carro_limpieza/scene.gltf', function ( gltf ) {
    model = gltf.scene;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if (model) {
        if(keyListener.isPressed(keyCode.ENTER)) {
            model.rotation.y += 0.01;
            
        } else if (keyListener.isPressed(keyCode.KEY_W)) {
            model.position.z -= 0.1;
        } else if (keyListener.isPressed(keyCode.KEY_S)) {
            model.position.z += 0.1;
        }
    }
}
animate();
keyListener.start();