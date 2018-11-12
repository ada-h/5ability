import React, {Component} from 'react'



class Landing extends  Component{
    constructor(props){
        super(props);
        this.state = {
         image: []
        }
    }

    this.setState({
        name: {name},
    });

    render(){
        const {image} = this.props;
        const imageStyle = {
            backgroundImage: `url(${image})`
        };

        return(
            <div style = {imageStyle}>
                
            </div>
        )
    }

}
export default Landing