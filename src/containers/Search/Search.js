import React, {  useState, useEffect, useRef } from "react";
import axios from "axios";

import classes from './Search.module.css';
import WeatherResults from '../../components/WeatherResults/WeatherResults';

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?";
// const BASEURL = "https://api.openweathermap.org/data/2.5/forecast?";
let fetchedQuery = "";


const Search = (props) => {
    let [inputQuery, inputQueryHandler] = useState("");
    let [buttonClicked, buttonClickedHandler] = useState(false);
    let [weatherData, setWeatherData] = useState("");

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
            fetchData(inputQuery).then(response => setWeatherData(response.data));
             fetchedQuery = inputQuery;
        }
    }, [buttonClicked]);

    return (
        <div className={classes.Search}>
            <input type='text' 
                placeholder='Choose any city to find out the weather' 
                onInput={(event) => inputQueryHandler(inputQuery = event.target.value)}>
            </input>
            <button onClick={() => buttonClickedHandler(!buttonClicked)}>Search</button>
            <WeatherResults data={weatherData} />
        </div>
    )
}

export default Search;









// import React, {  useState, useEffect, useRef } from "react";
// import axios from "axios";

// import classes from './Search.module.css';

// const BASEURL = "https://api.openweathermap.org/data/2.5/weather?";


// const Search = (props) => {
//     let [inputQuery, inputQueryHandler] = useState("");
//     let [buttonClicked, buttonClickedHandler] = useState(false);
//     let [weatherData, setWeatherData] = useState("");
//     const inputRef = useRef();

//     useEffect(() => {
//         async function fetchData(query) {
//             const API_key = "6e3cbb643110d9f240180795db07e22f";
//             const response = await axios.get(BASEURL, {
//                 params: {
//                     q: query,
//                     appid: API_key
//                 }
//             })
//             return response;
//         }
        
//         if(inputQuery && (inputQuery !== inputRef.current.value)) {
//             fetchData(inputQuery).then( response => setWeatherData(response.data))
//         }
//     }, [buttonClicked]);

//     return (
//         <div className={classes.Search}>
//             <input type='text' 
//                 placeholder='Choose any city to find out the weather' 
//                 onInput={(event) => inputQueryHandler(inputQuery = event.target.value)}
//                 ref={inputRef}>
//             </input>
//             <button onClick={() => buttonClickedHandler(!buttonClicked)}>Search</button>
//             <p>Ви вели пошук по місту: {weatherData.name}</p>
//             <p>Туманність: {weatherData.visibility}</p>
//             <p>{inputRef.current.value}</p>
//         </div>
//     )
// }

// export default Search;