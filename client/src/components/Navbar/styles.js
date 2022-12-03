import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#09300d',
    
  },
  typography:{
    padding: "15px",
    color: 'white',
    fontSize:'25px',
    textDecoration:'none',
    overflow:'hidden',
    whiteSpace:'nowrap'
   
  },

  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '80px',
    margin: '10px',
    height: '80px',
  },
  toolbar: {
    marginRight: '80px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color:'white'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    "&.MuiButton-outlined":{
      border:'2px #4caf50 solid',
      color: 'white',
    },
    '&:hover':{
      color:'#4caf50',
    },
    fontSize:'17px',
  },
  logout: {
    "&.MuiButton-outlined":{
      border:'2px red solid',
      color: 'white',
    },
    '&:hover':{
      color:'red',
    },
    fontSize:'17px',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  home:{
    marginRight:'25px',
    color:'white',
    fontSize:'17px',
    marginTop:'9px',
    textDecoration:'none',
    '&:hover':{
      color:'#4caf50'
    },
  }
}));