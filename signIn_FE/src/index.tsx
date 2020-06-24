import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, CssBaseline, ToasterProvider } from '@talentsoft/design-system';
import DatePickerUtilsProvider from "@talentsoft/design-system/DatePickerUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter } from 'react-router-dom';
import SignIn from './components/SignIn';

declare global {
    interface Window {
        renderSignIn: any;
        unmountSignIn: any
    }
}

window.renderSignIn = (containerId: string) => {
    ReactDOM.render(
        <BrowserRouter>
        <ThemeProvider>
            <DatePickerUtilsProvider utils={DateFnsUtils}>
                <ToasterProvider>
                    <CssBaseline />
                    <SignIn />
                </ToasterProvider>
            </DatePickerUtilsProvider>
        </ThemeProvider>
        </BrowserRouter>,
        document.getElementById(containerId),
    );
};

window.unmountSignIn = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element)
}

// ReactDOM.render(
//     <MicroFrontend host={'http://localhost:3003'} name='MenuTS' window={global.window} />,
//     document.getElementById('root')
// )