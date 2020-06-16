import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


declare global {
    interface Window {
        renderMenuTS: any;
        unmountMenuTS: any
    }
}

window.renderMenuTS = (containerId: string) => {
    ReactDOM.render(
        <App />,
        document.getElementById(containerId),
    );
};

window.unmountMenuTS = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element)
}