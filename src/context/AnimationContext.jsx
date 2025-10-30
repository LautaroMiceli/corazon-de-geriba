import { createContext, useContext, useEffect, useState } from "react";

const AnimationContext = createContext();

const AnimationProvider = ({ children }) => {
    const [animationsDone, setAnimationsDone] = useState(false);

    useEffect(() => {
        setAnimationsDone(true)
    },)
    return (
        <AnimationContext.Provider value={{ animationsDone, setAnimationsDone }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);

export default AnimationProvider;