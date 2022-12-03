import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
    },
  },
  paper: {
    // padding: theme.spacing(2),
  },
  title: {
    color: '#fff',
    fontSize: '10vh',
    marginTop: '4vh',
    textAlign: 'center',
    fontWeight: 'bold',
    maxWidth: '100vw',
    alignSelf: 'flexstart',
    textTransform: 'uppercase',
  },
  infoBox: {
    height: '600px',
    borderRadius: '30px',
    width: '90%',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.232)',
    display: 'flex',
  },
  innerInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.167)',
    height: '550px',
    borderRadius: '30px',
    width: '99%',
    marginTop: '4vh',
    display: 'flex',
    flexDirection: 'row',
    padding: '4vh',
  },
  innerBox: {
    height: '100%',
  },
  left: {
    // border: '1px solid white',
    width: '35%',
    textAlign: 'center',
    padding: '18vh 4vh 18vh 4vh',
    
  },
  right: {
    // border: '1px solid white',
    width: '65%',
    padding: '5vh 5vh 5vh  0',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  innerRight: {
    height: 'auto',
    // border: '1px solid pink',
    color: 'white',
    
  },
  descImg: {
    border: '1px solid white',
    height: '100%',
    width: '100%',
    borderRadius: '8px',
  },
  eventBy: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  innerTitle: {
    marginTop: '2vh',
    fontSize: '5vh',
  },
  venue: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: '-1vh',
    fontSize: '2.2vh'
  },
  description: {
    marginTop: '2vh',
  },
  bottomInfo: {
    display: 'flex',
    flexDirection: 'row',
    // border: '1px solid white',
    padding: '0',
    marginTop: '7vh',
    position: 'absolute'
  },
  price: {
    borderRight: '1px solid white',
    width: '35vh',
    
  },
  bottomValue: {
    fontSize: '3vh',
    fontWeight: 'bold',
  },
  bottomTitle: {
    marginTop: '0.5vh',
    fontSize: '2.5vh',
  },
  infoBox2: {
    marginTop: '15vh',
    // border: '1px solid white',
    height: '90vh',
    display: 'flex',
    flexDirection: 'row',
    color: 'white', 
    // backgroundColor: 'rgba(0, 0, 0, 0.232)',
    borderRadius: '30px'
  },
  left2: {
    // border: '1px solid white',
    padding: '5vh 5vh 5vh 5vh'
  },
  right2: {
    // border: '1px solid white',
    textAlign: 'center',
    position: 'relative'
  },
  mainPub: {
    border: '1px solid white',
    height: '400px',
    width: '300px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  caption: {
    marginTop: '3vh',
    textAlign: 'center',
  },
  ticketBg: {
    height: '10vh',
  },
  registration: {
    position: 'absolute',
    top: '6%',
    right: '-2px',
    // left: '50%',
  },
  regHeading: {
    // marginTop: '1vh',
    fontWeight: 'Bold',
  }, 
  formTitle: {
    marginTop: '3vh',
  },
  formPayment: {
    marginTop: '10vh'
  },
  fileInput: {
    // border: '1px solid black',
    width: '40%',
    margin: '8px 0',
    marginLeft: '26vh'
  },
  buttonSubmit: {
    marginTop: '1vh',
    marginBottom: '1vh',
    backgroundColor: 'white',
    width: '18%'
  },
}));