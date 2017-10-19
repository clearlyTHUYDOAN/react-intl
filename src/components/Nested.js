import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

// Doesn't work.
// const StyledFormattedMessage = styled.span`
//     color: blue;
// `

const Nested = ({ correct, total}) => (
    <p>
        <FormattedMessage
            id="test.nested"
            defaultMessage={`{correct, plural,
            =0 {No questions}
            one {# question}
            other {# questions}
            } answered correctly.`}
            values={{correct}}
        />
    </p>
);

export default Nested;
