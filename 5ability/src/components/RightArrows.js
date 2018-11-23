import React from 'react'

const RightArrow = (props) =>{
    return(
        <div className = 'nextArrow' onClick = {props.goToNext}>
            <button className ='hire'>
                <span className = "glyphicon glyphicon-chevron-right"></span>
            </button>           
        </div>
    )
}

export default RightArrow