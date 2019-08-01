import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {


    render() {
        return (
            <div className="header-container">
                 <div>
                        {/* <h1>LOGO</h1> */}
                </div>
                <div className="title-container">
                    <div className="music-life">
                        <h1 className="title">Music is Life</h1>
                        <div className="home-about">
                            <Link className="links" to="/home">Home</Link>
                            <Link className="links" to="/about">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;