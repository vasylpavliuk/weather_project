const initialState = {
    inputQuery: "",
    buttonClicked: false,
    weatherData: "",
    favouriteCitiesIDs: [],
    favouriteCityData: []
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
            };
        case "ADD_FAVOURITE_CITIES_IDS":
            return {
                ...state,
                favouriteCitiesIDs: action.payload
            };
        case "GET_FAVOURITE_CITY_DATA":
            return {
                ...state,
                favouriteCityData: action.payload
            }
    }

    return state;
}

export default reducer;