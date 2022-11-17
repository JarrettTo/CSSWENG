import { makeStyles } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';
import bg from '../src/images/bg.jpg';

export default makeStyles(() => ({
  container:{
    backgroundColor: '#07141e',
  },
  paperContainer:{
    backgroundImage: `url(${bg})`,
  }
  
}));