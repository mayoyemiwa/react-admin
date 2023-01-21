import {Box, Typography} from '@mui/material';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({title, data, datakey, grid }) => {
    return(
        <Box m="20px" p="20px" webkitBoxShadow='0px 0px 11px -1px #000' boxShadow='0px 0px 11px -1px #000'>
            <Typography variant="h5" mb={2} fontWeight="bold">{title}</Typography>
            <ResponsiveContainer width="100%"  aspect={4/1}>
                <LineChart width='100%' height={300} data={data}  margin={{top: 5, right: 30, left: 20, bottom: 5 }}>
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Tooltip />
                    <Line type="monotone" dataKey={datakey} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default Chart