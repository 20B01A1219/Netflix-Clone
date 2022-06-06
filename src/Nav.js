import React, { useEffect, useState } from 'react';
import './nav.css';
function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        // return()=>{
        //     window.removeEventListener("scroll");
        // };
    }, []);
    return (
        <div className = {`navbar ${show && "navbar-black"}` }>
            <img className = "logo" src="/images/netflix-logo-1.png" alt="Netflix-Logo" />
            <img className = "avatar" src="/images/avatar.webp" alt="avatar" />
        </div>
        
    );
}

export default Nav;