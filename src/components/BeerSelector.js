import React from 'react';

const BeerSelector = (props) => {
    const options = props.beers.map((beer, index) => {
        return <option value={index} key={index}>{beer.name}</option>
    })

    function handleChange(event) {
        const selectedIndex = event.target.value;
        props.onBeerSelected(selectedIndex);
    }

    return (
        <select id='beer-selector' onChange={handleChange} defaultValue='default'>
            <option disabled value='default'>Pick your brew</option>
            {options}
        </select>
    )
}



export default BeerSelector;
