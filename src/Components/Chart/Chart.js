import '../Chart/Chart.css';
import ChartBar from '../Chart/ChartBar';


const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // returns brand new array with numbers/values
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label} 
                    value= {dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label} 
                />
            )}
        </div>
    );
};

export default Chart;