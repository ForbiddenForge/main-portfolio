import { useEffect, useRef } from 'react'
import { meshBounds, useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'

const Plane = ({ isRotating, ...props }) => {

  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene)
  const { actions } = useAnimations(animations, ref)


  useEffect(() => {
    const action = actions['Take 001']

    if(isRotating) {
      action.reset()
      action.play().warp(1, 5, 1)
    } else {
      action.setEffectiveTimeScale(1)
      action.play()

    }
  
  }, [actions, isRotating])
  

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane