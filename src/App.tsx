import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Navigations from './components/Navigations'

function App() {

  return (
   <div className='w-full min-h-screen bg'>
    <Header/>
    <Content/>
    <Navigations/>
   </div>
  )
}

export default App
