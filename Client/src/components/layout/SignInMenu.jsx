import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { MdCardGiftcard, MdOutlineManageAccounts, MdOutlineReviews } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';
import { toaster } from '@/components/ui/toaster';

const SignInMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const guestMenuList = [
        { name: "Create Account", link: "/signup", icon: <MdOutlineManageAccounts /> },
    ];

    const authenticatedMenuList = [
        { name: "My Account", link: "/account", icon: <FaRegUserCircle /> },
        { name: "My Orders", link: "/orders", icon: <LuPackageOpen /> },
        { name: "Gift Card", link: "/", icon: <MdCardGiftcard /> },
        { name: "Review My Purchases", icon: <MdOutlineReviews/> },
    ];

    const handleLogout = () => {
        dispatch(logout());
        toaster.create({
            title: 'Logged out successfully',
            type: 'success',
            duration: 3000,
        });
        navigate('/');
    };

    return (
        <div className="flex flex-col gap-2 p-2 min-w-[200px]">
            {isAuthenticated ? (
                <>
                    <div className="px-4 py-2">
                        <p className="font-semibold text-lg text-[#7B189F]">
                            Hello, {user?.firstName || 'User'}
                        </p>
                    </div>
                    {authenticatedMenuList.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => item.link && navigate(item.link)}
                            className="flex items-center gap-2 p-2 w-full text-left hover:text-[#7B189F] hover:underline justify-start"
                        >
                            {item.icon && <span>{item.icon}</span>}
                            <span>{item.name}</span>
                        </button>
                    ))}
                    <div className="h-[1px] bg-gray-200 my-2" />
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 p-2 w-full text-left hover:text-[#7B189F] hover:underline justify-start"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <button 
                        className="bg-[#7B189F] px-8 py-2 text-white font-semibold w-full rounded-2xl"
                        onClick={() => navigate("/signin")}
                    >
                        Sign In
                    </button>
                    {guestMenuList.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => item.link && navigate(item.link)}
                            className="flex items-center gap-2 p-2 w-full text-left hover:text-[#7B189F] hover:underline justify-start"
                        >
                            {item.icon && <span>{item.icon}</span>}
                            <span>{item.name}</span>
                        </button>
                    ))}
                </>
            )}
        </div>
    );
};

export default SignInMenu;
