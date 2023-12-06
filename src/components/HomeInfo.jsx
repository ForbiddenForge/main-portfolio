import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt="" className='w-4 h-4 object-contain' />
    </Link>
  </div>
)


const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Welcome to <span className='font-semibold'>Peter's Portfolio</span>👋
    <br />
    Feel free to look around!
    </h1>
  ),
  2: (
    <InfoBox text='detailed description infographics w socials etc'  link='/about' btnText='Learn More' />

  ),
  3: (
    <InfoBox text='projects w live links try something longer so that it'  link='/projects' btnText='Learn More' />
  ),
  4: (
    <InfoBox text='projects / other links have to put something longer like this'  link='/contact' btnText='Learn More' />
  ),
}



const HomeInfo = ({ currentStage }) => {
  return (
    renderContent[currentStage] || null 
  )
}

export default HomeInfo