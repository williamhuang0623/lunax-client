import React from 'react';
import { sideBarStyle } from './style';
import Profile from './profile';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <Profile />
            </div>
            <style jsx>{sideBarStyle}</style>
        </>
    );
};

export default Sidebar;
