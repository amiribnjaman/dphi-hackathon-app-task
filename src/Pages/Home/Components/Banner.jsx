import React from 'react';
import '../Home.css'
import RocketImg from '../../../assets/icons/PicsArt_04-14-04.42 1.svg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container '>
                <div className='row d-flex text-white '>
                    <div className='col-sm-7 d-flex'>
                        <div className='br my-2 mx-5'></div>
                        <div>
                        <h1 className=''>Accelerate Innovation </h1>
                          <h1 className=''>with Global AI Challenges</h1>
                        <p className='my-4 small'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                        </p>
                        <div className="btn btn-light mt-3 rounded">Create Challenge</div>
                        </div>
                    </div>
                    <div  className='col-sm-5 text-center'>
                        <img src={RocketImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;