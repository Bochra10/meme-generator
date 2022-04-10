import React from "react";
import troll from "../assets/troll_face.png"

export default function Header(){
    return(
        <nav className="header">
            <img src={troll} className="header--logo"/>
            <h1 className="header--title">MemeGenerator</h1>
        </nav>
    )
}