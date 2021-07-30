import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Ticker from 'react-ticker';

import { workStyles, filtersStyle } from './style';
import works from './works.js';
import ModalVideo from 'react-modal-video';

const isServer = () => typeof window === 'undefined';

function Filters(props) {
    const width = 70;
    const height = 30;

    return (
        <div className="filters">
            <button
                className={props.allButton ? 'buttonSelected' : 'buttonDeselected'}
                id="allButton"
                onClick={props.handleFilterClick}
            >
                All
            </button>
            <button
                className={props.VFXButton ? 'buttonSelected' : 'buttonDeselected'}
                id="VFXButton"
                onClick={props.handleFilterClick}
            >
                VFX
            </button>
            <button
                className={props.filmButton ? 'buttonSelected' : 'buttonDeselected'}
                id="filmButton"
                onClick={props.handleFilterClick}
            >
                Film
            </button>
            <style jsx>{filtersStyle}</style>
        </div>
    );
}

const WorkTable = (props) => {
    const { allFilter, VFXFilter, filmFilter, data } = props;
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (!allFilter && !VFXFilter && !filmFilter) {
            setFilteredData([]);
        } else if (allFilter === true) {
            setFilteredData(data);
        } else if (VFXFilter === true) {
            setFilteredData(data.filter((d) => d.type === 'VFX'));
        } else if (filmFilter === true) {
            setFilteredData(data.filter((d) => d.type === 'Film'));
        }
    }, [allFilter, VFXFilter, filmFilter]);

    return (
        <div className="table">
            {filteredData.map((d, i) => {
                return <Tile data={d} key={filteredData.id} key={i} />;
            })}
            <style jsx>{workStyles}</style>
        </div>
    );
};

const Tile = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

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

    return (
        <div className="tile">
            {!isServer() && (
                <ModalVideo
                    channel={props.data.platform}
                    isOpen={isOpen}
                    videoId={props.data.videoId}
                    onClose={() => setOpen(false)}
                    autoplay="true"
                    portrait="false"
                    color="black"
                />
            )}
            <img
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                src={props.data.image}
                alt={props.data.name}
                onClick={() => setOpen(true)}
            />
            <p id="workDetailsNonMobile">
                {' '}
                <span className="formattingTitle">
                    {hover ? props.data.artist + ' - ' + props.data.name : ''}
                </span>
            </p>
            <p id="workDetailsMobile">
                {' '}
                <span className="formattingTitle">
                    {props.data.artist + ' - ' + props.data.name}
                </span>
            </p>
            <style jsx>{workStyles}</style>
        </div>
    );
};

export class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allButton: true,
            VFXButton: true,
            filmButton: true,
        };
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(e) {
        const { allButton, VFXButton, filmButton } = this.state;
        const id = e.currentTarget.getAttribute('id');

        if (id === 'allButton') {
            if (allButton) {
                this.setState({
                    allButton: false,
                    VFXButton: false,
                    filmButton: false,
                });
            } else {
                this.setState({
                    allButton: true,
                    VFXButton: true,
                    filmButton: true,
                });
            }

            return;
        } else {
            const newState = { ...this.state };
            newState[id] = !this.state[id];

            if (newState.VFXButton && newState.filmButton) {
                newState.allButton = true;
            } else {
                newState.allButton = false;
            }

            this.setState(newState);
        }
    }

    render() {
        return (
            <div className="main">
                <div id="workTable">
                    <div className="filterSection">
                        <Filters
                            allButton={this.state.allButton}
                            VFXButton={this.state.VFXButton}
                            filmButton={this.state.filmButton}
                            handleFilterClick={this.handleFilterClick}
                        />
                    </div>
                    <WorkTable
                        data={works}
                        allFilter={this.state.allButton}
                        VFXFilter={this.state.VFXButton}
                        filmFilter={this.state.filmButton}
                    />
                </div>
                <style jsx>{workStyles}</style>
            </div>
        );
    }
}

export default Work;
