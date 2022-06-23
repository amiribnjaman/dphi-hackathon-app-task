import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ChallengesCards from './ChallengesCards';

const ExploreChallenges = () => {
    const [filterShow, setFilterShow] = useState(false)

    return (
        <div>
            <div className='explore-top-part text-center py-5'>
                <div className='text-white'>
                    <h2>Explore Challenges</h2>

                    <div className='row mt-4 search-section'>
                        <div className='col-sm-9'>
                            <Form.Control sm='sm' type="text" placeholder="Search" />
                        </div>
                        <div className='col-sm-3' style={{ zIndex: '50' }}>
                            <div className='filter-section' role='button'>
                                <div
                                    onClick={() => setFilterShow(!filterShow)}
                                    className=' d-flex align-items-center' style={{ height: '100%' }}>
                                    <p className='px-2 m-0'>Filter</p>
                                </div>
                                <form action="/action_page.php" className={`${filterShow ? 'd-block' : 'd-none'} filter-options mt-2`}>
                                    <div className="status-select-part">
                                        <p className='small'>Status</p>
                                        <div className="input-box">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> I have a bike</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> I have a bike</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> I have a bike</label><br />
                                        </div>
                                    </div>
                                    <div className="level-select-part">
                                        <p className='small'>Status</p>
                                        <div className="input-box">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> I have a bike</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> I have a bike</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> I have a bike</label><br />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Explore section's challenges parts */}
            <div className='text-white explore-challenges-part'>
                <ChallengesCards />
            </div>
        </div>
    );
};

export default ExploreChallenges;