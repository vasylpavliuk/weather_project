import React from "react";
// import  { Icon } from 'semantic-ui-react';

const WeatherResults = (props) => {
    const data = props.data;

    let output = "";
    if (props.data) {
        output = 
            <div>
                <div  style={{ textAlign: "right" }}>
                    <div class="ui left labeled button" >
                        <a class="ui right pointing basic label">Push the heart button to save current city</a>
                        <button class="ui icon button" tabindex="0">
                            <i aria-hidden="true" class="heart icon"></i> Like
                        </button>
                    </div>
                </div>
                <p>{new Date(Date.now()).toDateString()}</p>
                <h2>{data.name}, {data.sys.country}</h2>

                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                <h2> {data.main.temp.toFixed(0)}°C</h2>
                <p>Відчувається як {data.main.feels_like.toFixed(0)}°C. {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
            </div>
        
    }

    return (
        <React.Fragment>
            {output}
        </React.Fragment>
    )
}

export default WeatherResults;