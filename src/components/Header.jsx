import BlurText from "./BlurText";
import {
    X,
    Mail,
    LinkedIn,
    Github
} from '../assets';

const Header = () => {
    return (
        <div>
            <div>
                <BlurText
                    text="Hi ! I am Rakshit and I am a Full Stack Developer"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-4xl mb-8 mx-2"
                />
            </div>
            <div className="flex gap-4 mb-8">
                <a
                    href="https://www.linkedin.com/in/rakshit-sharma-b68026264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border-2 border-solid rounded-full mr-1 p-3 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-black">
                    <img src={LinkedIn} className="w-6 h-6 mr-2 bg-white rounded-full" /> LinkedIn
                </a>
                <a
                    href="https://github.com/rakshit-2oo4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border-2 border-solid rounded-full mr-1 p-3 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-black">
                    <img src={Github} className="w-6 h-6 mr-2 bg-white rounded-full" /> Github
                </a>
                <a
                    href="https://x.com/RakshitSha2oo4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border-2 border-solid rounded-full mr-1 p-3 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-black">
                    <img src={X} className="w-6 h-6 mr-2 opacity-100 bg-white rounded-full" /> twitter
                </a>
            </div>
            <div className="text-center mx-2">
                <p>Hi, My name is Rakshit and I am a Full Stack
                    developer from India <br /> with 1 year experiense in
                    MERN. Ready to build word</p>
            </div>
        </div>
    )
}

export default Header;
