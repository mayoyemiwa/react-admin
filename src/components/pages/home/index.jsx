import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import Chart from '../../chart/Chart';
import {Box} from '@mui/material';
import {userData} from '../../../dummyData';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';

const Home = () => {
    return (
        <Box m="20px">
            <FeaturedInfo />
            <Chart title="Sales Analytics" data={userData} datakey="Active User" grid />
            <Box display="flex" m="20px">
                <WidgetSm />
                <WidgetLg />
            </Box>
        </Box>
    )
}

export default Home