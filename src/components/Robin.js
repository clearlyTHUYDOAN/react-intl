import React, { Component } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import { Link } from 'react-router-dom';

// I know this component is the exact same as the Batman. 
export default class Robin extends Component {
    constructor() {
        super();
        this.state = {
            bank: 55645,
            unreadCount: 1
        }
    }
    render() {
        return (
            <div>
                <h1>Hello, Mr. Grayson.</h1>
                <div>
                    It is currently {' '} {/* ADDRESS: Can you use non-24 hour clock? */}
                    <FormattedTime 
                        value={Date.now()}
                        hour="2-digit"
                        minute="numeric"
                    />.
                </div>
                <img 
                    src="https://i.pinimg.com/736x/bc/7a/84/bc7a84030d20079d6440a89bce798344--robin-dc-grant-morrison.jpg"
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