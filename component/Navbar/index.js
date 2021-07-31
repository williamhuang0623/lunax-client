import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { navBarStyle } from './style';
import { s3Url } from 'lib/constants';

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
                        src={`${s3Url}/global/closeNav.png`}
                        id="navBarButton"
                        onClick={this.handleMouseDown}
                        width={35}
                        height={35}
                    />
                </div>
                <div className="links">
                    <h2>
                        <a href="/">HOME</a>
                    </h2>
                    <h2>
                        <a href="/work">WORK</a>
                    </h2>
                    <h2>
                        <a href="/careers">CAREERS</a>
                    </h2>
                </div>

                <style jsx>{navBarStyle}</style>
            </div>
        );
    }
}

export default NavBar;
