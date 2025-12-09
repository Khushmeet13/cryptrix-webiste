import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HexagonParticles = () => {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;

    // === THREE.js Setup ===
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x150000, 10, 35);

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // === LIGHTS ===
    scene.add(new THREE.PointLight(0xa78bfa, 1.5, 40).position.set(10, 10, 10));
    scene.add(new THREE.AmbientLight(0xa78bfa, 0.6));

    // === HEXAGON GEOMETRY ===
    const hexGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.12, 6);
    const hexMaterial = new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      roughness: 0.3,
      metalness: 0.8,
      flatShading: true,
    });

    const hexagons = [];

    // CREATE FLOATING HEXAGONS
    for (let i = 0; i < 170; i++) {
      const mesh = new THREE.Mesh(hexGeometry, hexMaterial);

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatOffset: Math.random() * 5,
      };

      scene.add(mesh);
      hexagons.push(mesh);
    }

    // === ANIMATION LOOP ===
    const animate = () => {
      requestAnimationFrame(animate);

      hexagons.forEach((hex) => {
        hex.rotation.x += 0.02;
        hex.rotation.y += 0.005;

        hex.position.x +=
          Math.sin(Date.now() * 0.001 + hex.userData.floatOffset) * 0.003;
      });

      camera.rotation.z += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    // === RESIZE HANDLER ===
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default HexagonParticles;
