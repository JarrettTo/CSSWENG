import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: { //image
    display:'flex',
    height: "280px",
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
  },
  cardcontent: {
    height: '100%',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '10px',
    color: 'white',
  },
  content:{
    width:'100%'
  },
  gridDate: {
    justifyContent:'center',
    backgroundColor:'#e3e6e8',
    height:'90px',
    textAlign:'center',
    padding:'10px',
    borderRadius:'10px',
    maxWidth:'60px'
    
  },
  gridDesc: {
    height:'80px',
    textAlign:'left',
    padding:'10px',
    minWidth:'80px'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
  },
  title: {
    fontSize:'20px',
    fontStyle:'bold',
    justifyContent: 'space-between',
    
  },
  month:{
    fontSize:'20px',
    display:'block',
  },
  day:{
    fontSize:'30px',
    display:'block',
    lineHeight:'30px'
  },
  time:{
    fontSize:'15px',
    lineHeight:'30px'
  },
  description: {
    fontSize:'15px',
    overflow:'hidden',
    textOverflow:'ellipsis',
    maxLines:'2',
    
  },
  creator:{
    fontSize:'12px',
  },
  price:{
    fontSize:'15px',
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
});