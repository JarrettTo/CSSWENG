import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: { //image
    display:'flex',
    height: "200px",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: { //whole card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: '#555760',
  },
  cardcontent: {
    height: '120px',
    marginTop:'2px',
    padding:'10px',
    color:'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '10px',
    color: 'white',
  },
  content:{
    flex:'1',
    justifyContent:'left',
    
  },
  gridDate: {
    justifyContent:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.167)',
    height:'90px',
    textAlign:'center',
    padding:'10px',
    borderRadius:'10px',
    maxWidth:'60px',
    marginTop:'3px'
    
  },
  gridDesc: {
    height:'80px',
    textAlign:'left',
    paddingLeft:'9px',
    minWidth:'150px',
    marginTop:'2px'
    // wrap:'wrap',
    
    
  },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
  },

  title: {
    fontSize:'19px',
    fontWeight: 'bold',
    lineHeight:'20px'
    
  },

  month:{
    fontSize:'20px',
    lineHeight:'28px',
    paddingBottom:'1px',
    
  },
  day:{
    fontSize:'25px',
    display:'block',
    lineHeight:'18px',
  },
  time:{
    fontSize:'15px',
    paddingTop:'5px'

  },
  description: {
    fontSize:'12px',
    textOverflow:'ellipsis',
    
  },
  creator:{
    fontSize:'12px',
  },
  price:{
    fontSize:'13px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  button1: {
    color:'#c8cbcf',
    '&:hover':{
      color:'green',
    },
  },
  button2: {
    color:'#c8cbcf',
    '&:hover':{
      color:'red',
    },
  },
  button3: {
    color:'white',
    '&:hover':{
      color:'#65666e',
    },
  },
  tags:{
    color:'white'
  }
});