import React, { Component } from 'react';

export default class LocaleInfo extends Component {
    render() {
        const { locale } = this.props;
        return (
            <p>The current locale is {locale}.</p>
        );
    }
}