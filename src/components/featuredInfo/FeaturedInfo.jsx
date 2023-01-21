// import StatBox from '../StatBox';
import { Box, Typography} from "@mui/material";
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from '@mui/icons-material'

const Item = ({ title, subtitle, money, rate, icon, col}) => {
    return(
        <Box m="0px 20px" flex='1' p='30px' sx={{cursor:'pointer', borderRadius:'10px', webkitBoxShadow:'0px 0px 11px -1px #000', boxShadow:'0px 0px 11px -1px #000' }}>
        <Typography variant="body1" fontSize="20px">{title} </Typography>
        <Box m="10px 0px" display='flex' alignItems="center">
            <Typography variant="body1" sx={{fontSize:"30px", fontWeight:"600"}}>{money}</Typography>
            <Box sx={{display:"flex", alignItems:"center", marginLeft:"20px"}}>
                 <Typography variant="body1" >{rate}</Typography>
                 <Typography variant="body1" fontSize="14px" ml="5px" color={col === "negative" ? "red" : "green"}>{icon}</Typography>
            </Box>
           </Box>
        <Typography variant="body1" fontSize="15px" color="gray">{subtitle}</Typography>
    </Box>
    )
    
}
const FeaturedInfo = () => {
    return (
        <Box  width='100%' display='flex' justifyContent='space-between'>
            <Item title='Revenue' subtitle='Compare to last month' money='$2,415' rate='-11.4' col="negative" icon={<ArrowDownwardOutlined/>}/>
            <Item title='Sales' subtitle='Compare to last month' money='$4,415' rate='-1.4' col="negative" icon={<ArrowDownwardOutlined/>}/>
            <Item title='Cost' subtitle='Compare to last month' money='$2,225' rate='+2.4' col="positive " icon={<ArrowUpwardOutlined/>}/>
        </Box>
    )
}

export default FeaturedInfo