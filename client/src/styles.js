import { makeStyles } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';
import bg from '../src/images/bg.png';

export default makeStyles(() => ({
  container:{
    padding:'5px'
  },
  paperContainer:{
    backgroundImage: `url(${bg})`,
    height:'100%',
    backgroundSize:'cover',
  },
  divider:{
    backgroundColor:'lightGrey',
    marginBottom:'40px',
    marginTop:'50px',
  },
  label1:{
    color:'white',
    marginBottom:'40px'
  },
  about:{
    textAlign:'center',
    color:'white',
    marginBottom:'20px',
  },
  description:{
    textAlign:'center',
    color:'white',
    marginLeft:'50px',
    marginRight:'50px',
  }
  
}));