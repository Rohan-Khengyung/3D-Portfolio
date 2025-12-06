import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;





// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/scene.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <group position={[7.224, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Cylinder_arrow_red_0.geometry}
//             material={materials.arrow_red}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Cylinder_target_white_0.geometry}
//             material={materials.target_white}
//           />
//         </group>
//         <group
//           position={[101.754, 0.021, -0.037]}
//           rotation={[-Math.PI, Math.PI / 2, 0]}
//           scale={130.856}>
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Cylinder001_arrow_red_0.geometry}
//             material={materials.arrow_red}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Cylinder001_Gold_0.geometry}
//             material={materials.Gold}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Cylinder001_Material002_0.geometry}
//             material={materials['Material.002']}
//           />
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/scene.gltf')