import { PerspectiveCamera } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense, useContext } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";


const Hero = () => {
 
  const isMobile = useMediaQuery({maxWidth:768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 440});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <Leva  />
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Rohan <span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
        <div>
            <div className='w-full h-full absolute inset-0'>
                <Canvas className="w-full h-full" >
                  <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <HackerRoom 
                    // scale={0.07} 
                    position={sizes.deskPosition}
                    rotation={[0, -Math.PI, 0]} 
                    scale={sizes.deskScale} />

                    <group>
                      <Target  />
                    </group>

                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10 ,10]} intensity={0.5} />
                  </Suspense>
                </Canvas>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
