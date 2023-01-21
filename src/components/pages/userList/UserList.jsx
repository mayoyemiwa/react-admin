import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {UserListRows} from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
    const [data, setData] = useState(UserListRows)
    const handleDelete = (id) =>{
        let newData = data.filter((item)=> item.id !== id)
        // console.log(newData)
        setData(newData)
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) =>{
            return (
                <Box display="flex" sx={{alignItems:"center"}}>
                    <img style={{width:"32px", height:"32px", borderRadius:"50%", objectFit:"cover", marginRight:"10px"}} src={params.row.avatar} alt="myImage" />
                    {params.row.username}
                </Box>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200,},
        { field: 'status', headerName: 'Status', width: 120,},
        { field: 'transaction', headerName: 'Transaction Volume', width: 160},
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) =>{
            return (
                <>
                    <Link to={`/user/${params.row.id}`}>
                        <button style={{border:"none", borderRadius:"10px", padding:"5px 10px", backgroundColor:"#3bb077", color:"white", cursor:"pointer", marginRight:"20px"}}>Edit</button>
                    </Link>                    
                    <DeleteOutline color="error" cursor="pointer" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
            },
        },
      ];

    return(
        <Box flex="4" sx={{ height: '600px', width: '100%' }}>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection     
            />
        </Box>
    )
}

export default UserList;