import { Cookies } from 'react-cookie';

export const setCookie = (name: string, value: string) => {
    const cookies = new Cookies();

    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set(name, value, { 
        sameSite: 'strict', 
        path: "/", 
        expires: new Date(expireDate)
    });
};

export const getCookie = (name: string) => {
    const cookies = new Cookies();

    return cookies.get(name);
};

export const removeCookie = (name: string) => {
    const cookies = new Cookies();

    return cookies.remove(name, { sameSite: 'strict', path: "/" })
}