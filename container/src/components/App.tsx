import React from 'react';
import '../styles/app.css';
import MicroFrontend from './MicroFrontend';

const {
	REACT_APP_OFFERS_TS_HOST:appTs
} = process.env

const appTS = () => (
    <MicroFrontend host={'http://localhost:3001'} name='AppTs' window={global.window} />
)

const appPart = () => (
	<MicroFrontend host={'http://localhost:3002'} name='AppPart' window={global.window} />
)

const menuTS = () => (
	<MicroFrontend host={'http://localhost:3003'} name='MenuTS' window={global.window} />
)

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<h1>Hello World from container!</h1>
                {appTS()}
				{appPart()}
				{menuTS()}
			</div>
		);
	}
}

export default App;