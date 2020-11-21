import React from "react";

const WeatherResults = (props) => {
    const data = props.data;

    let output = "";
    if (props.data) {
        output = 
            <div>
                <p>{data.dt}</p>
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