import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const MoleculeViewer = () => {
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    const container = document.getElementById('molecule-container');
    
    // Get the actual dimensions of the container
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x121212); // Match your background color
    
    if (container) container.appendChild(renderer.domElement);

    // Fetch and parse XYZ file
    fetch('./trial1.xyz')
      .then((response) => response.text())
      .then((data) => {
        const lines = data.trim().split('\n');
        const atomCount = parseInt(lines[0]);
        const atoms = lines.slice(2, 2 + atomCount);

        // Bond creation
        const bondThreshold = 1.6; // Adjust for different molecule types
        
        for (let i = 0; i < atoms.length; i++) {
          const [element1, x1, y1, z1] = atoms[i].split(/\s+/);
          for (let j = i + 1; j < atoms.length; j++) {
            const [element2, x2, y2, z2] = atoms[j].split(/\s+/);

            const distance = Math.sqrt(
              (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2
            );

            if (distance <= bondThreshold) {
              const bondGeometry = new THREE.CylinderGeometry(0.05, 0.05, distance, 16);
              const bondMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
              const bond = new THREE.Mesh(bondGeometry, bondMaterial);

              // Position the bond in the middle
              bond.position.set((+x1 + +x2) / 2, (+y1 + +y2) / 2, (+z1 + +z2) / 2);

              // Rotate bond to align with atoms
              const dir = new THREE.Vector3(x2 - x1, y2 - y1, z2 - z1).normalize();
              const axis = new THREE.Vector3(0, 1, 0);
              bond.quaternion.setFromUnitVectors(axis, dir);

              scene.add(bond);
            }
          }
        }

        // Add atom labels
        const createLabel = (text, position) => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            // Set canvas size and clear it
            canvas.width = 200;
            canvas.height = 100;

            context.font = "30px Arial";
            context.fillStyle = "#ffffff";
            context.fillText(text, 50, 50);
          
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;

            // Create a sprite for the label
            const labelMaterial = new THREE.SpriteMaterial({
                map: texture,
                depthTest: false, // Ensure label is always visible
                depthWrite: false,
            });
            const label = new THREE.Sprite(labelMaterial);
          
            label.scale.set(1.5, 0.75, 1);
            label.position.copy(position.clone().add(new THREE.Vector3(0, 0.3, 0)));
            scene.add(label);
        };

        atoms.forEach((line) => {
          const [element, x, y, z] = line.trim().split(/\s+/);
          const color = element === 'C' ? 0x00ff00 : element === 'H' ? 0xffffff : 0xff0000;

          const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
          const sphereMaterial = new THREE.MeshStandardMaterial({ color });
          const atomSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

          atomSphere.position.set(parseFloat(x), parseFloat(y), parseFloat(z));
          scene.add(atomSphere);
          
          createLabel(element, atomSphere.position);
        });

        // Calculate the bounding box of the molecule to center camera
        const boundingBox = new THREE.Box3();
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            boundingBox.expandByObject(object);
          }
        });
        
        // Center the camera on the molecule
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        
        // Determine camera distance based on molecule size
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        const cameraDistance = Math.abs(maxDim / Math.sin(fov / 2)) * 1.5;
        
        // Set camera position
        camera.position.set(center.x, center.y, center.z + cameraDistance);
        camera.lookAt(center);

        // Lighting setup
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Orbit controls setup
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.target.copy(center);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };

        animate();
      })
      .catch((error) => console.error('Error loading molecule file:', error));

    // Handle window resize
    const handleResize = () => {
      const container = document.getElementById('molecule-container');
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="viewer-wrapper">
      <div id="molecule-container" className="molecule-container"></div>
    </div>
  );
};

export default MoleculeViewer;