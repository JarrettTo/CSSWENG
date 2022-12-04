import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    // marginTop: '2vh',
    padding: '0 1% 0 1%',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#09300d',
    height: '12vh',
    fontSize: '2vh'
    
  },
  brandContainer: {
    // border: '1px solid red',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    // border: '1px solid red',
    marginLeft: '80px',
    margin: '10px',
    height: '80%',
    maxHeight:'80px'
  },
  typography:{
    // border: '1px solid red',
    padding: "15px",
    color: 'white',
    fontSize:'2em',
    textDecoration:'none',
    overflow:'hidden',
    whiteSpace:'nowrap'
  },
  toolbar: {
    // border: '1px solid red',
    height: '100%',
    marginRight: '5vw',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '29vw',
    fontSize: '2vh'
  },
  profile: {
    // border: '1px solid red',
    height: '85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  home:{
    // border: '1px solid red',
    marginRight:'2vw',
    color:'white',
    fontSize:'1.4em',
    textDecoration:'none',
    '&:hover':{
      color:'#4caf50'
    },
  },
  userName: {
    // border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    color:'white'
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
      height: '7vh',
    },
    '&:hover':{
      color:'red',
    },
    fontSize:'1.6em',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  
  admin:{
    "&.MuiButton-outlined":{
      border:'2px #5865f2 solid',
      color: 'white',
    },
    '&:hover':{
      color:'#5865f2',
    },
    fontSize:'15px',
    lineHeight:'20px',
    marginLeft:'10px'
  },
}));