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
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Better shadow quality
    currentMount.appendChild(renderer.domElement);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.bias = -0.0001;
    scene.add(directionalLight);
    
    // Secondary light for better definition
    const secondaryLight = new THREE.DirectionalLight(0xffffff, 0.8);
    secondaryLight.position.set(-5, 5, -7.5);
    scene.add(secondaryLight);

    // Grid helper
    const gridHelper = new THREE.GridHelper(50, 50, 0x000000, 0x000000);
    scene.add(gridHelper);

    // Create blue accent lights
    function addBlueLights(radius) {
      // Create blue spotlights positioned around the model
      const blueColor = 0x3399ff;
      const numLights = 4;
      
      // Create spotlight positions around the model
      for (let i = 0; i < numLights; i++) {
        const angle = (i / numLights) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        // Create spot light
        const spotLight = new THREE.SpotLight(0x00ffff, 15); // Increased intensity
        spotLight.position.set(x * 0.7, 3, z * 0.7); // Adjusted position
        spotLight.lookAt(0, 0, 0);
        spotLight.angle = Math.PI / 6; // Narrower angle for more focused light
        spotLight.penumbra = 0.5;
        spotLight.decay = 1; // Less decay
        spotLight.distance = 40; // Increased distance
        
        // Add the spotlight target
        spotLight.target.position.set(0, 0, 0);
        scene.add(spotLight.target);
        scene.add(spotLight);
        
        // Add visible helpers for debugging only
        // Uncomment if you need to visualize light positions
        /*
        const helper = new THREE.SpotLightHelper(spotLight);
        scene.add(helper);
        */
      }
      
      // Add two blue point lights for general glow
      const pointLight1 = new THREE.PointLight(blueColor, 3, 30); // Increased intensity and distance
      pointLight1.position.set(-radius/2, 2, -radius/2);
      scene.add(pointLight1);
      
      const pointLight2 = new THREE.PointLight(blueColor, 3, 30); // Increased intensity and distance
      pointLight2.position.set(radius/2, 2, radius/2);
      scene.add(pointLight2);
      
      // Add a test sphere to verify lighting
      const testSphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
          roughness: 0.3,
          metalness: 0.7,
        })
      );
      testSphere.position.set(0, 3, 0);
      testSphere.castShadow = true;
      testSphere.receiveShadow = true;
      //scene.add(testSphere);
    }
    
    // Load FBX model
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      modelPath,
      (object) => {
        console.log("Model loaded:", object);
        object.traverse(function(child) {
          if (child.isMesh) {
            // Apply better materials that respond to lighting
            child.material = new THREE.MeshStandardMaterial({ 
              color: 0x444444,  // Darker gray
              roughness: 0.4,    // Less roughness for more sheen
              metalness: 0.6,    // More metallic look
              envMapIntensity: 1.0,
            });
            
            // Enable shadows for each mesh
            child.castShadow = true;
            child.receiveShadow = true;
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

        // Recalculate the bounding box after transformations
        const newBox = new THREE.Box3().setFromObject(object);
        const lowestY = newBox.min.y;

        // Reposition the grid to be just below the lowest point of the model
        gridHelper.position.y = lowestY - 0.01;

        // Calculate distance needed to view the entire model
        const maxDim = Math.max(size.x, size.y, size.z);
        const radius = maxDim * fixedScale * 1.2; // Light placement radius

        console.log("Adding blue lights with radius:", radius);
        addBlueLights(radius * 1.5); // Increased radius for more spread lights

        // Camera positioning
        const fov = camera.fov * (Math.PI / 180);
        let cameraDistance = maxDim / (2 * Math.tan(fov / 2));

        // Add buffer distance and account for scale
        cameraDistance = cameraDistance * 1.5 * (1/fixedScale);
       
        // Prevent camera from being too far or too close
        cameraDistance = Math.min(Math.max(cameraDistance, 5), 500);
        
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