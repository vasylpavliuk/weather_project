const initialState = {
    inputQuery: "",
    buttonClicked: false,
    weatherData: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INPUT_CHANGED":
            return {
                ...state,
                inputQuery: action.payload
            };
        case "BUTTON_CLICKED":
            return {
                ...state,
                buttonClicked: !state.buttonClicked,
            };
        case "GET_WEATHER_DATA":
            return {
                ...state,
                weatherData: action.payload
            }
    }

    return state;
}

export default reducer;