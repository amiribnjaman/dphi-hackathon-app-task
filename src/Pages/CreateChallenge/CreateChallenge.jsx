import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Challenge.css'

const CreateChallenge = () => {
    return (
        <div>
            <div className='create-challenge-heading'>
                <div className='container d-flex' style={{ paddingTop: '32px' }}>
                    <h2>Create Challenge</h2>
                </div>
            </div>
            <div className="crate-challenge-form container mt-4 mb-5">
                <Form>
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>Challenge Name</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control className='' type="text" placeholder="Challenge Name" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>Start Date</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control className='' type="date" placeholder="Start Date- 22/2/22" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>End Date</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control className='' type="date" placeholder="Enter email" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='small'>Description</Form.Label>
                        <div className="row">
                            <div className="col-sm-6">
                                <Form.Control as="textarea" rows={3} />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formFileSm" className="mb-3 mt-4">
                        <Form.Label className='small'>Image</Form.Label>
                        <div class='row'>
                            <div className="col-sm-3">
                                <Form.Control type="file" size="sm" />
                            </div>
                        </div>
                    </Form.Group>


                    <Form.Group controlId="formFileSm" className="mb-3 mt-4">
                        <Form.Label className='small'>Level</Form.Label>
                        <div class='row'>
                            <div className="col-sm-3">
                                <Form.Select size="sm">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Form.Group>

                    <Button variant="" type="submit" className='mt-2' style={{ borderRadius: '8px', padding: '6px 15px', color: '#fff', background: '#44924C' }}>
                        Create Challenge
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CreateChallenge;