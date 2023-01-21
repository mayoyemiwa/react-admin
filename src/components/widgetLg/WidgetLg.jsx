import {Box, Typography, Button} from '@mui/material';
import UserProfile from '../../assets/Mayoyemiwa.png'

export default function WidgetLg(){

    const MyButton = ({status}) => {
        return(
            <Box>
                {status === "Approved" && <Button variant="outlined" size="small" sx={{backgroundColor:"#e5faf2", border:"transparent", color:"#3bb077"}} >{status}</Button>}
                {status === "Declined" && <Button variant="outlined" size="small" sx={{backgroundColor:"#fff0f1", border:"transparent", color:"#d95087"}} >{status}</Button>}
                {status === "Pending" && <Button variant="outlined" size="small" sx={{backgroundColor:"#ebf1fe", border:"transparent", color:"#2a7ade"}} >{status}</Button>}
            </Box>
        )
    }
    const column =['Customer', 'Date', 'Amount', 'Status' ]
    const tableData = [
        {customerName:"Susan Carol", img:"", date:"2 Jun 2022", amount:"$122.00", status:"Pending"},
        {customerName:"Don Don", img:"", date:"5 May 2022", amount:"$702.00", status:"Declined"},
        {customerName:"Peter Ani", img:"", date:"30 Jun 2022", amount:"$442.00", status:"Approved"},
        {customerName:"John Dee", img:"", date:"25 July 2022", amount:"$176.00", status:"Pending"},
        {customerName:"Mayowa Monday", img:"", date:"1 Dec 2022", amount:"$276.00", status:"Approved"},
        {customerName:"Doh Slate", img:"", date:"31 Jan 2022", amount:"$500.00", status:"Declined"},
    ]
    return (
        <Box flex="2" p="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'>
            <Typography variant='h3' sx={{fontSize:"22px", fontWeight:"600"}}>Latest transacttion</Typography>
            <table style={{width:"100%", borderSpacing:"20px"}}>
                <tr>
                    {column.map((data)=>{
                        return(
                            <th style={{textAlign:"left"}}>{data}</th>
                        )
                    })}
                </tr>
                {tableData.map((data)=>{
                    const {customerName, img, date, amount, status} = data
                    return(
                        <tr>
                            <td style={{display:"flex", alignItems:"center", fontWeight:"600"}}>
                                <img src={UserProfile} style={{width:'40px', height:'40px', borderRadius:'50%', objectFit:'cover', marginRight:'10px'}} alt="myImg" />
                                <Typography>{customerName}</Typography>
                            </td>
                            <td style={{fontWeight:"300"}}>{date}</td>
                            <td style={{fontWeight:"300"}}>{amount}</td>
                            <td>
                                <MyButton status={status}/>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </Box>
    )
}