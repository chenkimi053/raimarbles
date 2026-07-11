import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CrystalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F0EDE6');

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2000);
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const group = new THREE.Group();
    scene.add(group);

    const createShardGeometry = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        0, 1.5, 0,
        -0.8, -1, 0.6,
        0.8, -1, 0.6,
        0, -1, -0.8,
        -0.3, 0.3, 0.5,
        0.4, 0.2, -0.4,
      ]);
      const indices = [
        0, 3, 4, 0, 4, 1, 0, 1, 5, 0, 5, 3,
        1, 4, 3, 1, 3, 5, 2, 1, 4, 2, 5, 1,
        2, 3, 5, 2, 4, 3,
      ];
      geometry.setIndex(indices);
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geometry.computeVertexNormals();
      return geometry;
    };

    const shardGeometry = createShardGeometry();

    const shardCount = window.innerWidth < 768 ? 150 : 300;
    const shards: THREE.Mesh[] = [];
    const spinSpeeds: number[] = [];
    const orbitSpeeds: number[] = [];

    const shardMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#C9A96E'),
      emissive: new THREE.Color('#3A5A6C'),
      emissiveIntensity: 0.1,
      roughness: 0.4,
      metalness: 0.3,
      transparent: true,
      opacity: 0,
    });

    for (let i = 0; i < shardCount; i++) {
      const mesh = new THREE.Mesh(shardGeometry, shardMaterial.clone());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 60 + Math.random() * 50;

      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = radius * Math.cos(phi);

      const scale = 1.5 + Math.random() * 3;
      mesh.scale.set(scale, scale, scale);

      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;

      const colorVar = Math.random();
      if (colorVar < 0.33) {
        (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color('#C9A96E');
      } else if (colorVar < 0.66) {
        (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color('#F5F3EF');
      } else {
        (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color('#3A5A6C');
      }

      group.add(mesh);
      shards.push(mesh);
      spinSpeeds.push(0.3 + Math.random() * 0.8);
      orbitSpeeds.push(0.2 + Math.random() * 0.6);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight('#C9A96E', 0.5, 200);
    pointLight.position.set(0, 0, 50);
    scene.add(pointLight);

    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const clock = new THREE.Clock();
    let entranceProgress = 0;
    const entranceDuration = 1.5;

    const tick = () => {
      const deltaTime = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (entranceProgress < 1) {
        entranceProgress += deltaTime / entranceDuration;
        const eased = 1 - Math.pow(1 - Math.min(entranceProgress, 1), 3);
        group.scale.setScalar(0.2 + eased * 0.8);
        shards.forEach((shard) => {
          const mat = shard.material as THREE.MeshStandardMaterial;
          mat.opacity = Math.min(eased * 1.5, 1);
        });
      }

      targetRotation.x = mouse.y * 0.08;
      targetRotation.y = mouse.x * 0.08;
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.04;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.04;

      shards.forEach((shard, i) => {
        shard.rotation.x += spinSpeeds[i] * deltaTime * 0.4;
        shard.rotation.y += orbitSpeeds[i] * deltaTime * 0.3;
        shard.position.y += Math.sin(elapsedTime * 0.5 + i) * 0.015;
      });

      group.rotation.y = Math.sin(elapsedTime * 0.08) * 0.15 + currentRotation.y;
      group.rotation.x = currentRotation.x;

      const pulse = Math.sin(elapsedTime * Math.PI * 0.35) * 0.5 + 0.5;
      pointLight.intensity = 0.3 + pulse * 0.4;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(tick);
    };

    tick();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      shardGeometry.dispose();
      shards.forEach((s) => (s.material as THREE.Material).dispose());
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
  );
}
