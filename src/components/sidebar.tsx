import  { Component } from 'react';

class Sidebar extends Component{
    render(){
        return (
            <div className="sidebar">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring active"></div>
                <div className="ring"></div>
            </div>

        );
    }
} 

export default Sidebar;