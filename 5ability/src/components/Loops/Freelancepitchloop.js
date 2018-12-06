import React from 'react'
import FreelancePitch from '../Freelancepitch'


const Freelancepitchloop = ({data}) =>{
    const Freelancer = data.map((user,i)=>{
        return <FreelancePitch key = {i} pitch = {data[i].pitch} />
    })
  
    return(
        <div>
            {Freelancer}
        </div>      
    )
}

export default Freelancepitchloop