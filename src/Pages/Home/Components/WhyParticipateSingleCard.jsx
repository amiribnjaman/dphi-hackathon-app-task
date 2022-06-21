import React from 'react';
import { Card } from 'react-bootstrap';

const WhyParticipateSingleCard = (props) => {
    const { icon, title, description } = props

    return (
        <div className='mt-4'>
            <Card body className='participate-card py-3 px-2'>
                <img width={35} src={icon} alt="" />
                <h6 className='mt-2'>{title}</h6>
                <p className='small'>{description}</p>
            </Card>
        </div>
    );
};

export default WhyParticipateSingleCard;