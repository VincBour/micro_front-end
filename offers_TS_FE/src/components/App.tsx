import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Offers from './Offers';

const App: React.FC = () => {
	return (
		<Router>
			<Offers />
		</Router>
	)
}

export default App;