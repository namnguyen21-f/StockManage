import React from 'react';
import { Container } from '@material-ui/core';
import './index.css'
import { ProgressCardBody, ChartCard } from '../../components/Card';
import CustomChart from '../../components/Chart';
//
import HomeIcon from '@material-ui/icons/Home';
import TopBar from '../../components/TopBar';

const data = [
    {
        title: "New Clients",
        number: "236",
        progress: "26",
        icon: <HomeIcon/>
    },
    {
        title: "Buying Transaction",
        number: "$18,306",
        progress: "26",
        icon: <HomeIcon/>
    },
    {
        title: "Transcations",
        number: "1548",
        progress: "-26",
        icon: <HomeIcon/>
    },
    {
        title: "Profit Income",
        number: "236",
        progress: "-26",
        icon: <HomeIcon/>
    }
]

const options = {
    animationEnabled: true,
    subtitles: [{
        text: "Volume",
        verticalAlign: "center",
        fontSize: 16,
        dockInsidePlotArea: true
    }],
    data: [{
        type: "doughnut",
        dataPoints: [
            { name: "Unsatisfied", y: 5 },
            { name: "Very Unsatisfied", y: 31 },
            { name: "Very Satisfied", y: 40 },
            { name: "Satisfied", y: 17 },
            { name: "Neutral", y: 7 }
        ]
    }]
}

const options2 = {
    dataPointWidth: 20,
    data: [
    {
        type: "column",
        color: "#5f76e8",
        dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
        ],
    }
    ]
}

const options3 = {
    animationEnabled: true,
    subtitles: [{
        text: "Volume",
        verticalAlign: "center",
        fontSize: 16,
        dockInsidePlotArea: true
    }],
    data: [{
        type: "doughnut",
        dataPoints: [
            { name: "Unsatisfied", y: 5 },
            { name: "Very Unsatisfied", y: 31 },
            { name: "Very Satisfied", y: 40 },
            { name: "Satisfied", y: 17 },
            { name: "Neutral", y: 7 }
        ]
    }]
}

const options4 = {
    animationEnabled: true,
    axisX: {
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Sales (in USD)",
        prefix: "$"
    },
    data: [{
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: -35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: -32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: -38400 }
        ]
    }]
}


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), data: data};
    }

    componentDidMount() {
    }

    render(){
        return (
            <div className="HomePage">
                <TopBar></TopBar>
                <div className="page-breadcrumb">
                    <div className="row">
                        <div>
                            <h3 className="page-title">Good Morning  <span>Jason!</span></h3>
                            <p className="page-subtitle">Dashboard</p>
                        </div>
                        <div className="optionCustom">
                            <select>
                                <option selected>August</option>
                                <option>September</option>
                                <option>October</option>
                            </select>
                        </div>    
                    </div>
                </div>
                <div className="card-group d-flex">
                    {this.state.data.map((ele,index) =>{
                        return <ProgressCardBody {...ele}/>
                    })}
                </div> 
                <div className="chart-section">
                    <div className="chart-wrapper">
                        <ChartCard chart={<CustomChart options={options} />} title="Current Stock"/>
                    </div>
                    <div className="chart-wrapper">
                        <ChartCard chart={<CustomChart options={options2} />} title="Investment Expense"/>
                    </div>
                    <div className="chart-wrapper">
                        <ChartCard chart={<CustomChart options={options3} />} title="Top Stock"/>
                    </div>
                </div>
                <div className="chart-section">
                    <div className="chart-wrapper col-2">
                        <ChartCard chart={<CustomChart options={options4} />} title="Monthly Income"/>
                    </div>
                    {/* <div className="chart-wrapper">
                        
                    </div> */}
                </div>
            </div>        
        )
    }
}
