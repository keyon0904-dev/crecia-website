import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NeonCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Objects
    // 1. Inner Wireframe Cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xC5A059 }); // Gold Line
    const wireframeCube = new THREE.LineSegments(edges, lineMaterial);
    
    // 2. Outer Glow Cube (Transparent)
    const glassGeometry = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0,
      transmission: 0.2, // glass-like
      thickness: 0.5,
      transparent: true,
      opacity: 0.1,
    });
    const glassCube = new THREE.Mesh(glassGeometry, glassMaterial);

    const group = new THREE.Group();
    group.add(wireframeCube);
    group.add(glassCube);
    scene.add(group);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xC5A059, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Mouse Interaction Logic
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Logic
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Base rotation
      group.rotation.x += 0.002;
      group.rotation.y += 0.003;

      // Mouse influence (gentle lerp)
      const targetRotX = mouseRef.current.y * 0.5;
      const targetRotY = mouseRef.current.x * 0.5;

      group.rotation.x += (targetRotX - group.rotation.x) * 0.05;
      group.rotation.y += (targetRotY - group.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10 flex items-center justify-center opacity-60 pointer-events-none" />;
};