import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, Stack, Toaster } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { toaster } from '../ui/toaster';
import axios from 'axios';


const UserRegistationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // console.log(data);
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/register`, data);
            // console.log(response);
            const message = response.data;
            // console.log(message);
            if(response.status === 201){
                toaster.create({
                    title: message,
                    type: 'success',
                    duration: 5000,
                });
            }
        } catch (error) {
            console.error(error.response.data.message);
            toaster.create({
                title: error.response.data.message,
                type: 'error',
                duration: 5000,
            });
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='suggestion'>
                <p>Enter your details in the form to create an account</p>
            </div>
            <div className='form p-8 w-full'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap="4" align="flex-start" maxW="sm">
                        <Field
                            label="First Name"
                            invalid={!!errors.firstName}
                            errorText={errors.firstName?.message}
                        >
                            <Input
                                {...register('firstName', { required: 'First name is required' })}
                                placeholder='First Name'
                                className="border border-black rounded-l-lg p-2 w-full"
                            />
                        </Field>
                        <Field
                            label="Last Name"
                            invalid={!!errors.lastName}
                            errorText={errors.lastName?.message}
                        >
                            <Input
                                {...register('lastName', { required: 'Last name is required' })}
                                placeholder='Last Name'
                                className="border border-black rounded-l-lg p-2 w-full"
                            />
                        </Field>
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
                        <Field
                            label="Mobile Number"
                            invalid={!!errors.mobile_number}
                            errorText={errors.mobile_number?.message}
                        >
                            <Input
                                {...register('mobile', { required: 'Mobile number is required' })}
                                placeholder='Mobile Number'
                                type='number'
                                className="border border-black rounded-l-lg p-2 w-full"
                            />
                        </Field>
                        <Button type='submit' className='btn w-full bg-[#7B179F] p-3 sm:p-4 rounded-lg text-white text-lg font-semibold hover:bg-purple-800 transition'>
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </div>
            
        </div>
    );
};

export default UserRegistationForm;