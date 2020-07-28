import React from 'react';

const Crewman = props => {
    return(
        <div className='Crewman'>
            <h4>
               {props.name}
            </h4>
            <span>
                {props.position}
            </span>
        </div>
    )
}

export default Crewman;