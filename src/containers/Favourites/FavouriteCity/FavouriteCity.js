import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import ShowFavCity from './ShowFavCity/ShowFavCity';


const weatherURL = "https://api.openweathermap.org/data/2.5/weather?";

const FavouriteCity = props => {

    useEffect(() => {
        async function fetchData(id) {
            // const API_key = "6e3cbb643110d9f240180795db07e22f";
            const API_key = "b7df8770a166b248e016398190a4d504";
            const response = await axios.get(weatherURL, {
                params: {
                    id: id,
                    lang: "uk",
                    appid: API_key,
                    units: "metric"
                },
            })
            return response;
        }
  
            fetchData(props.cityID).then(response => {
                props.getFavouriteCityData(response.data)
               }
            )
    }, []);
        
    return (
       <React.Fragment>
             { Object.keys(props.favouriteCityData).length ? <ShowFavCity cityData={props.favouriteCityData} /> : null }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        favouriteCityData: state.favouriteCityData,
        favouriteCitiesIDs: state.favouriteCitiesIDs,
    };
};

const  mapDispatchToProps = dispatch => {
    return {
        getFavouriteCityData: (data) => dispatch({ type: "GET_FAVOURITE_CITY_DATA", payload: data })
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCity);