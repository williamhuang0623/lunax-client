import React from 'react';
import Image from 'next/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

import { footerStyles } from './style';

function Footer(props) {
    const fontSize = 'large';
    const footerLinks = [
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/newkinostudio/',
            icon: <InstagramIcon fontSize={fontSize} />,
        },
        {
            label: 'Twitter',
            href: 'https://twitter.com/newkinostudio',
            icon: <TwitterIcon fontSize={fontSize} />,
        },
        {
            label: 'Foundation',
            href: 'https://foundation.app/newkino',
            icon: <LanguageIcon fontSize={fontSize} />,
        },
    ];

    return (
        <footer className="footer">
            <div className="contact-details">
                <h3>Get in touch</h3>
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
            <style jsx>{footerStyles}</style>
        </footer>
    );
}

export default Footer;
