import React from 'react';
import Image from 'next/image';

import NavBarContainer from 'component/NavBarContainer/index.js';
import { homeStyles } from './style';

const BGVideos = [
    {
        id: 1,
        name: 'NEWKINO_REEL_v2',
        path: '/home/NEWKINO_MICROCHIP.mp4',
    },
    {
        id: 2,
        name: 'UNFORTUNATE_SPACEMAN',
        path: '/home/UNFORTUNATE_SPACEMAN.mp4',
    },
];

const footerLinks = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/newkinostudios/',
    },
];

const Footer = (
    <footer>
        <ul className="footer-links">
            {footerLinks.map((link, i) => {
                return (
                    <a href={link.href} target="_blank" key={i}>
                        <li key={i}>{link.label}</li>
                    </a>
                );
            })}
        </ul>
        <style jsx>{homeStyles}</style>
    </footer>
);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBackgroundVideo: 1,
            vidPaused: false,
        };
        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
        this.pauseClick = this.pauseClick.bind(this);
    }

    leftClick(e) {
        if (this.state.currentBackgroundVideo != 1) {
            this.setState((prevState) => ({
                currentBackgroundVideo: prevState.currentBackgroundVideo - 1,
                vidPaused: false,
            }));
        }
    }

    rightClick(e) {
        if (this.state.currentBackgroundVideo != BGVideos.length) {
            this.setState((prevState) => ({
                currentBackgroundVideo: prevState.currentBackgroundVideo + 1,
                vidPaused: false,
            }));
        }
    }

    getBackgroundVideo() {
        const filteredVideo = BGVideos.filter((video) => {
            return video.id === this.state.currentBackgroundVideo;
        });
        return filteredVideo[0].path;
    }

    pauseClick(e) {
        if (this.state.vidPaused) {
            document.getElementById('videoBg').play();
            this.setState({ vidPaused: false });
        } else {
            document.getElementById('videoBg').pause();
            this.setState({ vidPaused: true });
        }
    }

    render() {
        return (
            <div className="main">
                <video
                    id="videoBg"
                    key={this.getBackgroundVideo().toString()}
                    autoPlay={true}
                    loop
                    muted
                >
                    <source
                        id="video"
                        src={this.getBackgroundVideo().toString()}
                        type="video/mp4"
                    ></source>
                </video>
                <div className="navigation">
                    <div className="image-wrapper video-nav-wrapper">
                        <Image
                            src="/home/left.png"
                            onClick={this.leftClick}
                            width={35}
                            height={35}
                        />
                        {this.state.vidPaused === true ? (
                            <Image
                                src="/home/play.png"
                                onClick={this.pauseClick}
                                width={35}
                                height={35}
                            />
                        ) : (
                            <Image
                                src="/home/pause.png"
                                onClick={this.pauseClick}
                                width={35}
                                height={35}
                            />
                        )}
                        <Image
                            src="/home/right.png"
                            onClick={this.rightClick}
                            width={35}
                            height={35}
                        />
                    </div>
                </div>
                <style jsx>{homeStyles}</style>
            </div>
        );
    }
}

export default Home;
