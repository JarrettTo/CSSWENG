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
    fontSize: '6vw',
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
    alignItems: 'center',
    overflow: 'hidden'
  },
  right: {
    // border: '1px solid red',  
    // padding: '2% 2% 2% 0',
    width: '60%',
    padding: '0',
    color: 'white',
    textAlign: 'justify',
    fontSize: '2vh',
    display: 'flex',
    alignItems: 'center',
    // overflowY: 'hidden',
    // overflowWrap: 'break-word'
  },
  innerRight: {
    // border: '1px solid pink',
    maxHeight: '100%',
    minHeight: 'fit-content',
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    paddingRight: '4%',
    // overflow: 'scroll'
    
  },
  descImg: {
    minWidth: '50px',
    minHeight: 'auto',
    maxWidth: '320px',
    maxHeight: 'auto',
    // boxShadow: '.05vh .05vh 1.5vh white',
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
    marginTop: '2%',
    fontSize: '1.2em'
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

  // --------------------------------------------------------------

  // SECTION 2
  box2: {
    // border: '1px solid white',
    marginTop: '8vh',
    height: '90vh',
    width: '80vw',
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    padding: '0',
    boxShadow: '.1vh .1vh 1vh .1vh white',
    borderRadius: '2vh',
    background: 'rgb(255, 255, 255, 0.2)',

  },
  left2: {
    // border: '1px solid red',
    maxHeight: '105%',
    padding: '5%',
    display:'flex',
    justifyContent: 'center',
    width: '40%',
    borderRadius: '2vh',
    boxShadow: '.1vh .1vh 2vh white',
    // background: 'linear-gradient(90deg, rgba(29,69,10,.5) 0%, rgba(40,48,74,.5) 53%, rgba(18,17,62,.5) 100%)',
    background: 'rgb(0, 0, 0, 0.5)',
    alignItems: 'center',
  },

  right2: {
    // border: '1px solid white',
    maxHeight: '100%',
    width: '70%',
    textAlign: 'center',
    position: 'relative',
    display:'flex',
    borderRadius: '0 2vh 2vh 0',
    fontSize: '2vh',
    padding: '0'
    
  },
  mainImg: {
    height: '90%',
    width: 'auto',
    borderRadius: '2%'
  },
  registration: {
    // border: '1px solid white',
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0'
  },
  innerReg: {
    // border: '1px solid white',
    width: '100%',
    height: '20%',
  },
  regForm: {
    // border: '1px solid blue',
    padding: '0',
    width: '100%',
    height: '80%',
    display: 'block',
  },
  regHeading: {
    marginTop: '5%',
    fontWeight: 'Bold',
    fontSize: '2em',
    textAlign: 'left',
    marginLeft: '5%'
  }, 
  status: {
    textShadow: '.1vh .1vh 1vh white',
    color: 'black',
    fontStyle: 'Italic',
    textAlign: 'left',
    marginLeft: '5%',
    marginTop: '-1%',
    fontSize: '1.3em',
  },
  textField: {
    // border: '1px solid white',
    padding: '0',
    height: '15%',
    width: '40%',
    // margin: '1%',
    marginBottom: '0.1%',
    '& label': {
      color: 'white',
      fontSize: '1.2em'
    },
    
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
        '& fieldset': {            // - The <fieldset> inside the Input-root
            borderColor: 'gray',   // - Set the Input border
            height: '8vh',
            marginTop: '3.5%'
        },
        '&:hover fieldset': {
            borderColor: 'white', // - Set the Input border when parent has :hover
        },
        '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
            borderColor: 'white',
            color:'white'
        }
    },
  },
  input: {
    color: 'white',
    fontSize: '1.2em'
  },
  payCha: {
    width: '100%',
    fontWeight: 'Bold',
    fontSize: '1.2em',
    textAlign: 'left',
    marginTop: '2%',
  },
  payDeets: {
    // border: '1px solid black',
    width: '100%',
    // fontWeight: 'Bold',
    fontSize: '1.3em',
    textAlign: 'left',
    marginTop: '-1%',
    fontSize: '1.2em',
    // textShadow: '.1vh .1vh .8vh white',
  },
  paybox: {
    // border: '1px solid black',
    marginTop: '5%',
    width: '90%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
  },
  leftpb: {
    // border: '1px solid blue',
    width: '50%'
  },
  rightpb: {
    // border: '1px solid blue',
    width: '50%',
  },
  pop: {
    fontSize: '1.3em',
  },
  fileInput: {
    // border: '1px solid black',
    fontSize: '1.3em',
    height: '1.3em',
    width: 'auto',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%'
  },
  fileUpload: {
    fontSize: '1.3em',
    height: '1.3em',
    width: '80%',
  },
  btnBox: {
    // border: '1px solid black',
    width: '100%',
    textAlign: 'right',
    padding: '0',
    paddingRight: '8%',
  },
  buttonSubmit: {
    fontSize: '1.3em',
    fontWeight: '520',
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: '#66bb6a',
    color: 'black',
    width: '18%',
    height: '6vh',
    '&:hover': {
      backgroundColor: '#388e3c',
      color: 'black',
    }
  },

  // SECTION 3
  box3: {
    border: '1px solid white',
    height: '90vh',
    marginTop: '15vh',

  }
}));