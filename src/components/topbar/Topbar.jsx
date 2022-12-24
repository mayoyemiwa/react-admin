import {useState} from 'react';
import { Box, IconButton, Typography, TextField, InputAdornment } from '@mui/material'
import { NotificationsNone, Language, Settings, DarkMode, NightlightOutlined, SearchOutlined} from '@mui/icons-material'
import Logo from '../../assets/myLogo.png'
import UserProfile from '../../assets/Mayoyemiwa.png'


const Topbar = ({collapsed}) => {
    const [mode, setMode] = useState("dark")
    return (
        <Box height="70px" backgroundColor="white" z-index="999" p="0 10px" position="sticky" top="0">
            {/* TOP LEFT */}
                <Box display="flex" justifyContent="space-between" height="100%" alignItems="center" p="0 20px">
                    { collapsed && (
                        <Box>
                            <Box component="span" ><img src={Logo} alt="my Logo" style={{height:"40px", width:"40px", border:"transparent", borderRadius:"50%", marginBottom:"0"}}/></Box>
                        </Box>
                        )
                    }
                    {/* TOP MIDDLE */}
                    <Box>
                        <TextField
                            id="filled-search"
                            label="Search"
                            type="search"
                            variant="filled"
                            // endAdornment={
                            //     <InputAdornment position="end">
                            //         <IconButton edge="end"><SearchOutlined/></IconButton>
                            //     </InputAdornment>
                            // }
                        />
                        {/* <IconButton flexGrow={3} type="button" sx={{ p: 1 }}> <SearchOutlined/> </IconButton> */}
                    </Box>
                    {/* TOP RIGHT */}
                    <Box display="flex" alignItems="center" color="red">
                    <Box>
                        <IconButton onClick={(e)=> setMode(mode === "dark" ? 'light' : "dark")} >{mode === "dark" ? <NightlightOutlined/> : <DarkMode/>}</IconButton>
                    </Box>
                    <Box position="relative" >
                        <IconButton><NotificationsNone/></IconButton>
                        <Typography sx={{position:"absolute",  height:"15px", width:"15px", top:"2px", left:"23px", fontWeight:"bold", color:"white", fontSize:"12px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"red", borderRadius:"50%"}}>2</Typography>
                    </Box>
                    <Box>
                        <IconButton><Language/></IconButton>
                    </Box>
                    <Box>
                        <IconButton><Settings/></IconButton>
                    </Box>
                    {collapsed && <Box sx={{transition:"ease out"}} >
                        <img alt="profile-user" width="40px" height="40px" src={UserProfile} style={{ cursor: "pointer", borderRadius: "50%" }} />
                    </Box>}
                </Box>
                </Box>
            </Box>
        // </Box>
    )
}

export default Topbar
