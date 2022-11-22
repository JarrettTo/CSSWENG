import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: { //image
    display:'flex',
    height: "250px",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: { //whole card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '510px',
    position: 'relative',
  },
  cardcontent: {
    height: '150px',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '10px',
    color: 'white',
  },
  grid: {
    display: 'flex',
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
  date:{
    fontSize:'15px',
  },
  description: {
    fontSize:'15px',
    whiteSpace: 'normal'
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