import {Route,Routes} from 'react-router-dom'
import App from './App'
import {Explore,Enroll} from './pages'




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