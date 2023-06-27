import { Link } from "react-router-dom";
import BtnComponent from "../../Components/BtnComponent/BtnComponent";
import notFoundBg from '../../assets/notFoundBg.jpg';
import { FaNeos } from "react-icons/fa";


const NotFound = () => {
    return (
        <div className='w-[100vw] h-[100vh] py-72 mx-auto' style={{ backgroundImage: `url(${notFoundBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='divider mx-auto'>
                {/* <img src={logo} alt="" className='w-40' /> */}
                <FaNeos className=' text-white' size={100}></FaNeos>
            </div>
            <br />
            <div className='mx-auto'>
                <h2 className='text-5xl font-semibold text-center text-white'>Says: <span className='text-emerald-500 text-6xl'>404</span> Page Not Found</h2>
                <Link to="/" className='flex justify-center mt-4'><BtnComponent>Return Home</BtnComponent></Link>
            </div>
        </div>
    );
};

export default NotFound;