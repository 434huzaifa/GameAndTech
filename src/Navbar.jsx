import { NavLink } from "react-router-dom";
import "./custom.css"
import { useContext } from 'react';
import { myContext } from './App';
const Navbar = () => {
    const { user,LogOut } = useContext(myContext)
    console.log('user: ', user);
    return (
        <>
            <div className="navbar bg-base-100 xxl:mx-14 w-auto">
                <div className="navbar-start">

                    <a className="btn btn-ghost normal-case text-4xl font-extrabold font-pixel-font" href="/">
                        <img src="/gameandtech.png" alt="" className="h-12" />
                        Game&Tech</a>
                </div>
                <div className="navbar-end  lg:flex">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="navbar-end menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li ><NavLink to="/" className=" font-medium font-rubik-font">Home</NavLink></li>
                            <li ><NavLink to="/login" className=" font-medium font-rubik-font">Login</NavLink></li>
                            {
                                user ? "":<li><NavLink  to="/register" className=" font-medium font-rubik-font">Registration</NavLink></li>
                                // user || <li><NavLink  to="/register" className=" font-medium font-rubik-font">Registration</NavLink></li>
                            }
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal px-1 lg:flex gap-3 hidden">
                        <li ><NavLink to="/" className=" font-medium font-rubik-font">Home</NavLink></li>
                        <li><NavLink to="/login" className=" font-medium font-rubik-font">Login</NavLink></li>
                        {
                            user ?'': <li><NavLink to="/register" className=" font-medium font-rubik-font">Registration</NavLink></li>
                            // user || <li><NavLink to="/register" className=" font-medium font-rubik-font">Registration</NavLink></li>
                        }
                    </ul>
                    {
                        user && <div className="avatar flex flex-col justify-center items-center">
                            <div className="rounded-full border w-12">
                                <img src={user.photoURL} />
                            </div>
                            <p>{user.displayName}</p>
                            <button className="btn btn-error btn-xs btn-neutral" onClick={LogOut}>Log Out</button>
                        </div>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;