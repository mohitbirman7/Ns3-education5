import React from 'react'
import Topbar from './component/pages/navbar/Topbar'
import SecondBarr from './component/pages/navbar/SecondBarr'
import Main from './component/pages/main/Main'
import Footerr from './component/pages/footer/Footerr'
import './index.css';



const App = () => {
  return (
    <div>
      <Topbar/>
      <SecondBarr/>
      <Main/>
      <Footerr/>
    </div>
  )
}

export default App
