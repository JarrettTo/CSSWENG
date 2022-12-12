import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  div:{
    height:'700px',
    paddingTop:'50px'
  },
  title:{
    color:'white',
  },
  button:{
    color:'white',
    margin:'20px',
    backgroundColor:'#555760'
  },
  button1:{
    color:'white',
    margin:'5px',
    backgroundColor:'green'
  },
  button2:{
    color:'white',
    margin:'5px',
    backgroundColor:'red'
  },
  filter: {                           // - The TextField-root
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
    '& .MuiInputBase-root':{
      color:'#e0e0e0'
    },
  },
  container:{
    height:'100vh'
  },
  appbar:{
    width:'500px',
    backgroundColor:'#555760'
  }



}));