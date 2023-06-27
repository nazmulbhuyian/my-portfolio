
import { FaEnvelope, FaFacebookF, FaGithub,  FaLinkedinIn, FaPhone } from 'react-icons/fa';

import UseTitle from '../../Hooks/UseTitle';

const About = () => {
    UseTitle('AboutMe');
    return (
        <div id='about' className='w-full md:w-4/5 mx-auto'>
            <h1 className='text-5xl text-emerald-500 uppercase font-bold text-center'>About me</h1>
            <div className='py-32'>
                <div className="card max-w-lg mx-auto border-2 border-emerald-500 shadow-xl" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}><img src='https://i.ibb.co/YLp1DX1/p.jpg' alt="profile" className='w-52 h-56 rounded-full border-2 border-emerald-500 -mt-20 mx-auto' />
                    <div className="card-body">
                        <h2 className="card-title text-white text-4xl font-bold justify-center">
                            Nazmul Bhuyian
                        </h2>
                        <p className='text-white text-center lg:w-3/5 mx-auto pt-5'>I am a skilled Mern Stack developer. Always I prefer hand coded organized programming. I love to learn new technology and want to make peoples life easy with programming.</p>
                        <div className="card-actions mx-auto mt-5 text-white">
                            <div className="flex mb-5 flex-grow lg:justify-start">
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='mailto:nazmulbhuyian000@gmail.com.com'><FaEnvelope /></a>
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://web.facebook.com/nazmul.nobel.3' target='_blank'><FaFacebookF /></a>
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://www.linkedin.com/in/nazmul-bhuyian-mern-stack-developer/' target='_blank'><FaLinkedinIn /></a>
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://github.com/nazmulbhuyian' target='_blank'><FaGithub /></a>
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='tel: +8801885107155'><FaPhone className='rotate-180' /></a>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default About;