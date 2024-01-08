import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../store.js";


export default function  Content(){
   // const colorArray = ["#E80F88", "#C147E9", "#1640D6"];

    return (
        <div className = "HomeBody">
            <div className="HomeTitle">
            <p>Hello, my name is <span className="togglingColor">Priyanka Sharma</span></p>
            <p>I am a 
            <span className="togglingColor">
                <TypeAnimation 
                    sequence ={[
                    " Coder", 1000,
                    " Writer", 1000,
                    " Chess Lover",1000,
                    " Learner",1000,
                    ]}
                    speed={10}
                    repeat={Infinity}
                    cursorChar = "_"
                    showCursoe={true}
                />               
            </span>
            </p>
            </div>

            <div className="profileImage boxStyle">
                <img src="/Pics/myPic1.jpg" alt="priyanka" width={350} height={400}></img> 
            </div>

            <div className="HomeContent">
                This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content
            </div>

            <div>
                <button>
                    More About Me
                </button>
            </div>

        </div>
    )
}
