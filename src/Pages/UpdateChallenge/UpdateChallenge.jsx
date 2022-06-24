import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../CreateChallenge/Challenge.css'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const UpdateChallenge = () => {
    const { id } = useParams()
    const [challengeDetails, setChallengeDetails] = useState({})

    const [name, setName] = useState('')
    const [s_date, setS_Date] = useState('')
    const [e_date, setE_Date] = useState('')
    const [desc, setDesc] = useState('')
    const [updatelevel, setUpdateLevel] = useState('')
    const [imgbbLink, setImgbbLink] = useState('')

    const { challenge_name, img, start_date, end_date, description, level } = challengeDetails

    useEffect(() => {
        fetch(`https://secret-taiga-12395.herokuapp.com/challenge/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChallengeDetails(data)
            })
    }, [id])

    // Form handle function
    const handleUpdateForm = e => {
        e.preventDefault();
        const challengeName = e.target.challenge_name.value
        const startDate = e.target.start_date.value
        const endDate = e.target.end_date.value
        const upDescription = e.target.description.value
        const upLevel = e.target.select_level.value

        // imgbb api key
        const imgApi_key = '023b6c6c8013115f542e3d99977afbfd'
        const image = e.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)

        if (name || s_date || e_date || desc || updatelevel || image || updatelevel) {
            // Upload image to imgbb through imgbb api
            const url = `https://api.imgbb.com/1/upload?key=${imgApi_key}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => setImgbbLink(result.data.url))

            const data = {
                challenge_name: challengeName,
                start_date: startDate,
                end_date: endDate,
                description: upDescription,
                level: upLevel,
                img: imgbbLink || img
            }
            // Upload data into database
            fetch(`https://secret-taiga-12395.herokuapp.com/challenge/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.success('Challenge updated Successfully!')
                    }
                })
        }

    }

    return (
        <div>
            <div className='create-challenge-heading'>
                <div className='container d-flex' style={{ paddingTop: '32px', width: '1000px', margin: '0 auto' }}>
                    <h2>Update Challenge</h2>
                </div>
            </div>
            <div
                style={{ width: '1000px', margin: '0 auto' }}
                className="create-challenge-form container mt-4 mb-5">
                <Form
                    onSubmit={handleUpdateForm}
                >
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>Challenge Name</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control
                                    onChange={(e) => setName(e.target.value)}
                                    value={name || challenge_name}
                                    className='' name='challenge_name' type="text" placeholder="Challenge Name" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>Start Date</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control
                                    onChange={(e) => setS_Date(e.target.value)}
                                    value={s_date || start_date}
                                    name='start_date' type="date" placeholder="Start Date- 22/2/22" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='small'>End Date</Form.Label>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Control
                                    onChange={(e) => setE_Date(e.target.value)}
                                    value={e_date || end_date}
                                    name='end_date' type="date" placeholder="Enter email" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='small'>Description</Form.Label>
                        <div className="row">
                            <div className="col-sm-6">
                                <Form.Control
                                    onChange={(e) => setDesc(e.target.value)}
                                    value={desc || description}
                                    name='description' as="textarea" rows={3} />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formFileSm" className="mb-3 mt-4">
                        <Form.Label className='small'>Image</Form.Label>
                        <div class='row'>
                            <div className="col-sm-3">
                                <img width='150' className='mb-2' src={img} alt="" />
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
                                    value={updatelevel || level}
                                    onChange={(e) => setUpdateLevel(e.target.value)}
                                    size="sm" name='select_level'>
                                    <option value='easy'>Easy</option>
                                    <option value='medium'>Medium</option>
                                    <option value='hard'>Hard</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Form.Group>

                    <Button variant="" type="submit" className='mt-2' style={{ borderRadius: '8px', padding: '6px 15px', color: '#fff', background: '#44924C' }}>
                        Update Challenge
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateChallenge;