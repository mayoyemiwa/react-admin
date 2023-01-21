import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {ProductListRows} from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ProductList = () => {
    const [data, setData] = useState(ProductListRows)
    const handleDelete = (id) =>{
        let newData = data.filter((item)=> item.id !== id)
        // console.log(newData)
        setData(newData)
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'User', width: 200, renderCell: (params) =>{
            return (
                <Box display="flex" sx={{alignItems:"center"}}>
                    <img style={{width:"32px", height:"32px", borderRadius:"50%", objectFit:"cover", marginRight:"10px"}} src={params.row.img} alt="myImage" />
                    {params.row.name}
                </Box>
            )
        }},
        { field: 'stock', headerName: 'Stock', width: 200,},
        { field: 'status', headerName: 'Status', width: 120,},
        { field: 'price', headerName: 'Price', width: 160},
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) =>{
            return (
                <>
                    <Link to={`/product/${params.row.id}`}>
                        <button style={{border:"none", borderRadius:"10px", padding:"5px 10px", backgroundColor:"#3bb077", color:"white", cursor:"pointer", marginRight:"20px"}}>Edit</button>
                    </Link>                    
                    <DeleteOutline color="error" cursor="pointer" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
            },
        },
      ];
    return (
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

export default ProductList