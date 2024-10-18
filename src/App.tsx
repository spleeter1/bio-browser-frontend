// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import LeftPanel from './layout/SideBar/LeftPanel'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{}}>
      <Header/>
      <div className='container' style={{ display:'flex',flexDirection:'row'}}>
        <LeftPanel/>
        <Home/>
        {/* <RightPanel/>  */}
      </div>
    </div>
  )
}

export default App
