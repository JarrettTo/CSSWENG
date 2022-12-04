import { makeStyles } from '@material-ui/core/styles';
import bg from '../src/images/bg.png';

export default makeStyles(() => ({
  
  
  paperContainer:{
    
    height: '100%',
    width:'100vw',
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    borderRadius: '0',
    // marginBottom: '-3%',
    // marginRight: '-5%',
    backgroundImage: `url(${bg})`,
    backgroundSize:'cover',
    backgroundRepeat: 'noRepeat',
    backgroundPosition: 'center center',
    // overflow: 'overlay'
  },
  body:{
    // border: '1px solid red',
    width: '100vw',
    padding: '0',
  },
  
  
}));