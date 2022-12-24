import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { MenuOutlined, LineStyleOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import UserProfile from '../../assets/Mayoyemiwa.png'
import Logo from '../../assets/myLogo.png';
import { Link } from 'react-router-dom'


const SidebarLayout = ({collapsed, collapseSidebar}) => {
    const Item = ({ title, to, icon }) => {
        // const theme = useTheme();
        // const colors = tokens(theme.palette.mode);
        return (
          <MenuItem active={title} style={{ color: "grey"}} icon={icon}  >
            <Typography>{title}</Typography>
            <Link to={to} />
          </MenuItem>
        );
      };
    
    return (
        <Box sx={{height: '100%'}}>
            <Sidebar collapsed={collapsed} height="100%">
                <Menu>
                    <Box display="flex" justifyContent="space between" position="sticky" left="0">
                        <MenuItem onClick={()=> collapseSidebar()} icon={<MenuOutlined/>} style={{margin: "10px 0 20px 0", color:"grey"}} ></MenuItem>
                        {!collapsed && <Box style={{margin: "10px 0 20px 0"}}><img src={Logo} alt="my Logo" style={{height:"40px", width:"40px", border:"transparent", borderRadius:"50%", marginBottom:"0"}}/></Box>}
                    </Box>
                    {!collapsed && (
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <img alt="profile-user" width="100px" height="100px"
                                    src={UserProfile}
                                    style={{ cursor: "pointer", borderRadius: "50%" }} />
                            </Box>
                            <Box textAlign="center">
                                <Typography m={2} fontWeight="bold">{`Mayor`}</Typography>
                            </Box>
                        </Box>
                        
                    )}
                    {!collapsed && <Box>
                        <Typography variant="h6" color="grey" sx={{ m: "15px 0 5px 20px" }}> Dashboard </Typography>
                        <Item title="Home" to="/" icon={<LineStyleOutlined/>} />
                    </Box>}
                </Menu>
            </Sidebar>
        </Box>
    );
}

export default SidebarLayout