import { hero } from '../images'
import Game from './Game'

function Content() {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen p-4 gap-4'>
        <img src={hero} alt="" className='w-[60%]' />
        <Game/>
    </div>
  )
}

export default Content
