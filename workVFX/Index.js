import React, { useState } from 'react';
import { workVFXStyles } from './style';
import Image from 'next/image';
import Ticker from 'react-ticker';
import VFXWorks from '../public/workVFX/VFX/VFXWorks.js'


function Filters(props)  {
    const [filterSelected, setFilter] = useState(
        {
            "allButton": true,
            "VFXButton": false,
            "filmButton": false
        }
    );

    const filterPressed = (e) => {
        const id = e.currentTarget.getAttribute('id');
        if (id === 'allButton') {
            setFilter({
                ...filterSelected,
                [id]: true
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
                    <Image src={filterSelected["allButton"] ? "/workVFX/filter/allSelected.png" : "/workVFX/filter/all.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
                <button id="VFXButton" onClick={filterSelected["VFXButton"] ? filterDeselected : filterPressed}>
                    <Image src={filterSelected["VFXButton"] ? "/workVFX/filter/VFXSelected.png" : "/workVFX/filter/VFX.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
                <button id="filmButton" onClick={filterSelected["filmButton"] ? filterDeselected : filterPressed}>
                    <Image src={filterSelected["filmButton"] ? "/workVFX/filter/filmSelected.png" : "/workVFX/filter/film.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
            </div>
                
            <style jsx>{workVFXStyles}</style>
        </div>
    )
}

const VFXTable = (props) => {
    return (
        <div className="table">
            {props.data.map((data) => {
                return <Tile data={data} key={data.id} />;
            })}
            <style jsx>{workVFXStyles}</style>
        </div>
    );
}

const Tile = (props) => {
    const [open, setOpen] = useState(false);
    const [hover, setHover]  = useState(false);

    const mouseEnter = () => {
        if (hover === false) {
            setHover(true);
        }
    };

    const mouseLeave = () => {
        if (hover === true) {
            setHover(false);
        }
    };
    
    const workSelected = () => {
        if(open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    return (
        <div className="tile">
            <img
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onClick={workSelected}
                src={props.data.image}
                alt={props.data.name}
                // id = {open === true ? "openTile" : "closedTile"}  
            />
            <style jsx>{workVFXStyles}</style>

        </div>
    );
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
                        <a href="https://newkino.studio/">
                            <Image
                                src="/global/logo.jpg"
                                width={81}
                                height={81}
                                alt="newkino_logo"
                            />
                        </a>
                    </div>
                </div>
                <div className="filterSection">
                    <Filters />
                </div>
                <div id="workTable">
                    <VFXTable data={VFXWorks} />
                </div>
                <style jsx>{workVFXStyles}</style>
            </div>
        );
    }
}

export default WorkVFX;
