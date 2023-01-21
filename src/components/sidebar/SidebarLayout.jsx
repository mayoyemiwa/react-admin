import { Link } from "react-router-dom"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { MenuOutlined, LineStyleOutlined, AttachMoneyOutlined, EqualizerOutlined, DynamicFeedOutlined, WorkOutlineOutlined, Timeline, TrendingUp, GroupAddOutlined, Report, EmailOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import UserProfile from '../../assets/Mayoyemiwa.png'
import Logo from '../../assets/myLogo.png';

const Item = ({ title, to, icon }) => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    return (
          <MenuItem active={title} style={{ color: "grey"}} icon={icon} routerLink={<Link to={to} />} >
            <Typography variant="body2">{title}</Typography>
          </MenuItem>
    );
  };

const SidebarLayout = ({collapsed, collapseSidebar}) => {
    
    return (
        <Box 
            sx={{
                // "& .css-ahj2mt-MuiTypography-root" : { backgroundColor: "red !important"}, 
                // backgroundColor: "#5fff8",
                "& .ps-menu-button" : { backgroundColor: "white !important", height: "30px !important"},
                "& .ps-menu-button:hover" : { color: "#151632 !important", backgroundColor: "#e1e2fe !important"}, 
                // "& .ps-sidebar-container" : { backgroundColor: "#e0e0e0 !important"}, 
            }}>
            <Sidebar collapsed={collapsed} height="100vh">
                <Menu>
                    <Box display="flex" justifyContent="space-between" position="sticky" left="0">
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
                    <Box paddingLeft={collapsed ? undefined : "10%"}>
                        <Typography variant="body1" fontWeight="600" color="grey" sx={{ m: "15px 0 5px 20px" }}> Dashboard </Typography>
                            <Item title="Home" to="/" icon={<LineStyleOutlined />} />
                            <Item title="Analytics" to="/analytics" icon={<Timeline />} />
                            <Item title="Sales" to="/sales" icon={<TrendingUp />} />
                        <Typography variant="body1" fontWeight="600" color="grey" sx={{ m: "15px 0 5px 20px" }}> Quick Menu </Typography>
                            <Item title="Users" to="/users" icon={<GroupAddOutlined/>} />
                            <Item title="Products" to="/products" icon={<Timeline />} />
                            <Item title="Transactions" to="/Transactions" icon={<AttachMoneyOutlined />} />
                            <Item title="Reports" to="/reports" icon={<EqualizerOutlined />} />
                        <Typography variant="body1" fontWeight="600" color="grey" sx={{ m: "15px 0 5px 20px" }}> Notifications</Typography>
                            <Item title="Mail" to="/mail" icon={<EmailOutlined />} />
                            <Item title="Feedback" to="/feedback" icon={<DynamicFeedOutlined />} />
                            <Item title="Messages" to="/message" icon={<ChatBubbleOutlineOutlined />} />
                        <Typography variant="body1" fontWeight="600" color="grey" sx={{ m: "15px 0 5px 20px" }}> Staff</Typography>
                            <Item title="Manage" to="/Manage" icon={<WorkOutlineOutlined />} />
                            <Item title="Analytics" to="/form" icon={<Timeline />} />
                            <Item title="Reports" to="/form" icon={<Report />} />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
}

export default SidebarLayout