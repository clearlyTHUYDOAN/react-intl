import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateLocale } from '../actions/locales';

const mapStateToProps = state => ({
    currentLocale: state.currentLocale
});

const mapDispatchToProps = {
    updateLocale
};

class SelectLocale extends Component {
    constructor() {
        super();
        this.state = {
            localeList: [
                { name: 'English', tag: 'en' },
                { name: 'Spanish', tag: 'es' },
                { name: 'French', tag: 'fr' },
                { name: 'Italian', tag: 'it' },
                { name: 'Japanese', tag: 'ja' }
            ]
        };
    }
    render() {
        const { currentLocale, updateLocale } = this.props;
        const { localeList } = this.state;
        return (
            <select onChange={event => updateLocale(event.target.value)}>
                {localeList.map(locale => {
                    return (
                        <option
                            key={locale.name}
                            value={locale.tag}
                            selected={currentLocale === locale.tag}
                        >
                            {locale.name}
                        </option>
                    );
                })}
            </select>
        );
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SelectLocale)
);
