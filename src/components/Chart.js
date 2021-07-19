import CanvasJSReact from '../ultis/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//className, default chart-wrapper 
// options for ChartCanvas
const CustomChart = ({className, options}) => {
    return (
        <CanvasJSChart options = {options} />
    )
}

export default CustomChart;