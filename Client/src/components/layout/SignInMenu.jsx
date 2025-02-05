import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { MdCardGiftcard, MdOutlineManageAccounts, MdOutlineReviews, } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SignInMenu = () => {
    const menu_list = [
        { name: "Create Account", link: "/signup", icon: <MdOutlineManageAccounts /> },
        { name: "My Account", link: "/account", icon: <FaRegUserCircle /> },
        { name: "My Orders", link: "/orders", icon: <LuPackageOpen /> },
        { name: "Gift Card", link: "/giftcard", icon: <MdCardGiftcard /> },
        {name: "Review My Purchases", icon: <MdOutlineReviews/>},
    ];

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-2 p-2">
            <div>
                <button className="bg-[#7B189F] px-8 py-2 text-white font-semibold w-full rounded-2xl"
                    onClick={() => navigate("/signin")}
                >
                    Sign In
                </button>
            </div>
            {menu_list.map((item) => (
                <button
                    key={item.name}
                    onClick={() => item.link && navigate(item.link)}
                    className="flex items-center gap-2 p-2  w-full text-left hover:text-[#7B189F] hover:underline justify-start"
                >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.name}</span>
                </button>
            ))}
        </div>
    );
};

export default SignInMenu;
