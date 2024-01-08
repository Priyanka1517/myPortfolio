import React from "react";

function Footer(){

    return(
        <div className="Footer">
            <h3>
                {'@'+ new Date().getFullYear()}
            </h3>
        </div>
    );
}

export default Footer;