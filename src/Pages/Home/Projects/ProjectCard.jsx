import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaGithub, FaGlobe, FaRegStickyNote } from 'react-icons/fa';
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    const { img, title, client, live, _id } = project;
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            className=""
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ? (
            <div className="">
                <motion.button
                    initial={false}
                    animate={[isHover ? "hover" : "rest"]}
                    whileTap="press"
                    variants={buttonVariants}
                    onHoverStart={() => setIsHover(true)}
                    onHoverEnd={() => setIsHover(false)}
                    className="star"
                >
                    <motion.span>
                        <div className="rounded-md lg:relative border-2 border-emerald-500 duration-500 text-white group-hover:blur-sm hover:!blur-none group-hover:scale-90 hover:!scale-100" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}
                        >
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img src={img} alt="projectImg" className="w-full rounded-t-lg h-72 p-6 border-2 border-b-emerald-500 border-t-0 border-x-0 lg:group-hover:blur-sm" />
                                </PhotoView>
                            </PhotoProvider>
                            <div className="lg:-mt-72 ease-in-out lg:top-0 mx-auto justify-center lg:scale-0 group-hover:scale-90 lg:py-6 duration-1000 flex flex-col p-6 lg:p-10 lg:bg-gray-600 lg:bg-opacity-50 rounded-lg space-y-6 gap-6">
                                <div className="space-y-2">
                                    <h2 className="text-4xl text-center text-emerald-500 font-extrabold tracking-wide" style={{ textShadow: "2px 2px white" }}>{title}</h2>
                                </div>
                                <div className='flex justify-center items-center'>
                                    {/* <a rel="noreferrer" href={client} target='_blank' className='bg-gray-200 rounded-md shadow-lg'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGithub className='text-3xl' /></p></a> */}
                                    <a rel="noreferrer" href={live} target="_blank" className='bg-gray-200 rounded-md shadow-lg'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-3xl hover:animate-spin hover:duration-75' />
                                    </p></a>
                                </div>
                                <Link to={`/project/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 lg:bg-gray-200 hover:bg-emerald-500 text-emerald-500 uppercase hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>details
                                    <FaRegStickyNote className='ml-2' />
                                </Link>
                            </div>
                        </div>
                    </motion.span>
                </motion.button>
            </div>
            ) : (
                <div className="border-2 border-emerald-500 rounded-md">
                    <motion.button
                        initial={false}
                        animate={[isHover ? "hover" : "rest"]}
                        whileTap="press"
                        variants={buttonVariants}
                        onHoverStart={() => setIsHover(true)}
                        onHoverEnd={() => setIsHover(false)}
                        className="star"
                    >
                        <motion.span>
                            <div className="rounded-md lg:relative border-2 border-emerald-500 duration-500 text-white group-hover:blur-sm hover:!blur-none group-hover:scale-90 hover:!scale-100" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
                                <img src={img} alt="projectImg" className="w-full rounded-t-lg h-72 p-6 border-2 border-b-emerald-500 border-t-0 border-x-0 lg:group-hover:blur-sm" />
                            </div>
                        </motion.span>
                    </motion.button>
                    <div className="lg:-mt-72 ease-in-out lg:top-0 mx-auto justify-center lg:scale-0 group-hover:scale-90 lg:py-6 duration-1000 flex flex-col p-6 lg:p-10 lg:bg-gray-600 lg:bg-opacity-50 rounded-lg space-y-6 gap-6 lg:hidden">
                        <div className="space-y-2">
                            <h2 className="text-4xl text-center text-emerald-500 font-extrabold tracking-wide" style={{ textShadow: "2px 2px white" }}>{title}</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <a rel="noreferrer" href={client} target='_blank' className='bg-gray-200 rounded-md shadow-lg'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGithub className='text-3xl' /></p></a>
                            <a rel="noreferrer" href={live} target="_blank" className='bg-gray-200 rounded-md shadow-lg'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-3xl hover:animate-spin hover:duration-75' />
                            </p></a>
                        </div>
                        <Link to={`/project/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 lg:bg-gray-200 hover:bg-emerald-500 text-emerald-500 uppercase hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>details
                            <FaRegStickyNote className='ml-2' />
                        </Link>
                    </div>
                </div>
            )}
        </div>
        // <div className="rounded-md lg:relative border-2 border-emerald-500 duration-500 text-white group-hover:blur-sm hover:!blur-none group-hover:scale-90 hover:!scale-100" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}
        // >
        //     <PhotoProvider>
        //         <PhotoView src={img}>
        //             <img src={img} alt="projectImg" className="w-full rounded-t-lg h-72 p-6 border-2 border-b-emerald-500 border-t-0 border-x-0 lg:group-hover:blur-sm" />
        //         </PhotoView>
        //     </PhotoProvider>
        //     <div className="lg:-mt-72 ease-in-out lg:top-0 mx-auto justify-center lg:scale-0 group-hover:scale-90 lg:py-6 duration-1000 flex flex-col p-6 lg:p-10 lg:bg-gray-600 lg:bg-opacity-50 rounded-lg space-y-6 gap-6">
        //         <div className="space-y-2">
        //             <h2 className="text-4xl text-center text-emerald-500 font-extrabold tracking-wide" style={{ textShadow: "2px 2px white" }}>{title}</h2>
        //         </div>
        //         <div className='flex justify-between items-center'>
        //             <a rel="noreferrer" href={client} target='_blank' className='bg-gray-200 rounded-md shadow-lg'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGithub className='text-3xl' /></p></a>
        //             <a rel="noreferrer" href={live} target="_blank" className='bg-gray-200 rounded-md shadow-lg'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-3xl hover:animate-spin hover:duration-75' />
        //             </p></a>
        //         </div>
        //         <Link to={`/project/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 lg:bg-gray-200 hover:bg-emerald-500 text-emerald-500 uppercase hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>details
        //             <FaRegStickyNote className='ml-2' />
        //         </Link>
        //     </div>
        // </div>
    );
};
const buttonVariants = {
    hover: {
        scale: 1.1
    }
}
export default ProjectCard;
