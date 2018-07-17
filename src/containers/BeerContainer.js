import React from 'react';
import BeerSelector from '../components/BeerSelector'
import BeerDetail from '../components/BeerDetail'

class BeerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            currentBeer: null
        }
        this.handleBeerSelected = this.handleBeerSelected.bind(this);
    }

    componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers';
        console.log("MOUNT");

        fetch(url)
        .then (response => response.json())
        .then (beerData => this.setState({beers: beerData}) )
        .catch (err => console.error(err));
    }

    handleBeerSelected(index) {
        const selectedBeer = this.state.beers[index];
        this.setState({currentBeer: selectedBeer})
    }

    render() {
        console.log('render');
        return(
            <div>
                <h2>Select A Beer</h2>
                <BeerSelector beers={this.state.beers} onBeerSelected= {this.handleBeerSelected}/>
                <BeerDetail beer={this.state.currentBeer}/>
            </div>

        )
    }



}

export default BeerContainer;
