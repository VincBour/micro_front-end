import * as React from "react";
import * as ReactDom from 'react-dom';

export interface IMicroFrontend {
    name: string;
    host: string | undefined;
    window: Window;
}


class MicroFrontend extends React.Component<IMicroFrontend> {
    
    componentDidMount() {
        const { name, host } = this.props;
        const scriptId = `micro-frontend-script-${name}`;
        console.log(name, host)
        if (document.getElementById(scriptId)) {
          this.renderMicroFrontend();
          return;
        }

        fetch(`${host}/asset-manifest.json`)
          .then(res => {
              return res.json();
            })
          .then(manifest => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.crossOrigin = '';
            script.src = `${host}${manifest.files['main.js']}`;
            script.onload = this.renderMicroFrontend;
            document.head.appendChild(script);
          });
      }
    
      componentWillUnmount() {
        const { name, window } = this.props;
        console.log(name,window)
        window[`unmount${name}`](`${name}-container`);
      }
    
      renderMicroFrontend = () => {
        const { name, window } = this.props;
    
        window[`render${name}`](`${name}-container`);
      };
    
      render() {
        return <main id={`${this.props.name}-container`} />;
      }
}

export default MicroFrontend;