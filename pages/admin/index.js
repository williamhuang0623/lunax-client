import React, { useState, useEffect } from 'react';
import AdminDashboard from 'admin';
import Sidebar from 'component/AdminSideBar';
import { useRouter } from 'next/router';
import UserApi from '../../lib/api/User';
import { isEmpty } from '../../lib/utils';
function authParams() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        return { secret_token: token };
    } else {
        return {};
    }
}
export default function Admin() {
    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(async () => {
        if (isEmpty(authParams())) {
            setUser(false);
            router.push('/admin/login');
        }
        if (!isEmpty(authParams())) {
            const userData = await new UserApi().getUserProfile(authParams());
            setUser(userData);
        }
    }, []);

    return <>{user ? <AdminDashboard router={router} /> : <h1>Loading...</h1>}</>;
}
