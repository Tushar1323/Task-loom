import { createContext, useContext } from "react";

// export const Dark = createContext({
//     img:"/src/Images/blue.jpg" ,
//     darkTheme: () => {},
//     lightTheme: () => {},
// })

export const Dark = createContext();

export const DarkProvider = Dark.Provider

export default function useDark(){
    return useContext(Dark)
}