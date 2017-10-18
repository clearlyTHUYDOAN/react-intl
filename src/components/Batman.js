import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';

// Component Source: https://github.com/yahoo/react-intl/wiki/Components

export default class Batman extends Component {
    render() {
        return (
            <div>
                <h1>Hello, Mr. Wayne.</h1>
                <img 
                    src="https://i.pinimg.com/736x/e5/a0/69/e5a06942fa42823c88be5f3a834e063d--fantastic-art-bat-family.jpg"
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
