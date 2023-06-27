
import { HiOutlineDownload } from 'react-icons/hi';
import { Typewriter } from 'react-simple-typewriter';
import { Zoom } from 'react-reveal';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import UseTitle from '../../Hooks/UseTitle';
import bannerBg from '../../../assets/bannerBg.jpg';
import resume from '../../../assets/Mern Stack Resume (1).pdf';

const Banner = () => {
    UseTitle('Home')
    return (
        <div id='banner' className='w-full md:w-5/6 mb-24 mx-auto rounded-lg' style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
            <div className="hero h-full rounded-lg" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 
    0.52), #000000), url(${bannerBg})`
            }}>
                <div className="hero-overlay opacity-70 rounded-lg"></div>
                <div className="hero-content text-center text-white grid items-center justify-center lg:grid-cols-2 rounded-lg">
                    <img src="https://i.ibb.co/YLp1DX1/p.jpg" alt="myProfile" className='lg:w-3/5 lg:-ml-0 rounded-t-lg mx-auto shadow-lg' style={{ boxShadow: 'inset 2px 3px 12px rgb(16, 185, 129)' }} />
                    <article className='lg:text-left lg:-ml-[170px] lg:w-[60vw] pr-5'>
                        <Zoom>
                            <h1 className="mb-5 text-5xl font-bold mt-10 text-emerald-500">Hi! <span className='text-white'>I'm Nazmul Bhuyian</span></h1>
                        </Zoom>
                        <h1 className="mb-5 text-5xl font-bold">I'm a <span className='text-emerald-500'>
                            <Typewriter
                                words={['Web Developer', 'Front-End Developer', 'MERN Stack Developer', 'React Developer']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h1>
                        <div className='lg:w-[38em]'>
                            <p className="mb-5">I am a skilled Mern Stack developer. Always I prefer hand coded organized programming. I love to learn new technology and want to make peoples life easy with programming.</p>
                        </div>
                        <div className="flex mb-5 justify-center lg:justify-start">
                            <a className='p-4 text-xl ml-5 lg:ml-0 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='mailto:nazmulbhuyian000@gmail.com'><FaEnvelope /></a>
                            <a rel="noreferrer" className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://web.facebook.com/nazmul.nobel.3' target='_blank'><FaFacebookF /></a>
                            <a rel="noreferrer" className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://www.linkedin.com/in/nazmul-bhuyian-mern-stack-developer/' target='_blank'><FaLinkedinIn /></a>
                            <a rel="noreferrer" className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://github.com/nazmulbhuyian' target='_blank'><FaGithub /></a>
                            <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='tel: +8801885107155'><FaPhone className='rotate-180' /></a>
                        </div>
                        <div className='mx-auto w-full lg:mr-auto mb-10 lg:mb-0'>
                            <a href={resume} download={resume}>
                                <button className='btn btn-outline border border-emerald-500 text-emerald-500 hover:text-white text-xl uppercase hover:bg-emerald-500 hover:bg-gradient-to-r font-semibold hover:duration-1000'>
                                    Download Resume <HiOutlineDownload className='ml-3' />
                                </button>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Banner;