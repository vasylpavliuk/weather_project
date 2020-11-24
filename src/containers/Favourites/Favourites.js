import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Icon } from 'semantic-ui-react'

import FavouriteCity from './FavouriteCity/FavouriteCity';

const Favourites = props => {

    useEffect(() => {
        function getIdFromLocalStorage(){
            props.getFavouriteCitiesIDs(localStorage.getItem('citiesIDs'));
        };
        getIdFromLocalStorage();
    })

    return (
        <div className="ui card" style={{textAlign: "center"}}>
            <div className="content">
                <div className="header">
                    Your favourites
                    <Icon name='heart' size='large' style={{marginLeft: "1.5rem"}} />
                </div>
            </div>
                { props.favouriteCitiesIDs.length ?  JSON.parse(props.favouriteCitiesIDs).map((ID, index) => <FavouriteCity cityID={ID} key={ID} /> ) : null }
        </div>
    )

}

const mapStateToProps = state => {
    return {
        showFavourites: state.showFavourites,
        favouriteCitiesIDs: state.favouriteCitiesIDs
    };
};

const  mapDispatchToProps = dispatch => {
    return {
        getFavouriteCitiesIDs: (data) => dispatch({ type: "ADD_FAVOURITE_CITIES_IDS", payload: data })
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);