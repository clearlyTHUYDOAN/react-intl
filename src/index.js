import React from 'react';
import { render } from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

// Unless you're localizing in node, React Intl only comes with English by default.
// We must add locale data manually.
// TO-DO: How to address when you support a lot of locales?
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';
import ja from 'react-intl/locale-data/ja';

import App from './App';

import './index.css';

addLocaleData([...en, ...es, ...fr, ...it, ...ja]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these differences by checking all of them
// const language = (navigator.languages && navigator.languages[0]) ||
// navigator.language ||
// navigator.userLanguage;

const language = "fr";

render(
    <IntlProvider locale={language}>
        <BrowserRouter>
            <App locale={language} />
        </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root')
);
