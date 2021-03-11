import React from 'react';
import FullScreenDiv from 'component/FullScreenDiv';

function Child(props) {
    return (
        <div style={{ background: 'white' }}>
            <a href="#jumphere">Jump here</a>
            <ul>
                <li>Apple</li>
                <li>Oranges</li>
            </ul>

            <a name="jumphere"></a>
        </div>
    );
}

function AboutUs(props) {
    return (
        <FullScreenDiv>
            <Child />
        </FullScreenDiv>
    );
}

export default AboutUs;
