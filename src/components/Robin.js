import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';

export default class Robin extends Component {
    render() {
        return (
            <div>
                <h1>Hello, Mr. Grayson.</h1>
                <img 
                    src="https://i.pinimg.com/736x/bc/7a/84/bc7a84030d20079d6440a89bce798344--robin-dc-grant-morrison.jpg"
                    width="200" 
                    alt="bat cave"
                />
                <p>Today is {' '} {/* <- This is literally just a space. */}
                    <FormattedDate 
                        value={Date.now()} 
                        year='numeric'
                        month='long'
                        day='numeric'
                        weekday='long'
                    />
                .</p>
            </div>
        );
    }
}