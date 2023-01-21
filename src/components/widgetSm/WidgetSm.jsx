import {Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button} from '@mui/material';
import { Visibility} from '@mui/icons-material';
import UserProfile from '../../assets/Mayoyemiwa.png'

export default function WidgetSm(){
    return (
        <Box flex="1" p="20px" mr="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'
            sx={{
                "& 	.MuiListItemText-primary":{fontWeight:"600"}
            }}>
            <Typography variant="span">New Join Members</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <img alt="profile-user" width="40px" height="40px"
                                src={UserProfile}
                                style={{ cursor: "pointer", borderRadius: "50%" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mayowa" secondary="Software Engineer" />
                    <Button variant="outlined" size="small" sx={{color:"gray", border:"transparent", backgroundColor:"#e0e0e0"}} startIcon={<Visibility color="gray" />}>
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <img alt="profile-user" width="40px" height="40px"
                                src={UserProfile}
                                style={{ cursor: "pointer", borderRadius: "50%" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mayowa" secondary="Software Engineer" />
                    <Button variant="outlined" size="small" sx={{color:"gray", border:"transparent", backgroundColor:"#e0e0e0"}} startIcon={<Visibility color="gray" />}>
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <img alt="profile-user" width="40px" height="40px"
                                src={UserProfile}
                                style={{ cursor: "pointer", borderRadius: "50%" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mayowa" secondary="Software Engineer" />
                    <Button variant="outlined" size="small" sx={{color:"gray", border:"transparent", backgroundColor:"#e0e0e0"}} startIcon={<Visibility color="gray" />}>
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <img alt="profile-user" width="40px" height="40px"
                                src={UserProfile}
                                style={{ cursor: "pointer", borderRadius: "50%" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mayowa" secondary="Software Engineer" />
                    <Button variant="outlined" size="small" sx={{color:"gray", border:"transparent", backgroundColor:"#e0e0e0"}} startIcon={<Visibility color="gray" />}>
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <img alt="profile-user" width="40px" height="40px"
                                src={UserProfile}
                                style={{ cursor: "pointer", borderRadius: "50%" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mayowa" secondary="Software Engineer" />
                    <Button variant="outlined" size="small" sx={{color:"gray", border:"transparent", backgroundColor:"#e0e0e0"}} startIcon={<Visibility color="black" />}>
                        Display
                    </Button>
                </ListItem>
            </List>
        </Box>
    )
}