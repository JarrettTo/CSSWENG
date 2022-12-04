import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '8px',  
          // backgroundColor: 'black'
        },
        '*::-webkit-scrollbar-track': {
            boxshadow: 'rgb(0, 0, 0)',
            background: 'rgb(0, 0, 0)'
        },
        '*::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 255, 255, 0.289) '
        },
        '*::-webkit-scrollbar-thumb:hover': {
            background: 'rgb(74, 74, 72)',
        },
    },
    
}));