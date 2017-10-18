import React, { Component } from 'react';

export default class SelectLocale extends Component {
    render() {
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