import React from 'react';

const BeerDetail = (props) => {
    if (!props.beer) return null;
    return (
        <div id="details">
            <h2>{props.beer.name}</h2>
            <p>{props.beer.description}</p>
            <p>ABV: {props.beer.abv}%</p>
            <img src={props.beer.image_url}/>

        </div>
    )
}

export default BeerDetail;
