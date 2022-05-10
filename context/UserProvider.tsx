import React, {useState} from 'react'
import { UserContext } from './UserContext'
import {IUser} from '../interfaces/IUser'


const defaultUser : IUser={
    nombre:'Jhon',
    apellidos: 'Doe',
    cedula:0,
}

interface contextProps{
    children: JSX.Element | JSX.Element[]
}
export const UserProvider = ({ children }: contextProps) => {
    const [user, setUser] = useState(defaultUser)

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
