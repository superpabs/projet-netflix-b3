import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'

function Nav({fetchUrl}) {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className='nav__logo'
                src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png'
                alt='Netflix logo'
            />
            
            <img 
                className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='Netflix avatar'
            />
        </div>
    )
}

export default Nav