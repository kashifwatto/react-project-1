import React from 'react'

export default function Navigation() {
    return (
        <>
            <nav className='top-navigation'>
                <div>
                    <img src="../../public/images/brand_logo.png" alt="" />
                </div>
                <div >
                    <ul>
                        <li><a href="#">MENU</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">LOCATION</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
                <div>
                   <button className='login-button'> <a href="#" >Login</a></button>
                </div>
            </nav>
        </>
    )
}
