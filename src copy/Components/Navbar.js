import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

function Navbar() {
    const { currentUser,logout } = useAuth();
    const [loading,setLoading]=useState(false);

    const handleLogout=async()=>{
try {
    setLoading(true);
    await logout();
toast.success("User successfully logged out");
} catch (error) {
    console.log(error);
    toast.error("Something went wrong! User could not be logged out")
}
setLoading(false);
    }
    return (
        <>
        <div className='flex justify-between bg-orange-200 h-16 items-center'>
            <div><h1 className='text-3xl font-bold text-orange-600'>BUSYBUY</h1></div>
            <div className='flex gap-3 mr-4'>
                {!currentUser ? (
                    <>
                        <NavLink to="/signup" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-gray-500 font-bold"}>Signup(New User)</NavLink>
                        <NavLink to="/signin" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-gray-500 font-bold"}>Signin(Existing User)</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/cart" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-gray-500 font-bold"}>Cart</NavLink>
                        <NavLink to="/orders" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-gray-500 font-bold"}>Orders</NavLink>
                        <NavLink to="/" onClick={handleLogout} className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-gray-500 font-bold"}>Logout</NavLink>
                    </>
                )}
            </div>
        </div>
        <ToastContainer/>
        <Outlet/>
        </>
    );
}

export default Navbar;
