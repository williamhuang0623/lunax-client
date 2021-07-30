import React from 'react';
import Image from 'next/image';

import { homeStyles } from './style';
import { s3Url } from 'lib/constants';

const BGVideos = [
    {
        id: 1,
        name: 'NEWKINO_REEL_v2',
        path: `${s3Url}/home/NEWKINO_MICROCHIP.mp4`,
    },
    {
        id: 2,
        name: 'UNFORTUNATE_SPACEMAN',
        path: `${s3Url}/home/UNFORTUNATE_SPACEMAN.mp4`,
    },
];

const images = [{}];

function ImageGridItem(image) {
    const style = {
        gridColumnEnd: `span ${getSpanEstimate(image.width)}`,
        gridRowEnd: `span ${getSpanEstimate(image.height)}`,
    };

    return <img style={style} src={image.url} alt={image.alt} />;
}

function getSpanEstimate(size) {
    if (size > 250) {
        return 2;
    }

    return 1;
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBackgroundVideo: 1,
            vidPaused: false,
            timeout: 10000,
        };
        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
        this.pauseClick = this.pauseClick.bind(this);
    }

    componentDidMount() {
        const { timeout } = this.state;
        setInterval(() => {
            this.rightClick();
        }, timeout);
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
        let { currentBackgroundVideo } = this.state;
        const nextBgVideo = currentBackgroundVideo + 1;

        if (nextBgVideo > BGVideos.length) {
            this.setState({
                currentBackgroundVideo: 1,
                vidPaused: false,
            });
        } else {
            this.setState({
                currentBackgroundVideo: nextBgVideo,
                vidPaused: false,
            });
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
            <>
                <div className="jumbotron-container">
                    <video
                        id="videoBg"
                        key={this.getBackgroundVideo().toString()}
                        autoPlay={true}
                        playsInline={true}
                        loop
                        muted
                    >
                        <source
                            id="video"
                            src={this.getBackgroundVideo().toString()}
                            type="video/mp4"
                        ></source>
                    </video>
                    <div className="main-text">
                        <h1>We are World Builders</h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <div className="cta-wrapper">
                            <a href="/work">
                                <button>Explore our work</button>
                            </a>
                            <div>
                                <a href="https://foundation.app/newkino" target="_blank">
                                    Visit our Foundation &gt;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-container">
                    <p>Brands our team has worked with</p>
                    <div className="all-brands">
                        <img src={`${s3Url}/home/brands/88rising.png`} alt="88_rising_logo" />
                        <img src={`${s3Url}/home/brands/dgtl.png`} alt="dgtl_logo" />
                        <img
                            src={`${s3Url}/home/brands/estee-lauder.png`}
                            alt="estee_lauder_logo"
                        />
                        <img src={`${s3Url}/home/brands/nike.png`} alt="nike_logo" />
                        <img src={`${s3Url}/home/brands/sony.png`} alt="sony_logo" />
                    </div>
                </div>
                <div className="project-highlights-container">
                    <h1>Project Highlights</h1>
                    <p className="description">
                        Lorem ipsum sit amet, consectetur adipiscing elit, do eiusmod tempor
                        incididunt ut labore et dolore magna amet, consectetur adipiscing elit
                        aliqua. Ut enim amet, consectetur adipiscing elit veniam amet, consectetur
                        adipiscing elit, website link.
                    </p>

                    <div className="gridContainer"></div>
                </div>
                <style jsx>{homeStyles}</style>
            </>
        );
    }
}

export default Home;
