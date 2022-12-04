import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    ul: {
        justifyContent: 'space-around',
        "& .MuiPaginationItem-root": {
            color: "#fff"
        },
        '&.MuiPaginationItem-outlined' :{
            borderColor:'white'
        },
        backgroundColor:'#555760',
        borderRadius:'5px',
        color:'white'
    } ,  
    page:{
        backgroundColor:'#555760',
        width:'400px'
    }
}));