import { Particles } from "react-tsparticles";

import particlesConfig from "../components/config/particles-config"

import React from 'react'

function ParticleBackground() {
  return (

    <div>

    <Particles params={particlesConfig} />

    </div>
    

    
  )
}

export default ParticleBackground
