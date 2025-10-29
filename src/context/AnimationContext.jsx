import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AnimationContext = createContext();

const AnimationProvider = ({ children }) => {
    const location = useLocation()
    const [animationsDone, setAnimationsDone] = useState(location.pathname !== '/');
    const actualPath = sessionStorage.getItem('actualPath')
    if(!actualPath){
        sessionStorage.setItem('actualPath', location.pathname)
    }
    useEffect(() => {
        if (location.pathname !== actualPath) {
            setAnimationsDone(true);
        }
    })
    return (
        <AnimationContext.Provider value={{ animationsDone }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);

export default AnimationProvider;