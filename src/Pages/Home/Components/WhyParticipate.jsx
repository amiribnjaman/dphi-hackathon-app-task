import React from 'react';
import WhyParticipateSingleCard from './WhyParticipateSingleCard';
import NoteBook from '../../../assets/icons/carbon_notebook-reference.svg'

const WhyParticipate = () => {
    return (
        <div className='custom-width my-5'>
            <h2 className='text-center'>Why Participate in <span className='text-success'>AI Challenges?</span> </h2>

            <div className="row row-cols-sm-2">
                <WhyParticipateSingleCard
                    icon={NoteBook}
                    title='Prove your skills'
                    description='Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
                    '
                />
                <WhyParticipateSingleCard
                    icon={NoteBook}
                    title='Prove your skills'
                    description='Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
                    '
                />
                <WhyParticipateSingleCard
                    icon={NoteBook}
                    title='Prove your skills'
                    description='Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
                    '
                />
                <WhyParticipateSingleCard
                    icon={NoteBook}
                    title='Prove your skills'
                    description='Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
                    '
                />
            </div>

        </div>
    );
};

export default WhyParticipate;