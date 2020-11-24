import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import classes from './Search.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import WeatherResults from '../../components/WeatherResults/WeatherResults';

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


    return (
        <div className={classes.Search}>
            <SearchInput 
                onInputTerm={(value) => props.onInputQuery(value)}
                clicked={props.onBtnClicked}
                placeholder="Search city..." 
                />

            <WeatherResults data={props.weatherData} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        inputQuery: state.inputQuery,
        btnClicked: state.buttonClicked,
        weatherData: state.weatherData
    };
};

const  mapDispatchToProps = dispatch => {
    return {
        onInputQuery: (term) => dispatch({ type: "INPUT_CHANGED", payload: term }),
        onBtnClicked: () => dispatch({ type: "BUTTON_CLICKED" }),
        getWeatherData: (data) => dispatch({ type: "GET_WEATHER_DATA", payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);