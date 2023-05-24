import logo from '../assets/femacareFamily.jpg'


const Loader = () => {
    return (
        <div className="flex w-full flex-col justify-center items-center 2xl:px-20 gradient-bg-transactions pt-20 pb-20">
            <div className="flex flex-col justify-center items-center md:p-5 gap-20">
                <img className="object-fit w-full rounded--xl h-full md:h-auto md:w-full md:w-auto md:rounded-none md:rounded-l-lg" src={logo} alt="" />
                <a href="#" className="flex flex-col gap-10 items-center bg-white border border-gray-200 rounded-lg max-w-3xl shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About us</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">We, at Femacare Pvt Ltd (Research Partner - Nanobios Lab, IIT-B) are upgrading healthcare startup finding solutions to existing health hazards by an excellent fusion of nanotechnology, biotechnology and artificial intelligence; innovating to revolutionise health. We are currently under the accelerator provisions of IKP-EDEN, Bangalore. We are currently working on all the three above mentioned domains, aiming to revolutionize the entire healthcare industry with the use of updated recent technologies. We are a team of 20 highly qualified enthusiast members aiming for a goal to captivate one day.</p>
                    </div>
                </a>
                <div className='flex justify-center items-center text-white justify-between gap-20 flex flex-row w-full'>
                    <div >
                    <p>Contact Details:</p>
                    <Info text={"+91-7042937200 or +91-9315132791"} />
                    </div>
                    <div>
                    <p class>Address: </p>
                    <Info text={"Nanobios Lab, IIT Bombay & IKP-EDEN,Bengaluru"} />
                    </div>
                    <div>
                    <p>Email:  </p>
                    <Info text={"humans@femacare.info & femacaregrants@gmail.com"} />
                    </div>
                </div>
            </div>

        </div>



    );
}

export default Loader;

function Info({ text }) {
    return (
        <>
            <div class="relative z-0 m-0 p-0">
                <input type="text" id="disabled_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                <label for="disabled_standard" class="absolute text-sm text-gray-400 dark:text-gray-500  transform -translate-y-6 scale-75 top-auto -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{text}</label>
            </div>
        </>
    )
}