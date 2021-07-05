import { Component } from "react";
import JSON from './data.json';
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type AppProps = {
    message: {
        title: string,
        description: string,
        promocode: string,
        active: boolean
    };
};


class  List extends Component<AppProps>{
    constructor(props: AppProps){
        super(props);
    }
    
    render(){
        return(
            <div className="list">
                <div className="list-01">
                    <h2>{this.props.message.title}</h2>
                    <p>Description</p>
                    <p>{this.props.message.description}</p>
                </div>
                <div className="list-02">
                    <input type="text" value={this.props.message.promocode} />
                    <FontAwesomeIcon icon={faCopy} className="icon" onClick= {() => {navigator.clipboard.writeText(this.props.message.promocode)} } />
                </div>
                <div className="list-03">
                    <button>Activate Bonus</button>
                </div>
                
            </div>
        );
    }
}

class ListPanel extends Component<any, any>{
    
    state={
        data: JSON,
        val: ''
    }
    filterData(val: string){
        this.setState({
            data: this.state.data,
            val: val
        })
    }
    reset(){
        this.setState({
            data: this.state.data,
            val: ''
        })
    }
    copy(promo: string){

    }
    render(){
        //const data = JSON;
        const items = JSON.map( (item)=>{
            if(item.title.toLowerCase().match(this.state.val.toLowerCase()))
            return(<List message={item}></List>);
        } );
        
        return(
            <div className="list-panel">
                <div className="list-panel-heading">
                    <h1>Services</h1>
                    
                </div>
                <div className="list-panel-body">
                    <p>Filter</p>
                    <form>
                        <input type="text" onChange={(e)=>this.filterData(e.target.value)}/>
                        <input type="Reset" value="Reset" onClick={(e)=>this.reset()}/>
                    </form>

                    <div className="lists">
                        {items}
                    </div>
                </div>

            </div>
        );
    }
}

export default ListPanel;