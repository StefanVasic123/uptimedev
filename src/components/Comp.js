import React, { Component } from 'react';
import { Container, ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';
import './CompAllStyle.css';

class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false,
            main: false,
            mainBTN: false,
            open: false,
            start: false,
            end: false,
            timePast: "",
            input: false,
            inputGreen: false,
            inputYellow: false,
            inputOrange: false,
            over: false,
            over30: false,
            over10: false,
            inputValue: "",
            inputStartMillisec: "",
            inputStart: "",
            inputEnd: "",
            openStart: "",
            value: "",
            hasPassed: false,
            openComponent: false,
            compDidMount: false,
            startMilis: ""
        }

        const hourPrice = localStorage.getItem("hourPrice");

        const firstShiftStart = localStorage.getItem("firstShiftStart");
        const firstShiftEnd = localStorage.getItem("firstShiftEnd");
        const secondShiftStart = localStorage.getItem("secondShiftStart");
        const secondShiftEnd = localStorage.getItem("secondShiftEnd");
        const thirdShiftStart = localStorage.getItem("thirdShiftStart");
        const thirdShiftEnd = localStorage.getItem("thirdShiftEnd");

        this.msToTime = (duration) => { //get time by hours, minutes and seconds of client timezone
            const timeZone = () => new Date().getTimezoneOffset(); //-60
            const x = Math.abs(timeZone()) / 60; //1

            var milliseconds = parseInt((duration % 1000) / 100),
            seconds = parseInt((duration / 1000) % 60),
            minutes = parseInt((duration / (1000 * 60)) % 60);
            const hours = () => {
                if(timeZone() < 0) {
                   return parseInt((duration / (1000 * 60 * 60) % 24 + x)) < 10 ? "0" + parseInt((duration / (1000 * 60 * 60) % 24 + x)) : parseInt((duration / (1000 * 60 * 60) % 24 + x));
                   
                }
                if(timeZone() > 0) {
                   return parseInt((duration / (1000 * 60 * 60) % 24 - x)) < 10 ? "0" + parseInt((duration / (1000 * 60 * 60) % 24 - x)) : parseInt((duration / (1000 * 60 * 60) % 24 - x));
                   
                }
                if(timeZone() == 0) {
                  return parseInt((duration / (1000 * 60 * 60) % 24)) < 10 ? "0" + parseInt((duration / (1000 * 60 * 60) % 24)) : parseInt((duration / (1000 * 60 * 60) % 24));
                  
                }
            }
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
    
            return hours() + ":" + minutes + ":" + seconds;
    }
            this.msToTimeRegular = (duration) => { //for getting minutes and seconds that has passed
                var milliseconds = parseInt((duration % 1000) / 100),
                seconds = parseInt((duration / 1000) % 60),
                minutes = parseInt((duration / (1000 * 60)) % 60),
                hours = parseInt((duration / (1000 * 60 * 60)) % 24);
        
                hours = (hours < 10) ? "0" + hours : hours;
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
        
                return hours + ":" + minutes + ":" + seconds;
            }
    

        this.openPrice = (millisecondsPlayed) => {
            let millsToMin = millisecondsPlayed / 1000 / 60;
            let minutePrice = Number(hourPrice) / 60;

            return (millsToMin * minutePrice).toFixed(2) + "$";
        }

        this.openPriceTimer = (millisecondsPlayed) => {
            let millsToMin = millisecondsPlayed / 1000 / 60;
            let minutePrice = Number(hourPrice) / 60;

            return (millsToMin * minutePrice).toFixed(2) + "$";
        }

        this.normalPrice = (money) => {
            let hourTime = money / Number(hourPrice); //1
            let paidToMillisec = hourTime * 60 * 60 * 1000; //millisec of paid time

            return paidToMillisec + this.state.inputStartMillisec;
        }

        this.normalPriceLS = (money) => {
            let hourTime = money / Number(hourPrice); //1
            let paidToMillisec = hourTime * 60 * 60 * 1000; //millisec of paid time
            let timeEnd = paidToMillisec + Number(localStorage.getItem(this.props.nmb + "normalStart"))
            return timeEnd;
            
        }
        this.over = () => {
            let a = localStorage.getItem(this.props.nmb + "normalStart");
            let b = this.normalPrice(localStorage.getItem(this.props.nmb + "timePrice"));
            return this.msToTime(a + b);
        }

        this.toggle = () => {
            this.setState({
                on: !this.state.on,
                main: !this.state.main
            })
        }
        this.toggleOpen = () => {
            this.setState({
                on:!this.state.on,
                open: !this.state.open
            })
        }
        this.toggleStart = () => {
            this.setState({
                open: !this.state.open,
                start: !this.state.start,
                openStart: Date.now()
            })
            if(localStorage.getItem(this.props.nmb + "started") !== null) {
                localStorage.removeItem(this.props.nmb + "started");
            }
            localStorage.setItem(this.props.nmb + "started", Date.now());
            localStorage.setItem(this.props.nmb + "normalEnd", 24.00);
        }
        this.toggleEnd = () => {
            let nmbSuper = [localStorage.getItem(this.props.nmb)]; // get all values from LS
            this.setState({
                start: !this.state.start,
                end: !this.state.end,
                timePast: "",
                openStart: localStorage.getItem(this.props.nmb + "started")
            })
            if (this.state.hasPassed !== false) {
                this.setState({
                    hasPassed: !this.state.hasPassed
                })
            } 
            if(localStorage.getItem(this.props.nmb + "copy-closed")) {
                localStorage.removeItem(this.props.nmb + "openEnd");
                localStorage.setItem(this.props.nmb + "copy-closed", "opened");
                return alert("Component was restarted before closing! Click Close button. Component has been processed.")
            } else {
                localStorage.setItem(this.props.nmb + "ended", Date.now()); //Milliseconds of ended time
            }
            
            localStorage.setItem(this.props.nmb, Date.now() - localStorage.getItem(this.props.nmb + "started")); // set new value to LS
            let nmb = [localStorage.getItem(this.props.nmb)]; // get new value from LS
            let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
            localStorage.setItem(this.props.nmb, nmbConcat); // set all values to LS

            let openEnd = new Date().getHours();

            if(Number(openEnd) >= firstShiftStart && Number(openEnd) < firstShiftEnd) {
                localStorage.setItem(this.props.nmb + "firstShift", Date.now() - localStorage.getItem(this.props.nmb + "started")); // set new value to LS
                let nmb = [localStorage.getItem(this.props.nmb + "firstShift")]; // get new value from LS
                let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
                localStorage.setItem(this.props.nmb + "firstShift", nmbConcat); //ako je to prvi entri a nmb super vec ima entry onda ne concatuje
            }
            if(Number(openEnd) >= secondShiftStart && Number (openEnd) < secondShiftEnd) {
                localStorage.setItem(this.props.nmb + "secondShift", Date.now() - localStorage.getItem(this.props.nmb + "started")); // set new value to LS
                let nmb = [localStorage.getItem(this.props.nmb + "secondShift")]; // get new value from LS
                let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
                localStorage.setItem(this.props.nmb + "secondShift", nmbConcat);
            }
            if(Number(openEnd) >= thirdShiftStart && Number(openEnd) < 24 || Number(openEnd) < thirdShiftEnd) {
                localStorage.setItem(this.props.nmb + "thirdShift", Date.now() - localStorage.getItem(this.props.nmb + "started")); // set new value to LS
                let nmb = [localStorage.getItem(this.props.nmb + "thirdShift")]; // get new value from LS
                let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
                localStorage.setItem(this.props.nmb + "thirdShift", nmbConcat);
            }

            localStorage.removeItem(this.props.nmb + "openEnd");
            localStorage.setItem(this.props.nmb + "copy-closed", "opened");
        }
        this.toggleClose = () => {
                this.setState({
                    end: !this.state.end,
                    main: !this.state.main,
                    timePast: "",
                })
                localStorage.removeItem(this.props.nmb + "started");
                localStorage.removeItem(this.props.nmb + "ended");
                localStorage.removeItem(this.props.nmb + "copy-closed")
        }
        this.handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
        this.inputPay = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                console.log(this.state.inputValue);

                const endGame = this.normalPriceLS(this.state.inputValue);
                
                let newDate = Date.now() + endGame;
        
                if(localStorage.getItem("overtime") && Number(newDate.toFixed(0)) > Number(localStorage.getItem("overtime"))) {
                       this.setState({
                           main: !this.state.main,
                           on: !this.state.on
                       })
                       return alert("Can not do that! It goes beyond last shift over.");
               }

                this.setState({
                on: !this.state.on,
                inputStartMillisec: Date.now(),
                inputStart: this.msToTime(Date.now()),
                value: this.props.value,
                mainBTN: !this.state.mainBTN
            })

            

            let nmbSuper = [localStorage.getItem(this.props.nmb)]; // get everything in LS for this component as array (for concat)

            localStorage.setItem(this.props.nmb, (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0)); // push to LS
            
            let nmb = [localStorage.getItem(this.props.nmb)]; // get just pushed to LS (this erase by default LS existed values) example: 3600000 from LS
            let nmbConcat = nmb.concat(nmbSuper); // concat pushed and existing values => 3600000 concat [if something has in LS]
            localStorage.setItem(this.props.nmb, nmbConcat); // set concated array to LS (all values)

            localStorage.setItem(this.props.nmb + "normal", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
           
            localStorage.setItem(this.props.nmb + "normalStart", Date.now());
            localStorage.setItem(this.props.nmb + "timePrice", (this.state.inputValue)); 

                let end = this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice"));
        
                let normalEnd = new Date(end).getHours();
                let normalEndMinutes = new Date(end).getMinutes();

                console.log(this.state.inputValue);
                console.log(end);
                console.log(normalEnd);
                console.log(normalEndMinutes);
                console.log(this.normalPriceLS(100));
                
                localStorage.setItem(this.props.nmb + "normalEnd", normalEnd + '.' + normalEndMinutes)
                
                if(Number(normalEnd) >= firstShiftStart && Number(normalEnd) < firstShiftEnd) {
                        let getEverything = [localStorage.getItem(this.props.nmb + "firstShift")].filter(n => n !== null);
                        localStorage.setItem(this.props.nmb + "firstShift", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
                        let getJustPushedToLS = [localStorage.getItem(this.props.nmb + "firstShift")];
                        let concatedValues = getJustPushedToLS.concat(getEverything).filter(n => n !== null);
                        localStorage.setItem(this.props.nmb + "firstShift", concatedValues); 
                }
                if(Number(normalEnd) >= secondShiftStart && Number (normalEnd) < secondShiftEnd) {
                    let getEverything = [localStorage.getItem(this.props.nmb + "secondShift")];
                    localStorage.setItem(this.props.nmb + "secondShift", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
                    let getJustPushedToLS = [localStorage.getItem(this.props.nmb + "secondShift")];
                    let concatedValues = getJustPushedToLS.concat(getEverything);
                    localStorage.setItem(this.props.nmb + "secondShift", concatedValues); 
                }
                if(Number(normalEnd) >= thirdShiftStart && Number(normalEnd) < 24 || Number(normalEnd) < thirdShiftEnd) {  
                    let getEverything = [localStorage.getItem(this.props.nmb + "thirdShift")];
                    localStorage.setItem(this.props.nmb + "thirdShift", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
                    let getJustPushedToLS = [localStorage.getItem(this.props.nmb + "thirdShift")];
                    let concatedValues = getJustPushedToLS.concat(getEverything);
                    localStorage.setItem(this.props.nmb + "thirdShift", concatedValues); 
                }   

                const time30 = async () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(this.setState({
                                mainBTN: !this.state.mainBTN,
                                over30: !this.state.over30
                            }))
                        }, (this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")) - Date.now()) - 1800000)
                    })
                }
                
                const callAsync30 = async () => {
                    const result30 = await time30();
                }
                callAsync30();

                const time10 = async () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(this.setState({
                                over30: !this.state.over30,
                                over10: !this.state.over10
                            }))
                        }, (this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")) - Date.now()) - 600000)
                    })
                }
                
                const callAsync10 = async () => {
                    const result10 = await time10();
                }
                callAsync10();

                const timeOver = async () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(this.setState({
                                over: !this.state.over, 
                                mainBTN: this.state.mainBTN !== false ? !this.state.mainBTN : this.state.mainBTN,
                                inputOrange: this.state.inputOrange !== false ? !this.state.inputOrange : this.state.inputOrange,
                                over10: !this.state.over10
                            })
                            );
                        }, this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")) - Date.now());
                    })
                }
                 const callAsync = async () => {
                    const result = await timeOver();
                }
                callAsync(); 
            }
        }
        this.hasPassed = () => {
            this.setState({
                hasPassed: !this.state.hasPassed
            })
            if(this.state.hasPassed === false) {
                setTimeout(() => {
                    this.setState({
                        hasPassed: !this.state.hasPassed
                    })
                }, 10000)
            };
        }
        this.toggleGreen = () => {
            this.setState({
                mainBTN: !this.state.mainBTN,
                inputGreen: !this.state.inputGreen,
            })
        }
        this.toggleYellow = () => {
            this.setState({
                inputGreen: this.state.inputGreen !== false ? !this.state.inputGreen : false,
                inputYellow: !this.state.inputYellow,
                over30: !this.state.over30
            })
        }
        this.toggleOrange = () => {
            this.setState({
                inputYellow: this.state.inputYellow !== false ? !this.state.inputYellow : false,
                inputOrange: !this.state.inputOrange,
                over10: !this.state.over10
            })
        }
        this.toggleCloseInputGreen = () => {
            this.setState({
                inputGreen: !this.state.inputGreen,
                mainBTN: !this.state.mainBTN,
            })
        }
        this.toggleCloseInputYellow = () => {
            this.setState({
                inputYellow: !this.state.inputYellow,
                over30: !this.state.over30
            })
        }
        this.toggleCloseInputOrange = () => {
            this.setState({
                inputOrange: !this.state.inputOrange,
                over10: !this.state.over10
            })
        }
        this.compOver = () => {
            this.setState({
                over: !this.state.over,
                main: !this.state.main
            })
            localStorage.removeItem(this.props.nmb + "normal");

            localStorage.removeItem(this.props.nmb + "normalStart");
            localStorage.removeItem(this.props.nmb + "normalEnd");
            localStorage.removeItem(this.props.nmb + "timePrice");
        }
        this.overTest = () => {
            this.setState({
                main: !this.state.main,
                mainBTN: !this.state.mainBTN
            })
            localStorage.removeItem(this.props.nmb + "normal");

            localStorage.removeItem(this.props.nmb + "normalStart");
            localStorage.removeItem(this.props.nmb + "normalEnd");
            localStorage.removeItem(this.props.nmb + "timePrice");
        }
    }
    componentDidMount() {
        if(localStorage.getItem(this.props.nmb + "started") !== null) {
            this.setState({
                main: !this.state.main,
                start: !this.state.start
            })
        } 

        if(localStorage.getItem(this.props.nmb + "normal") !== null) {
                this.setState({
                    main: !this.state.main,
                    mainBTN: !this.state.mainBTN,
                    compDidMount: !this.state.compDidMount,
                })

                const time30 = async () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(this.setState({
                                mainBTN: !this.state.mainBTN,
                                over30: !this.state.over30
                            }))
                        }, (this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")) - Date.now()) - 1800000)
                    })
                }
                
                const callAsync30 = async () => {
                    const result30 = await time30();
                }
                callAsync30();

                const time10 = async () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(this.setState({
                                over30: !this.state.over30,
                                over10: !this.state.over10
                            }))
                        }, (this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")) - Date.now()) - 600000)
                    })
                }
                
                const callAsync10 = async () => {
                    const result10 = await time10();
                }
                callAsync10();
                

                const timeOver = async () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(this.setState({
                                over: !this.state.over, 
                                over10: !this.state.over10,
                                mainBTN: this.state.mainBTN !== false ? !this.state.mainBTN : this.state.mainBTN,
                                inputGreen: this.state.inputGreen !== false ? !this.state.inputGreen : this.state.inputGreen,
                            })
                            );
                        }, this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")) - Date.now());
                    })
                }
                 const callAsync = async () => {
                    const result = await timeOver();
                }
                callAsync();
            }
    } 
    render() {
        return (
            <div>
               {this.state.main === false && (
                    <div>
                        <ButtonToolbar>
                            <Button variant="primary" className="component-btn" onClick={this.toggle} style={{ cursor: "pointer" }}>{`${this.props.nmb}`}</Button>
                        </ButtonToolbar>
                    </div>
               )}

               {this.state.mainBTN && (
                   <div>
                   <button className="componentBTNGreen" onClick={this.toggleGreen}>C{this.props.nmb} End: {this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")))}</button>
                   </div>
               )}
               {this.state.over30 && (
                     <button className="componentBTNYellow" onClick={this.toggleYellow}>C{this.props.nmb} End: {this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")))}</button>
                )}
                {this.state.over10 && (
                    <button className="componentBTNOrange" onClick={this.toggleOrange}>C{this.props.nmb} End: {this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice")))}</button>
                )}
                {this.state.over && (
                     <button className="overBTN" onClick={this.compOver}>TIME'S UP!</button>
                )}

                {this.state.on && (
                    <div>
                        <ButtonToolbar className="btn-h2">
                            <Button variant="primary" onClick={() => this.setState({main: !this.state.main, on: !this.state.on})}>C{this.props.nmb}</Button>
                        </ButtonToolbar>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Payment($)"
                            aria-label="Payment($)"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange.bind(this)}
                            onKeyDown={this.inputPay.bind(this)}
                            />
                            <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2" onClick={this.toggleOpen.bind(this)} style={{cursor: "pointer"}}>Open</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                )}
                {this.state.open && (
                    <div>
                        <ButtonToolbar>
                            <Button variant="success" style={{ padding: "1em 3em 1em 3em", fontSize: "1.2em", width: "100%", fontWeight: "bold", backgroundColor: "cyan" }} onClick={this.toggleStart.bind(this)}>Start</Button>
                        </ButtonToolbar>
                    </div>
                )}
                {this.state.start && (
                <div>
                    <div style={{ backgroundColor: "purple", color: "white" }}>
                    <h2 className="centered-c">C{this.props.nmb}-open</h2>
                        <h3>Time started: {this.msToTime(localStorage.getItem(this.props.nmb + "started"))}</h3>
                    <div className="btn-column">
                        <div>
                            <ButtonToolbar>
                                <Button variant="info" onClick={this.hasPassed.bind(this)}>time/price</Button>
                            </ButtonToolbar>
                                {this.state.hasPassed && (
                                    <div style={{ backgroundColor: "rose" }}>
                                        <h3>Time past: {this.msToTimeRegular(Date.now() - localStorage.getItem(this.props.nmb + "started"))}</h3>
                                        <h3>Price: {this.openPriceTimer(Date.now() - localStorage.getItem(this.props.nmb + "started"))}</h3>
                                    </div>
                                )}
                        </div>
                        <div>
                            <ButtonToolbar>
                                <Button variant="danger" onClick={this.toggleEnd.bind(this)}>End</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                </div>
            </div>
                )}
                {this.state.end && (
                    <Container  style={{ backgroundColor: "pink", color: "black", paddingBottom: "0.5em" }}>
                    <div>
                        <h2 className="centered-c">C{this.props.nmb}-open</h2>
                        <h3>Started: {this.msToTime(localStorage.getItem(this.props.nmb + "started"))}</h3>
                        <h3>Finished: {this.msToTime(localStorage.getItem(this.props.nmb + "ended"))}</h3>
                        <h3>Time played: {this.msToTimeRegular(localStorage.getItem(this.props.nmb + "ended") - localStorage.getItem(this.props.nmb + "started"))}</h3>
                        <div>
                        <ButtonToolbar style={{ float: "right" }}>
                            <Button variant="success" onClick={this.toggleClose.bind(this)}>Close</Button>
                        </ButtonToolbar>
                        <h3>Price: {this.openPrice(localStorage.getItem(this.props.nmb + "ended") - localStorage.getItem(this.props.nmb + "started"))}</h3>
                        
                        </div>
                    </div>
                    
                    </Container>
                )}  

                {this.state.inputGreen && (
                      <div style={{ backgroundColor: "green" }}>
                      <h2 className="centered-c">C{this.props.nmb}</h2>
                      <h3>Time Start: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true  ? this.msToTime(localStorage.getItem(this.props.nmb + "normalStart")) : this.state.inputStart}</h3>
                      <h3>Time End: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice"))) : this.msToTime(this.normalPrice(this.state.inputValue))}</h3>
                      <h3>Price: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? localStorage.getItem(this.props.nmb + "timePrice") : this.state.inputValue}</h3>
                      <ButtonToolbar>
                          <Button variant="secondary" onClick={this.toggleCloseInputGreen.bind(this)}>Hide</Button>
                      </ButtonToolbar>
                  </div>
                )}
                {this.state.inputYellow && (
                    <div style={{ backgroundColor: "yellow" }}>
                        <Container className="container-input">
                    <h2 className="centered-c">C{this.props.nmb}</h2>
                    <h3>Time Start: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true  ? this.msToTime(localStorage.getItem(this.props.nmb + "normalStart")) : this.state.inputStart}</h3>
                    <h3>Time End: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice"))) : this.msToTime(this.normalPrice(this.state.inputValue))}</h3>
                    <h3>Price: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? localStorage.getItem(this.props.nmb + "timePrice")  : this.state.inputValue}</h3>
                    <ButtonToolbar style={{ paddingBottom: "0.5em" }}>
                          <Button variant="secondary" onClick={this.toggleCloseInputYellow.bind(this)} style={{ cursor: "pointer" }}>Hide</Button>
                      </ButtonToolbar>
                      </Container>
                    </div>
                    
                )}
                {this.state.inputOrange && (
                    <div style={{ backgroundColor: "orange" }}>
                    <h2 className="centered-c">C{this.props.nmb}</h2>
                    <h3>Time Start: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true  ? this.msToTime(localStorage.getItem(this.props.nmb + "normalStart")) : this.state.inputStart}</h3>
                    <h3>Time End: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice"))) : this.msToTime(this.normalPrice(this.state.inputValue))}</h3>
                    <h3>Price: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? localStorage.getItem(this.props.nmb + "timePrice") : this.state.inputValue}</h3>
                    <ButtonToolbar>
                          <Button variant="secondary" onClick={this.toggleCloseInputOrange.bind(this)}>Hide</Button>
                      </ButtonToolbar>
                    </div>
                )}
            {/*   <button onClick={this.overTest}>OVERTEST {`${this.props.nmb}`}</button> */}
            </div>
        );
    }
}

export default Comp;

/* Get all items from local storage - keys and values 
    console.log(Object.entries(localStorage));
    Get all keys from local storage
    const allKeys = () => {
            for ( var i = 0, len = localStorage.length; i < len; ++i ) {
                console.log( localStorage.getItem( localStorage.key( i ) ) );
              }
            }
    return allKeys();
*/
/*  Stopwatch/timer -> working too slow on live mode!
        this.timePast = () => {
            let d = Date.now();
            let n = 1;
            let start = this.state.openStart;
            setInterval(() => {
                this.setState({
                    timePast: d + (n++ * 10000) - start
                })
            }, 10000);
        } 
        OR
        setInterval(() => {
            return Date.now() + (n++ * 1000) - this.state.openStart
        }, 1000);
*/