import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header-tab">
                    <p>Balance</p>
                    <h2>2310$</h2>
                </div>
                <div className="header-tab">
                    <p>Payout</p>
                    <h2>2310$</h2>
                </div>
            </div>
        );
    }
}

export default Header;