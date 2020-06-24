import { makeStyles } from '@talentsoft/design-system';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    width: '100%',
    '& div':{
        display:'flex',
        justifyContent:'space-evenly',
          },
    '& a':{
        textDecoration: "none",
        color: theme.palette.primary.dark
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}));

export default useStyles;