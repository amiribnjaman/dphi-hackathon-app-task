import React from 'react';
import { Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const ChallengesCards = (props) => {
    const { _id, challenge_name, img, start_date, end_date } = props.data

    const navigate = useNavigate()

    return (
        <div className='col-sm-4'>
            <Card className='challenge-card border-0 p-0'>
                <img width={'100%'} style={{borderTopLeftRadius: '12px',borderTopRightRadius: '12px'}} src={img} alt="" />
                <div className='py-4'>
                    <div role='button'
                    onClick={()=>navigate(`/challenge-details/${_id}`)}
                    >
                    <h6 className='upcoming-txt'>Upcoming</h6>
                    <h5 style={{ fontSize: '15px', width: '70%', margin: '7px auto' }}>{challenge_name}</h5>
                    <h6 className='mb-0 mt-3'>Start in</h6>
                    <p>0: 12: 00</p>
                    </div>
                    <button style={{ borderRadius: '8px' }} className='btn btn-success'>Participate Now</button>
                </div>
            </Card>
        </div>
    );
};

export default ChallengesCards;