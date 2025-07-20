import SpotlightCard from './SpotlightCard';
import {
    CompassIcon,
    TailwindCSS,
    EJS,
    Bootstrap,
    BookIcon,
    CartIcon,
    CheckListIcon,
    Link,
    CSS,
    Redux,
} from '../assets';
const Projects = () => {
    return (
        <div>
            <p className='text-4xl m-4'>Projects</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                <a href='https://github.com/rakshit-2oo4/MAJORPROJECT'>
                    <div className='flex justify-center items-center h-72 w-72 p-2 m-2'>
                        <SpotlightCard
                            className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img src={CompassIcon} alt="Compass Icon" className="w-12 h-12 mb-2" />
                            <p className='text-2xl'>Wanderlust</p><br />
                            <p className='text-xs'>A full-stack Airbnb clone built with the MERN stack,
                                featuring user authentication, property listings, booking functionality,
                                responsive design, and real-time updates.</p>
                            <div className='flex flex-wrap justify-start items-center mt-2'>
                                <img src={EJS} alt="EJS Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                                <img src={Bootstrap} alt="Bootstrap Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                            </div>
                        </SpotlightCard>
                    </div>
                </a>
                <a href='https://github.com/rakshit-2oo4/URL-SHORTNER'>
                    <div className='flex justify-center items-center h-72 w-72 p-2 m-2'>
                        <SpotlightCard
                            className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img src={Link} alt="Link Icon" className="w-12 h-12 mb-2" />
                            <p className='text-2xl'>URL-Shortner</p><br />
                            <p className='text-xs'>A full-stack URL Shortener application built using MERN.
                                It allows users to register, log in, shorten URLs, track click statistics, and
                                view their personalized dashboard.</p>
                            <div className='flex flex-wrap justify-start items-center mt-2'>
                                <img src={TailwindCSS} alt="TailwindCSS Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                                <img src={Bootstrap} alt="Bootstrap Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                            </div>
                        </SpotlightCard>
                    </div>
                </a>
                <a href='https://github.com/rakshit-2oo4/CLOTHING'>
                    <div className='flex justify-center items-center h-72 w-72 p-2 m-2'>
                        <SpotlightCard
                            className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img src={CartIcon} alt="Cart Icon" className="w-12 h-12 mb-2" />
                            <p className='text-2xl'>Clothing</p><br />
                            <p className='text-xs'>A modern e-commerce clothing platform offering
                                seamless shopping, secure checkout, user authentication, product
                                filtering, and responsive design for an engaging.</p>
                            <div className='flex flex-wrap justify-start items-center mt-2'>
                                <img src={Redux} alt="Redux Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                                <img src={CSS} alt="CSS Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                            </div>
                        </SpotlightCard>
                    </div>
                </a>
                <a href='https://github.com/rakshit-2oo4/book-review-platform'>
                    <div className='flex justify-center items-center h-72 w-72 p-2 m-2'>
                        <SpotlightCard
                            className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img src={BookIcon} alt="Book Icon" className="w-12 h-12 mb-2" />
                            <p className='text-2xl'>Book-Review</p><br />
                            <p className='text-xs'>Full-Stack for a real-time collaborative to-do app,
                                with Trello-like boards, instant updates, Smart Assign, and conflict
                                handling for seamless multi-user task management.</p>
                            <div className='flex flex-wrap justify-start items-center mt-2'>
                                <img src={CSS} alt="CSS Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                                <img src={Redux} alt="Redux Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                            </div>
                        </SpotlightCard>
                    </div>
                </a>
                <a href='https://github.com/rakshit-2oo4/E-commerce'>
                    <div className='flex justify-center items-center h-72 w-72 p-2 m-2'>
                        <SpotlightCard
                            className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img src={CartIcon} alt="Cart Icon" className="w-12 h-12 mb-2" />
                            <p className='text-2xl'>E-Commerse</p><br />
                            <p className='text-xs'>Single-vendor e-commerce app using MERN stack
                                with product display, user auth, shopping cart, admin tools, and
                                sleek UI for seamless shopping experience.</p>
                            <div className='flex flex-wrap justify-start items-center mt-2'>
                                <img src={Redux} alt="Redux Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                                <img src={Bootstrap} alt="Bootstrap Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                                <img src={TailwindCSS} alt="TailwindCSS Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                            </div>
                        </SpotlightCard>
                    </div>
                </a>
                <a href='https://github.com/rakshit-2oo4/collaborative-todo-board-frontend'>
                    <div className='flex justify-center items-center h-72 w-72 p-2 m-2'>
                        <SpotlightCard
                            className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img src={CheckListIcon} alt="Compass Icon" className="w-12 h-12 mb-2" />
                            <p className='text-2xl'>Kanban Board</p><br />
                            <p className='text-xs'>Full-Stack for a real-time collaborative to-do app,
                                with Trello-like boards, instant updates, Smart Assign, and conflict
                                handling for seamless multi-user task management.</p>
                            <div className='flex flex-wrap justify-start items-center mt-2'>
                                <img src={CSS} alt="CSS Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                                <img src={Bootstrap} alt="Bootstrap Icon" className="w-6 h-6 mt-2 mr-2 p-1 boreder border-1 rounded-md" />
                            </div>
                        </SpotlightCard>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;