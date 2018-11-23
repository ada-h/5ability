import React, {Component} from 'react'

class Slide extends Component {
    constructor(props){
        super(props)
      
    }

    render () {

        const {heading, quote, author, image} = this.props
       
        return (
            <div className = "slide">
                <div className = 'images'> 
                    <div className = 'text'>
                        <h1> {heading}</h1>
                        <p className='quote'> {quote}</p>
                        <pre> {author}</pre>
                    </div>
                    <img src ={image}/>
                </div>
                
            </div>
        )
    }
    
}

export default Slide