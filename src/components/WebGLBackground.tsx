'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const ParticleField = () => {
  const points = useRef<THREE.Points>(null)
  
  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })
  
  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
    
    colors[i3] = 0.5 + Math.random() * 0.5
    colors[i3 + 1] = 0.5 + Math.random() * 0.5
    colors[i3 + 2] = 0.5 + Math.random() * 0.5
  }
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
      />
    </points>
  )
}

const GradientSphere = () => {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
      mesh.current.rotation.y += 0.01
    }
  })
  
  return (
    <Sphere ref={mesh} args={[1.5, 32, 32]} position={[0, 0, 0]}>
      <meshPhongMaterial
        color="#0ea5e9"
        emissive="#7c3aed"
        emissiveIntensity={0.5}
        transparent
        opacity={0.15}
      />
    </Sphere>
  )
}

export default function WebGLBackground() {
  return (
    <div className="webgl-background">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <GradientSphere />
        <ParticleField />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
