import React from 'react';
import FullScreenDiv from 'component/FullScreenDiv';
import { aboutStyle } from './style';
import Image from 'next/image';

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
    </footer>
);

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
    return (
        <div className="main">
            <div id="quoteSection"> 

            </div>
            <div id="ourStoriesSection"> 

            </div>
            <div id="quote2Section"> 

            </div>
            <div id="comingSoonSection"> 

            </div>
            <style jsx>{aboutStyle}</style>
        </div>
    )
}

function AboutUs(props) {
    return (
        <div className="main">
            <div id="section1">
                <FullScreenDiv>
                    <GoalsChild />
                </FullScreenDiv>
            </div>
            <div id="section2"> 
                <Section2 />
            </div>
            <style jsx>{aboutStyle}</style>
        </div>
    );
}

export default AboutUs;
