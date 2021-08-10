import React from 'react';
import Link from 'next/link';

import { adminLayoutStyles } from './layout.style';

const NavLinks = [
    {
        title: 'NFT Creator',
        slug: '/admin/nft-creator',
    },
    {
        title: 'NFT Manager',
        slug: '/admin/nft-manager',
    },
    {
        title: 'Analytics',
        slug: '/admin/analytics',
    },
];

class AdminLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <div className="admin-container">
                <div className="admin-navbar">
                    {NavLinks.map((link, i) => {
                        return (
                            <div key={i}>
                                <Link href={link.slug}>
                                    <a>{link.title}</a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="admin-inner">{children}</div>
                <style jsx>{adminLayoutStyles}</style>
            </div>
        );
    }
}

export default AdminLayout;
