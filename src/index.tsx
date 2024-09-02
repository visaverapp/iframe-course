import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary';
import {Provider} from "react-redux";
import {store} from "@/store/store";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
)
;