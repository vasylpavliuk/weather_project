import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
// import { Button } from 'semantic-ui-react'

import ShowFavCity from './ShowFavCity/ShowFavCity';

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?";

const FavouriteCity = props => {

    useEffect(() => {
        async function fetchData(id) {
            const API_key = "6e3cbb643110d9f240180795db07e22f";
            const response = await axios.get(BASEURL, {
                params: {
                    id: id,
                    lang: "uk",
                    appid: API_key,
                    units: "metric"
                },
            })
            return response;
        }
        
            fetchData(props.favouriteCitiesIDs).then(response => {
                props.getFavouriteCityData(response.data)
               }
            )
        


        // if(favouriteCitiesIDs.length) {
        //     console.log(typeof(favouriteCitiesIDs));
        //     JSON.parse(favouriteCitiesIDs).forEach(cityID => fetchData(cityID)
        //         .then(response => content.push(<FavouriteCity key={response.data.id} data={response.data} />)))
        //     console.log(content)
        // }
    }, []);
    
    // if(cityData.length) {
    //     content = (
    //         <React.Fragment>
    //             <div className="label"><img src={`http://openweathermap.org/img/wn/${cityData[0].weather[0].icon}@2x.png`} alt="Weather logo" /></div>
    //             <div className="content">
    //                     <h3>{cityData.name}, {cityData.sys.country}</h3>
    //                     <div className="content">{cityData[0].main.temp.toFixed(0)}°C,  {cityData[0].weather[0].description.charAt(0).toUpperCase() + cityData[0].weather[0].description.slice(1)}</div>
    //             </div>
    //         </React.Fragment>
    //     )
    // }



    
    return (
       <React.Fragment>
             { Object.keys(props.favouriteCityData).length ? <ShowFavCity cityData={props.favouriteCityData} /> : null }
             {console.log(props.favouriteCityData)}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        favouriteCityData: state.favouriteCityData
    };
};

const  mapDispatchToProps = dispatch => {
    return {
        getFavouriteCityData: (data) => dispatch({ type: "GET_FAVOURITE_CITY_DATA", payload: data })
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCity);