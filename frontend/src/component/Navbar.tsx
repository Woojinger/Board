import React from "react"
import "../style/Navstyle.scss"


const Navbar = () => {
    return(
        <div className="header">
            <span className="Home">Home</span>
            <span className="About">About</span>
            <span className="Portfolio">Portfolio</span>
        </div>
    )
}

export default Navbar