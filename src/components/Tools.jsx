import ShinyText from './ShinyText';
import {
    GitIcon,
    GithubIcon,
    VisualStudioIcon,
    UfoIcon,
    ChatGPT,
    Chrome,
} from '../assets';

const Tools = () => {
    return (
        <div className='h-full w-full px-12 sm:px-0'>
            <p className='text-2xl sm:text-3xl md:text-4xl m-2 sm:m-4'>Tools</p>
            <div className='flex flex-wrap justify-start items-center gap-3 sm:gap-4 md:gap-5 px-2 sm:px-0'>
                <a href='https://code.visualstudio.com/'>
                <div className='bg-neutral-800 p-3 sm:p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 hover:bg-neutral-600'>
                    <img src={VisualStudioIcon} alt="Checklist Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2" />
                    <ShinyText text='VS Code' disabled={false} speed={3} className='custom-class text-xs sm:text-sm' />
                </div>
                </a>
                <a href='https://www.google.com/intl/en_in/chrome/'>
                <div className='bg-neutral-800 p-3 sm:p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 hover:bg-neutral-600'>
                    <img src={Chrome} alt="Chrome Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2" />
                    <ShinyText text='Chrome' disabled={false} speed={3} className='custom-class text-xs sm:text-sm' />
                </div>
                </a>
                <a href='https://chat.openai.com'>
                <div className='bg-neutral-800 p-3 sm:p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 hover:bg-neutral-600'>
                    <img src={ChatGPT} alt="ChatGPT Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2" />
                    <ShinyText text='ChatGPT' disabled={false} speed={3} className='custom-class text-xs sm:text-sm' />
                </div>
                </a>
                <a href='https://git-scm.com/'>
                <div className='bg-neutral-800 p-3 sm:p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 hover:bg-neutral-600'>
                    <img src={GitIcon} alt="Git Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2" />
                    <ShinyText text='Git' disabled={false} speed={3} className='custom-class text-xs sm:text-sm' />
                </div>
                </a>
                <a href='https://github.com/'>
                <div className='bg-neutral-800 p-3 sm:p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 hover:bg-neutral-600'>
                    <img src={GithubIcon} alt="Github Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2" />
                    <ShinyText text='GitHub' disabled={false} speed={3} className='custom-class text-xs sm:text-sm' />
                </div>
                </a>
                <a href='https://hoppscotch.io/'>
                <div className='bg-neutral-800 p-3 sm:p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 hover:bg-neutral-600'>
                    <img src={UfoIcon} alt="Hoppscotch Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2" />
                    <ShinyText text='Hoppscotch' disabled={false} speed={3} className='custom-class text-xs sm:text-sm' />
                </div>
                </a>
            </div>
        </div>
    )
}

export default Tools;