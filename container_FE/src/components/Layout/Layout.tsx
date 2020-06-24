import * as React from 'react';
import { Container, Grid, CssBaseline } from '@talentsoft/design-system';
import useStyles from './style';

const Layout: React.FC = ({ children })=>{
    const classes = useStyles();
    return (
        <Container className={classes.layout} maxWidth="lg">
                <CssBaseline />
            <Grid xs={12} item={true}>
                {children}
            </Grid>
        </Container>
    )
}

export default Layout;