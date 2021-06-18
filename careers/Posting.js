import React from 'react';
import Link from 'next/link';
import { postingStyles } from './style';

function Posting({ job }) {
    if (job) {
        return (
            <div className="job-container">
                <div className="back">
                    <img src="/careers/left-arrow.svg" />
                    <Link href="/careers">
                        <span>EXPLORE OTHER JOBS</span>
                    </Link>
                </div>
                <style jsx>{postingStyles}</style>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default Posting;
