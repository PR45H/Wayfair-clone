import React from 'react'
import { MdLockOutline } from 'react-icons/md'
import logo from '@/assets/Wayfair_logo_with_tagline.png'
import UserRegistationForm from '@/components/layout/UserRegistationForm.jsx'
import Footer from '@/components/layout/Footer'

const Signup = () => {
    return (
        <>
            <div className='main_box flex flex-col items-center'>
                <div className='top_banner w-[80%] items-center flex justify-between border-b border-opacity-30 border-black m-auto p-8'>
                    <div className="logo">
                        <img src={logo} alt="logo" className='h-14' />
                    </div>
                    <div className='span flex gap-4'> Secure Login <MdLockOutline className='text-2xl'/></div>
                </div>

                <div>
                    <UserRegistationForm />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Signup