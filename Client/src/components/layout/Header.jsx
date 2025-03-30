import React from "react";
import logo from "@/assets/Wayfair_logo_with_tagline.png";
import { HStack, Input, MenuItemGroup } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { BsCartDash, BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu"
import SignInMenu from "./SignInMenu";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Header = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <header>
            {/* Middle section: logo, search & profile */}
            <div className="px-4 sm:px-10 py-2 flex flex-col border sm:flex-row items-center justify-between">
                <div className="logo mb-2 sm:mb-0">
                    <img src={logo} alt="logo" className="h-10 sm:h-12 cursor-pointer" />
                </div>

                <div className="w-[50%] mb-2 sm:mb-0 ">
                    <HStack gap="10" className="">
                        <InputGroup flex="1" startElement={<BsSearch />}>
                            <Input
                                placeholder="Find Anything..."
                                size="sm"
                                className="rounded-lg w-full border border-gray-300"
                            />
                        </InputGroup>
                    </HStack>
                </div>
                
                <div className="flex gap-6">
                    {/* Profile Icon Placeholder */}
                    <div>
                        <MenuRoot>
                            <MenuTrigger asChild>
                                <button className="flex items-center gap-2 hover:text-[#7B189F]">
                                    <FaRegUserCircle className="text-xl"/>
                                    {isAuthenticated ? 'My Account' : 'Sign In'}
                                </button>
                            </MenuTrigger>
                            <MenuContent>
                                <SignInMenu />
                            </MenuContent>
                        </MenuRoot>
                    </div>

                    <div>
                        <button className="flex items-center gap-2 hover:text-[#7B189F]">
                            <BsCartDash className="text-xl" />
                            Cart
                        </button>
                    </div>

                </div>
            </div>
            {/* Mobile Navigation: Show hamburger menu on mobile */}
            <div className="px-4 sm:hidden flex justify-end">
                <button className="p-2">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <Navbar/>
        </header>
    );
};

export default Header;
