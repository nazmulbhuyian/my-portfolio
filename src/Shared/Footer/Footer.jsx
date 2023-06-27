import { FaNeos } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-800 text-primary-content">
            <div>
                {/* <img src={logo} alt="" className='w-20' /> */}
                <FaNeos size={40} className='text-white'></FaNeos>
                <p className="font-bold">
                    Providing Web Development Service since 2022
                </p>
                <p>&copy; 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;