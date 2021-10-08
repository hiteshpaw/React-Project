import { Box, makeStyles, Typography } from '@material-ui/core'
import homescreen from '../images/homepage4.jpg';

const useStyle = makeStyles({

    container: {
        backgroundImage: `url(${homescreen})`,
        position: 'fixed',
        width: '100vw',
        height: '93vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'contain'
    }
})

const PhoneBook = () => {
    const classes = useStyle();
    return (
        <Box className={classes.container}>
            <Typography variant='h4' style={{color:'lightgreen',margin:20}}>Phone Book</Typography>
        </Box>
    );
}

export default PhoneBook;