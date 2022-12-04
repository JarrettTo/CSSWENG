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

  // SECTION 1
  section1: {
    // border: '1px solid rgba(0, 0, 0, 0.3)',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    // border: '1px solid white',
  },
  titleBox: {
    // border: '1px solid white',
    marginTop: '7vh',
    width: '80vw',
    fontSize: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    color: '#fff',
    fontSize: '1em',
    textAlign: 'center',
    fontWeight: 'bold',
    maxWidth: '100vw',
    textTransform: 'uppercase',
    lineHeight: '100%',
  },
  box1: {
    // border: '1px solid white',
    marginTop: '5vh',
    height: '80vh',
    maxHeight: '500px',
    display: 'flex',
    alignItems: 'center'
  },
  // innerbox1: {
  //   border: '1px solid white',
  //   height: '100%',
  //   borderRadius: '3vh',
  //   width: '80%',
  //   position: 'relative',
  //   // backgroundColor: 'rgba(0, 0, 0, 0.232)',
  //   display: 'flex',
  //   padding: '1.5%'
  // },
  // innerInfo: {
  //   border: '1px solid white',
  //   height: '100%',
  //   width: '100%',
  //   // backgroundColor: 'rgba(0, 0, 0, 0.167)',
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  innerBox: {
    // border: '1px solid white',
    height: '100%',
    width: '100%',
  },
  left: {
    // border: '1px solid blue',
    width: '40%',
    textAlign: 'center',
    // padding: '8% 4% 8% 4%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  right: {
    // border: '1px solid red',  
    // padding: '2% 2% 2% 0',
    width: '60%',
    padding: '0',
    color: 'white',
    overflowY: 'visible',
    textAlign: 'justify',
    fontSize: '2vh',
    display: 'flex',
    alignItems: 'center',
  },
  innerRight: {
    // border: '1px solid pink',
    height: 'fit-content',
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    paddingRight: '7%',
    
  },
  descImg: {
    minWidth: '100px',
    minHeight: 'auto',
    maxWidth: '320px',
    maxHeight: 'auto',
  },
  eventBy: {
    // border: '1px solid red',  
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '1.5em'
  },
  innerTitle: {
    fontWeight: 'bold',
    marginTop: '2%',
    fontSize: '2.5em'
  },
  venue: {
    textTransform: 'uppercase',
    marginTop: '-1vh',
    fontSize: '1.2em'
  },
  description: {
    marginTop: '7%',
  },
  bottomInfo: {
    // border: '1px solid white',
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    marginTop: '3%',
  },
  price: {
    borderRight: '1px solid white',
    width: '25%',
    
  },
  attendees: {
    borderRight: '1px solid white',
    width: '30%'
  },
  date: {
    width: '46%'
  },
  bottomValue: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  bottomTitle: {
    fontSize: '1em',
  },

  // SECTION 2
  box2: {
    marginTop: '15vh',
    border: '1px solid white',
    height: '90vh',
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
  },
  left2: {
    border: '1px solid red',
    maxHeight: '100%',
    padding: '5%',
    display:'flex',
    justifyContent: 'center'
  },
  right2: {
    border: '1px solid blue',
    maxHeight: '100%',
    textAlign: 'center',
    position: 'relative',
    display:'flex',
    justifyContent: 'center'
  },
  mainImg: {
    height: '100%',
    width: 'auto%',
  },
  caption: {
    marginTop: '3vh',
    textAlign: 'center',
  },
  ticketbg: {
    height: '100%',
    maxHeight: '100%',
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
  textField: {
    width: '30%',
  outline: 'white'
  },
  input: {
    color: 'white',
    // backgroundColor: 'white'
  },

  // SECTION 3
  box3: {
    border: '1px solid white',
    height: '90vh',
    marginTop: '15vh',

  }
}));