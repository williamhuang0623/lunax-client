import React, { useEffect, useState } from 'react';
import { workStyles } from './style';
import Image from 'next/image';
import Ticker from 'react-ticker';
import works from '../public/work/works/works.js'
import ModalVideo from 'react-modal-video'


function Filters(props)  {
    return (
        <div className="main"> 
            <div className="filters">
                <button id="allButton" onClick={props.allButton ? props.filterDeselected : props.filterSelected}>
                    <Image src={props.allButton ? "/work/filter/allSelected.png" : "/work/filter/all.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
                <button id="VFXButton" onClick={props.VFXButton ? props.filterDeselected : props.filterSelected}>
                    <Image src={props.VFXButton ? "/work/filter/VFXSelected.png" : "/work/filter/VFX.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
                <button id="filmButton" onClick={props.filmButton ? props.filterDeselected : props.filterSelected}>
                    <Image src={props.filmButton ? "/work/filter/filmSelected.png" : "/work/filter/film.png"} width={70} height={30} alt="newkino_logo"/>
                </button>
            </div>
            <style jsx>{workStyles}</style>
        </div>
    )
}

const WorkTable = (props) => {
    const[filteredData, setFilteredData] = useState(props.data);

    useEffect(() => {
        console.log(filteredData);
        if(props.allFilter === true){
            setFilteredData(props.data);
            console.log("All")
        } else if (props.VFXFilter === true){
           setFilteredData(props.data.filter((data) => data.type === "VFX"));
           console.log("VFX")
        } else if (props.filmFilter === true){
            setFilteredData(props.data.filter((data) => data.type === "Film"));
            console.log("FILM")
        }
    }, [props.allFilter, props.VFXFilter, props.filmFilter])

    return (
        <div className="table">
            {filteredData.map((data) => {
                return <Tile data={data} key={filteredData.id} />;
            })}
            <style jsx>{workStyles}</style>
        </div>
    );
}

const Tile = (props) => {
    const [isOpen, setOpen] = useState(false)
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
                    onClick={()=> setOpen(true)}
                />
                <p id="workDetails"> {hover ? props.data.artist + ' - ' + props.data.name : ''}</p>
            </React.Fragment>
            <style jsx>{workStyles}</style>
        </div>
    );
}

export class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allButton: true,
            VFXButton: true,
            filmButton: true
        };
        this.filterSelected = this.filterSelected.bind(this);
        this.filterDeselected = this.filterDeselected.bind(this);

    }

    filterSelected(e) {
        const id = e.currentTarget.getAttribute('id');
        if(id === "allButton") {
            this.setState({
                allButton: true,
                VFXButton: true,
                filmButton: true
            });
        } else if(id === "VFXButton") {
            this.setState({
                VFXButton: true
            });
            if(this.state.filmButton === true) {
                this.setState({
                    allButton: true
                });
            }
        } else if(id === "filmButton") {
            this.setState({
                filmButton: true
            });
            if(this.state.VFXButton === true) {
                this.setState({
                    allButton: true
                });
            }
        }
    };
    filterDeselected(e) {
        const id = e.currentTarget.getAttribute('id');
        if(id === "VFXButton") {
            if (this.state.allButton === true) {
                this.setState({
                    allButton: false,
                    VFXButton: false,
                    filmButton: true
                });
            } else {
                this.setState({
                    VFXButton: false
                });
            }
        } else if(id === "filmButton") {
            if (this.state.allButton === true) {
                this.setState({
                    allButton: false,
                    VFXButton: true,
                    filmButton: false
                });
            } else {
                console.log("JEASFF")
                this.setState({
                    filmButton: false
                });
            }
        }
    };

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
                    <Filters allButton={this.state.allButton} VFXButton={this.state.VFXButton} filmButton={this.state.filmButton} filterSelected={this.filterSelected} filterDeselected={this.filterDeselected}/>
                </div>
                <div id="workTable">
                    <WorkTable data={works} allFilter={this.state.allButton} VFXFilter={this.state.VFXButton} filmFilter={this.state.filmButton}/>
                </div>
                <style jsx>{workStyles}</style>
            </div>
        );
    }
}

export default Work;
