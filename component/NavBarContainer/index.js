import React, { Component } from 'react';
import { navBarContainerStyle } from './style';
import Image from 'next/image';
import NavBar from 'component/Navbar/index.js';

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
        return (
            <div className="navBar">
                <div className="logo">
                    <a href="/">
                        <Image src="/global/logo.png" width={120} height={68} alt="newkino_logo" />
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
