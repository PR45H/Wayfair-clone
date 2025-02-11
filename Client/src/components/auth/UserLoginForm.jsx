import React from 'react'
import { useForm } from 'react-hook-form';
import { Input, Button, Stack, Toaster } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { toaster } from '../ui/toaster';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {loginUser} from '@/redux/slices/authSlice';

const UserLoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await dispatch(loginUser(data)).unwrap();
            if (response) {
                toaster.create({
                    title: response.message || 'Login successful!',
                    type: 'success',
                    duration: 5000,
                });
                navigate('/');
            }
        } catch (error) {
            toaster.create({
                title: error?.message || 'Login failed',
                type: 'error',
                duration: 5000,
            });
        }
    }
    return (
<div className='flex flex-col items-center'>
            <div className='suggestion'>
                <p className="font-semibold text-2xl p-4">Enter details to login to your account</p>
            </div>
            <div className='form p-8 w-full'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap="4" align="flex-start" maxW="sm">
                        
                        <Field
                            label="Email"
                            invalid={!!errors.email}
                            errorText={errors.email?.message}
                        >
                            <Input
                                {...register('email', { required: 'Email is required' })}
                                placeholder='Email'
                                className="border border-black rounded-l-lg p-2 w-full"
                            />
                        </Field>
                        <Field
                            label="Password"
                            invalid={!!errors.password}
                            errorText={errors.password?.message}
                        >
                            <Input
                                {...register('password', { required: 'Password is required' })}
                                placeholder='Password'
                                type='password'
                                className="border border-black rounded-l-lg p-2 w-full"
                            />
                        </Field>
                        
                        <Button type='submit' className='btn w-full bg-[#7B179F] p-3 sm:p-4 rounded-lg text-white text-lg font-semibold hover:bg-purple-800 transition'>
                            Login
                        </Button>
                    </Stack>
                </form>
            </div>
        </div>
    )

}
export default UserLoginForm