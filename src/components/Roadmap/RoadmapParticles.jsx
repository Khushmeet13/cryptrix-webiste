import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const RoadmapParticles = () => {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x01021f, 10, 32);

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 13;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.PointLight(0x60a5fa, 1.6, 40).position.set(8, 8, 10));
    scene.add(new THREE.PointLight(0x06b6d4, 1.2, 40).position.set(-8, -6, 8));
    scene.add(new THREE.AmbientLight(0x6366f1, 0.5));

    const geometry = new THREE.OctahedronGeometry(0.14, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      roughness: 0.25,
      metalness: 0.75,
      flatShading: true,
    });

    const nodes = [];
    const COUNT = 110;
    for (let i = 0; i < COUNT; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 13,
        (Math.random() - 0.5) * 12
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.userData = { floatOffset: Math.random() * 6 };
      scene.add(mesh);
      nodes.push(mesh);
    }

    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      nodes.forEach((n) => {
        n.rotation.x += 0.015;
        n.rotation.y += 0.008;
        n.position.y += Math.sin(Date.now() * 0.0008 + n.userData.floatOffset) * 0.002;
      });
      camera.rotation.z += 0.0004;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default RoadmapParticles;
