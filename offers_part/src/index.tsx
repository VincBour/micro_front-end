import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


declare global {
    interface Window {
        renderAppPart: any;
        unmountAppPart: any
    }
}

window.renderAppPart = (containerId: string) => {
    ReactDOM.render(
        <App />,
        document.getElementById(containerId),
    );
};

window.unmountAppPart = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element)
}