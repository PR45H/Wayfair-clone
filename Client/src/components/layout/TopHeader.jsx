import React from 'react'

const TopHeader = () => {
    return (
        <div>
            {/* Top banner hidden on mobile */}
            <div className="bg-[#7B189F] px-4 sm:px-10 py-1 hidden sm:flex justify-end">
                <ul className="flex gap-4 font-semibold text-white">
                    <li className="cursor-pointer hover:underline">Rewards</li>
                    <div className="w-[1px] h-full bg-white"></div>
                    <li className="cursor-pointer hover:underline">Financing</li>
                    <div className="w-[1px] h-full bg-white"></div>
                    <li className="cursor-pointer hover:underline">Professional</li>
                    <div className="w-[1px] h-full bg-white"></div>
                    <li className="cursor-pointer hover:underline">
                        Free & Easy Delivery Over $35
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopHeader