import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateLocale } from '../actions/locales';

const mapStateToProps = state => ({
    currentLocale: state.currentLocale,
})
  
const mapDispatchToProps = {
    updateLocale
}

class SelectLocale extends Component {
    render() {
        const { currentLocale, updateLocale } = this.props;
        return (
            <select>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
            </select>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocale); 