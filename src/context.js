import React, { useState, createContext } from "react";

export const ColorContext = createContext();

const ColorContextProvider = (props) => {

    const [color] = useState("blue");


    return (
        <ColorContext.Provider value={[color]}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorContextProvider;
