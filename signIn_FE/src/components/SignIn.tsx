import * as React from 'react';
import Container from '@talentsoft/design-system/Container';
import { Avatar, Typography, TextField, Button, makeStyles } from '@talentsoft/design-system';
import { UserLock } from "@talentsoft/icons";

export const styleAuthLogin = makeStyles((theme) => ({
    container:{
        marginLeft: theme.spacing(8)
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export interface IUser {
    email:string;
    password:string;
}

const SignIn: React.FC = () => {
    const classes = styleAuthLogin();
    const [user, setUser] = React.useState<IUser>({} as IUser)
    return (
        <Container maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <UserLock />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <form className={classes.form} >
                    <TextField 
                        fullWidth
                        required
                        name='email'
                        id='email'
                        label='Email Adress'
                        value={user.email}
                        margin='normal'
                        autoComplete='email'
                        autoFocus
                        onChange={e => setUser({...user, email:e.target.value})}
                    />
                    <TextField 
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={e => setUser({...user,password:e.target.value})}
                    />
                    <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default SignIn;