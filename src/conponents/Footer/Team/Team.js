import React from 'react';
import Crewman from './Crewman';

const Team = () => {
    return(
        <div>
           <Crewman 
                name="Rasim M."
                position="UI/UX designer"
           />
           <Crewman 
                name="Eugene T."
                position="Frontend developer"
           />
        </div>
    )
}

export default Team;