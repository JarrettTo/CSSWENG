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
        color:'white',
        backgroundColor:'#0b9446',
        height:'54px',
        '&:hover':{
          color:'#0b9446',
          backgroundColor:'white'
        },
    },
    searchButton1: {
      color:'white',
      backgroundColor:'#0b9446',
      textAlign:'center',
      '&:hover':{
        color:'#0b9446',
        backgroundColor:'white'
      },
      marginLeft:'10px'

  },
  searchButton2: {
    color:'white',
    backgroundColor:'#0b9446',
   
    
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
        marginBottom:'30px',
        marginTop:'100px',
      },
      label1:{
        marginLeft:'70px',
        color:'white',
        fontSize:'60px'
      },
      label2:{
        marginBottom:'40px',
        color:'white',
        fontSize:'60px'
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
        '& .MuiInputBase-root':{
          color:'white'
        },
      },
      input2: {
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
        },
        '& .MuiInputBase-root':{
          color:'white'
        },
        '& .MuiFormHelperText-root':{
          color:'white'
        },
        marginRight:'10px',
        marginBottom:'10px',
        width:'250px',
        height:'54px'
      },
      input3: {
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
        },
        '& .MuiInputBase-root':{
          color:'white',
        },
        '& .MuiFormHelperText-root':{
          color:'white'
        },
        marginRight:'10px',
        marginBottom:'10px',
        width:'250px',
      },

      grid:{
        marginLeft:'40px',
      },
      item:{
        padding:'10px'
      },
      item2:{
        marginTop:'10px'
      },

      gridContainer1:{
      flexGrow:'1',
      justifyContent:'center',
      alignItems:"center",
      },
      div:{
      
        marginTop:'30px'
      },
      page:{
        marginTop:'30px',
        width:'500px'
      },
      container3:{
        justifyContent:'space-between',
        direction:'column'
      }

}));