import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const ArmViewer = ({ modelPath }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 10);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.shadowMap.enabled = true;
    currentMount.appendChild(renderer.domElement);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Grid helper
    const gridHelper = new THREE.GridHelper(50, 50, 0x000000, 0x000000);
    scene.add(gridHelper);
    
    // Load FBX model
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      modelPath,
      (object) => {

        console.log("Model loaded:", object);
        object.traverse(function(child) {
          if (child.isMesh) {
            // Check if material is missing or invalid
            if (!child.material || Array.isArray(child.material) && child.material.some(m => !m)) {
              console.log("Fixing material for:", child.name);
              // Create a default material
              child.material = new THREE.MeshPhongMaterial({ 
                color: 0x808080,
                shininess: 30,
                flatShading: false
              });
            }
          }
        });

         // Create a bounding box to visualize the model's extent
         const box = new THREE.Box3().setFromObject(object);
         const size = box.getSize(new THREE.Vector3());
         const center = box.getCenter(new THREE.Vector3());
        

        // Log position info for debugging
        console.log("Model center:", center);
        console.log("Model size:", size);
    
        // Apply fixed scale
        const fixedScale = 0.035; // Try different values
        object.scale.set(fixedScale, fixedScale, fixedScale);
        
        object.rotation.x = -Math.PI / 2; // Rotate 90 degrees around X axis
        object.position.set(-center.x * fixedScale, -center.y * fixedScale, -center.z * fixedScale);
        
        // Add to scene
        scene.add(object);

          // Calculate distance needed to view the entire model
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraDistance = maxDim / (2 * Math.tan(fov / 2));
        
        // Add buffer distance and account for scale
        cameraDistance = cameraDistance * 1.5 * (1/fixedScale);
       
        // Prevent camera from being too far or too close
        cameraDistance = Math.min(Math.max(cameraDistance, 5), 1000);
        
         // Prevent camera from being too far
         cameraZ = Math.min(cameraZ, 500);
         
         // Set camera position based on model size and center
         const direction = new THREE.Vector3(1, 0.5, 1).normalize();
         camera.position.copy(new THREE.Vector3(0, 0, 0)).add(direction.multiplyScalar(cameraDistance));
         
         // Point camera at model center (which is now at origin)
         camera.lookAt(new THREE.Vector3(0, 0, 0));
       
        
        // Update camera to frame the model
         controls.target.set(0, 0, 0);
        controls.update();

      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, [modelPath]);
  
  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default ArmViewer;