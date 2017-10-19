import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';

// Must wrap to style the FormattedComponent by itself.
const StyledFormattedNumber = styled.span`
    font-weight: bold;
`

// Doesn't work overall.
// const StyledFormattedNumber = styled(FormattedNumber)`
//     {${props => console.log(props)}} {/* This prop passing works for styled components. */}
//     font-weight: bold;
// `

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
                    It is currently {' '}
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
                <p>
                    Your next flight is in {' '}
                    <StyledFormattedNumber><FormattedNumber
                        value={3}
                    /></StyledFormattedNumber> days.
                </p>
            </div>
        );
    }
}
