import { Link } from "react-router-dom";
import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { AiOutlineQuestion, AiOutlineReconciliation, AiOutlineSend } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";
import { BiBook } from "react-icons/bi";




const NavbarItem = ({ title, classprops }) => {
    return (
        <li className={`mx-4 text-white cursor-pointer  ${classprops}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [NavbarColor, SetNavbarColor] = (useState(false))
    // const [Dropdown, SetDropdown] = (useState(false))

    const changeColor = () => {
        if (window.scrollY >= 120) {
            SetNavbarColor(true)
        } else {
            SetNavbarColor(false)
        }
    }


    window.addEventListener('scroll', changeColor)

    return (
        <nav className={`w-full z-40  flex  top-0  md:justify-center justify-between items-center p-3 ${NavbarColor ? 'blue-glassmorphism-navbar sticky' : 'p-8'} transition ease-in-out`} >
            <div className="md:flex-[0.5] flex justify-start flex-row items-center gap-2.5 hover:cursor-pointe ">
                <Link to={'/'} >
                    <img src={`/logo_web.png`} alt="logo" className="w-10 cursor-pointer" />
                </Link>
                <Link to={'/'}>
                    <span className="  text-xl font-semibold dark:text-white">
                        Femacare
                    </span>
                </Link>
            </div>
            <ul className='text-white text-lg sm:text-xl md:text-2xl flex flex-row justify-between items-center flex-initial'>
                {["Explore", "Enroll"].map((item, index) => (
                    <Link to={`/${item.toLowerCase()}`} ><NavbarItem key={item + index} title={item} /></Link>

                ))}
            </ul>
            <div className='justify-center items-center '>

                <div className="blue-glassmorphism">
                    <Dropdown className=" inline-flex !bg-inherit items-center p-2 text-sm font-medium   rounded-lg" label={<svg className="w-6 h-6 " aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>}>
                        <Dropdown.Header className="w-full" >
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
                        </Dropdown.Header>
                        <Dropdown.Item icon={HiChatAlt2} >
                            Blogs
                        </Dropdown.Item>
                        <Dropdown.Item icon={BiBook}>
                            Research Papers
                        </Dropdown.Item>
                        <Dropdown.Item icon={AiOutlineReconciliation} >
                            Femacare Offerings
                        </Dropdown.Item>
                        <Dropdown.Item icon={AiOutlineQuestion}>
                            Help
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item icon={AiOutlineSend}>
                            Contact Us
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>





        </nav>

    );

}

export default Navbar;