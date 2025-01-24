import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useNavigate } from 'react-router-dom';
import './flipper.css'; // Import the CSS file for styling

const FlipperModel = () => {
  const mountRef = useRef(null);
  const cameraRef = useRef();
  const navigate = useNavigate();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const animationRef = useRef(null);
  const controlsRef = useRef(null);

  const startCameraPosition = new THREE.Vector3(7.364246677793363, 1.946749314995535, -0.06262663580489078);
  const endCameraPosition = new THREE.Vector3(0.5293558284814616, -1.1305043818433757e-7, -0.009569424516216476);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.copy(startCameraPosition);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Adjust camera FOV and position for smaller screens
      if (window.innerWidth < 768) {
        camera.fov = 60; // Zoom out on small screens to fit the model
        camera.position.set(0.7293558284814616, -1.2305043818433757e-7, -0.109569424516216476); // Move camera closer for smaller screens
      } else {
        camera.fov = 75; // Default FOV for larger screens
        camera.position.set(0.7293558284814616, -1.2305043818433757e-7, -0.109569424516216476); // Default camera position
      }
      camera.updateProjectionMatrix(); // Update the camera projection
    };

    window.addEventListener('resize', handleResize);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 256;

    const createDisplayPlane = (texture) => {
      const planeGeometry = new THREE.PlaneGeometry(0.319, 0.167);
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: false,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      
      const displayPlane = new THREE.Mesh(planeGeometry, planeMaterial);
      displayPlane.position.set(0.122, 0.048, 0.0896);
      displayPlane.rotation.set(0, Math.PI / 2, 0);
      return displayPlane;
    };

    // Function to perform the final zoom transition
    const performZoomTransition = (camera, controls) => {
      controls.enabled = false; // Disable controls 
      const startTime = Date.now();
      const duration = 100;
   
      const targetPosition = new THREE.Vector3(
          0.22806883362836908,
          -4.870690028110104e-8, 
          -0.004122911981849736
      );
   
      const zoomAnimation = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Use smooth easing
          const easedProgress = progress * progress; // Quadratic easing
          camera.position.lerpVectors(endCameraPosition, targetPosition, easedProgress);
   
          if (progress < 1) {
              requestAnimationFrame(zoomAnimation);
          } else {
              setTimeout(() => {
                  navigate("/home");
              }, 200);
          }
      };
      
      requestAnimationFrame(zoomAnimation);
   };

   const startAnimation = (displayPlane, scene) => {
    const frameCount = 16;
    let currentFrame = 0;
    const frameRate = 100;
    
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }
  
    animationRef.current = setInterval(() => {
      const image = new Image();
      image.src = `/animations/flipper_home/frame_${currentFrame}.png`;
  
      image.onload = () => {
        // Set canvas background color to orange
        ctx.fillStyle = 'orange';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        // Apply mix-blend-mode to make image blend with background
        ctx.globalCompositeOperation = 'source-over'; // Make the image blend as desired
  
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  
        displayPlane.material.map.needsUpdate = true;
      };
  
      currentFrame = (currentFrame + 1) % frameCount;
  
      if (currentFrame === 0) {
        clearInterval(animationRef.current);
        performZoomTransition(camera, controlsRef.current);
      }
    }, frameRate);
  };
  

    const loader = new GLTFLoader();
    loader.load(
      '/models/flipper_fixed.glb',
      (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.position.set(0, 0, 0);

        const initialImage = new Image();
        initialImage.src = 'animations/flipper_home/startup.png';
        
        initialImage.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(initialImage, 0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'orange'; 
          
          const texture = new THREE.CanvasTexture(canvas);
          const displayPlane = createDisplayPlane(texture);
          gltf.scene.add(displayPlane);

          // Scale the model based on the screen size
          const scaleFactor = window.innerWidth < 768 ? 0.5 : 1;  // Adjust scale r small screens
          gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);  // Scale the entire model

          const sphereGeometry = new THREE.SphereGeometry(0.10, 32, 32);
          const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,       // Red color
            transparent: true,     // Enable transparency
            opacity: 0           // Set opacity (0 is fully transparent, 1 is fully opaque)
          });
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphere.position.set(0.13, 0.05, -0.293);
          gltf.scene.add(sphere);

          const onSphereClick = (event) => {
            // Update mouse coordinates based on the mouse event
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          
            // Update the raycaster with the new mouse position
            raycaster.setFromCamera(mouse, camera);
          
            // Check for intersections with the sphere
            const intersects = raycaster.intersectObject(sphere);
            if (intersects.length > 0) {
              startAnimation(displayPlane, scene);
            }
          };
          
          // Add event listeners for both mouse and touch events
          window.addEventListener('click', onSphereClick, false);   // For mouse clicks
        };

        const lights = [
          { position: [1, 1, 1] },
          { position: [-1, -1, -1] },
          { position: [1, -1, -1] },
          { position: [-1, 1, 1] }
        ];

        lights.forEach(({ position }) => {
          const light = new THREE.DirectionalLight(0xffffff, 1);
          light.position.set(...position);
          scene.add(light);
        });

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;

        const startTime = Date.now();
        const animationDuration = 3;
        
        const animateCameraZoom = () => {
          const elapsedTime = (Date.now() - startTime) / 400;
          const progress = Math.min(elapsedTime / animationDuration, 1);

          camera.position.lerpVectors(startCameraPosition, endCameraPosition, progress);
          camera.lookAt(scene.position);

          if (progress < 1) {
            requestAnimationFrame(animateCameraZoom);
          } else {
            controls.enableZoom = false;
          }
        };

        animateCameraZoom();

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div id="three-container" className='md-6'>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default FlipperModel;
