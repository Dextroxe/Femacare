import {Route,Routes} from 'react-router-dom'
import App from './App'
import {Explore,Enroll} from './pages/index.js'


window.addEventListener('phx:page-loading-stop', (e) => {
    // trigger flowbite events
    window.document.dispatchEvent(new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true
    }));
  });

function Routers()  {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />} >
                <Route path='home' element={<App />} />
                </Route>
                <Route path='/explore' element={<Explore />} />
                <Route path='/enroll' element={<Enroll />} />
            </Routes>
        </>
    );
}

export default Routers;