import BlurText from "./BlurText";
import { Drive } from '../assets';

const Footer = () => {
    return (
        <div className="h-100vh w-full mb-12 px-4 sm:px-0 ">
            <hr className="text-white w-250 shadow-lg shadow-white max-w-full" />
            <div>
                <BlurText
                    text="Thank you for exploring my work !"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-xl ml-80 sm:text-2xl mb-6 sm:mb-8 mx-4 sm:mx-50 mt-2 md:text-2xl md:mb-8 md:mx-10 md:mt-2"
                />
            </div>
            <div className="w-28 h-28 ml-80 sm:w-32 sm:h-32 ml-2 sm:ml-10 lg:w-32 lg:h-32 lg:ml-15">
                <a
                    href="https://drive.google.com/file/d/1Ujf-vhR1kd8nm_tDKdjMXGfP58QQTzq4/view?usp=drive_link"
                    className="flex items-center justify-center border-2 border-solid rounded-full mr-1 p-2 sm:p-3 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-black text-sm sm:text-base" >
                    <img src={Drive} alt="Drive Icon" className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2 opacity-100 bg-white rounded-full" />
                    <span className="whitespace-nowrap">Resume</span>
                </a>
            </div>
            <hr className="text-white w-250 shadow-lg shadow-white max-w-full" />
        </div>
    )
}
export default Footer;
