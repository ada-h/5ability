import React from 'react'

const LeftArrow = (props) =>{
    return(
        <div className = "backArrow">
            <button className ='hire'  onClick = {props.goToPrev}>
                <span className = "glyphicon glyphicon-chevron-left"></span>
            </button>  
        </div>
    )
}

export default LeftArrow