import React, {Component} from "react"
import "./css/SeasonDisplay.css"

//Class based Component
class SeasonDisplay extends Component{
    constructor(props){
        super(props)
        this.seasonConfig = {
            summer : {
                text: "Lets hit the pool",
                iconName : "sun"
            },
            winter : {
                text: "Burr, it is chilly outside",
                iconName : "snowflake"
            }
        }
    }
    getSeason = (lat,month) => {
        if(month > 2 && month < 9){
            return lat > 0 ? "summer" : "winter";
        } else {
            return lat > 0 ? "winter" : "summer";
        }
    }
    render(){
        const season = this.getSeason(this.props.lat, new Date().getMonth())
        const {text, iconName} = this.seasonConfig[season]
        return(
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`}></i> 
                <h1>{text}</h1> 
                <i className={`icon-right massive ${iconName} icon`}></i> 
            </div>
        )
    }
}
//Funtional Component
// const seasonConfig = {
//     summer : {
//         text: "Lets hit the pool",
//         iconName : "sun"
//     },
//     winter : {
//         text: "Burr, it is chilly outside",
//         iconName : "snowflake"
//     }
// }

// const getSeason = (lat,month) => {
//     if(month > 2 && month < 9){
//         return lat > 0 ? "summer" : "winter";
//     } else {
//         return lat > 0 ? "winter" : "summer";
//     }
// }

// const SeasonDisplay = (props) => {
//     const season = getSeason(props.lat, new Date().getMonth())
//     const {text, iconName} = seasonConfig[season]
//     return (
//         <div className={`season-display ${season}`}>
//             <i className={`icon-left massive ${iconName} icon`}></i> 
//             <h1>{text}</h1> 
//             <i className={`icon-right massive ${iconName} icon`}></i> 
//         </div>
//     )
// }
export default SeasonDisplay;