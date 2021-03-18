import React, { useState } from 'react';
import { workVFXStyles } from './style';
import Image from 'next/image';
import Ticker from 'react-ticker';


function Filters(props)  {
    const [filterSelected, setFilter] = useState(
        {
            "allButton": false,
            "VFXButton": false,
            "filmButton": false
        }
    );

    const filterPressed = (e) => {
        console.log("TEST")
        const id = e.currentTarget.getAttribute('id');
        if (id === 'allButton') {
            console.log(id);
            setFilter({
                ...filterSelected,
                [id]: true,
            });
        } else if (id === 'VFXButton') {
            setFilter({
                ...filterSelected,
                [id]: true,
            });
        } else if (id === 'filmButton') {
            setFilter({
                ...filterSelected,
                [id]: true,
            });
        }
    };

    const filterDeselected = (e) => {
        const id = e.currentTarget.getAttribute('id');
        if (id === 'allButton') {
            console.log(id);
            setFilter({
                ...filterSelected,
                [id]: false,
            });
        } else if (id === 'VFXButton') {
            setFilter({
                ...filterSelected,
                [id]: false,
            });
        } else if (id === 'filmButton') {
            setFilter({
                ...filterSelected,
                [id]: false,
            });
        }
    };

    return (
        <div className="main"> 
            <div className="filters">
                <button id="allButton" onClick={filterSelected["allButton"] ? filterDeselected : filterPressed}>
                    <Image src={filterSelected["allButton"] ? "/workVFX/allSelected.png" : "/workVFX/all.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
                <button id="VFXButton" onClick={filterSelected["VFXButton"] ? filterDeselected : filterPressed}>
                    <Image src={filterSelected["VFXButton"] ? "/workVFX/VFXSelected.png" : "/workVFX/VFX.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
                <button id="filmButton" onClick={filterSelected["filmButton"] ? filterDeselected : filterPressed}>
                    <Image src={filterSelected["filmButton"] ? "/workVFX/filmSelected.png" : "/workVFX/film.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
            </div>
                
            <style jsx>{workVFXStyles}</style>
        </div>
    )
}

function VFXTable(props) {
    return (
        <div className="main"> 

        </div>
    )
}

class WorkVFX extends React.Component {
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
                <div className="filterSection">
                    <Filters />
                </div>

                <style jsx>{workVFXStyles}</style>
            </div>
        );
    }
}

export default WorkVFX;
