import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
    Container,
    Grid
  } from 'semantic-ui-react'
  

import classes from './Search.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import WeatherResults from '../../components/WeatherResults/WeatherResults';
import ForecastResults from '../../components/ForecastResults/ForecastResults';

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?";
let fetchedQuery = "";


const Search = (props) => {
    const inputQuery = props.inputQuery;
    
    useEffect(() => {
        async function fetchWeather(query) {
            // const API_key = "6e3cbb643110d9f240180795db07e22f";
            const API_key = "b7df8770a166b248e016398190a4d504";
            const response = await axios.get(weatherURL, {
                params: {
                    q: query,
                    lang: "uk",
                    appid: API_key,
                    units: "metric"
                },
                
            })
            return response;
        }
        
        if(inputQuery && inputQuery !== fetchedQuery) {
            fetchWeather(inputQuery).then(response => props.getWeatherData(response.data));
             fetchedQuery = inputQuery;
        }
    }, [props.btnClicked]);

    useEffect(() => {
        async function fetchForecast(query) {
            // const API_key = "6e3cbb643110d9f240180795db07e22f";
            const API_key = "b7df8770a166b248e016398190a4d504";
            const response = await axios.get(forecastURL, {
                params: {
                    q: query,
                    lang: "uk",
                    appid: API_key,
                    units: "metric"
                },
                
            })
            return response;
        }
        
        if(inputQuery && inputQuery !== fetchedQuery) {
            fetchForecast(inputQuery).then(response => props.getForecastData(response.data));
             fetchedQuery = inputQuery;
        }
    }, [props.btnClicked]);

    function saveIdToLocalStorage(id){
        let a = [];
        a = JSON.parse(localStorage.getItem('citiesIDs')) || [];
        if (!a.includes(id)) a.push(id);
        localStorage.setItem('citiesIDs', JSON.stringify(a));
        props.addFavouriteCitiesIDs(localStorage.getItem('citiesIDs'));
    }

    return (
        <div className={classes.Search}>
            <SearchInput 
                onInputTerm={(value) => props.onInputQuery(value)}
                clicked={props.onBtnClicked}
                placeholder="Search city..." 
                />

                {
                    props.weatherData ? 
                    <div  style={{ textAlign: "right", marginTop: "0" }}>
                        <div className="ui left labeled button" >
                            <a className="ui right pointing basic label">Push the heart button to save current city</a>
                            <button className="ui icon button" tabIndex="0" onClick={ () => saveIdToLocalStorage(props.weatherData.id)}>
                                <i aria-hidden="true" className="heart icon"></i> Like
                            </button>
                        </div>
                    </div> : null
                }
                

            <Grid>
            <Grid.Column width={4} style={{ marginLeft: '1rem' }}>
                <Container text style={{ marginTop: '1em' }}>
                    <WeatherResults data={props.weatherData} /> 
                </Container>
            </Grid.Column>

            <Grid.Column width={11}>
                <Container text style={{ marginTop: '1em' }}>
                     <ForecastResults data={props.forecastData} />
                </Container>
            </Grid.Column>
            </Grid>    
        </div>
    )
}

const mapStateToProps = state => {
    return {
        inputQuery: state.inputQuery,
        btnClicked: state.buttonClicked,
        weatherData: state.weatherData,
       forecastData: state.forecastData,
    };
};

const  mapDispatchToProps = dispatch => {
    return {
        onInputQuery: (term) => dispatch({ type: "INPUT_CHANGED", payload: term }),
        onBtnClicked: () => dispatch({ type: "BUTTON_CLICKED" }),
        addFavouriteCitiesIDs: (data) => dispatch({ type: "SET_FAVOURITE_CITIES_IDS", payload: data }),
        getWeatherData: (data) => dispatch({ type: "GET_WEATHER_DATA", payload: data }),
        getForecastData: (data) => dispatch({ type: "GET_FORECAST_DATA", payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);