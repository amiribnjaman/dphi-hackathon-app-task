import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import './Details.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { challenge_name, start_date, description, level } = details

    // load the data 
    useEffect(() => {
        fetch(`https://secret-taiga-12395.herokuapp.com/challenge/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data)
            })
    }, [id])


    // delete button
    const handleDeleteChallenge = () => {
        fetch(`https://secret-taiga-12395.herokuapp.com/challenge/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    handleClose();
                    <Navigate to='/' />
                }
            })
    }

    return (
        <div>
            <div className='details-top '>
                <div className="custom-width details-heading text-white">
                    <div>
                        <div>
                            <p className='d-inline-block font-bold rounded py-1 px-4 bg-warning text-dark'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                                <span className='d-inline-block mx-2'>Starts on {start_date} 09:00 PM (India Standard Time)</span></p>
                            <h2 className='my-2'>{challenge_name}</h2>
                            <p className='small my-3'>Identify the class to which each butterfly belongs to
                            </p>
                            <h5 className='mt-3 rounded small bg-white d-inline-block text-dark px-4 py-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                                    <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
                                </svg>
                                <span className='d-inline-block mx-2'>
                                    {level === 'medium' && 'Medium'}
                                    {level === 'easy' && 'Easy'}
                                    {level === 'hard' && 'Hard'}
                                </span></h5>

                        </div>
                    </div>
                </div>
            </div>
            <div className="details-body">
                <div className='shadow heading'>
                    <div className="custom-width d-flex justify-content-between align-items-center">
                        <div className=''>
                            <h6 className='font-bolder m-0 p-3 ' style={{ borderBottom: '2px solid #44924C' }}>Overview</h6>
                        </div>
                        <div>
                            <button
                                onClick={() => navigate(`/edit-challenge/${id}`)}
                                style={{ marginRight: '8px' }} className='btn btn-success d-inline-block'>
                                Edit
                            </button>

                            <Button variant='outline-danger' className='btn btn-outline-danger' onClick={handleShow}>
                                Delete
                            </Button>
                            <>

                                {/* Confirmation modal */}
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Confirm Delete</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className='text-center'>Are you sure you want to delete this challenge!</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button
                                            variant="danger" onClick={handleDeleteChallenge}>
                                            Yes, I'm Sure.
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        </div>
                    </div>
                </div>
                <div className="body-text">
                    <div className="custom-width py-5">
                        <p className='' style={{ fontSize: '15px' }}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;