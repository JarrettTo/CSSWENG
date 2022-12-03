import { makeStyles } from '@material-ui/core/styles';
import bg from '../src/images/bg.png';

export default makeStyles(() => ({
  container:{
    padding:'2px',
  },
  paperContainer:{
    backgroundImage: `url(${bg})`,
    height:'100%',
    backgroundSize:'cover',
    minWidth:'900px',
    minHeight:'920px'
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
    marginBottom:'50px'
  },

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  
}));