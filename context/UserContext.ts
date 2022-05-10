import React , {createContext} from 'react'
import { IUser } from '../interfaces/IUser';

export type UserContextProps = {
    user:IUser,
    setUser: (user:IUser) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);



