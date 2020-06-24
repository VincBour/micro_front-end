import React from 'react';
import { Container, Grid, Typography, Box, Card, CardHeader, CardContent, CardActions, Button, ButtonGroup } from '@talentsoft/design-system';
import {useStyles} from '../styles/App';

const App: React.FC = () => {
	const classes = useStyles();
	return (
		<main>
			<Container className="about-container">
				 <Grid>
					<Typography variant='h1' align="center">About</Typography>
				</Grid>
				<Grid>
					<Box display='flex'>
						<Card className={classes.card}>
							<CardHeader title="Cookies"/>
							<CardContent>
								<Typography variant="body2" align='justify'>
									Lors de la consultation de notre site recrutement, des cookies sont déposés sur votre ordinateur, votre mobile ou votre tablette. Un cookie est un fichier texte déposé lors de la visite d’un site ou de la consultation d’une publicité. Il a pour but de collecter les informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal. C’est en autre pour cela que nous faisons usage des cookies afin par exemple de vous identifier et d’accéder à votre compte.
									Si vous ne souhaitez pas utiliser de cookies, vous devez configurer les paramètres de votre ordinateur afin d’effacer tous les cookies de sites Web et/ou recevoir une notification si des cookies sont stockés. Si vous ne souhaitez pas modifier la configuration des cookies, poursuivez simplement votre visite sur le site.
									Pour en savoir plus sur les cookies et leur incidence sur vous et votre expérience de navigation, consultez le site de la <a href='#'>CNIL</a>.
								</Typography>
							</CardContent>
							<CardActions>
								<Button >
									<Typography variant='caption'>Quel type de cookies ?</Typography>
								</Button>
								<Button>
								<Typography variant='caption'>Comment gérer les cookies</Typography>
								</Button>
							</CardActions>
						</Card>
						<Card className={classes.card}>
							<CardHeader title="Accessibilité"/>
							<CardContent >
								<Typography variant="body2" align='justify'>
								Ce site utilise les technologies du W3C. Ce consortium a pour but de rédiger l'ensemble des recommandations internationales relatives aux langages informatiques utilisés pour élaborer les pages Web (HTML, Feuilles de style CSS, etc.) pour mener le Web à son potentiel maximal. En conséquent ce site offrira le meilleur de lui-même avec les navigateurs des dernières générations tout en restant accessible aux navigateurs plus anciens. Nous vous recommandons l'utilisation des navigateurs suivants :
								Sur Mac OS X : Opera, Safari, Mozilla Firefox
								Sur Windows : Mozilla Firefox, Internet Explorer 7, Internet Explorer 6, Opera
								Sur Linux : Mozilla Firefox, Opera
								</Typography>
							</CardContent>
							<CardActions>
								<Button >
								<Typography variant='caption'>Accesskey</Typography>
								</Button>
								<Button>
								<Typography variant='caption'>Résolution</Typography>
								</Button>
								<Button>
								<Typography variant='caption'>Navigation</Typography>
								</Button>
							</CardActions>
						</Card>
						<Card className={classes.card}>
							<CardHeader title="Mentions légales"/>
							<CardContent >
								<Typography variant="body2" align='justify'>
								Les moyens informatiques permettant la mise en œuvre du Site sont hébergés par les sociétés prestataires RFLEX PROGICIEL et nomhébergeur (mettre le nom de l'hébergeur si différent de Rflex).


RFLEX PROGICIEL
98, avenue du Général Leclerc
92100 Boulogne Billancourt
Capital social › 220 000 euros
R.C.S NANTERRE › 438 967 507 00015
Code NAF › 5829 A
Localisation physique de l'hébergement › 35, rue de la Motte 93308 Aubervilliers

Copyright et Propriété intellectuelle
L'ensemble des éléments figurant sur notre Site sont protégés par les dispositions du Code de la Propriété Intellectuelle. En conséquence, toute reproduction de ceux-ci, totale ou partielle, ou imitation, sans notre accord exprès, préalable et écrit, est interdite.
Il est formellement interdit de collecter et d'utiliser les informations disponibles sur le Site à des fins commerciales.
Cette interdiction s'étend notamment, sans que cette liste ne soit limitative, à tout élément rédactionnel figurant sur le Site, à la présentation des écrans, aux logiciels nécessaires à l'exploitation, aux logos, images, photos, graphiques, de quelque nature qu'ils soient.
								</Typography>
							</CardContent>
							<CardActions>
								<ButtonGroup variant='contained' size='small'>
								<Button >
								<Typography variant='caption'>Informatique et libertés</Typography>
								</Button>
								<Button>
								<Typography variant='caption'>Utilisateur</Typography>
								</Button>
								<Button>
								<Typography variant='caption'>Société</Typography>
								</Button>
								</ButtonGroup>
							</CardActions>
						</Card>
					</Box>
				</Grid> 
			</Container>
			</main>
		);
}
export default App;