import React, {  useState, useEffect } from "react";
import axios from "axios";

import classes from './Search.module.css';

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?";


const Search = (props) => {
    let [inputQuery, inputQueryHandler] = useState('');
    let [buttonClicked, buttonClickedHandler] = useState(false);

    useEffect(() => {
        async function fetchData(query) {
            const API_key = "6e3cbb643110d9f240180795db07e22f";
            const response = await axios.get(BASEURL, {
                params: {
                    q: query,
                    appid: API_key
                }
            })
            return response;
        }
        
        if(inputQuery) {
            fetchData(inputQuery).then( response => console.log(response.data))
        }
    }, [buttonClicked]);

    return (
        <div className={classes.Search}>
            <input type='text' 
                placeholder='Choose any city to find out the weather' 
                onInput={(event) => inputQueryHandler(inputQuery = event.target.value)}>
            </input>
            <button onClick={() => buttonClickedHandler(!buttonClicked)}>Search</button>
        </div>
    )
}

export default Search;