import React from 'react';
import SingleSummary from './SingleSummary';
import AiIcon from '../../../assets/icons/Group 1000002515.svg'

const Summary = () => {
    return (
        <div className='summary d-flex align-items-center'>
            <div className='custom-width d-flex align-items-center justify-content-between summary-box'>
                <div className='summary-card'>
                    <SingleSummary
                        icon={AiIcon}
                        title='100K+'
                        shortDesc='Ai model submissions'
                    />
                </div>
                <div className='summary-card'>
                    <SingleSummary
                        icon={AiIcon}
                        title='50K+'
                        shortDesc='Ai model submissions'
                    />
                </div>
                <div className=''>
                    <SingleSummary
                        icon={AiIcon}
                        title='100+'
                        shortDesc='Ai model submissions'
                    />
                </div>
            </div>
        </div>
    );
};

export default Summary;