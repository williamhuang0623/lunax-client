import React from 'react';

const facets = [
    'Demon image 1',
    'Demon image 2',
    'Demon image 3',
    'Pentagram',
    'Crown of flames',
    'Spiked Crown',
    'Apple',
    'Bible verse 1',
    'Bible verse 2 ',
    'Bible verse 3',
    'Upside-down cross',
    'Shoe is on fire (on bottom of sole)',
    'Lust',
    'Greed',
    'Pride',
    'Envy',
    'Gluttony',
    'Wrath',
    'Sloth',
    'Blood',
    'Worn',
    'New',
    'Background 1',
    'Background 2',
    'Background 3',
    'Background 4',
    'Background 5',
    'Rothschild border',
    'Severed foot',
    'Severed goat’s foot',
    'Bat wings',
    'Dog shit',
    'Gum',
    'With Box',
    'Pop',
    'Horn image',
];

const getRandomUniqueProperties = (number) => {
    let takenIndexes = [];
    let properties = [];

    while (number > 0) {
        let index = Math.ceil(Math.random() * facets.length);
        if (takenIndexes.includes(index)) {
            continue;
        } else {
            properties.push(facets[index]);
            takenIndexes.push(index);
            number--;
        }
    }

    return properties;
};

class Shoe {
    constructor(properties) {
        this._properties = properties;
    }

    getProperties() {
        return this._properties;
    }
}

class Devil extends React.Component {
    constructor(props) {
        super(props);
    }

    getRnglist() {
        const allShoes = [];
        for (let i = 1; i <= 666; i++) {
            const twoToFive = 2 + Math.floor(Math.random() * 3);
            const properties = getRandomUniqueProperties(twoToFive);
            const shoe = new Shoe(properties);
            allShoes.push(shoe);
        }

        return allShoes;
    }

    render() {
        return <div></div>;
    }
}

export default Devil;
