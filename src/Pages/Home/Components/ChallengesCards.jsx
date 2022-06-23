import React from 'react';
import ChallengesSingleCard from './ChallengesSingleCard';
import CardImg1 from '../../../assets/cardimage/Group 1000002466.png'

const ChallengesCards = () => {
    return (
        <div className='challenge-cards-section py-5'>
            <div className='custom-width'>
                <div className='row gy-4 gx-4 text-black text-center'>
                    <div className='col-sm-4'>
                        <ChallengesSingleCard
                            img={CardImg1}
                            desc='Data Science Bootcamp - Graded Datathon'
                        />
                    </div>
                    <div className='col-sm-4'>
                        <ChallengesSingleCard
                            img={CardImg1}
                            desc='Data Science Bootcamp - Graded Datathon'
                        />
                    </div>
                    <div className='col-sm-4'>
                        <ChallengesSingleCard
                            img={CardImg1}
                            desc='Data Science Bootcamp - Graded Datathon'
                        />
                    </div>
                    <div className='col-sm-4'>
                        <ChallengesSingleCard
                            img={CardImg1}
                            desc='Data Science Bootcamp - Graded Datathon'
                        />
                    </div>
                    <div className='col-sm-4'>
                        <ChallengesSingleCard
                            img={CardImg1}
                            desc='Data Science Bootcamp - Graded Datathon'
                        />
                    </div>
                    <div className='col-sm-4'>
                        <ChallengesSingleCard
                            img={CardImg1}
                            desc='Data Science Bootcamp - Graded Datathon'
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ChallengesCards;