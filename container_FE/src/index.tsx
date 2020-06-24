import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider, CssBaseline, ToasterProvider } from '@talentsoft/design-system';
import DatePickerUtilsProvider from "@talentsoft/design-system/DatePickerUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <ThemeProvider>
        <DatePickerUtilsProvider utils={DateFnsUtils}>
            <ToasterProvider>
                <CssBaseline />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </ToasterProvider>
        </DatePickerUtilsProvider>
    </ThemeProvider>, 
    document.getElementById('root')
);