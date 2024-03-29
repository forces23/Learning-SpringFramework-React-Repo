import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)
    const sharedValues = {isAuthenticated, login, logout}

    function login(username, password){
        if (username==='forces23' && password==='dummy'){
            setAuthenticated(true)
            return true
        }
        else{
            setAuthenticated(false)
            return false
        }

    }

    function logout(){
        setAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={sharedValues}>
            {children}
        </AuthContext.Provider>
    )
}

