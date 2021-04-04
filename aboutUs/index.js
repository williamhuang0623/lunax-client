import React, { useState } from 'react';
import FullScreenDiv from 'component/FullScreenDiv';
import { aboutStyle } from './style';
import Image from 'next/image';
import Ticker from 'react-ticker';


function GoalsChild(props) {
    return (
        <div>
            <div className="header">
                <div className="image-wrapper">
                    <a href="https://newkino.studio/">
                        <Image src="/global/logo.jpg" width={81} height={81} alt="newkino_logo" />
                    </a>
                </div>
            </div>
            <div className="goals">
                <div className="left">
                    <p> NewKino</p>
                </div>
                <div className="right">
                    <p>
                        Our goal is to build a unique NFT experience through <br></br>
                        NewKino’s expertise in design, storytelling, and technology.
                    </p>
                    <hr></hr>
                    <p>
                        We recognize that the value of NFTs is directly correlated to <br></br>
                        the storyline(s) we craft.
                    </p>
                    <hr></hr>
                    <p>
                        We will ensure the authenticity of each NFT to prevent <br></br>
                        misprints & fraud.
                    </p>
                </div>
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
        3: false
      });

    const onHover = (e) => {
        const id = e.target.getAttribute('id');
        if (id === 'aston1') {
            setHover({
                ...hover,
                [1]: true,
            });
        } else if (id === 'aston2') {
            setHover({
                ...hover,
                [2]: true,
            });
        } else if (id === 'starWars') {
            setHover({
                ...hover,
                [3]: true,
            });
        }
    };

    const onLeave = (e) => {
        const id = e.target.getAttribute('id');
        if (id === 'aston1Hover') {
            setHover({
                ...hover,
                [1]: false,
            });
        } else if (id === 'aston2Hover') {
            setHover({
                ...hover,
                [2]: false,
            });
        } else if (id === 'starWarsHover') {
            setHover({
                ...hover,
                [3]: false,
            });
        }
    };

    return (
        <div className="main">
            <div id="quoteSection">
                <p>
                    “Another flaw in the human character is that everybody wants to build and nobody
                    wants to do maintenance.” <br></br>
                    <br></br>― Kurt Vonnegut, Hocus Pocus
                </p>
            </div>
            <div id="ourStoriesSection"></div>
            <div id="quote2Section">
                <div id={hover[1] ? 'aston1Hover' : "aston1"} onMouseEnter={onHover} onMouseLeave={onLeave}>
                    {hover[1] ?  <p id="center">
                        “Another flaw in the human <br></br>
                        character is that everybody <br></br>
                        wants to build and nobody <br></br>
                        wants to do maintenance.”<br></br>
                        <br></br>― Kurt Vonnegut, Hocus <br></br>
                        Pocus
                    </p>: null}
                </div>
                <div id={hover[2] ? 'aston2Hover' : "aston2"}  onMouseEnter={onHover} onMouseLeave={onLeave}>
                    {hover[2] ?  <p id="center">
                        “Another flaw in the human <br></br>
                        character is that everybody <br></br>
                        wants to build and nobody <br></br>
                        wants to do maintenance.”<br></br>
                        <br></br>― Kurt Vonnegut, Hocus <br></br>
                        Pocus
                    </p>: null}
                </div>
                <div id={hover[3] ? 'starWarsHover' : "starWars"} onMouseEnter={onHover} onMouseLeave={onLeave}>
                    {hover[3] ?  <p id="center">
                        “Another flaw in the human <br></br>
                        character is that everybody <br></br>
                        wants to build and nobody <br></br>
                        wants to do maintenance.”<br></br>
                        <br></br>― Kurt Vonnegut, Hocus <br></br>
                        Pocus
                    </p>: null}
                </div>
            </div>
            <div id="comingSoonSection">
                <div className="coming-soon-ticker">
                    <Ticker speed={12}>
                        {({ index }) => (
                            <>
                                <h1>COMING SOON /&nbsp;</h1>
                            </>
                        )}
                    </Ticker>
                </div>
                <Footer />
            </div>
            <style jsx>{aboutStyle}</style>
        </div>
    );
}

function Footer (props) {
    const footerLinks = [
        {
            label: 'HOME',
            href: 'https://newkino.studio/',
        },
        {
            label: 'WORK',
            href: 'https://newkino.studio/',
        },
        {
            label: 'NFT',
            href: 'https://newkino.studio/',
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/newkinostudios/',
        },
    ];
    return (
        <footer>
            <div className="image-wrapper">
                <a href="https://newkino.studio/">
                    <Image src="/global/logo.jpg" width={81} height={81} alt="newkino_logo" />
                </a>{' '}
            </div>
            <ul className="footer-links">
                {footerLinks.map((link, i) => {
                    return (
                        <a href={link.href} target="_blank" key={i}>
                            <li key={i} id={link.label}>{link.label}</li>
                        </a>
                    );
                })}
            </ul>
            <style jsx>{aboutStyle}</style>
        </footer>
    );
};

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
