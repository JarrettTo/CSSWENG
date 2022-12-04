import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '8px',  
      backgroundColor: 'black'
    },
    '*::-webkit-scrollbar-track': {
      boxshadow: 'rgb(0, 0, 0)',
      backgroundColor: 'transparent'
    },
    '*::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.289) '
    },
    '*::-webkit-scrollbar-thumb:hover': {
      background: 'rgb(74, 74, 72)',
    },
  },
  main: {
    height: '150vh'
  },
  paper: {
    margin:'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    height: '20',
    width:'700px',
    marginTop:'100px',
    backgroundColor:'#555760',
    borderRadius: '2vh'
  },
  btmbox: {
    // border: '1px solid red',
    marginTop: '5vh',
    height: '20vh'
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
    // border: '1px solid red',
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
    // border: '1px solid red',
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
    // border: '1px solid red',
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