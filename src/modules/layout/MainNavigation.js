import { Link } from "react-router-dom";
import "./MainNavigation.css";
import {useState} from "react";
import {IoMenu} from 'react-icons/io5';
import Logo from "../../assets/daccord.svg";


function MainNavigation() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      {/* Navigation Bar */}
      <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar p-4 rounded-lg flex items-center'>
           <img src={Logo} alt='Daccord' width="40px" />
           <p className='text-lg text-slate-200 font-medium'>Daccord</p>

           <div className="hidden md:flex items-center gap-6 ml-6 flex-1">

           <Link to='/' className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out pl-4" activeClassName="active">Home</Link>

           <Link to='/about-us' className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out pl-4" activeClassName="active">AboutUs</Link>

           <Link to='/download' className="ml-auto text-base text-textBase hover:text-slate-100 cursor-ponter border border-TextBase px-2 py-1 rounded-xl hover:border-textBase duration-100 ease-in-out" activeClassName="active">Download</Link>
        </div>
        <div className="block md:hidden ml-auto cursor-pointer"  onClick={()=>setIsActive(!isActive)}>
          <IoMenu className="text-2xl text-textBase"/>
        </div>

        {isActive &&(
          <div className="p-4 w-275 bg-navBar rounded-lg fixed  top-24 right-16 flex flex-col items-center justify-evenly gap-6">

            <Link to='/' className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out pl-4" onClick={() => setIsActive(false)}>Home</Link>

            <Link to='/about-us' className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out pl-4" onClick={() => setIsActive(false)}>AboutUs</Link>

            <Link to='/download' className="text-base text-textBase hover:text-slate-100 cursor-ponter border border-TextBase px-2 py-1 rounded-xl hover:border-textBase duration-100 ease-in-out" onClick={() => setIsActive(false)}>Downloads</Link>

          </div>
        )}
        </div>
      </nav>
    </div>
    
  );
}

export default MainNavigation;