import React, { FC, useReducer, useState } from 'react'
import { AUTH_ACTIONS, AuthContext, authReducer } from './'
import { baseUrl } from '../../common/url';

type Props = {
    children: React.ReactNode;
}
const initialState: any = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    email: '',
    role: 0,
    status: '',
    created_at: '',
    logged: false
}
export const AuthProvider: FC<Props> = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);


    const logout = () => {

    }

    const userLogin: (email: string, password: string) => Promise<{ status: boolean; user?: any; message: string; }> = async (email, password) => {

        if (!email || !password) return { status: false, message: 'Campos vacios' };

        const url = `${baseUrl}/login`
        const body = new URLSearchParams({
            'email': email,
            'password': password,
        });
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body
        }
        try {
            const response = await fetch(url, options);

            switch (response.status) {
                case 200:
                    const { status, user, message, role } = await response.json();
                    dispatch({ type: AUTH_ACTIONS.login, payload: user });
                    return { status, user, message, role };

                case 400:
                    const { status: statusFailed, message: messageFailed } = await response.json();
                    return { status: statusFailed, message: messageFailed };
                    break;

                default:
                    return { status: false, message: 'Ocurrio un error en el servidor', response };
                    break;
            }
        } catch (error) {
            console.error({ error });
            return { status: false, message: 'No se logro conectar al servidor' };
        }

    }

    return (
        <AuthContext.Provider value={{ authState, userLogin }}>
            {children}
        </AuthContext.Provider>
    )
}