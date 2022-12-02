import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: '5px',
    padding: theme.spacing(2),
    borderRadius: '10px',
    // backgroundColor:'black'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor:'transparent',
    // color:'white',
  },
  textfield:{
    color:'white',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    // color:'white'
  },
  err_msg: {
    color:'red',
    fontStyle: 'italic',
  },
  
}));