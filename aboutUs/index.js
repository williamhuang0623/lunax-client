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
                    <Image src="/global/logo.jpg" width={81} height={81} alt="newkino_logo" />
                </div>
            </div>
            <div className="goals">
                <div className="left">
                    <h1> NewKino</h1>
                </div>
                <div className="right">
                    <h1>
                        Our goal is to build a unique NFT experience through <br></br>
                        NewKino’s expertise in design, storytelling, and technology.
                    </h1>
                    <hr></hr>
                    <h1>
                        We recognize that the value of NFTs is directly correlated to <br></br>
                        the storyline(s) we craft.
                    </h1>
                    <hr></hr>
                    <h1> We will ensure the authenticity of each NFT to prevent <br></br> 
                    misprints & fraud. </h1>
                </div>
            </div>
            <div className="navigation">
                <div className="image-wrapper">
                    <a href="#section2">
                      <Image src="/about/downCTA.png" width={35} height={35}/>
                    </a>
                </div>
            </div>
            <style jsx>{aboutStyle}</style>

        </div>
    );
}

function Section2(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const onHover1 = () => {
        setHover1(true);
    };

    const onLeave1 = (e) => {
        setHover1(false);
    };
    const onHover2 = (e) => {
        setHover2(true);
    };

    const onLeave2 = (e) => {
        setHover2(false);
    };
    const onHover3 = (e) => {
        setHover3(true);
    };

    const onLeave3 = (e) => {
        setHover3(false);
    };
    return (
        <div className="main">
            <div id="quoteSection">
                <h1>
                    “Another flaw in the human character is that everybody wants to build and nobody
                    wants to do maintenance.” <br></br>
                    <br></br>― Kurt Vonnegut, Hocus Pocus
                </h1>
            </div>
            <div id="ourStoriesSection"></div>
            <div id="quote2Section">
                <div id={hover1 ? 'aston1Hover' : "aston1"} onMouseEnter={onHover1} onMouseLeave={onLeave1}>
                    {hover1 ?  <h1 id="center">
                        “Another flaw in the human <br></br>
                        character is that everybody <br></br>
                        wants to build and nobody <br></br>
                        wants to do maintenance.”<br></br>
                        <br></br>― Kurt Vonnegut, Hocus <br></br>
                        Pocus
                    </h1>: null}
                </div>
                <div id={hover2 ? 'aston2Hover' : "aston2"}  onMouseEnter={onHover2} onMouseLeave={onLeave2}>
                    {hover2 ?  <h1 id="center">
                        “Another flaw in the human <br></br>
                        character is that everybody <br></br>
                        wants to build and nobody <br></br>
                        wants to do maintenance.”<br></br>
                        <br></br>― Kurt Vonnegut, Hocus <br></br>
                        Pocus
                    </h1>: null}
                </div>
                <div id={hover3 ? 'starWarsHover' : "starWars"} onMouseEnter={onHover3} onMouseLeave={onLeave3}>
                    {hover3 ?  <h1 id="center">
                        “Another flaw in the human <br></br>
                        character is that everybody <br></br>
                        wants to build and nobody <br></br>
                        wants to do maintenance.”<br></br>
                        <br></br>― Kurt Vonnegut, Hocus <br></br>
                        Pocus
                    </h1>: null}
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
    return(
        <footer>
            <div className="image-wrapper">
                <Image src="/global/logo.jpg" width={81} height={81} alt="newkino_logo" />
             </div>
            <ul className="footer-links">
                {footerLinks.map((link, i) => {
                    return (
                        <a href={link.href} target="_blank" key={i}>
                            <li key={i} id={i}>{link.label}</li>
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
            <div id="transitionGradient">

            </div>
            <div id="section2"> 
                <Section2 />
            </div>
            <style jsx>{aboutStyle}</style>
        </div>
    );
}

export default AboutUs;
