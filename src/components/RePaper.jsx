
import { Link } from 'react-router-dom';
import { useLottie } from 'lottie-react';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import 'flowbite';

import Repapers from '../assets/papers';
import loadingLine from '../assets/loadinLine.json'


import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';





const logo = 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
function RePaperCard({ title, desc, image, id }) {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const scrollModePluginInstance = scrollModePlugin();
    // switchScrollMode(ScrollMode.Wrapped);
    const [Show, SetShow] = useState(false)

    return (
        <>

            <div key={id} className=" max-w-xs  rounded-lg  dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-700 md:max-w-sm origin-center hover:-translate-x-3 hover:-translate-y-3 transition ease-in-out  " >
                <button onClick={() => SetShow(!Show)} type="button"  >
                    <Link to={`#`} className='justify-center'>
                        <img className="object-fit h-60 w-96 p-0 rounded-t-lg" src={image} alt="product image" />

                        <div className="px-5 pb-5 text-white  ">

                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-5 text-justify" >{title.charAt(0).toUpperCase() + title.toLowerCase().slice(1)}</h5>
                            <p className='text-sm text-justify  '>{desc.charAt(0).toUpperCase() + desc.toLowerCase().slice(1)}</p>


                        </div>
                    </Link>

                </button>


                <Modal
                    show={Show}
                    dismissible={true}
                    onClose={() => SetShow(!Show)}
                    className='white-glassmorphism 
                    ' >
                    <Modal.Header>
                        {title}
                    </Modal.Header>
                    <Modal.Body >
                        <div className=" flex p-6  justify-center itesm-center h-none gap-2 ">

                            <div className=' w-full justify-center h-[600px] overflow-y-auto flex items-center '>

                                <Viewer
                                    defaultScale={SpecialZoomLevel.PageFit}

                                    fileUrl={`/pdfs/file_${id}.pdf`}
                                    plugins={[
                                        // Register plugins incase lol

                                        defaultLayoutPluginInstance,
                                        scrollModePluginInstance
                                    ]}
                                />


                            </div>


                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => SetShow(!Show)}>
                            Exit
                        </Button>

                    </Modal.Footer>
                </Modal>



            </div >





        </>
    )
}





const RePaper = () => {

const font = "text-white pt-10 pb-10 text-2xl font-mono overline hover:underline underline-offset-8"
const options = {
    animationData: loadingLine,
    loop: true
  };
  const { loading } = useLottie(options);

    return (
        <>
            <div className="flex w-full justify-center items-center gradient-bg-welcome ">
                <div className=" w-full items-start justify-center md: p-20 py-12 px-4">
                    
                            
                   


                    <div className='flex h-full  justify-center items-center flex-col justify-space-between flex-wrap'>

                        <div className='justify-start flex flex-row gap-20 justify-center items-center '>

                            <div className=' flex h-full flex-wrap flex-col justify-center gap-5 ' >
                            <h1 className={font}>Journal's{loading}</h1>

                                {
                                    Repapers.map(paper => {
                                        if (paper.type === "Journal") {

                                            return (
                                                <>
                                                    <RePaperCard key={paper.id}
                                                        id={paper.id}
                                                        title={paper.title}
                                                        desc={paper.desc}
                                                        image={logo}
                                                        
                                                    />
                                                </>

                                            )
                                        }
                                    })
                                }

                            </div>
                            <div className=' flex h-full flex-wrap flex-col justify-center gap-5' >
                            <h1 className={font}>Catalogue's</h1>

                                {
                                    Repapers.map(paper => {
                                        if (paper.type === "Catalogue") {

                                            return (
                                                <>
                                                    <RePaperCard key={paper.id}
                                                        id={paper.id}
                                                        title={paper.title}
                                                        desc={paper.desc}
                                                        image={logo}
                                                    />
                                                </>

                                            )
                                        }
                                    })
                                }

                            </div>
                        </div>

                        <h1 className={font}>Research Paper's</h1>
                        <div className=' flex h-full flex-wrap flex-row justify-center gap-5' >

                            {
                                Repapers.map(paper => {
                                    if (paper.type === "Research Paper") {

                                        return (
                                            <>
                                                <RePaperCard key={paper.id}
                                                    id={paper.id}
                                                    title={paper.title}
                                                    desc={paper.desc}
                                                    image={logo}
                                                />
                                            </>

                                        )
                                    }
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}

export default RePaper;