import React from 'react';

const ShowFavCity = props => {
    const cityData = props.cityData;
    return (

        <div className="content" style={{height: "90px", paddingTop: "5px"}}>
                <div className="ui feed">
                <div className="event">
            <div className="label">
                <img src={`http://openweathermap.org/img/wn/${props.cityData.weather[0].icon}@2x.png`} alt="Weather logo"  style={{heigth: "70px", width: "70px"}}/>
            </div>
            <div className="content" style={{marginLeft: "3rem"}}>
                 <h3>{props.cityData.name}, {props.cityData.sys.country}</h3> 
                <div className="content">{props.cityData.main.temp.toFixed(0)}°C,  {props.cityData.weather[0].description.charAt(0).toUpperCase() + props.cityData.weather[0].description.slice(1)}</div>
            </div> 
        </div>
                  
                </div>
            </div>




     
    )

}

export default ShowFavCity;