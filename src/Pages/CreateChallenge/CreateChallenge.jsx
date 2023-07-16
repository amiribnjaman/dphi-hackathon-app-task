import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Challenge.css'
import { toast } from 'react-toastify';

const CreateChallenge = () => {
    // Form handle function
    const handleFormSubmit = e => {
        e.preventDefault();

        // fileds value
        const challenge_name = e.target.challenge_name.value
        const start_date = e.target.start_date.value
        const end_date = e.target.end_date.value
        const description = e.target.description.value
        const level = e.target.select_level.value

        // imgbb api key
        const imgApi_key = '023b6c6c8013115f542e3d99977afbfd'
        const image = e.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)

        if (challenge_name && start_date && end_date && description && level && image) {
            // Upload image to imgbb through imgbb api
            const url = `https://api.imgbb.com/1/upload?key=${imgApi_key}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const img = result.data.url
                        const data = {
                            challenge_name,
                            start_date,
                            end_date,
                            description,
                            level,
                            img
                        }
                        // Upload data into database
                        fetch('https://dphi-server.onrender.com/challenge', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged === true) {
                                    toast.success('Challenge created Successfully!')
                                }
                            })
                    }
                    e.target.reset()
                })
        } else {
            toast.warning('Please, Fill the form to create a challenge!')
        }
    }

    return (
        <div>
            <div className='create-challenge-heading'>
                <div className='container d-flex' style={{ paddingTop: '32px', width: '1000px', margin: '0 auto' }}>
                    <h2>Create Challenge</h2>
                </div>
            </div>
            <div
                style={{ width: '1000px', margin: '0 auto' }}
                className="create-challenge-form container mt-4 mb-5">
                <Form
                    onSubmit={handleFormSubmit}

                >
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>Challenge Name</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control
                                    className='' name='challenge_name' type="text" placeholder="Challenge Name" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>Start Date</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control
                                    name='start_date' type="date" placeholder="Start Date- 22/2/22" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>End Date</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control
                                    name='end_date' type="date" placeholder="Enter email" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='small'>Description</Form.Label>
                        <div className="row">
                            <div className="col-sm-6">
                                <Form.Control
                                    name='description' as="textarea" rows={3} />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formFileSm" className="mb-3 mt-4">
                        <Form.Label className='small'>Image</Form.Label>
                        <div class='row'>
                            <div className="col-sm-3">
                                <Form.Control
                                    name='image' type="file" size="sm" />
                            </div>
                        </div>
                    </Form.Group>


                    <Form.Group controlId="formFileSm" className="mb-3 mt-4">
                        <Form.Label className='small'>Level</Form.Label>
                        <div class='row'>
                            <div className="col-sm-3">
                                <Form.Select
                                    size="sm" name='select_level'>
                                    <option value='easy'>Easy</option>
                                    <option value='medium'>Medium</option>
                                    <option value='hard'>Hard</option>
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