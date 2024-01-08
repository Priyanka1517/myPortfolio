import React, { useState } from "react";
import { useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ()=>{
    const[background, setBackground] = useState("#2D033B");
}