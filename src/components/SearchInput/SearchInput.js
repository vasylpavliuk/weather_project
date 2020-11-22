import React from 'react';
import { Segment } from 'semantic-ui-react';

const SearchInput = props => {
    return (
        <Segment inverted >
            <div className="ui fluid action input">
                <input 
                    className="ui icon input" 
                    type="text" 
                    placeholder={props.placeholder} 
                    onInput={(event) => props.onInputTerm(event.target.value)}
                    />
                <button className="ui button" onClick={props.clicked}>Search</button>
            </div>
        </Segment>
    )
}

export default SearchInput;
