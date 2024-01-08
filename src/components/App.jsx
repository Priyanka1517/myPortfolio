import "../index.css";
import React from "react";
import Theme from "./Theme.jsx";
import SideBar from "./SideBar.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

function App(){
    return(
        <div className="App">
            <div className = "mainContainer">
                <SideBar />
                <Content/>
            </div>
        </div>
    )
}

export default App;