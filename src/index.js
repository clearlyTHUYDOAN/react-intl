import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
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
// Wherever translations are stored, must pass it to IntlProvider via messages prop.
import translations from './translations.json'; 
import store from './utilities/createStore';
// import ConnectedIntlProvider from './utilities/connectedIntlProvider';

addLocaleData([...en, ...es, ...fr, ...it, ...ja]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these differences by checking all of them
// const language = (navigator.languages && navigator.languages[0]) ||
// navigator.language ||
// navigator.userLanguage;

const language = "en";

// Split locales with a region code i.e. en-US
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// react-intl does not provide direct translations outside of standard locale conventions
// TODO: Where to store translations?
// TODO: What to translate with?

// Try full locale, fallback to locale without region code, fallback to en
const messages = translations[languageWithoutRegionCode] || translations[language] || translations.en;

render(
    <Provider store={store}>
        <IntlProvider locale={language} messages={messages} >
            <BrowserRouter>
                <App locale={language} />
            </BrowserRouter>
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);


// if (module.hot) {
//     module.hot.accept('./App', () => {
//         render(
//             <Provider store={store}>
//                 <IntlProvider locale={language}>
//                     <BrowserRouter>
//                         <App locale={language} />
//                     </BrowserRouter>
//                 </IntlProvider>
//             </Provider>,
//             document.getElementById('root')
//         );
//     });
// }