import { useState } from "react";
import UseTitle from "../../Hooks/UseTitle";
import blogBg from '../../../assets/blog.jpg';
import { FaCheckCircle, FaHandPointRight } from "react-icons/fa";


const Blog = () => {
    const [more, setMore] = useState(true);
    UseTitle('Blog');
    const blogs = [
        {
            id: 1,
            details: "I am much comfortable of UI designing. I am passionate most to design the UI. Check the experiences:",
            link: "https://fascinating-gumdrop-ef9d3d.netlify.app/"
        },
        {
            id: 2,
            details: "I have experiences on team projects. I have led a team to complete a full stack project. I managed the Github, handled the UI, code on Front-end a little bit on the Back-end. Here is the project:",
            link: "https://bravo-bank.web.app/"
        },
        {
            id: 3,
            details: "I have created a full stack resell website using stripe payment method. Review the application:",
            link: "https://real-state-e4775.web.app/"
        }
        
    ]
    return (
        <article id="blog" className='w-5/6 mx-auto pb-32'>
            <h2 className='text-5xl text-emerald-500 font-bold lf'>My Blog</h2>
            <div className='grid lg:grid-cols-2 gap-5 my-10 items-center border-2 border-emerald-500 shadow-lg shadow-emerald-300 rounded-lg p-6'>
                <div><img src={blogBg} alt="Banner-Background" className='rounded-md' /></div>
                <div className='lg:ml-10 group'>
                    <p>
                        {
                            blogs?.map(blog => <div key={blog.id}>
                                <div className='flex hover:pl-2 hover:ease-in-out hover:border hover:border-gray-100 rounded-lg duration-500 items-start my-4 text-gray-50'>
                                    <FaCheckCircle className='text-emerald-500 mr-2 text-xl' />
                                    {
                                        more ?
                                            <p className='group-hover:blur-sm hover:!blur-0 group-hover:scale-90 hover:scale-100 duration-500'>{blog?.details}<br />
                                                <span><a href={blog?.link} target='_blank' rel="noreferrer"
                                                    className='link link-info flex items-center'
                                                >
                                                    <FaHandPointRight className='text-xl text-emerald-500 mr-1' />visit experience
                                                </a></span><br />
                                                {
                                                    blog?.details.length > 70 &&
                                                    <>
                                                        <button onClick={() => setMore(!more)} className='text-left font-bold link-hover link-success flex justify-end'>read less</button>
                                                    </>
                                                }
                                            </p>
                                            :
                                            <p>
                                                {
                                                    blog?.details.length > 70 ?
                                                        <>
                                                            {blog?.details.slice(0, 70)} ...<button
                                                                onClick={() => setMore(!more)}
                                                                className='font-bold link-hover link-success'>read more</button>
                                                        </>
                                                        :
                                                        <>{blog?.details}</>
                                                }
                                            </p>
                                    }
                                </div>
                            </div>)
                        }
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Blog;