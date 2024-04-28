// UserContext.jsx
import { createContext, useState, useContext } from 'react';
import { useAuthentication, useUser } from '../hooks/apiHooks';
import { useNavigate } from 'react-router-dom';


const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const { login } = useAuthentication();
    const { getUserByToken } = useUser();
    const navigate = useNavigate();

    // login, logout and autologin functions are here instead of components
    const handleLogin = async (credentials) => {
      console.log("credentials", credentials)
        try {
           const userData = await login(credentials);
            console.log("userData", userData)
            localStorage.setItem('token', userData.token);
            setUser(userData);
           navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem('token');
            setUser(null)
            navigate('/login')
        } catch (e) {
            console.log(e.message);
        }
    };


    const handleAutoLogin = async () => {
        try {
           const token = localStorage.getItem('token');
            // TODO: if token exists, get user data from API
            if(token){
              const userData = await getUserByToken(token);
              setUser(userData);
            }
            navigate('/')
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout, handleAutoLogin }}>
            {children}
        </UserContext.Provider>
    );
};
export { UserProvider, UserContext };
export const useUserContext = () => useContext(UserContext)
