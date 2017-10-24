import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class LocaleInfo extends Component {
    render() {
        const { currentLocale } = this.props;
        return (
            <p>
                <FormattedMessage
                    id={"test.locale"}
                    defaultMessage={`The current locale is {currentLocale}.`}
                    values={{currentLocale}}
                />
            </p>
        );
    }
}