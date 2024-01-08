import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Theme() {
  const [themeClicked, setThemeClicked] = React.useState(false);

  function handleThemeClicked(){
    setThemeClicked(!themeClicked);
  }

  return (
    <div >

    </div>
  );
}


// {themeClicked === true ? (
//     <MdDarkMode className="darkTheme" size={30} color="white" 
//     onClick={handleThemeClicked} />
//     ) : (
//     <MdLightMode className="lightTheme" size={30} 
//     onClick={handleThemeClicked}
//     />
//     )}