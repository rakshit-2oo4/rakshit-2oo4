import ShinyText from './ShinyText';
import {
    Redux,
    CSS,
    HTML,
    javaScript,
    Reacts,
    Express,
    NodeJs,
    TailwindCSS,
    EJS,
    Bootstrap,
    C,
    Java,
    MySQL,
    MongoDB
} from '../assets';

const Tech = () => {
    return (
        <div className='h-full w-full'>
            <p className='text-4xl m-4'>Tech</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center'>
                <a href='https://isocpp.org/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={C} alt="C++ Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='C++' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://www.java.com/en/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={Java} alt="Java Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='Java' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://html.com/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={HTML} alt="HTML Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='HTML' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://www.w3.org/Style/CSS/Overview.en.html'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={CSS} alt="CSS Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='CSS' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://www.javascript.com/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={javaScript} alt="javaScript Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='JavaScript' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://www.mongodb.com/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={MongoDB} alt="MongoDB Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='MongoDB' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://www.mysql.com/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={MySQL} alt="MySQl Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='SQL' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://expressjs.com/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={Express} alt="Express Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='ExpressJS' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://react.dev/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={Reacts} alt="React Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='ReactJS' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://nodejs.org/en'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={NodeJs} alt="Node JS Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='NodeJs' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://ejs.co/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={EJS} alt="EJS Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='EJS' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://getbootstrap.com/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={Bootstrap} alt="Bootstrap Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='Bootstrap' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://tailwindcss.com/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={TailwindCSS} alt="Tailwind Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='Tailwind' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
                <a href='https://redux.js.org/'>
                    <div className='bg-neutral-800 p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center border border-neutral-700 h-24 w-24 hover:bg-neutral-600'>
                        <img src={Redux} alt="Redux Icon" className="w-12 h-12 mb-2" />
                        <ShinyText text='Redux' disabled={false} speed={3} className='custom-class' />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Tech;