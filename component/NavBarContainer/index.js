import React, { Component } from 'react';
import Image from 'next/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

import NavBar from 'component/Navbar/index.js';
import { navBarContainerStyle } from './style';

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarVisible: false,
        };
        this.toggleNavBar = this.toggleNavBar.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    toggleNavBar() {
        this.setState({ navBarVisible: !this.state.navBarVisible });
    }

    handleMouseDown(e) {
        this.toggleNavBar();

        e.stopPropagation();
    }

    render() {
        const fontSize = 'small';
        return (
            <div className="navBar">
                <div className="logo">
                    <a href="/">
                        <Image src="/global/logo.png" width={48} height={30} alt="newkino_logo" />
                    </a>
                </div>
                <div className="links-wrapper">
                    <a href="/">Home</a>
                    <a href="/work">Work</a>
                    <a href="https://foundation.app/newkino">Foundation</a>
                    <a href="/careers">Careers</a>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/newkinostudio/" target="_blank">
                        <InstagramIcon fontSize={fontSize} />
                    </a>
                    <a href="https://twitter.com/newkinostudio" target="_blank">
                        <TwitterIcon fontSize={fontSize} />
                    </a>
                    <a href="https://foundation.app/newkino" target="_blank">
                        <LanguageIcon fontSize={fontSize} />
                    </a>
                </div>
                <div className="navbar-button">
                    <Image
                        src="/global/navButton.png"
                        id="navBarButton"
                        onClick={this.handleMouseDown}
                        width={35}
                        height={35}
                    />
                </div>
                <NavBar
                    handleMouseDown={this.handleMouseDown}
                    navBarVisibility={this.state.navBarVisible}
                />
                <style jsx>{navBarContainerStyle}</style>
            </div>
        );
    }
}

export default NavBarContainer;
