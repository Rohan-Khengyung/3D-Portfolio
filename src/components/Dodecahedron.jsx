import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import * as THREE from 'three';

const Dodecahedrons = ({ position }) => {
  const refList = useRef([]);
  const groupRef = useRef();
  
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);


  useGSAP(
    () => {
      if (refList.current.length === 0 || !groupRef.current) return;

      // Set group position
      groupRef.current.position.set(position[0], position[1], position[2]);

      // Create staggered rotation animation for multiple dodecahedrons
      gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" }
      })
      .to(
        refList.current.map((d) => d.rotation),
        {
          y: `+=${Math.PI * 2}`,
          duration: 8,
          stagger: {
            each: 0.5,
            from: "center"
          }
        }
      )
      .to(
        refList.current.map((d) => d.rotation),
        {
          x: `+=${Math.PI * 2}`,
          duration: 6,
          stagger: {
            each: 0.5,
            from: "end"
          }
        },
        0
      );

      // Pulsing scale animation
      refList.current.forEach((d, i) => {
        gsap.timeline({
          repeat: -1,
          delay: i * 0.3
        })
        .to(d.scale, {
          x: 1.3,
          y: 1.3,
          z: 1.3,
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        });
      });

    },
    {
      dependencies: [position],
      scope: groupRef
    }
  );

  return (
    <Center>
      <group ref={groupRef} scale={0.4}>
        {Array.from({ length: 5 }, (_, index) => (
          <mesh 
            key={index} 
            ref={getRef}
            position={[
              Math.cos((index / 5) * Math.PI * 2) * (index + 1) * 0.5,
              0,
              Math.sin((index / 5) * Math.PI * 2) * (index + 1) * 0.5
            ]}
          >
            <dodecahedronGeometry args={[1, 0]} />
            <meshMatcapMaterial 
              matcap={texture} 
              toneMapped={false}
              color={new THREE.Color().setHSL(index / 5, 0.7, 0.6)}
            />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Dodecahedrons;