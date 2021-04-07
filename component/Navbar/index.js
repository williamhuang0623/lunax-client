import React, { Component } from "react";
import { navBarStyle } from './style';
import Image from 'next/image';

 
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: "false"
        }
        this.handleMouseDown = this.handleMouseDown.bind(this);

    }

    componentDidUpdate(prevProps) {
        if(prevProps.navBarVisibility !== this.props.navBarVisibility) {
            this.setState({visible : this.props.navBarVisibility});     
        }
    }

    handleMouseDown(e) {
        this.setState({ visible: "false" });
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
                    <a href="http://localhost:3000/">HOME</a>
                </h2>
                <h2>
                    <a href="http://localhost:3000/about">ABOUT</a>
                </h2>
                <h2>
                    <a href="http://localhost:3000/work">VFX/FILM</a>
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