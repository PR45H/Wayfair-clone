import React, { useState } from "react";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu"; // Assuming you have these Chakra components available
import navbarData from "@/data/navbarData.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white text-black ">
      <div className="max-w mx-auto ">
        <div className="hidden md:flex space-x-4 justify-evenly">
          {navbarData.map((category, index) => (
            <MenuRoot key={index}>
              <MenuTrigger asChild>
                <button className="bg-transparent font-semibold border-none text-sm cursor-pointer px-4 py-2 hover:text-[#7B189F] hover:underline-">
                  {category.name}
                </button>
              </MenuTrigger>
              <MenuContent className="bg-white text-black p-4 w-full md:min-w-[600px] rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.subcategories && category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="font-bold text-md mb-2">
                        {subcategory.name}
                      </h3>
                      {subcategory.items && subcategory.items.map((item, itemIndex) => (
                        <MenuItem key={itemIndex} className="hover:text-[#7B189F] hover:underline bg-transparent cursor-pointer">
                          {item}
                        </MenuItem>
                      ))}
                    </div>
                  ))}
                </div>
              </MenuContent>
            </MenuRoot>
          ))}
        </div>
        {/* <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div> */}
      {/* {isOpen && (
        <div className="md:hidden bg-white text-black shadow-lg p-4 rounded-md">
          {navbarData.map((category, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-md mb-2">{category.name}</h3>
              {category.subcategories && category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="ml-4">
                  <h4 className="font-semibold text-sm mb-1">{subcategory.name}</h4>
                  {subcategory.items && subcategory.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm">{item}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )} */}
      </div>
    </div>
  );
};

export default Navbar;
