
import { HiMenu, HiOutlineBriefcase, HiOutlineHome, HiPhoneMissedCall, HiOutlineChartBar, HiOutlineTable, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import { FaNeos } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const menuItems = <>
        <div className='group duration-500'>
            <li
                className='hover:transition-all bg-gray-600 lg:bg-transparent
                hover:scale-110 hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><a href='#banner'><HiOutlineHome /><span className='hideDrawer group-hover:block lg:hidden'>Home</span></a></li>
            <li
                className='hover:transition-all bg-gray-600 lg:bg-transparent
                hover:scale-110 hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><a href='#projects'><HiOutlineBriefcase /><span className='hideDrawer group-hover:block lg:hidden'>Projects</span></a></li>
            <li
                className='hover:transition-all bg-gray-600 lg:bg-transparent
                hover:scale-110 hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><a href='#contract'><HiPhoneMissedCall /><span className='hideDrawer group-hover:block lg:hidden'>Contacts</span></a></li>
            <li
                className='hover:transition-all bg-gray-600 lg:bg-transparent
                hover:scale-110 hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><a href='#skills'><HiOutlineChartBar /><span className='hideDrawer group-hover:block lg:hidden'>Skills</span></a></li>
            <li
                className='hover:transition-all bg-gray-600 lg:bg-transparent
                hover:scale-110 hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><a href='#about'><HiOutlineUser /><span className='hideDrawer group-hover:block lg:hidden'>About</span></a></li>
            <li
                className='hover:transition-all bg-gray-600 lg:bg-transparent
                hover:scale-110 hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><a href='#blog'><HiOutlineTable /><span className='hideDrawer group-hover:block lg:hidden'>Blog</span></a></li>
        </div>
    </>
    return (
        <div className="navbar lg:w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        onClick={() => setOpen(!open)}
                        tabIndex={0} className="btn btn-ghost">
                        <HiMenu className='text-2xl lg:hidden text-white' />
                    </label>
                    {
                        open &&
                        <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white z-30">
                            {menuItems}
                        </ul>
                    }
                </div>
                <div className="hidden lg:flex ">
                    <ul className="menu lg:fixed z-30 menu-vertical -ml-40">
                        {menuItems}
                    </ul>
                </div>

            </div>
            <div className="navbar-end justify-end">
                {/* <img src={logo} alt="" className='h-14 lg:fixed lg:-mr-32 lg:mt-10' /> */}
                <FaNeos size={40} className='text-white'></FaNeos>
            </div>
        </div>
    );
};

export default Navbar;