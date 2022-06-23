import React from 'react';
import { Card } from 'react-bootstrap';

const ChallengesSingleCard = (props) => {
    const { img, desc } = props

    return (
        <Card className='challenge-card border-0 p-0'>
            <img width={'100%'} src={img} alt="" />
            <div className='py-4'>
                <h6 className='upcoming-txt'>Upcoming</h6>
                <h5 style={{fontSize: '15px', width: '70%', margin: '7px auto'}}>{desc}</h5>
                <h6 className='mb-0 mt-3'>Start in</h6>
                <p>0: 12: 00</p>
                <button style={{borderRadius: '8px'}} className='btn btn-success'>Participate Now</button>
            </div>
        </Card>
    );
};

export default ChallengesSingleCard;