import {Box, Typography, TextField, FormControl, MenuItem, Select, InputLabel, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import {productData} from '../../../dummyData';
import Chart from '../../chart/Chart';
import { Formik } from 'formik';
import {Publish} from '@mui/icons-material';
import { useState } from 'react';

const Product = () => {
    const ProductInfoItem = ({keyValue, value}) => {
        return(
            <Box aria="productInfoItem" sx={{width:"150px", display:"flex", justifyContent:"space-between"}}>
                <Typography aria="productInfoKey" variant="span">{keyValue}</Typography>
                <Typography aria="productInfoValue" variant="span" sx={{fontWeight:"300"}}>{value}</Typography>
            </Box>
        )
    }
    const [active, setActive] = useState("Yes");
    const handleChange = (event) => {
        setActive(event.target.value);
        console.log(event, "roooooott")
    };
    // console.log({active})
    // const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
      };
    return (
        <Box aria="product" flex="4" p="20px" m="20px">
             <Box aria="productTitleContainer" display="flex" alignItems="center" justifyContent="space-between">
                <Typography aria="productTitle" hariant="h1">Edit User</Typography>
                <Link to="/newproduct">
                    <button aria="productAddButton" style={{width:"80px", border:"none", padding:"5px", backgroundColor:"teal", borderRadius:"5px", cursor:"pointer", color:"white", fontSize:"16px"}}>Create</button>
                </Link>
            </Box>
            <Box aria="productTop" display="flex">
                <Box aria="productTopLeft" flex='1' >
                    <Chart data={productData} title="Sales Performance" datakey="Sales"/>
                </Box>
                <Box aria="productTopRight" flex='1' p="20px" m="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000' >
                    <Box aria="productInfoTop" display="flex" alignItems="center" >
                        <img aria="productInfoImage" style={{width:"40px", height:"40px", borderRadius:"50%", objectFit:"cover", marginRight:"20px"}} src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <Typography aria="productName" variant="span" sx={{fontWeight:"600"}}>Apple Airpod</Typography>
                    </Box>
                    <Box aria="productInfoBottom" mt='10px'>
                        <ProductInfoItem keyValue="id" value={123} />
                        <ProductInfoItem keyValue="sales" value={5123} />
                        <ProductInfoItem keyValue="active" value="yes" />
                        <ProductInfoItem keyValue="in stock" value="yes" />
                        <ProductInfoItem keyValue="active" value="no" />
                    </Box>
                </Box>
            </Box>
            <Box aria="productBottom" p="20px" m="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'>
                <Formik initialValues={initialValues} validate={checkoutSchema} onSubmit={handleFormSubmit}>
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, /* and other goodies */}) => (
                        <form onSubmit={handleSubmit}>
                        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                            <Box aria="productFormLeft" width="65%" display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" /*sx={{
                                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                            }}*/ >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Product Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.name}
                                    name="name"
                                    error={!!touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <FormControl sx={{ gridColumn: "span 2", width:"80%", marginTop:"10px" }}>
                                    <InputLabel id="demo-simple-select-label">In Stock</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.inStock}
                                        label="In Stock"
                                        name={'inStock'}
                                        onChange={handleChange}
                                    >
                                        <MenuItem name="Yes" value="Yes">Yes</MenuItem>
                                        <MenuItem name="No" value="No">No</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ gridColumn: "span 2", width:"80%", marginTop:"10px" }}>
                                    <InputLabel id="demo-simple-select-label">Active</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.active}
                                        label="Active"
                                        name={'active'}
                                        onChange={handleChange}
                                    >
                                        <MenuItem name="Yes" value="Yes">Yes</MenuItem>
                                        <MenuItem name="No" value="No">No</MenuItem>
                                        <MenuItem name="Not Sure" value="Not Sure">Not Sure</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box aria="productFormRight" sx={{display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column", width:"32%"}}>
                                <Box aria="productUpload" sx={{display:"flex", alignItems:"center"}}>
                                    <img aria="productUploadImg" style={{width:"100px", height:"100px", borderRadius:"10px", objectFit:"cover", marginRight:"20px"}} src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                                    <label htmlFor="file"><Publish sx={{cursor:"pointer"}} /></label>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="file"
                                        label="File"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                        name="name"
                                        error={!!touched.name && !!errors.name}
                                        helperText={touched.name && errors.name}
                                        sx={{ display:"None"}} 
                                    />
                                </Box>
                                <Button type="submit" sx={{width:"150px", fontWeight:"600", marginTop:"20px"}} disabled={isSubmitting} color="secondary" variant="contained">
                                    Update
                                </Button>
                            </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}
const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const checkoutSchema ="";
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
    active:""
    };
export default Product;