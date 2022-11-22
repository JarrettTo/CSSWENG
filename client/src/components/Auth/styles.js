import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    margin:'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    width:'700px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
    },
  },
  container:{
    margin: theme.spacing(20,0),
    alignItems: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  avatar: {
    alignContent:'center',
    backgroundColor: 'theme.palette.secondary.main',
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    marginBottom: theme.spacing(1),
  },
  googleButton: {

    margin: theme.spacing(3, 0, 2),
  },
}));