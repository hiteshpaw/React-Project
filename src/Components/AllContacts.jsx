import { useEffect, useState } from 'react';
import { getUsers, deleteContact } from "../api";
import DataTable from 'react-data-table-component';
import { Container, Typography, Button, makeStyles } from '@material-ui/core';
import "react-data-table-component-extensions/dist/index.css";
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        width: '100%',
        margin: '2% 0 0 2%',
        '& > *' : {
            marginTop : 20
        }
    }
})



const AllContacts = () => {

    const [users, setUser] = useState([]);
    const classes = useStyle();

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            cell: row => <div style={{fontSize: 14}}>{row.id}</div>
            
        },
        {
            name: 'First Name',
            selector: row => row.first,
            cell: row => <div style={{fontSize: 14}}>{row.first}</div>
        },
        {
            name: 'Last Name',
            selector: row => row.last,
            cell: row => <div style={{fontSize: 14}}>{row.last}</div>
        },
        {
            name: 'Email',
            selector: row => row.email,
            cell: row => <div style={{fontSize: 14}}>{row.email}</div>
        },
        {
            name: 'Phono',
            selector: row => row.phno,
            cell: row => <div style={{fontSize: 14}}>{row.phno}</div>
        },
        {
            key: "action",
            name: "Edit",
            className: "action",
            width: 50,
            align: "left",
            sortable: false,
            cell: (record) => {
                console.log(record.id)
              return (
                  <Button variant="contained" color="primary" to={`/edit/${record.id}`} component={Link}>
                    Edit
                  </Button>
               
              );
             },
        },
        {
            key: "action",
            name: "Delete",
            className: "action",
            width: 50,
            align: "right",
            sortable: false,
            cell: (record) => {
              return (
                  <Button variant="contained" color="secondary" onClick={()=> onDelete(record)}>
                    Delete
                  </Button>
               
              );
             },
        }
    ];
    

    useEffect(() => {
        getAllContacts();
    }, [])

    const onDelete = async (record) => {
        await deleteContact(record.id);
        getAllContacts();
      
  } 
    const getAllContacts = async() => {
       const response = await getUsers();
       console.log(response);
       setUser(response.data);
    }
    const tableData = {
        columns,
        users
      };
    return (
        <div>
        <Container className={classes.container}>
        <Typography variant='h4'>All Contact</Typography>
        <DataTable
             columns={columns}
             data={users}
             noHeader={true}
             defaultSortField="id"
             defaultSortAsc={false}
             highlightOnHover
        />
        </Container>
        </div>
    )
}

export default AllContacts;