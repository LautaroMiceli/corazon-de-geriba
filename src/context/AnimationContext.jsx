import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AnimationContext = createContext();

const AnimationProvider = ({ children }) => {
    const location = useLocation()
    const [animationsDone, setAnimationsDone] = useState(false);

    useEffect(() => {
        if(location.pathname !== "/") setAnimationsDone(true)
    },[location.pathname])
    return (
        <AnimationContext.Provider value={{ animationsDone, setAnimationsDone }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);

export default AnimationProvider;