import React from "react";

const ForecastResults = (props) => {
    const data = props.data;

    let output = "";
    if (props.data) {
        output = 
                <div  style={{ textAlign: "right" }}>
                    <h4>8-day forecast</h4>
                </div>
    }

    return (    
        <React.Fragment>
            {output}
        </React.Fragment>
    )
}

export default ForecastResults;