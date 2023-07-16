import { useContext, useState } from 'react'
import {createContext} from 'react'
const LoginContext = createContext()

const LoginProvider = ({children})=>{
    const [credentials, setCredentials] = useState({})
    return <LoginContext.Provider value={{credentials,setCredentials}}>
        {children}
    </LoginContext.Provider>
}

export const useLogin = () => useContext(LoginContext)

export default LoginProvider