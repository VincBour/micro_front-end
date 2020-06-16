import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// ReactDOM.render(<App />, document.getElementById('root'));
declare global {
    interface Window {
        renderAppTs: any;
        unmountAppTs: any
    }
}

window.renderAppTs = (containerId: string) => {
    ReactDOM.render(
        <App />,
        document.getElementById(containerId),
    );
};

window.unmountAppTs = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element)
}