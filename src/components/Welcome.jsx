
import {useLottie} from 'lottie-react'
import logo from '../assets/femacare.png';
import mouses from '../assets/mouse.json';







const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {

    const options = {
        animationData: mouses,
        loop: true
      };
      const { View } = useLottie(options);

  

    return (
        <div className="flex w-full justify-center items-center flex-col ">
            <div className=" w-fit flex md:flex-row flex-col items-start justify-between justify-center md: p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10 ">
                    <h1 className="text-white text-3xl sm:text-6xl text-white text-gradient py-1"
                    >Femacare <br /> Nanotechnology-led <br /></h1>
                    <p className="text-white mt-5 text-left font-light md:w-9/12 w-11/12 text-base" >Medical Innovations for Reproductive & Sexual Health Care</p>
                    <div className='grid  grid-cols-1 w-full mt-10'>
                    <div className={`rounded-t-2xl ${commonStyles} sm:min-w-[220px]`}>
                        Reproductive & Sexual Health
                    </div>
                    <div className='grid sm:grid-cols-2 grid-cols-1 w-full'>
                    <div className={`rounded md:rounded-bl-2xl ${commonStyles}`}>Affordable</div>
                    <div className={`rounded-br-2xl ${commonStyles}`}>Inclusive</div>

                    </div>
                    </div>


                </div>
                <div className="flex flex-col flex-col items-center justify-start w-full md:mt-0 mt-10">
                    {/* <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5  white-glassmosphism"></div> */}
                    <div className="p-3 justify-end flex-1 items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 mx-5 " >
                        <img src={logo} alt="logo" className="w-60 cursor-pointer  " />
                    </div>
                </div>
            </div>
            <div>
            </div>
                {/* <img src='/stack.svg'  alt='scroll' className=' w-20 h-20  transition  duration-300 ease-in-out hover:transition-[6]'/> */}
      
                {View}
             
        </div>
    );
}

export default Welcome;