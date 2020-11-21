import React from "react";

const WeatherResults = (props) => {
    const data = props.data;

    let output = "";
    if (props.data) {
        output = 
            <div>
                <p>{data.dt}</p>
                <h2>{data.name}, {data.sys.country}</h2>
                <h2>{data.main.temp.toFixed(0)}°C</h2>
            </div>
        
    }

    return (
        <React.Fragment>
            {output}
        </React.Fragment>
    )
}

export default WeatherResults;