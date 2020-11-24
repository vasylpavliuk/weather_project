import React from "react";
import { connect } from "react-redux";

const WeatherResults = (props) => {
    const data = props.data;

    let output = "";
    if (props.data) {
        output = 
            <div>
                <div  style={{ textAlign: "right" }}>
                    <div className="ui left labeled button" >
                        <a className="ui right pointing basic label">Push the heart button to save current city</a>
                        <button className="ui icon button" tabIndex="0" onClick={ () => saveIdToLocalStorage(props.data.id)}>
                            <i aria-hidden="true" className="heart icon"></i> Like
                        </button>
                    </div>
                </div>
                <p>{new Date(Date.now()).toDateString()}</p>
                <h2>{data.name}, {data.sys.country}</h2>

                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather logo" />
                <h2> {data.main.temp.toFixed(0)}°C</h2>
                <p>Відчувається як {data.main.feels_like.toFixed(0)}°C. {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
            </div>
        
    }

    function saveIdToLocalStorage(id){
        let a = [];
        a = JSON.parse(localStorage.getItem('citiesIDs')) || [];
        if (!a.includes(id)) a.push(id);
        localStorage.setItem('citiesIDs', JSON.stringify(a));
        props.addFavouriteCitiesIDs(localStorage.getItem('citiesIDs'));
        console.log(JSON.parse(localStorage.getItem('citiesIDs')));
        console.log(typeof(JSON.parse(localStorage.getItem('citiesIDs'))));
    }

    return (    
        <React.Fragment>
            {output}
        </React.Fragment>
    )
}

const  mapDispatchToProps = dispatch => {
    return {
        addFavouriteCitiesIDs: (data) => dispatch({ type: "ADD_FAVOURITE_CITIES_IDS", payload: data })
    }
} 

export default connect(null, mapDispatchToProps)(WeatherResults);