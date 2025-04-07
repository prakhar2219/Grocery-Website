// This code sets up a React Context called AppContext which allows sharing global state and functions (like navigate, user, etc.) across your React component tree without passing them as props manually.
import{useContext, createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
//  hold shared state that will  be used throughout the app.
export const AppContext=createContext();
// This component wraps around other components to provide them access to the shared state.
export const AppContextProvider=({children})=>{

    const navigate = useNavigate();

    const [user,setUser]=useState(true)
    const [isSeller,setIsSeller]=useState(false)
    const[showUserLogin,setShowUserLogin]=useState(false)

    // const value={navigate,user,setUser,isSeller,setIsSeller}
// All the state values and their setters + navigate are packed into an object to be shared.
    const value={user,setUser,isSeller,setIsSeller,showUserLogin,setShowUserLogin,navigate}
    // The AppContext.Provider makes the value accessible to any child component wrapped inside this provider.
    return <AppContext.Provider value={value}>
{children}
</AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}
