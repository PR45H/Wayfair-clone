import React, { useState } from 'react';
import downloadBanner from '@/assets/Banner_App_Download.webp';
import { Button, Input } from '@chakra-ui/react';
import { InputGroup } from '../ui/input-group';
import { toaster } from '../ui/toaster';
import aboutWayfairData from '@/data/aboutWayfair.json';
import {
    AiFillFacebook,
    AiFillPinterest,
    AiOutlineInstagram,
    AiOutlineTikTok,
    AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
        toaster.create({
            title: 'Invalid Email detail',
            type: 'error',
            duration: 5000,
        });
        } else {
        toaster.create({
            title: `Subscribed! All latest news will be sent to ${email}`,
            type: 'success',
            duration: 5000,
        });
        }
        setEmail('');
    };

    return (
        <div>
        {/* App Download Banner */}
            <div className='banner w-svw flex flex-col gap-8 sm:gap-8'>
                <div>
                    <img src={downloadBanner}
                        alt="download_app"
                        className='w-[90%] m-auto p-4' />
            </div>

            <div className="newsletter flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4">
            <h1 className="text-lg sm:text-xl font-bold text-center sm:text-left">
                Be the first to know about our best deals!
            </h1>
            <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md">
                <InputGroup className="flex-grow">
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="border border-black rounded-l-lg p-2 w-full"
                />
                </InputGroup>
                <Button type="submit" className="bg-[#7B179F] p-3 sm:p-4 rounded-r-lg text-white hover:bg-purple-800 transition">
                Submit
                </Button>
            </form>
            </div>
            <div className="h-[2px] bg-gray-400 bg-opacity-20 mt-5 w-full"></div>
        </div>

        {/* Contact Details */}
        <div className="wayfair_contact px-4 sm:px-10 py-5 w-full max-w-[90%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(aboutWayfairData).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-4">
                <h1 className="text-lg sm:text-xl font-bold">{value.title}</h1>
                <ul className="space-y-2">
                    {value.sub.map((item, index) => (
                    <li key={index} className="text-gray-600 hover:text-gray-900 hover:underline font-semibold cursor-pointer">
                        {item}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
        <div className="h-[2px] bg-gray-400 bg-opacity-20 mt-5 w-full"></div>

        {/* Company Policies */}
        <div className="policies mt-5 px-4 sm:px-10 py-3 w-full max-w-[90%] mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <AiFillFacebook className="text-[#7B179F] text-[24px] sm:text-[28px] cursor-pointer hover:scale-110 transition" />
            <AiOutlineInstagram className="text-[#7B179F] text-[24px] sm:text-[28px] cursor-pointer hover:scale-110 transition" />
            <AiFillPinterest className="text-[#7B179F] text-[24px] sm:text-[28px] cursor-pointer hover:scale-110 transition" />
            <AiOutlineTikTok className="text-[#7B179F] text-[24px] sm:text-[28px] cursor-pointer hover:scale-110 transition" />
            <AiOutlineYoutube className="text-[#7B179F] text-[24px] sm:text-[28px] cursor-pointer hover:scale-110 transition" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-5">
            <h2 className="hover:underline cursor-pointer font-semibold text-sm sm:text-base">Terms of Use</h2>
            <h2 className="hover:underline cursor-pointer font-semibold text-sm sm:text-base">Privacy Policy</h2>
            <h2 className="hover:underline cursor-pointer font-semibold text-sm sm:text-base">
                Your Privacy Rights & Choice
            </h2>
            </div>
            <p className="text-gray-600 mt-4 text-xs sm:text-sm">
            © 2025 Wayfair. All rights reserved. This website is created by PRASHANT BABU for educational purposes.
            </p>
        </div>
        </div>
    );
};

export default Footer;
