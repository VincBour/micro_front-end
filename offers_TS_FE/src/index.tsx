import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider, CssBaseline, ToasterProvider } from '@talentsoft/design-system';
import DatePickerUtilsProvider from "@talentsoft/design-system/DatePickerUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";

declare global {
    interface Window {
        renderOffersTs: any;
        unmountOffersTs: any
    }
}

window.renderOffersTs = (containerId: string) => {
    ReactDOM.render(
        <ThemeProvider>
        <DatePickerUtilsProvider utils={DateFnsUtils}>
            <ToasterProvider>
                <CssBaseline />
                <App />
            </ToasterProvider>
        </DatePickerUtilsProvider>
        </ThemeProvider>,
        document.getElementById(containerId),
    );
};

window.unmountOffersTs = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element)
}