import React from 'react';
import { divStyle } from './style';

function FullScreenDiv(props) {
    return (
        <>
            <div className="full-page-container">{props.children}</div>
            <style jsx>{divStyle}</style>
        </>
    );
}

export default FullScreenDiv;
