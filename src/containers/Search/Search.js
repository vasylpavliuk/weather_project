import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import classes from './Search.module.css';
import WeatherResults from '../../components/WeatherResults/WeatherResults';

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?";
// const BASEURL = "https://api.openweathermap.org/data/2.5/forecast?";
let fetchedQuery = "";


const Search = (props) => {
    const inputQuery = props.inputQuery;
    
    useEffect(() => {
        async function fetchData(query) {
            const API_key = "6e3cbb643110d9f240180795db07e22f";
            const response = await axios.get(BASEURL, {
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
            fetchData(inputQuery).then(response => props.getWeatherData(response.data));
             fetchedQuery = inputQuery;
        }
    }, [props.btnClicked]);

    return (
        <div className={classes.Search}>
            <input type='text' 
                placeholder='Choose any city to find out the weather' 
                onInput={(event) => props.onInputQuery(event.target.value)}>
            </input>
            <button onClick={props.onBtnClicked}>Search</button>
            {/* <h3>{inputQuery}</h3>
            <h3>{btnClicked ? "True" : "False"}</h3> */}
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



////////// Basic implementation using React hooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, {  useState, useEffect, useRef } from "react";
// import axios from "axios";

// import classes from './Search.module.css';

// const BASEURL = "https://api.openweathermap.org/data/2.5/weather?";
// const BASEURL = "https://api.openweathermap.org/data/2.5/forecast?";
// let fetchedQuery = "";

// const Search = (props) => {
//     let [inputQuery, inputQueryHandler] = useState("");
//     let [buttonClicked, buttonClickedHandler] = useState(false);
//     let [weatherData, setWeatherData] = useState("");

//     useEffect(() => {
//         async function fetchData(query) {
//             const API_key = "6e3cbb643110d9f240180795db07e22f";
//             const response = await axios.get(BASEURL, {
//                 params: {
//                     q: query,
//                     lang: "uk",
//                     appid: API_key,
//                     units: "metric"
//                 },
                
//             })
//             return response;
//         }
        
//         if(inputQuery && inputQuery !== fetchedQuery) {
//             fetchData(inputQuery).then(response => setWeatherData(response.data));
//              fetchedQuery = inputQuery;
//         }
//     }, [buttonClicked]);

//     return (
//         <div className={classes.Search}>
//             <input type='text' 
//                 placeholder='Choose any city to find out the weather' 
//                 onInput={(event) => inputQueryHandler(inputQuery = event.target.value)}>
//             </input>
//             <button onClick={() => buttonClickedHandler(!buttonClicked)}>Search</button>
//             <WeatherResults data={weatherData} />
//         </div>
//     )
// }

// export default Search;