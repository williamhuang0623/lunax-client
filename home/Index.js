import React from 'react';
import { homeStyles } from './style';
import Image from 'next/image';
import Ticker from 'react-ticker';

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
    }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <div className="image-wrapper">
                        <Image src="/global/logo.jpg" width={81} height={81} alt="newkino_logo" />
                    </div>
                </div>

                <main>
                    <div className="coming-soon-ticker">
                        <Ticker speed={12}>
                            {({ index }) => (
                                <>
                                    <h1>COMING SOON /&nbsp;</h1>
                                </>
                            )}
                        </Ticker>
                    </div>
                </main>

                <style jsx>{homeStyles}</style>
            </div>
        );
    }
}

export default Home;
