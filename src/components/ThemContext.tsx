import { createContext, useContext, useState, type ReactNode } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
  };


  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);




export function ThemeProvider({children}:{children: ReactNode}){

    const [theme, setTheme] = useState<string>(() => {
        return (localStorage.getItem("theme") as "events" | "business") || "events";
      });
      
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){

    const context = useContext(ThemeContext)
    if(context === undefined) throw new Error('useTheme must be used within a theme provider');

    return context;

}