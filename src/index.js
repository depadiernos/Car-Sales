import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { reducer as additionalPrice } from './reducers/additionalPriceReducer'
import { reducer as car } from './reducers/carReducer'
import { reducer as additionalFeatures } from './reducers/additionalFeaturesReducer'

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootReducer = combineReducers({
    additionalPrice,
    car,
    additionalFeatures
});

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
