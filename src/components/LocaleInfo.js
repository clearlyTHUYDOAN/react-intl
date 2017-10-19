import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class LocaleInfo extends Component {
    render() {
        const { locale } = this.props;
        return (
            <p>
                <FormattedMessage
                    id={"test.locale"}
                    defaultMessage={`The current locale is {locale}.`}
                    values={{locale}}
                />
            </p>
        );
    }
}