import React from 'react'
import QuestionPic from './QuestionPic'
import Questionterms from './Questionterms'
import  Startbutton from './Startbutton'
import Privacy from './Privacy'
import './Css/Question.css'

const QuestionPro = () => {
    return(
        <div>
            <QuestionPic/>
            <Questionterms/>
            < Startbutton/>
            <Privacy/>
        </div>
    )
}
export default QuestionPro 