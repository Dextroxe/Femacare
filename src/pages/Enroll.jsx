import { NavBar, Footer, ContactForm } from '../components'


const Enroll = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='gradient-bg-welcome'>
                    
                    <NavBar />
                    <ContactForm/>
                </div>
                <Footer />
            </div>

        </>
    );
}

export default Enroll;