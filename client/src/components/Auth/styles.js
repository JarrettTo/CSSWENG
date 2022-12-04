import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    margin:'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    width:'700px',
    marginTop:'100px',
    backgroundColor:'#555760',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
    },
  },
  title:{
    color:'white'
  },
  input: {                           // - The TextField-root
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
        '& fieldset': {            // - The <fieldset> inside the Input-root
            borderColor: 'gray',   // - Set the Input border
        },
        '&:hover fieldset': {
            borderColor: 'white', // - Set the Input border when parent has :hover
        },
        '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
            borderColor: 'white',
            color:'white'
        },
        
    marginBottom:'10px',
    backgroundColor:'#72737b'
    },
  },
  note:{
    color:'white',
    marginBottom:'5px'
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
  button2:{
    color:'white'
  },
  divider:{
    backgroundColor:'lightGrey',
        marginTop:'20px',
  },
  googleDiv:{
    marginTop:'20px',
    alignItems:'center',
    width:'500px'
  }

}));