import React, { Component } from 'react';
import { 
    FormattedTime, 
    FormattedMessage, 
    FormattedRelative,
    FormattedNumber 
} from 'react-intl'
import styled from 'styled-components';

import Nested from './Nested';

const StyledContainer = styled.div`
    font-size: 1em;
`

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
            assignmentsDue: 2, // To format numbers, add Formatted component inside of values prop.
            nextAssignmentNumber: 20,
            dueInDays: 3,
            questions: { // Confirmed: Can use nested objects.
                correct: 12,
                total: 15
            },
            randomPercentage: 0.5,
            lastLoginTime: new Date(),
            theTime: new Date()
        }
    }
    render() {
        const { user, unreadCount, assignmentsDue, nextAssignmentNumber, dueInDays, questions, randomPercentage, lastLoginTime } = this.state;
        return (
            <StyledContainer>
                <h1>
                    <FormattedMessage
                        id={"test.greeting"}
                        defaultMessage={`Hello, Little {user}.`}
                        values={{user}}
                    />
                </h1>
                <StyledFormattedTime>
                    <FormattedMessage
                        id={"test.time"}
                        defaultMessage={`It is currently {theTime}.`}
                        values={{theTime: (
                            <TestWrapperAroundFormatted>
                                <TestFormattedTime 
                                    value={Date.now()}
                                    hour="2-digit"
                                    minute="numeric"
                                />
                            </TestWrapperAroundFormatted>
                        )}}
                    />
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
                        defaultMessage={`You have {unreadCount, plural,
                        =0 {no unread messages}
                        one {# unread message}
                        other {# unread messages}
                        }.`}
                        values={{user: <b>{user}</b>, unreadCount}} // Must pass an object to values.
                    />
                    {/* In the output of the match, the # special token can be used as a placeholder for the numeric value and will be formatted as if it were {key, number}. */}
                    {/* Sample error message: [React Intl] Missing message: "test.welcome" for locale: "ja", using default message as fallback. */}
                    {/* Message Formatting Fallback Resource on the Algorithm: https://github.com/yahoo/react-intl/wiki/API#message-formatting-fallbacks */}
                </p>
                <p>
                    <FormattedMessage
                        id={"test.lastLoginTime"}
                        defaultMessage={`You last logged in {lastLoginTime}.`}
                        values={{lastLoginTime: (
                            <FormattedRelative
                                // updateInterval={15000} // In milliseconds. 10 seconds by default.
                                value={lastLoginTime} // Expects value that can be parsed as date.
                                options={{style: 'best fit'}} // It will do the correct units by default.
                                // Should be able to control frequency of updating relative time.
                            />
                        )}}
                    />
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
                <h5>
                    <FormattedMessage
                        id="test.nextAssignment"
                        defaultMessage={`Assignment #{nextAssignmentNumber, number} is due in {dueInDays, number} {dueInDays, plural,
                        one {day}
                        other {days}
                        }.`}
                        values={{nextAssignmentNumber, dueInDays}}
                    />
                </h5>
                <div>
                    <Nested {...this.state.questions} />
                </div>
                <p> {/* Another object property test. */}
                    <FormattedMessage
                        id="test.correctQuestions"
                        defaultMessage={`{correct, number} / {total, number} {correct, plural,
                        one {question}
                        other {questions}
                        } answered correctly.`}
                        values={questions}
                    />
                </p>
                <p>
                    {/* Converts decimal to percent only? */}
                    <FormattedMessage
                        id="test.percentage"
                        defaultMessage={`This is a random percentage that started as a decimal: {randomPercentage, number, percent}.`}
                        values={{randomPercentage}}
                    />
                </p>
            </StyledContainer>
        );
    }
}