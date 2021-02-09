import React from "react"

const Loader = (props) =>{
    // console.log(props)
    return (
    <div className="ui active dimmer">
        <div className="ui text massive loader">{props.children}</div>
    </div>
    )
}
Loader.defaultProps = {
    children: "Loading..."
}
export default Loader