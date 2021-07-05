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
    },
    handleData: (childData: Message)=> void
};
type Message = {
   
    title: string,
    description: string,
    promocode: string,
    active: boolean
}

class  List extends Component<AppProps>{
    // constructor(props: AppProps){
    //     super(props);
    // }
    
    render(){
        var text= "Activate Bonus";
        const title= this.props.message.title;
        if(this.props.message.active===true){
            text = "Actived";
        }
        //this.props.handleClick(this.props.message);
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
                    <button onClick={()=>{this.props.handleData(this.props.message)}}>{text}</button>
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
    setData(childData: string){
        var data =this.state.data.map(function(item){
            if(item.title.match(childData)){
                item.active = !item.active;
            }
            return item;;
        });
        console.log(data)
    }
    handleClick= (childData: Message)=>{
        //childData.active= !childData.active;
        
        var data =this.state.data.map(function(item){
            
            if(item.title.match(childData.title)){
               
                item.active = !item.active;
               
            }
            //console.log(item);
            return item;;
        });
        this.setState({
            data: data,
            val: this.state.val
        })
    }
    render(){
        //const data = JSON;
        const items = this.state.data.map( (item)=>{
            if(item.title.toLowerCase().match(this.state.val.toLowerCase()))
                return(<List message={item} handleData={this.handleClick}></List>);
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