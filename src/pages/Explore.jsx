import { NavBar, Footer, RePaper } from '../components'


const Explore = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='gradient-bg-welcome'>
                    
                    <NavBar />
                    <RePaper />
                </div>
                <Footer />
            </div>

        </>
    );
}

export default Explore;