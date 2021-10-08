import { useState } from 'react';
import { FormGroup, FormControl, Button, makeStyles, Typography, TextField } from '@material-ui/core';
import { addUser } from '../api';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *' : {
            marginTop : 20
        }
    }
})

const initialObject = {
    first: '',
    last: '',
    email: '',
    phno: ''
}


const AddContact = () => {
    const[ user, setUser ] = useState(initialObject);
    const { first, last, email, phno } = user;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(e.target.value)
    }
    
    const addUserDetails = async () => {
        let name = /^[a-zA-Z ]{2,30}$/;
        let email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        
        if(!name.test(user.first)){
            alert("Name cannot contain digits or special charactets")
            return;
        }
        if(!name.test(user.last)){
                alert("Name cannot contain digits or special charactets")
                return;
        }
        if(!email.test(user.email)){
            alert("Please enter valid email")
            return;
        }
        else{
        await addUser(user);
        history.push('/all')
        }
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Add Contact</Typography>
            <FormControl>
                <TextField name='first' onChange={(e) => onValueChange(e)} id="outlined-basic" label="First Name" variant="outlined" />
            </FormControl>
            <FormControl>
                <TextField name='last' onChange={(e) => onValueChange(e)} id="outlined-basic" label="Last Name" variant="outlined" />
            </FormControl>
            <FormControl>
                <TextField name='email' onChange={(e) => onValueChange(e)} id="outlined-basic" label="Email" variant="outlined" />
            </FormControl>
            <FormControl>
                <TextField name='phno' onChange={(e) => onValueChange(e)} id="outlined-basic" label="Phone Number" variant="outlined" />
            </FormControl>
            <Button variant='contained' color='primary' onClick={() => addUserDetails()}>Add Contact</Button>
        </FormGroup>
    );
}

export default AddContact;