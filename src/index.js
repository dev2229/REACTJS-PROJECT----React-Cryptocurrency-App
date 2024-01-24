import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';


// import 'antd/dist/antd.css';
import {
    legacyLogicalPropertiesTransformer,
    StyleProvider,
} from '@ant-design/cssinjs';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
