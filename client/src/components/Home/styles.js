import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBarSearch: {
        alignItems:'center',
        borderRadius:'10px',
        padding:'10px',
    },
    searchButton: {
        margin:'5px'
    },
    header:{
        marginTop:'50px',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        padding:'5px'
    },
    image:{
        width: '1250px',
        height:'100%',
        maxWidth:'100%'
    },
    FooterLogos:{
        marginTop:'150px',
        height:'110px'
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
        marginBottom:'40px',
      },
      description:{
        textAlign:'center',
        color:'white',
        marginLeft:'50px',
        marginRight:'50px',
        fontSize:'25px',
        marginBottom:'50px'
      },
      footer:{
        textAlign:'center',
        color:'white',
        marginLeft:'50px',
        marginRight:'50px',
        fontSize:'15px',
        marginBottom:'50px',
        
      },
}));