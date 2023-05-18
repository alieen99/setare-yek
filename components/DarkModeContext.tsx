import useDarkMode from "@/hooks/useDarkMode";
import { createContext,useContext } from "react";

type DarkModeContextType = {
    isDarkMode:boolean;
    toggleDarkMode:()=>void;
}

const DarkModeContext = createContext<DarkModeContextType|undefined>(undefined)
type DarkModeProviderProps ={
    children:React.ReactNode
}
export const DarkModeProvider:React.FC<DarkModeProviderProps> = ({children}) =>{
    const [isDarkMode,toggleDarkMode] = useDarkMode()
    return(
        <DarkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkModeContext = ():DarkModeContextType =>{
    const context = useContext(DarkModeContext);
    if(!context){
        throw new Error("useDarkModeContext must be used within a darkModeProvider!")
    }
    
    return context;
}