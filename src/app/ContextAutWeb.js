'use client'
import {createContext, useState} from "react";

export const AutContext = createContext(['', ()=>{}]);

export default function ContextAutWeb({children}) {
    const [usernameAut, setUsernameAut] = useState('');

    return <AutContext.Provider value={[usernameAut, setUsernameAut]}>
        {children}
    </AutContext.Provider>
}