import { useLottie } from 'lottie-react';
import computerAi from '../assets/computerAI.json'
import { HiFingerPrint,HiCubeTransparent,HiChip } from "react-icons/hi";

const ServiceCard = ({ color, title, icon, subtittle }) => (
    <div className="flex w-[80%] flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl ">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
            
        </div>
        <div className="ml-5 flex flex-col flex-1 con">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtittle}</p>
        </div>
    </div>
)








const Services = () => {

    const options = {
        animationData: computerAi,
        loop: true
    };

    const { views } = useLottie(options);


    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center gradient-bg-services pt-20">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-4xl py-2 text-gradient">
                        We, at Femacare Pvt Ltd
                        <br />
                        solving health hazards with
                    </h1>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952e3] "
                    title="Nanotechnology"
                    icon={<HiCubeTransparent className='w-6 h-6'/>}
                    subtittle="Nanotechnology enables manipulation of matter at the nanoscale, leading to groundbreaking advancements in healthcare."
                />
                <ServiceCard
                    color="bg-[#8945f8]"
                    title="Biotechnology "
                    icon={<HiFingerPrint className='w-6 h-6'/>}
                    subtittle="Biotechnology harnesses the power of biological systems and organisms for innovative healthcare solutions."
                />
                <ServiceCard
                    color="bg-[#f84550]"
                    title="Artificial Intelligence"
                    icon={<HiChip className='w-6 h-6'/>}
                    subtittle="Artificial Intelligence utilizes algorithms and machine learning to revolutionize healthcare practices."
                />
            </div>
            {views}
        </div>
    );
}

export default Services;