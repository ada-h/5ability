import React, {Component} from 'react'

class QandA extends Component{
    constructor(){
        super()
        this.state = {
            activeLink: 0
        }
    }

    setActiveLink(value){
        this.setState({activeLink: value});
    }
    render(){
        const show = {display: 'block'};
        const hide = {display: 'none'};
        return(
            <div className = 'row'>
                <div className = 'col-lg-6'>
                    <h5 onClick = {() => this.setActiveLink(FIRST)}> What can i sell? </h5>
                    <p style = {this.state.activeLink == FIRST ? show : hide}> 
                        Be creative! You can offer any service you wish as long as it's legal and complies with our terms. 
                        There are over 100 categories you can browse to get ideas. 
                    </p>    
                </div>

                <div className = 'col-lg-6'>
                    <h5 onClick = {() => this.setActiveLink(SECOND)}> How much money can i make? </h5> 
                    <p style = {this.state.activeLink == SECOND ? show : hide}>
                        It's totally up to you. You can work as much as you want. 
                        Many sellers work on Fiverr full time and some keep their 9-5 job while using Fiverr to make extra money.
                    </p>
                </div>
                <div className = 'col-lg-6'>
                    <h5 onClick = {() => this.setActiveLink(THIRD)}> How much does it cost? </h5>
                    <p style = {this.state.activeLink == THIRD ? show : hide}>
                    It's free to join Fiverr. There is no subscription required or fees to list your services.
                    You keep 80% of each transaction.
                    </p>
                </div>
                <div className = 'col-lg-6'>
                    <h5 onClick = {() => this.setActiveLink(FOURTH)}> How much time will I need to invest?</h5>
                    <p style = {this.state.activeLink == FOURTH ? show : hide}>
                        It's very flexible. You need to put in some time and effort in the beginning to learn the marketplace 
                        and then you can decide for yourself what amount of work you want to do.
                    </p>
                </div>
                <div className = 'col-lg-6'>
                    <h5 onClick = {() => this.setActiveLink(FIFTH)}> How do I price my service? </h5>
                    <p style = {this.state.activeLink == FIFTH ? show : hide}> 
                        With Gig Packages, you set your pricing anywhere from $5 - $995 and offer 
                        three versions of your service at three different prices.
                    </p>
                </div>
                <div className = 'col-lg-6'>
                    <h5 onClick = {() => this.setActiveLink(SIXTH)}> How do I get paid? </h5>
                    <p style = {this.state.activeLink == SIXTH ? show : hide}>
                        Once you complete a buyer's order, the money is transferred to your account.
                        No need to chase clients for payments and wait 60 or 90 days for a check.
                    </p>

                </div>
            </div>
        )
    }
}

const FIRST = 1;
const SECOND = 2;
const THIRD = 3;
const FOURTH = 4;
const FIFTH = 5;
const SIXTH = 6;

 
export default QandA