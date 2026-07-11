'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function CupModel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const steamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const targetY = mouse.x * 0.28 + Math.sin(state.clock.elapsedTime * 0.7) * 0.04;
      const targetX = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.16, 0.04);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.04);
      groupRef.current.rotation.x = targetX;
    }

    if (steamRef.current) {
      steamRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.75) * 0.08;
      steamRef.current.position.y = 1.42 + Math.sin(state.clock.elapsedTime * 1.05) * 0.03;
    }
  });

  const cupMaterial = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      color: '#c8a347',
      roughness: 0.08,
      metalness: 0.15,
      transmission: 0.25,
      thickness: 0.85,
      clearcoat: 0.7,
      clearcoatRoughness: 0.2,
      ior: 1.3
    }),
    []
  );

  const liquidMaterial = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      color: '#3b2412',
      roughness: 0.2,
      metalness: 0.05,
      clearcoat: 0.5
    }),
    []
  );

  return (
    <group ref={groupRef} scale={0.95} position={[0, -0.35, 0]}>
      <Float speed={1.15} rotationIntensity={0.14} floatIntensity={0.08}>
        <mesh position={[0, 0.65, 0]} castShadow>
          <cylinderGeometry args={[0.52, 0.55, 0.7, 48]} />
          <primitive object={cupMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.4, 48]} />
          <primitive object={liquidMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0.95, 0]} castShadow>
          <cylinderGeometry args={[0.38, 0.48, 0.1, 48]} />
          <primitive object={cupMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0.91, 0]}>
          <cylinderGeometry args={[0.36, 0.36, 0.02, 48]} />
          <meshStandardMaterial color="#f7d989" emissive="#9b6f19" emissiveIntensity={0.25} />
        </mesh>
        <mesh position={[-0.28, 0.95, 0]} castShadow>
          <boxGeometry args={[0.15, 0.45, 0.15]} />
          <meshStandardMaterial color="#c8a347" />
        </mesh>
        <mesh position={[0.28, 0.95, 0]} castShadow>
          <boxGeometry args={[0.15, 0.45, 0.15]} />
          <meshStandardMaterial color="#c8a347" />
        </mesh>
      </Float>
      <group ref={steamRef} position={[0, 1.3, 0]}>
        <mesh position={[0.15, 0.3, 0]}>
          <tubeGeometry args={[new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.08, 0.35, 0), new THREE.Vector3(0.08, 0.8, 0)]), 20, 0.025, 8, false]} />
          <meshBasicMaterial color="#f7f4e8" transparent opacity={0.6} />
        </mesh>
        <mesh position={[-0.12, 0.3, 0]}>
          <tubeGeometry args={[new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-0.06, 0.4, 0), new THREE.Vector3(-0.06, 0.9, 0)]), 20, 0.025, 8, false]} />
          <meshBasicMaterial color="#f7f4e8" transparent opacity={0.65} />
        </mesh>
      </group>
    </group>
  );
}

export function ThreeCanvas() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [cameraPos, setCameraPos] = useState<[number, number, number]>([0, 0, 4.2]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    const updateCamera = () => {
      const w = window.innerWidth;
      if (w < 640) setCameraPos([0, 0, 5.6]);
      else if (w < 1024) setCameraPos([0, 0, 4.8]);
      else setCameraPos([0, 0, 4.2]);
    };

    updateCamera();
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('resize', updateCamera);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('resize', updateCamera);
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden rounded-[1.5rem]">
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: cameraPos, fov: 38 }}
        shadows
        dpr={[1, 1.8]}
        frameloop="always"
        performance={{ min: 0.7, debounce: 200 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <pointLight position={[-3, 2, 2]} intensity={0.8} color="#f7d989" />
        <Environment preset="city" />
        <CupModel mouse={mouse} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
