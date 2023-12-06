import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'

import molihua from '../assets/MoLiHua.mp3'
import { soundon, soundoff } from "../assets/icons"

const Navbar = () => {

  // Music
  const audioRef = useRef(new Audio(molihua))
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(true)

  useEffect(() => {
    if(isPlayingMusic){
      
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  return (
    <header className='header'> 

        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className="blue-gradient_text">AH</p>
        </NavLink>

        <nav className="flex text-lg gap-4 font-medium">
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-red-600 mt-1' : 'text-black mt-1'} >
                About
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-red-600 mt-1' : 'text-black mt-1'}>
                Chart
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-red-600 mt-1' : 'text-black mt-1'}>
                Buy
            </NavLink>
            
              <img 
              src={!isPlayingMusic ? soundoff : soundon}
              alt="sound control" 
              className='w-7 h-7 m-0 cursor-pointer object-contain'
              onClick={() => setIsPlayingMusic(!isPlayingMusic)}
              />
          
        </nav>
    </header>
  )
}

export default Navbar