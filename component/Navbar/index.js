import React, { Component } from 'react';
import { navBarStyle } from './style';
import Image from 'next/image';
import { Link } from '@material-ui/core';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: 'false',
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.navBarVisibility !== this.props.navBarVisibility) {
            this.setState({ visible: this.props.navBarVisibility });
        }
    }

    handleMouseDown(e) {
        this.setState({ visible: 'false' });
    }

    render() {
        return (
            <div
                id="flyOutNavBar"
                onMouseDown={this.props.handleMouseDown}
                className={this.state.visible}
            >
                <div className="closeNav">
                    <Image
                        src="/global/closeNav.png"
                        id="navBarButton"
                        onClick={this.handleMouseDown}
                        width={35}
                        height={35}
                    />
                </div>
                <div className="links">
                    <h2>
                        <Link>
                            <a href="/">HOME</a>
                        </Link>
                    </h2>
                    <h2>
                        <Link>
                            <a href="/about">ABOUT</a>
                        </Link>
                    </h2>
                    <h2>
                        <Link>
                            <a href="/work">VFX/FILM</a>
                        </Link>
                    </h2>
                    {/* <h2>
                    <a href="http://localhost:3000/">NFTs*</a>
                </h2>    */}
                </div>

                <style jsx>{navBarStyle}</style>
            </div>
        );
    }
}

export default NavBar;
