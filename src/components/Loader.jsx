import React, {Component} from "react"

// const Loader = (props) =>{
//     // console.log(props)
//     return (
//     <div className="ui active dimmer">
//         <div className="ui text massive loader">{props.children}</div>
//     </div>
//     )
// }
class Loader extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className="ui active dimmer">
            <div className="ui text massive loader">{this.props.children}</div>
        </div>
        );
    }
}

Loader.defaultProps = {
    children: "Loading..."
}
export default Loader