import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

import { homeStyles } from './style';
import { s3Url } from 'lib/constants';
import Footer from 'component/Footer';
import { motion } from 'framer-motion';

// const isServer = () => typeof window === 'undefined';

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

const media = [
    {
        src: `${s3Url}/home/project-highlights/TICKET.mp4`,
        type: 'video',
        alt: 'ticket',
    },
    {
        src: `${s3Url}/home/project-highlights/PRISM.mp4`,
        type: 'video',
        alt: 'prism',
    },
    {
        src: `${s3Url}/home/project-highlights/Sleepystill.png`,
        type: 'image',
        alt: 'sleepy',
    },
    {
        src: `${s3Url}/home/project-highlights/KYOTO_2067.mov`,
        type: 'video',
        alt: 'kyoto',
    },
    {
        src: `${s3Url}/home/project-highlights/nike.mp4`,
        type: 'video',
        alt: 'nike',
    },
];

const nfts = [
    {
        src: `${s3Url}/home/nft-highlights/enter_the_void.mp4`,
        type: 'video',
        alt: 'enter-void',
    },
    {
        src: `${s3Url}/home/nft-highlights/eva.mp4`,
        type: 'video',
        alt: 'eva',
    },
    {
        src: `${s3Url}/home/nft-highlights/interstellar_overdrive.mp4`,
        type: 'video',
        alt: 'interstellar_overdrive',
    },
    {
        src: `${s3Url}/home/nft-highlights/ourania_lightspeed.mp4`,
        type: 'video',
        alt: 'ourania_lightspeed',
    },
    {
        src: `${s3Url}/home/nft-highlights/ourania_three_worlds.mp4`,
        type: 'video',
        alt: 'ourania_three_worlds',
    },
    {
        src: `${s3Url}/home/nft-highlights/unfortunate_spaceman.mp4`,
        type: 'video',
        alt: 'unfortunate_spaceman',
    },
];

const variants = {
    visible: (i) => ({
        opacity: 1,
        transition: {
            delay: i * 1.5,
        },
    }),
    hidden: { opacity: 0 },
};

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
                        <motion.div initial="hidden" animate="visible" variants={variants}>
                            <h1>We are World Builders</h1>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
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
                        </motion.div>
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
                    <Fade top>
                        <>
                            <h1>Project Highlights</h1>
                            <p className="description">
                                Lorem ipsum sit amet, consectetur adipiscing elit, do eiusmod tempor
                                incididunt ut labore et dolore magna amet, consectetur adipiscing
                                elit aliqua. Ut enim amet, consectetur adipiscing elit veniam amet,
                                consectetur adipiscing elit, website link.
                            </p>
                        </>
                    </Fade>

                    <Fade bottom>
                        <div className="gridContainer">
                            {media.map((m, i) => {
                                if (m.type === 'video') {
                                    return (
                                        <figure
                                            className={`gallery-item gallery-item--${i + 1}`}
                                            key={i}
                                        >
                                            <video src={m.src} loop autoPlay muted></video>
                                        </figure>
                                    );
                                } else {
                                    return (
                                        <figure
                                            className={`gallery-item gallery-item--${i + 1}`}
                                            key={i}
                                        >
                                            <img src={m.src} alt={m.alt} />
                                        </figure>
                                    );
                                }
                            })}
                        </div>
                    </Fade>
                </div>
                <div className="nft-highlights-container">
                    <Fade top>
                        <h1>Our NFTs</h1>
                        <p className="description">
                            Lorem ipsum sit amet, consectetur adipiscing elit, do eiusmod tempor
                            incididunt ut labore et dolore magna amet, consectetur adipiscing elit
                            aliqua. Ut enim amet, consectetur adipiscing elit veniam amet,
                            consectetur adipiscing elit, website link.
                            <br /> <br />
                            <a href="https://foundation.app/newkino" target="_blank">
                                Visit our Foundation &gt;
                            </a>
                        </p>
                    </Fade>

                    <Fade bottom>
                        <div className="gridContainer">
                            {nfts.map((nft, i) => {
                                if (nft.type === 'video') {
                                    return (
                                        <figure className={`gallery-item`} key={i}>
                                            <video src={nft.src} loop autoPlay muted></video>
                                        </figure>
                                    );
                                } else {
                                    return (
                                        <figure className={`gallery-item`} key={i}>
                                            <img src={nft.src} alt={nft.alt} />
                                        </figure>
                                    );
                                }
                            })}
                        </div>
                    </Fade>
                </div>
                <Footer />
                <style jsx>{homeStyles}</style>
            </>
        );
    }
}

export default Home;
