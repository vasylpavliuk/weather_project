import React from 'react';
// import axios from 'axios';
import { connect } from "react-redux";
import { Icon } from 'semantic-ui-react'

import FavouriteCity from './FavouriteCity/FavouriteCity';



const Favourites = props => {
    // let сitiesIDs;
    // if (props.сitiesIDs.length) {
    //     сitiesIDs = props.сitiesIDs;
    // }
    // let content = [];
    // if (props.favouriteCitiesIDs.length) {
    //     content = props.favouriteCitiesIDs.map((ID, index) => {
    //         console.log(props.favouriteCitiesIDs)
    //         console.log(ID)
    //         return <FavouriteCity favouriteCitiesIDs={ID} />

    //     }
    // }

    
    // useEffect(() => {

    //     if(favouriteCitiesIDs.length) {
    //         JSON.parse(favouriteCitiesIDs).forEach(cityID => fetchData(cityID)
    //             .then(response => props.getFavouriteCitiesData(response.data)))
    //     }

    //     async function fetchData(id) {
    //         const API_key = "6e3cbb643110d9f240180795db07e22f";
    //         const response = await axios.get(BASEURL, {
    //             params: {
    //                 id: id,
    //                 lang: "uk",
    //                 appid: API_key,
    //                 units: "metric"
    //             },
                
    //         })
    //         return response;
    //     }
        
 
    //     if(favouriteCitiesIDs.length) {
    //         console.log(typeof(favouriteCitiesIDs));
    //         JSON.parse(favouriteCitiesIDs).forEach(cityID => fetchData(cityID)
    //             .then(response => content.push(<FavouriteCity key={response.data.id} data={response.data} />)))
    //         console.log(content)
    //     }
    // }, []);

    return (
        <div className="ui card" style={{textAlign: "center"}}>
            <div className="content">
                <div className="header">
                    Your favourites
                    <Icon name='heart' size='large' style={{marginLeft: "1.5rem"}} />
                </div>
            </div>
           
            {/* <div className="event" >
                <Button
                    onClick={props.getShowFavourites}
                    basic
                    color='blue'
                    icon='heart'
                    label={{
                        as: 'a',
                        basic: true,
                        color: 'blue',
                        pointing: 'left',
                        content: 'Show your favoutites',
                    }}
                    />
             </div> */}
           

            <div className="content" style={{height: "90px", paddingTop: "5px"}}>
                <div className="ui feed">
                   {/* <FavouriteCity  show={props.showFavourites} favouriteCitiesIDs={[4219762]} /> */}
                   { props.favouriteCitiesIDs.length ?  JSON.parse(props.favouriteCitiesIDs).map((ID, index) => <FavouriteCity favouriteCitiesIDs={ID} /> ) : null }
                   {console.log(props.favouriteCitiesIDs)}
                  
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        showFavourites: state.showFavourites,
        favouriteCitiesIDs: state.favouriteCitiesIDs
    };
};

const  mapDispatchToProps = dispatch => {
    return {
        getShowFavourites: () => dispatch({ type: "GET_SHOW_FAVOURITES" })
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);