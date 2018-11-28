import React from 'react'
import ProPerson  from './ProPerson'
import Prodata from '../data/prodata'

const ProPeople = () =>{
    const proPeopleloop = Prodata.map ((data, i)=>{
      return  <ProPerson key = {i} image= {Prodata[i].image} name = {Prodata[i].name} contact = {Prodata[i].contact} description ={Prodata[i].description}/>
    })

    return(
        <div className= 'App'>
            {proPeopleloop}
        </div> 
    )
} 
export default ProPeople