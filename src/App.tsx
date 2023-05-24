import {NavBar, Footer, Loader,Welcome,Services} from './components'
// import { useState } from 'react'

import './App.css'

function App() {

  return (
   <>
   <div className='min-h-screen'>
    <div className='gradient-bg-welcome h-[100vh]'>
       <NavBar/>
       <Welcome/>
    </div>
    <Services/>
    <Loader/>
    <Footer/>
   </div>
   
   </>
   )
}

export default App
