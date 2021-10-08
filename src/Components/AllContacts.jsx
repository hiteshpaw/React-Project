import { useEffect, useState } from 'react';
import { getUsers } from "../api";
import DataTable from 'react-data-table-component';
import { Container, Typography } from '@material-ui/core';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


const columns = [
    {
        name: 'id',
        selector: row => row.id,
        cell: row => <div style={{fontSize: 15}}>{row.id}</div>
        
    },
    {
        name: 'First Name',
        selector: row => row.first,
        cell: row => <div style={{fontSize: 15}}>{row.first}</div>
    },
    {
        name: 'Last Name',
        selector: row => row.last,
        cell: row => <div style={{fontSize: 15}}>{row.last}</div>
    },
    {
        name: 'Email',
        selector: row => row.email,
        cell: row => <div style={{fontSize: 15}}>{row.email}</div>
    },
    {
        name: 'Phono',
        selector: row => row.phno,
        cell: row => <div style={{fontSize: 15}}>{row.phno}</div>
    },
    {
        key: "action",
        name: "Edit",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: (record) => {
          return (
              <button onClick={()=> onDelete(record)}>
                Edit
              </button>
           
          );
         },
    },
    {
        key: "action",
        name: "Delete",
        className: "action",
        width: 100,
        align: "right",
        sortable: false,
        cell: (record) => {
          return (
              <button onClick={()=> onDelete(record)}>
                Delete
              </button>
           
          );
         },
    }
];

 
  
  const onEdit = (record) => {
      console.log(record.id)
  }

  const onDelete = (record) => {
    console.log(record.id)
}

const AllContacts = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        getAllContacts();
    }, [])

    
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
        <Typography variant='h4' style={{color:'lightgreen',margin:20}}>All Contacts</Typography>
      <Container maxWidth="lg">
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