import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const ChallengesCards = (props) => {
    const { _id, challenge_name, img, end_date } = props.data

    const d = new Date()
    const currentDate = d.getDate();
    const currentMonth = d.getMonth() + 1;
    const currentHour = d.getHours()

    const navigate = useNavigate()
    const month = end_date.split('-')[1]
    const date = end_date.split('-')[2]
    // const year = end

    const hour = 24 - currentHour;


    let today = currentDate == date && currentMonth == month
    let upcoming = date < currentDate && (currentMonth == month || currentMonth < month)
    let fast = date < currentDate && (currentMonth == month  || currentMonth > month)

    return (
        <div className='col-sm-4'>
            <Card className='challenge-card border-0 p-0'>
                <img width={'100%'} style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} src={img} alt="" />
                <div className='py-4'>
                    <div role='button'
                        onClick={() => navigate(`/challenge-details/${_id}`)}
                    >
                        {today && <h6 className='today-text'>Today</h6>}
                        {upcoming && <h6 className='upcoming-text'>Upcoming</h6>}
                        {fast && <h6 className='fast-text'>Fast</h6>}

                        <h5 style={{ fontSize: '15px', width: '70%', margin: '7px auto' }}>{challenge_name}</h5>
                        <h6 className='mb-0 mt-3'>Start in</h6>
                        
                        {
                            today ? <p>0 : {hour}: 00</p> : <p style={{margin: '5px 0', fontSize: '15px'}}>0 : 12: 00</p>
                        }
                    </div>
                    <button style={{ borderRadius: '8px' }} className='btn btn-success'>Participate Now</button>
                </div>
            </Card>
        </div>
    );
};

export default ChallengesCards;