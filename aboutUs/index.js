import React, { useState } from 'react';
import Image from 'next/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import FullScreenDiv from 'component/FullScreenDiv';
import { aboutStyle } from './style';

function GoalsChild(props) {
    return (
        <div className="section">
            <div className="aboutUsSection1">
                <p>
                    NewKino is a world creation studio dedicated to exploring the intersection of
                    art and technology. As a collective, we are a group of engineers, creatives, and
                    wizards passionate about building immersive and democratized digital experiences
                    with our creative partners. We believe that as technology evolves rapidly, art
                    must also grow to continue to inspire and tell the stories worth telling.
                </p>
            </div>
            <div className="navigation">
                <div className="image-wrapper">
                    <a href="#section2">
                        <Image src="/about/downCTA.png" width={35} height={35} />
                    </a>
                </div>
            </div>
            <style jsx>{aboutStyle}</style>
        </div>
    );
}

function Section2(props) {
    const [hover, setHover] = useState({
        1: false,
        2: false,
        3: false,
    });

    const onHover = (e) => {
        const id = e.target.getAttribute('id');
        if (id === 'imageOne') {
            setHover({
                ...hover,
                [1]: true,
            });
        } else if (id === 'imageTwo') {
            setHover({
                ...hover,
                [2]: true,
            });
        } else if (id === 'imageThree') {
            setHover({
                ...hover,
                [3]: true,
            });
        }
    };

    const onLeave = (e) => {
        const id = e.target.getAttribute('id');
        if (id === 'imageOneHover') {
            setHover({
                ...hover,
                [1]: false,
            });
        } else if (id === 'imageTwoHover') {
            setHover({
                ...hover,
                [2]: false,
            });
        } else if (id === 'imageThreeHover') {
            setHover({
                ...hover,
                [3]: false,
            });
        }
    };

    return (
        <div>
            <div id="quoteSection">
                <p>
                    “Imagination is the only weapon in the war against reality.” <br></br>
                    <br></br>― Cheshire Cat
                </p>
            </div>
            <div id="ourStoriesSection">
                <img id="ourStory" src="/about/ourStory.png"></img>
            </div>
            <div id="quote2Section">
                <div
                    id={hover[1] ? 'imageOneHover' : 'imageOne'}
                    className="quote-image"
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                >
                    {hover[1] ? <p id="center"></p> : null}
                </div>
                <div
                    id={hover[2] ? 'imageTwoHover' : 'imageTwo'}
                    className="quote-image"
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                >
                    {hover[2] ? <p id="center"></p> : null}
                </div>
                <div
                    id={hover[3] ? 'imageThreeHover' : 'imageThree'}
                    className="quote-image"
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                >
                    {hover[3] ? <p id="center"></p> : null}
                </div>
            </div>
            <Footer />
            <style jsx>{aboutStyle}</style>
        </div>
    );
}

function Footer(props) {
    const fontSize = 'large';
    const footerLinks = [
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/newkinostudios/',
            icon: <InstagramIcon fontSize={fontSize} />,
        },
        {
            label: 'Twitter',
            href: 'https://twitter.com/newkinostudios',
            icon: <TwitterIcon fontSize={fontSize} />,
        },
    ];

    return (
        <footer className="footer">
            <div className="contact-details">
                <h3>Reach out to us at</h3>
                <a href="mailto:contact@newkin.studio">
                    <h3>contact@newkino.studio</h3>
                </a>
            </div>

            <div className="sub-footer">
                <div className="footer-logo">
                    <Image src="/global/logo.png" width={120} height={68} />
                </div>
                <ul className="footer-links">
                    {footerLinks.map((link, i) => {
                        return (
                            <a href={link.href} target="_blank" key={i}>
                                <li key={i} id={link.label}>
                                    {link.icon}
                                </li>
                            </a>
                        );
                    })}
                </ul>
            </div>
            <style jsx>{aboutStyle}</style>
        </footer>
    );
}

function AboutUs(props) {
    return (
        <div className="main">
            <div id="section1">
                <FullScreenDiv>
                    <GoalsChild />
                </FullScreenDiv>
            </div>
            <div id="transitionGradient"></div>
            <div id="section2">
                <Section2 />
            </div>
            <style jsx>{aboutStyle}</style>
        </div>
    );
}

export default AboutUs;
