import React, { Component } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import { Link } from 'react-router-dom';

// Component Source: https://github.com/yahoo/react-intl/wiki/Components

// I know this component is the exact same as the Robin. 
export default class Batman extends Component {
    constructor() {
        super();
        this.state = {
            bank: 9248123,
            unreadCount: 5948,
        }
    }
    render() {
        return (
            <div>
                <h1>Hello, Mr. Wayne.</h1>
                <div>
                    It is currently {' '} {/* ADDRESS: Can you use non-24 hour clock? */}
                    <FormattedTime 
                        value={Date.now()}
                        hour="2-digit"
                        minute="numeric"
                    />.
                </div>
                <img 
                    src="https://i.pinimg.com/736x/e5/a0/69/e5a06942fa42823c88be5f3a834e063d--fantastic-art-bat-family.jpg"
                    height="250" 
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
