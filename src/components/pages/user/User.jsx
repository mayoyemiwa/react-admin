import {Box, Typography, IconButton, TextField, Button} from '@mui/material';
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@mui/icons-material';
import { Formik } from 'formik';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from 'react-router-dom'

const User = () => {
    const UserShowInfo = ({icon, label}) =>{
        return (
            <Box aria="userShowInfo" display="flex" alignItems="center" m="5px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'>
                <IconButton aria-label="permIdentity" color="primary" >
                    {icon}
                </IconButton>
                <Typography variant="span" sx={{fontWeight:"300"}}>{label}</Typography>
            </Box>
        )
    }
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
      };
    
    return (
        <Box aria="user" flex="4" p="20px">
            <Box aria="userTitleContainer" display="flex" alignItems="center" justifyContent="space-between">
                <Typography aria="userTitle" hariant="h1">Edit User</Typography>
                <Link to="/newuser">
                    <button aria="userAddButto n" style={{width:"80px", border:"none", padding:"5px", backgroundColor:"teal", borderRadius:"5px", cursor:"pointer", color:"white", fontSize:"16px"}}>Create</button>
                </Link>
            </Box>
            <Box aria="userContainer" display="flex" mt="20px">
                <Box aria="userShow" flex="1" p="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'>
                    <Box aria="userShowTop" display="flex" alignItems="center" p="20px">
                        <img aria="userShowImg" style={{width:"40px", height:"40px", borderRadius:"50%", objectFit:"cover"}} src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <Box aria="userShowTopTitle" display="flex" flexDirection="column" ml="20px">
                            <Typography aria="userShowUsername" variant="span" sx={{fontWeight:"600"}}>Anna Becker</Typography>
                            <Typography aria="userShowUserTitle" variant="span" sx={{fontWeight:"300"}}>Software Engineer</Typography>
                        </Box>
                    </Box>
                    <Box aria="userShowBottom" mt="20px" flex="2" p="20px" ml="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'>
                        <Typography aria="userShowTitle" variant="span" sx={{fontWeight:"600", color:"rgb(175, 170, 170)", fontSize:"14px", marginBottom:"20px"}}>Account Details</Typography>
                        <UserShowInfo icon={<PermIdentity />} label="annabeck99" />
                        <UserShowInfo icon={<CalendarToday  />} label="10.12.1999" />
                        <Typography aria="userShowTitle" variant="span" sx={{fontWeight:"600", color:"rgb(175, 170, 170)", fontSize:"14px", marginBottom:"20px"}}>Contact Details</Typography>
                        <UserShowInfo icon={<PhoneAndroid  />} label="+1 123 456 67" />
                        <UserShowInfo icon={<MailOutline  />} label="annabeck99@gmail.com" />
                        <UserShowInfo icon={<LocationSearching  />} label="New Yrk | USA" />
                    </Box>
                </Box>
                <Box aria="userUpdate" flex="2" ml="20px" p="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'>
                    <Typography aria="userUpdateTitle" variant="span" sx={{fontSize:"24px", fontWeight:"600"}}>Edit</Typography>
                    <Formik initialValues={initialValues} validate={checkoutSchema} onSubmit={handleFormSubmit}>
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, /* and other goodies */}) => (
                            <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}} >
                                <Box aria="userUpdateLeft" width="670px">
                                    <Box  display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" /*sx={{
                                        "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                                    }}*/ >
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="First Name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.firstName}
                                            name="firstName"
                                            error={!!touched.firstName && !!errors.firstName}
                                            helperText={touched.firstName && errors.firstName}
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="date"
                                            // label="Birthday"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.birthday}
                                            name="birthday"
                                            error={!!touched.birthday && !!errors.birthday}
                                            helperText={touched.birthday && errors.birthday}
                                            sx={{ gridColumn: "span 2" }}
                                        />
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
                                            label="Address 1"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.address1}
                                            name="address1"
                                            error={!!touched.address1 && !!errors.address1}
                                            helperText={touched.address1 && errors.address1}
                                            sx={{ gridColumn: "span 4" }}
                                        />
                                        </Box>
                                </Box>
                                <Box aria="userUpdateRight" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                                    <Box aria="userUpdateUpload" sx={{display:"flex", alignItems:"center"}}>
                                        <img aria="userUpdateImg" style={{width:"100px", height:"100px", borderRadius:"5%", objectFit:"cover", marginRight:"20px"}} src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                                        <label htmlFor="file"><Publish sx={{cursor:"pointer"}} /></label>
                                        <input type="file" id="file" style={{display:"none"}}/>
                                    </Box>
                                    <Button type="submit" sx={{width:"150px", fontWeight:"600"}} disabled={isSubmitting} color="secondary" variant="contained">
                                        Update
                                    </Button>
                                </Box>
                            </form>
                        )}
                        </Formik>
                </Box>
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
      };

export default User