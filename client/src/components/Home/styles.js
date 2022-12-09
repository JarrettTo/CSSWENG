import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBarSearch: {
        alignItems:'center',
        borderRadius:'10px',
        padding:'10px',
        backgroundColor:'#555760',
        width:'450px'
    },
    searchButton: {
        margin:'5px',
        color:'white',
        backgroundColor:'#5865f2'
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
        maxWidth:'100%',
        // marginTop: '7vh'
    },
    FooterLogos:{
        marginTop:'150px',
        height:'110px'
    },
      divider:{
        backgroundColor:'lightGrey',
        marginBottom:'40px',
        marginTop:'100px',
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
      input: {
        '& label': {
          color: 'white',
        },
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
            '& fieldset': {            // - The <fieldset> inside the Input-root
                borderColor: 'gray',   // - Set the Input border
            },
            '&:hover fieldset': {
                borderColor: 'white', // - Set the Input border when parent has :hover
            },
            '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                borderColor: 'white',
                color:'white'
            },
        marginBottom:'10px'
        },
      },
      grid:{
        marginLeft:'5px'
      }
}));