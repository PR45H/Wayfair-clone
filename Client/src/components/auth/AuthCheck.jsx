import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from '@/redux/slices/authSlice';

const AuthCheck = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(getUserData());
        }
    }, [dispatch]);

    return null;
};

export default AuthCheck;