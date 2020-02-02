import React, { Component } from 'react';
import Comp from './Comp';
import Chart from './Chart';
import './CompAllStyle.css';
import { Container, Form, FormControl, InputGroup, ButtonToolbar, Button } from 'react-bootstrap';

class CompAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            e: "",
            chart: false,
            dailyReportState: "",
            shifts: []
        }

        this.indexed = this.indexed.bind(this);

        this.handleChange = (event) => {
            this.setState({
                e: event.target.value
            })
    }
    const hourPrice = localStorage.getItem("hourPrice");
    const comp1 = localStorage.getItem(1) !== null ? localStorage.getItem(1).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp2 = localStorage.getItem(2) !== null ? localStorage.getItem(2).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp3 = localStorage.getItem(3) !== null ? localStorage.getItem(3).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp4 = localStorage.getItem(4) !== null ? localStorage.getItem(4).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp5 = localStorage.getItem(5) !== null ? localStorage.getItem(5).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp6 = localStorage.getItem(6) !== null ? localStorage.getItem(6).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp7 = localStorage.getItem(7) !== null ? localStorage.getItem(7).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp8 = localStorage.getItem(8) !== null ? localStorage.getItem(8).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp9 = localStorage.getItem(9) !== null ? localStorage.getItem(9).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp10 = localStorage.getItem(10) !== null ? localStorage.getItem(10).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp1firstShift = localStorage.getItem(1 + "firstShift") !== null ? localStorage.getItem(1 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp1secondShift = localStorage.getItem(1 + "secondShift") !== null ? localStorage.getItem(1 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp1thirdShift = localStorage.getItem(1 + "thirdShift") !== null ? localStorage.getItem(1 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp2firstShift = localStorage.getItem(2 + "firstShift") !== null ? localStorage.getItem(2 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp2secondShift = localStorage.getItem(2 + "secondShift") !== null ? localStorage.getItem(2 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp2thirdShift = localStorage.getItem(2 + "thirdShift") !== null ? localStorage.getItem(2 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp3firstShift = localStorage.getItem(3 + "firstShift") !== null ? localStorage.getItem(3 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp3secondShift = localStorage.getItem(3 + "secondShift") !== null ? localStorage.getItem(3 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp3thirdShift = localStorage.getItem(3 + "thirdShift") !== null ? localStorage.getItem(3 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp4firstShift = localStorage.getItem(4 + "firstShift") !== null ? localStorage.getItem(4 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp4secondShift = localStorage.getItem(4 + "secondShift") !== null ? localStorage.getItem(4 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp4thirdShift = localStorage.getItem(4 + "thirdShift") !== null ? localStorage.getItem(4 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp5firstShift = localStorage.getItem(5 + "firstShift") !== null ? localStorage.getItem(5 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp5secondShift = localStorage.getItem(5 + "secondShift") !== null ? localStorage.getItem(5 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp5thirdShift = localStorage.getItem(5 + "thirdShift") !== null ? localStorage.getItem(5 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp6firstShift = localStorage.getItem(6 + "firstShift") !== null ? localStorage.getItem(6 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp6secondShift = localStorage.getItem(6 + "secondShift") !== null ? localStorage.getItem(6 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp6thirdShift = localStorage.getItem(6 + "thirdShift") !== null ? localStorage.getItem(6 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp7firstShift = localStorage.getItem(7 + "firstShift") !== null ? localStorage.getItem(7 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp7secondShift = localStorage.getItem(7 + "secondShift") !== null ? localStorage.getItem(7 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp7thirdShift = localStorage.getItem(7 + "thirdShift") !== null ? localStorage.getItem(7 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp8firstShift = localStorage.getItem(8 + "firstShift") !== null ? localStorage.getItem(8 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp8secondShift = localStorage.getItem(8 + "secondShift") !== null ? localStorage.getItem(8 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp8thirdShift = localStorage.getItem(8 + "thirdShift") !== null ? localStorage.getItem(8 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp9firstShift = localStorage.getItem(9 + "firstShift") !== null ? localStorage.getItem(9 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp9secondShift = localStorage.getItem(9 + "secondShift") !== null ? localStorage.getItem(9 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp9thirdShift = localStorage.getItem(9 + "thirdShift") !== null ? localStorage.getItem(9 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp10firstShift = localStorage.getItem(10 + "firstShift") !== null ? localStorage.getItem(10 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp10secondShift = localStorage.getItem(10 + "secondShift") !== null ? localStorage.getItem(10 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp10thirdShift = localStorage.getItem(10 + "thirdShift") !== null ? localStorage.getItem(10 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    
    
        this.shiftReport1 = () => {
            let millis = Number(comp1firstShift) + Number(comp2firstShift) + Number(comp3firstShift) + Number(comp4firstShift) + Number(comp5firstShift) + Number(comp6firstShift) + Number(comp7firstShift) + Number(comp8firstShift) + Number(comp9firstShift) + Number(comp10firstShift);
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);

            return y + "$";
        }
        this.shiftReport2 = () => {
            let millis = Number(comp1secondShift) + Number(comp2secondShift) + Number(comp3secondShift) + Number(comp4secondShift) + Number(comp5secondShift) + Number(comp6secondShift) + Number(comp7secondShift) + Number(comp8secondShift) + Number(comp9secondShift) + Number(comp10secondShift);
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);
            
            return y + "$";
        }
        this.shiftReport3 = () => {
            let millis = Number(comp1thirdShift) + Number(comp2thirdShift) + Number(comp3thirdShift) + Number(comp4thirdShift) + Number(comp5thirdShift) + Number(comp6thirdShift) + Number(comp7thirdShift) + Number(comp8thirdShift) + Number(comp9thirdShift) + Number(comp10thirdShift);
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);
            
            return y + "$";
        }
        this.dailyReport = () => {
            let millis = Number(comp1) + Number(comp2) + Number(comp3) + Number(comp4) + Number(comp5) + Number(comp6) + Number(comp7) + Number(comp8) + Number(comp9) + Number(comp10) ;
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);
            
            localStorage.setItem("dailyReport", y);
            return y + "$";
        }

        this.endOfDay = () => {
            alert(new Date() + ": " + this.dailyReport());
            const array = [1,2,3,4,5,6,7,8,9,10];
                
            let num = 0;

                array.forEach(function(element) {
                    localStorage.removeItem(element + "firstShift")
                    localStorage.removeItem(element + "secondShift")
                    localStorage.removeItem(element + "thirdShift")

                    localStorage.removeItem(element)
                    num++
                })
        }
        this.reload = () => {
            return window.location.reload();
        }
        this.toggle = () => {
            this.setState({
                chart: !this.state.chart
            })
            const timer = () => {
                setTimeout(() => {
                if(this.state.chart !== false) {
                    this.setState({
                        chart: !this.state.chart
                    })
                }
            }, 30000);
        }
            timer();
            
        }
        this.chartState = () => {
            this.setState({
                chart: true
            })
        }
    }

    hourPrice = () => {
            localStorage.setItem("hourPrice", this.state.e);
            alert("Price for one hour of usage is set on: " + this.state.e + "$");
    }

    firstShiftStart = () => {
        var e = document.getElementById("firstShiftStart");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("firstShiftStart", selectedItem);
        alert("First shift start succesfully entered! It starts at: " + selectedItem);
    }
    firstShiftEnd = () => {
        var e = document.getElementById("firstShiftEnd");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("firstShiftEnd", selectedItem);
        alert("First shift end succesfully entered!It starts at: " + selectedItem);
    }

    secondShiftStart = () => {
        console.log(this.state.shifts);
        var e = document.getElementById("secondShiftStart");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("secondShiftStart", selectedItem);
        let pushed = [1].concat(this.state.shifts);
        
        this.setState({
            shifts: pushed
        })
        localStorage.setItem("shifts", this.state.shifts);
        alert("Second shift start succesfully entered! It starts: " + selectedItem);
    }
    secondShiftEnd = () => {
        var e = document.getElementById("secondShiftEnd");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("secondShiftEnd", selectedItem);
        alert("Second shift end succesfully entered! It starts: " + selectedItem);
    }

    thirdShiftStart = () => {
        console.log(this.state.shifts);
        var e = document.getElementById("thirdShiftStart");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("thirdShiftStart", selectedItem);
        let pushed = [2].concat(this.state.shifts);
        this.setState({
            shifts: pushed
        })
        localStorage.setItem("shifts", this.state.shifts);
        alert("Third shift start succesfully entered! It starts: " + selectedItem);
    }
    thirdShiftEnd = () => {
        var e = document.getElementById("thirdShiftEnd");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("thirdShiftEnd", selectedItem);
        alert("Third shift end succesfully entered! It starts: " + selectedItem);
    }

    indexed(i) {
        return i
    }
    componentDidUpdate() {
        this.dailyReport();
    } 
    componentDidMount() {
       
    }
    render() {
        window.onload = () => {
        localStorage.setItem("shifts", 0);
        this.setState({
            shifts: [localStorage.getItem("shifts")]  //[0]
        })
        function noname() {
            var a = localStorage.getItem("firstShiftEnd");
            var b = localStorage.getItem("secondShiftEnd");
            var c = localStorage.getItem("thirdShiftEnd");
            let arr = [a, b, c].filter((item) => item !== null);
            
            let arrLeng = arr[arr.length -1]; // hour last shift over
         
            let hour = new Date();
            let hourNew = hour.setHours(arrLeng); //ms of last shift
            let newDate = new Date(hourNew); // to date obj
            let newDateD = newDate.getDate() + 1; // tomorrow day (Number, example (3))
            let newDateDPlus = newDate.setDate(newDateD); // milliseconds of tomorrow day
            
            if(Number(arrLeng) < Number(localStorage.getItem("firstShiftStart")) && Number(new Date().getHours()) > 6) { 
                localStorage.setItem("overtime", newDateDPlus);
            } 
            if(Number(arrLeng) > Number(localStorage.getItem("firstShiftStart"))) { 
                localStorage.removeItem("overtime");
            }
        }
        noname();
        }
        return (
            <Container>
                <div className="component-flex">
                <h1 style={{ textAlign: "center", fontWeight: "bold", padding: "1em 0 1em 0" }}>UpTime</h1>
                    <div className="component-rows">
                        <div className="desktop-row-5 row-1">
                            <div className="comp-div">
                            <Comp className="comp" nmb={this.indexed(1)}/>
                            </div>
                            <div className="comp-div">
                                <Comp className="comp" nmb={this.indexed(2)}/>
                            </div>
                            <div className="comp-div">
                                 <Comp className="comp" nmb={this.indexed(3)}/>
                            </div>
                            <div className="comp-div">       
                            <Comp className="comp" nmb={this.indexed(4)}/>
                            </div>
                            <div className="comp-div">
                            <Comp className="comp" nmb={this.indexed(5)}/>
                            </div>
                        </div>
                        
                        <div className="desktop-row-5 row-2">
                            <div className="comp-div">
                            <Comp className="comp" nmb={this.indexed(6)} />
                            </div>
                            <div className="comp-div">
                                 <Comp className="comp" nmb={this.indexed(7)} />
                            </div>
                            <div className="comp-div">
                                 <Comp className="comp" nmb={this.indexed(8)} />
                            </div>
                            <div className="comp-div">
                            <Comp className="comp" nmb={this.indexed(9)} />
                            </div>
                            <div className="comp-div">
                            <Comp className="comp" nmb={this.indexed(10)} />
                            </div>
                        </div>     
                    </div>
                    
                {/* <Comp className="comp" nmb={this.indexed(4)} />
                    <Comp className="comp" nmb={this.indexed(5)} />
                    <Comp className="comp" nmb={this.indexed(6)} />
                    <Comp className="comp" nmb={this.indexed(7)} />
                    <Comp className="comp" nmb={this.indexed(8)} />
                    <Comp className="comp" nmb={this.indexed(9)} />
                    <Comp className="comp" nmb={this.indexed(10)} />
                    <Comp className="comp" nmb={this.indexed(11)} />
                    <Comp className="comp" nmb={this.indexed(12)} />
                    <Comp className="comp" nmb={this.indexed(13)} />
                    <Comp className="comp" nmb={this.indexed(14)} />
                    <Comp className="comp" nmb={this.indexed(15)} />
                    <Comp className="comp" nmb={this.indexed(16)} />
                    <Comp className="comp" nmb={this.indexed(17)} />
                    <Comp className="comp" nmb={this.indexed(18)} />
                    <Comp className="comp" nmb={this.indexed(19)} />
            <Comp className="comp" nmb={this.indexed(20)} /> */}
                </div>

                <div id="admin-dash">
                    <h2 style={{ paddingBottom: "1em" }}>Admin Dashboard</h2>
                <ButtonToolbar style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="secondary" onClick={this.toggle}>Chart</Button>
                </ButtonToolbar>
                {this.state.chart && ( 
                    <Chart />
                )}

                <hr />
                    
                <div id="reports">
                    <h2>Reports</h2>
                    <h4>Daily report</h4>
                    <div className="reports-centered">
                        <ButtonToolbar>
                            <Button variant="info" onClick={this.dailyReport, this.reload} style={{ cursor: "pointer" }}>Day</Button>
                        </ButtonToolbar>
                    </div>
                        <h5>Storage: {this.dailyReport()}</h5>
                    <hr />

                    <h5>Shifts reports</h5>
                    <div className="reports-centered">
                        <ButtonToolbar>
                            <Button variant="info" onClick={this.shiftReport1, this.reload} style={{ cursor: "pointer" }}>Shift 1</Button>
                        </ButtonToolbar>
                    </div>
                        <h6>First shift: {this.shiftReport1()}</h6>
                    <div className="reports-centered">
                        <ButtonToolbar>
                            <Button variant="info" onClick={this.shiftReport2, this.reload} style={{ cursor: "pointer" }}>Shift 2</Button>
                        </ButtonToolbar>
                    </div>
                        <h6>Second shift: {this.shiftReport2()}</h6>
                    <div className="reports-centered">
                        <ButtonToolbar>
                            <Button variant="info" onClick={this.shiftReport3, this.reload} style={{ cursor: "pointer" }}>Shift 3</Button>
                        </ButtonToolbar>
                    </div>
                        <h6>Third shift: {this.shiftReport3()}</h6>

                        <hr />

                    <h5>End of day</h5>
                    <div className="reports-centered">
                        <ButtonToolbar>
                            <Button variant="danger" onClick={this.endOfDay}>End</Button>
                        </ButtonToolbar>
                    </div>
                        <h5>{this.dailyReport()}</h5>
                </div>

                <hr />

                <h2>Techical adjustments</h2>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Hour Price"
                    aria-label="Hour Price"
                    aria-describedby="basic-addon2"
                    value={this.state.e}
                    onChange={this.handleChange.bind(this)}
                    />
                    <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2" onClick={this.hourPrice} style={{cursor: "pointer"}}>Enter hour price</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <hr />

                <div id="firstShift">

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>First shift start</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" onClick={this.firstShiftStart} style={{cursor: "pointer"}}>Select</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control id="firstShiftStart" as="select">
                        <option value="None">Select from dropdown list</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </Form.Control>
                    </InputGroup>
                    </Form.Group>
     
                
               
               
               <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>First shift end</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" onClick={this.firstShiftEnd} style={{cursor: "pointer"}}>Select</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control id="firstShiftEnd" as="select">
                        <option value="None">Select from dropdown list</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </Form.Control>
                    </InputGroup>
                    </Form.Group>
                </div>

                <div id="secondShift">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Second shift start</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" onClick={this.secondShiftStart} style={{cursor: "pointer"}}>Select</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control id="secondShiftStart" as="select">
                        <option value="None">Select from dropdown list</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </Form.Control>
                    </InputGroup>
                    </Form.Group>
               
               <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Second shift end</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" onClick={this.secondShiftEnd} style={{cursor: "pointer"}}>Select</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control id="secondShiftEnd" as="select">
                        <option value="None">Select from dropdown list</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </Form.Control>
                    </InputGroup>
                    </Form.Group>
                </div>

                <div id="thirdShift">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Third shift start</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" onClick={this.thirdShiftStart} style={{cursor: "pointer"}}>Select</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control id="thirdShiftStart" as="select">
                        <option value="None">Select from dropdown list</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </Form.Control>
                    </InputGroup>
                    </Form.Group>
            
               <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Third shift end</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" onClick={this.thirdShiftEnd} style={{cursor: "pointer"}}>Select</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control id="thirdShiftEnd" as="select">
                        <option value="None">Select from dropdown list</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </Form.Control>
                    </InputGroup>
                    </Form.Group>
                    </div>
                </div>
            </Container>
        );
    }
}

export default CompAll;