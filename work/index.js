import React, { useEffect, useState } from 'react';
import { workStyles, filtersStyle } from './style';
import Image from 'next/image';
import Ticker from 'react-ticker';
import works from '../public/work/works/works.js';
import ModalVideo from 'react-modal-video';

function Filters(props) {
    const width = 70;
    const height = 30;

    return (
        <div className="filters">
            <button
                id="allButton"
                onClick={props.allButton ? props.filterDeselected : props.filterSelected}
            >
                <Image
                    src={props.allButton ? '/work/filter/allSelected.png' : '/work/filter/all.png'}
                    width={width}
                    height={height}
                    alt="newkino_logo"
                />
            </button>
            <button
                id="VFXButton"
                onClick={props.VFXButton ? props.filterDeselected : props.filterSelected}
            >
                <Image
                    src={props.VFXButton ? '/work/filter/VFXSelected.png' : '/work/filter/VFX.png'}
                    width={width}
                    height={height}
                    alt="newkino_logo"
                />
            </button>
            <button
                id="filmButton"
                onClick={props.filmButton ? props.filterDeselected : props.filterSelected}
            >
                <Image
                    src={
                        props.filmButton ? '/work/filter/filmSelected.png' : '/work/filter/film.png'
                    }
                    width={width}
                    height={height}
                    alt="newkino_logo"
                />
            </button>
            <style jsx>{filtersStyle}</style>
        </div>
    );
}

const WorkTable = (props) => {
    const [filteredData, setFilteredData] = useState(props.data);

    useEffect(() => {
        if (props.allFilter === true) {
            setFilteredData(props.data);
        } else if (props.VFXFilter === true) {
            setFilteredData(props.data.filter((data) => data.type === 'VFX'));
        } else if (props.filmFilter === true) {
            setFilteredData(props.data.filter((data) => data.type === 'Film'));
        }
    }, [props.allFilter, props.VFXFilter, props.filmFilter]);

    return (
        <div className="table">
            {filteredData.map((data) => {
                return <Tile data={data} key={filteredData.id} />;
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
            <React.Fragment>
                <ModalVideo
                    channel={props.data.platform}
                    isOpen={isOpen}
                    videoId={props.data.videoId}
                    onClose={() => setOpen(false)}
                    autoplay="true"
                    portrait="false"
                    color="black"
                />
                <img
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    src={props.data.image}
                    alt={props.data.name}
                    onClick={() => setOpen(true)}
                />
                <p id="workDetails"> {hover ? props.data.artist + ' - ' + props.data.name : ''}</p>
            </React.Fragment>
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
        this.filterSelected = this.filterSelected.bind(this);
        this.filterDeselected = this.filterDeselected.bind(this);
    }

    filterSelected(e) {
        const id = e.currentTarget.getAttribute('id');
        if (id === 'allButton') {
            this.setState({
                allButton: true,
                VFXButton: true,
                filmButton: true,
            });
        } else if (id === 'VFXButton') {
            this.setState({
                VFXButton: true,
            });
            if (this.state.filmButton === true) {
                this.setState({
                    allButton: true,
                });
            }
        } else if (id === 'filmButton') {
            this.setState({
                filmButton: true,
            });
            if (this.state.VFXButton === true) {
                this.setState({
                    allButton: true,
                });
            }
        }
    }
    filterDeselected(e) {
        const id = e.currentTarget.getAttribute('id');
        if (id === 'VFXButton') {
            if (this.state.allButton === true) {
                this.setState({
                    allButton: false,
                    VFXButton: false,
                    filmButton: true,
                });
            } else {
                this.setState({
                    VFXButton: false,
                });
            }
        } else if (id === 'filmButton') {
            if (this.state.allButton === true) {
                this.setState({
                    allButton: false,
                    VFXButton: true,
                    filmButton: false,
                });
            } else {
                this.setState({
                    filmButton: false,
                });
            }
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
                            filterSelected={this.filterSelected}
                            filterDeselected={this.filterDeselected}
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
