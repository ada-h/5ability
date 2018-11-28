import React from 'react'
import Categories from './Categories'
import About from './About'
import Support from './Support'
import Community from './Community'
import Freelancers from './Freelancers'

class Footer extends React.Component {
    render(){
    return (
        <div>
            <Categories/>,
            <About/>
            <Support/>
            <Community/>
            <Freelancers/>
        </div>

    )

    }
}

export default Footer