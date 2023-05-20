import React, { createContext, useContext, useState} from "react";

const StateContext = createContext()

const initialState = {
    chat: false,
    cart:false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initialState)
    
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode, setcurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setcurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (color) => {
        console.log(color)
        setcurrentColor(color)

        localStorage.setItem('colorMode', color)
        
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setisClicked({ ...initialState, [clicked]:true})
    }

    const [screenSize, setScreenSize] = useState(undefined)

    return (    
        <StateContext.Provider
            value={{
                activeMenu, 
                setActiveMenu, 
                isClicked,
                setisClicked,
                handleClick,
                screenSize, 
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings, 
                setThemeSettings,
                setColor,
                setMode
            }}
        >
          {children} 
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);