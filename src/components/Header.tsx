import { logo } from '../images'

function Header() {
  return (
    <header className="fixed top-0 left-0 bg-[#fff] w-full h-[80px] flex justify-between items-center p-4">
        <img src={logo} alt="lototobit" className='w-[80px]'/>
        <button className='px-6 py-3 flex items-center justify-center h-[50px] rounded-lg bg-[#2c268a] text-white transation-all hover:scale-105'>Connect</button>
    </header>
  )
}

export default Header
