import React from "react";
const Footer=()=>{
    const currentYear = new Date().getFullYear();
    return(
        <footer><p>Copy right at {currentYear}</p></footer>
        
    );
}
export default Footer;