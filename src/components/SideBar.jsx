import React from "react";
import { MdHeight, MdHome,MdAccountCircle, MdPhotoSizeSelectActual } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiFileUserLine } from "react-icons/ri";
import About from "../About";

export default function SideBar(){

    const [bgColor, setbgColor] = React.useState(true);

    return(
        <div className="sideBar" >
            <div className="background">

                <div className="profileName">
                    Priyanka
                </div>

                <div class="sideBarContent">

                    <div className="card">
                    <li>
                        <MdHome className="icon"  />
                        <a>Home</a>
                    </li>
                    </div>

                    <div className="card">
                    <li>
                    <MdAccountCircle className="icon"/>
                    <a href="../About">About</a>
                    </li>
                    </div>

                    <div className="card">
                    <li>
                    <GoProjectRoadmap className="icon"/>
                    <a>Project</a>
                    </li>
                    </div>

                    <div className="card">
                    <li>
                    <RiFileUserLine className="icon"/>
                    <a>Portfolio</a>
                    </li>
                    </div>

                    <div className="card">
                    <li>
                    <IoChatbubbleEllipsesOutline className="icon"/>
                    <a>Connect</a>
                    </li>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}