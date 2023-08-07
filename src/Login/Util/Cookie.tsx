import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set(name, value, { 
        sameSite: 'strict', 
        path: "/", 
        expires: new Date(expireDate)
    });
};

export const getCookie = (name: string) => {
    return cookies.get(name);
};

export const removeCookie = (name: string) => {
    return cookies.remove(name, { sameSite: 'strict', path: "/" })
}