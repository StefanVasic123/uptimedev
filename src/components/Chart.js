import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        const comp1 = localStorage.getItem("1normalEnd");
        const comp2 = localStorage.getItem("2normalEnd");
        const comp3 = localStorage.getItem("3normalEnd");
        const comp4 = localStorage.getItem("4normalEnd");
        const comp5 = localStorage.getItem("5normalEnd");
        const comp6 = localStorage.getItem("6normalEnd");
        const comp7 = localStorage.getItem("7normalEnd");
        const comp8 = localStorage.getItem("8normalEnd");
        const comp9 = localStorage.getItem("9normalEnd");
        const comp10 = localStorage.getItem("10normalEnd");
        this.state = {
            chartData: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',/* '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' */],
                datasets: [
                    {
                        data: [
                            comp1,
                            comp2,
                            comp3,
                            comp4,
                            comp5,
                            comp6,
                            comp7,
                            comp8,
                            comp9,
                            comp10
                            
                           /* 
                            localStorage.getItem("11normalEnd"),
                            localStorage.getItem("12normalEnd"),
                            localStorage.getItem("13normalEnd"),
                            localStorage.getItem("14normalEnd"),
                            localStorage.getItem("15normalEnd"),
                            localStorage.getItem("16normalEnd"),
                            localStorage.getItem("17normalEnd"),
                            localStorage.getItem("18normalEnd"),
                            localStorage.getItem("19normalEnd"),
                            localStorage.getItem("20normalEnd"), */
                        ],
                        backgroundColor: "blue",
                        
                    }
                ],
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,   
                        }
                      }],
                   }
            }
        }
    }
    render() {
        return (
            <div>
                <Bar 
                    data={this.state.chartData}
                    options={{
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                               label: function(tooltipItem) {
                                      return tooltipItem.yLabel;
                               }
                            }
                        },
                        animation: {
                            duration: 0 // general animation time
                        },
                        hover: {
                            animationDuration: 0 // duration of animations when hovering an item
                        },
                        responsiveAnimationDuration: 0, // animation duration after a resize
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default Chart;