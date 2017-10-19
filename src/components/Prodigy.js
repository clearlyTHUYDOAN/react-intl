import React, { Component } from 'react';
import { FormattedTime, FormattedMessage, FormattedRelative } from 'react-intl'
import styled from 'styled-components';

const StyledImg = styled.img`
    padding: 11px 0;
`

// Doesn't work.
const TestFormattedTime = styled(FormattedTime)`
    font-weight: bold;
`

// Have to wrap an element around a Formatted component if you want to style it by itself.
const TestWrapperAroundFormatted = styled.span`
    font-weight: bold;
`

const StyledFormattedTime = styled.div`
    font-weight: 300;
    color: red;
`

export default class Prodigy extends Component {
    constructor() {
        super();
        this.state = {
            user       : 'Ed',
            unreadCount: 0,
            assignmentsDue: 2 // ASSESS: Cannot style numbers?
        }
    }
    render() {
        const { user, unreadCount, assignmentsDue } = this.state;
        return (
            <div>
                <h1>Hello, Little Ed.</h1>
                <StyledFormattedTime>
                    It is currently {' '}
                    <TestWrapperAroundFormatted>
                        <TestFormattedTime 
                            value={Date.now()}
                            hour="2-digit"
                            minute="numeric"
                        />.
                    </TestWrapperAroundFormatted>
                </StyledFormattedTime>
                <StyledImg 
                    src="https://www.prodigygame.com/assets/images/svg/ed/ed-parent.svg"
                    height="250" 
                    alt="ed parent"
                />
                <p>
                    <FormattedMessage
                        id="test.welcome" // Must be unique for every message defined in your app.
                        // String defaults to this if you cannot find the locale equivalent of the message at that id.
                        defaultMessage={`You have {unreadCount, number} unread {unreadCount, plural,
                        one {message}
                        other {messages}
                        }.`}
                        values={{user: <b>{user}</b>, unreadCount}}
                    />
                    {/*Sample error message: [React Intl] Missing message: "test.welcome" for locale: "ja", using default message as fallback.*/}
                </p>
                <p>You last logged in {' '}
                    <FormattedRelative
                        value={new Date() - 1000 * 60 * 60 * 2} // Expects value that can be parsed as date.
                        options={{style: 'best fit'}} // It will do the correct units by default.
                        // Should be able to control frequency of updating relative time.
                    />.
                </p>
                <h3>{/* Will output as a span by default if you don't enclose with another tag. */}
                    <FormattedMessage
                        id="test.assignments"
                        defaultMessage={`{assignmentsDue, number} {assignmentsDue, plural,
                        one {assignment}
                        other {assignments}
                        } due.`}
                        values={{assignmentsDue}} // Must do this for every variable.
                    />
                    {/*Sample error message: [React Intl] Missing message: "test.welcome" for locale: "ja", using default message as fallback.*/}
                </h3>
            </div>
        );
    }
}