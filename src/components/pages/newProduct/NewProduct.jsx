import { Box, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, InputLabel, Select, MenuItem } from '@mui/material';
import { Formik } from 'formik';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from 'react';


const NewProduct = () => {

    const [active, setActive] = useState("Yes");

    const handleChange = (event) => {
        setActive(event.target.value);
        console.log(event, "roooooott")
    };
    console.log({active})
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
      };
    return(
        <Box aria="newProduct" flex="4" m="30px">
            <Typography aria="newProductTitle" variant="h5" sx={{fontWeight:"600"}}>New Product</Typography>
            <Formik initialValues={initialValues} validate={checkoutSchema} onSubmit={handleFormSubmit}>
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, /* and other goodies */}) => (
                    <form onSubmit={handleSubmit}>
                        <Box  display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" /*sx={{
                            "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                        }}*/ >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Productname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.productname}
                                name="productname"
                                error={!!touched.productname && !!errors.productname}
                                helperText={touched.productname && errors.productname}
                                sx={{ gridColumn: "span 2" }}
                            />
                             <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="fullname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.fullname}
                                name="fullname"
                                error={!!touched.fullname && !!errors.fullname}
                                helperText={touched.fullname && errors.fullname}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            {errors.email && touched.email && errors.email}
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 4" }}
                            />
                            {errors.password && touched.password && errors.password}
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <FormControl sx={{ gridColumn: "span 2" }}>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="male"
                                    name="radio-buttons-group"
                                    >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl sx={{ gridColumn: "span 2", width:"200px", marginTop:"10px" }}>
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
                            <Button type="submit" sx={{width:"150px", fontWeight:"600"}} disabled={isSubmitting} color="secondary" variant="contained">
                                Update
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
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

export default NewProduct;