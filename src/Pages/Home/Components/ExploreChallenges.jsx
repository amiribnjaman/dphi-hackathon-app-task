import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import ChallengesCards from './ChallengesCards';

const ExploreChallenges = () => {
    const [filterShow, setFilterShow] = useState(false)
    const [filteredValue, setFilteredValue] = useState([])


    console.log(typeof filteredValue)
    
    useEffect(() => {
        console.log(filteredValue);
    }, [filteredValue])

    const handleAllChecked = (e) => {
        const checked = e.target.checked
        const allValue = e.target.value
        if (checked) {
            setFilteredValue([...filteredValue, allValue])
        }
    }
    const handleActiveChecked = (e) => {
        const checked = e.target.checked
        const activeValue = e.target.value
        if (checked) {
            setFilteredValue([...filteredValue, activeValue])
        }
    }
    const handleUpcomingChecked = (e) => {
        const checked = e.target.checked
        const upcomingValue = e.target.value
        if (checked) {
            setFilteredValue([...filteredValue, upcomingValue])
        }
    }
    const handleFastChecked = (e) => {
        const checked = e.target.checked
        const fastValue = e.target.value
        if (checked) {
            setFilteredValue([...filteredValue, fastValue])
        }
    }

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
                                    <p className='px-2 m-0 filter-text d-flex justify-content-between'><span>Filter</span>
                                        <span>
                                            {filterShow ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                                                <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                            </svg>}
                                        </span>
                                    </p>
                                </div>
                                <form action="/action_page.php" className={`${filterShow ? 'd-block' : 'd-none'} filter-options mt-2`}>
                                    <div
                                        className="status-select-part">
                                        <p className='small'>Status</p>
                                        <div
                                            className="input-box">
                                            <input
                                                onChange={handleAllChecked}
                                                type="checkbox" id="all" name="all" value="all" />
                                            <label for="all">All</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                onChange={handleActiveChecked}
                                                type="checkbox" id="active" name="active" value="active" />
                                            <label for="active">Active</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                onChange={handleUpcomingChecked}
                                                type="checkbox" id="upcoming" name="upcoming" value="upcoming" />
                                            <label for="upcoming">Upcoming</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                onChange={handleFastChecked}
                                                type="checkbox" id="fast" name="fast" value="Bike" />
                                            <label for="fast">Fast</label><br />
                                        </div>
                                    </div>
                                    <div className="level-select-part">
                                        <p className='small'>Level</p>
                                        <div className="input-box">
                                            <input
                                                type="checkbox" id="easy" name="easy" value="easy" />
                                            <label for="easy">Easy</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input type="checkbox" id="medium" name="medium" value="medium" />
                                            <label for="medium">Medium</label><br />
                                        </div>
                                        <div className="input-box">
                                            <input type="checkbox" id="hard" name="hard" value="hard" />
                                            <label for="hard">Hard</label><br />
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