import React from 'react';
import MicroFrontend from './MicroFrontend';
import { Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader/AppHeader';
import Layout from './Layout/Layout';

const offersTS: React.FC<{history:any}> = ({history}) => (
    <MicroFrontend history={history} host={'http://localhost:3001'} name='OffersTs' window={global.window} />
)

const about: React.FC = () => (
	<MicroFrontend host={'http://localhost:3002'} name='About' window={global.window} />
)

const signIn:React.FC = () => (
	<MicroFrontend host={'http://localhost:3003'} name='SignIn' window={global.window} />
)

const App: React.FC = () => {
	console.log({process})
	return (
		<main>
			<AppHeader />
			<Layout>
				<Switch>
					<Route exact path='/' component={offersTS}/>
					<Route exact path='/about' component={about}/>
					<Route exact path='/signIn' component={signIn} />
				</Switch>
			</Layout>
		</main>
	)
}

export default App;