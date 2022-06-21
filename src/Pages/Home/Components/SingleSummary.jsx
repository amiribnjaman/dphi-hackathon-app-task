import React from 'react';

const SingleSummary = (props) => {
    const {icon, title, shortDesc} = props
    return (
        <div className='text-white d-flex'>
            <div>
                <img width={40} src={icon} alt="" />
            </div>
            <div className='mx-2 my-1'>
                <h4 style={{fontSize: '15px', margin:0}}>{title}</h4>
                <p style={{fontSize: '11px', margin:0}}>{shortDesc}</p>
            </div>
        </div>
    );
};

export default SingleSummary;