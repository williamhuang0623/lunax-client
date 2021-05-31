import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import UserApi from './api/User';
function authParams() {
    if (typeof window !== 'undefined') {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            return { secret_token: token };
        } else {
            return {};
        }
    }
}
const fetcher = (url) =>
    fetch('http://localhost:8009/user/me')
        .then((r) => r.json())
        .then((data) => {
            return { user: data?.user || null };
        });

export function useUser({ redirectTo, redirectIfFound } = {}) {
    // console.log('hello');
    const user = new UserApi().getUserProfile(authParams());
    // const { data, error } = useSWR('/api/user', fetcher);
    const finished = Boolean(user);
    const hasUser = Boolean(user);
    const error = 'none';
    useEffect(() => {
        if (!redirectTo || !finished) return;
        if (
            // If redirectTo is set, redirect if the user was not found.
            (redirectTo && !redirectIfFound && !hasUser) ||
            // If redirectIfFound is also set, redirect if the user was found
            (redirectIfFound && hasUser)
        ) {
            Router.push(redirectTo);
        }
    }, [redirectTo, redirectIfFound, finished, hasUser]);

    return error ? null : user;
}
