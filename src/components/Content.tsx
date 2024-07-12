import React from 'react'
import { hero } from '../images'
import Game from './Game'

function Content() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[100vh] p-4 gap-4'>
        <img src={hero} alt="" className='w-[80%]' />
        <Game/>
    </div>
  )
}

export default Content