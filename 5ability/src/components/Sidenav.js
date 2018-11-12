import React, {Component} from 'react'

class Sidenav extends Component {
    render(){
        return(
            <div className='w-25-ns'>
                <ul>
                    <li className='pa0-ns list'>
                        <a href =''  className= "link mid-gray mb0-ns"> {this.props.description}</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidenav