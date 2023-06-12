import { createContext } from 'react'
interface AuthContextProps {
    authState: any;
    userLogin: (email: string, password: string) => Promise<{ status: boolean; user?: any; message: string; }>;
}
export const AuthContext = createContext({} as AuthContextProps);