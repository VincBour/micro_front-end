import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider, CssBaseline, ToasterProvider} from '@talentsoft/design-system';
import DatePickerUtilsProvider from "@talentsoft/design-system/DatePickerUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";
import MicroFrontend from './MicroFrontend';

declare global {
    interface Window {
        renderAbout: any;
        unmountAbout: any;
    }
}

window.renderAbout = (containerId: string) => {
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

window.unmountAbout = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element)
}

// ReactDOM.render(
//     <MicroFrontend host={'http://localhost:3002'} name='About' window={global.window} />,
//     document.getElementById('root')
// )