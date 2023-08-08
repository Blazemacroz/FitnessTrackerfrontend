import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateRoutine = () => {
    const [isPublic, setIsPublic] = useState(false);
    const [name, setName] = useState('');
    const [goal, setTarget] = useState('');
    

    return (
        <Form className="form m-4 p-3 border border-3 border-primary rounded text-bg-light"
            onSubmit={(event) => {
                event.preventDefault();
            }}>
            <h2>Create Routine</h2>
            <Form.Group>
                <Form.Label html="name">Name</Form.Label>
                <Form.Control
                    id="name"
                    type="text"
                    required
                    value={name}
                    placeholder="name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label html="target">Target</Form.Label>
                <Form.Control
                    id="target"
                    type="text"
                    required
                    value={goal}
                    placeholder="target"
                    onChange={(event) => {
                        setTarget(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label html="isPublic">Public</Form.Label>
                <Form.Check
                    id="isPublic"
                    type="checkbox"
                    onChange={(event) => {
                        setIsPublic(!isPublic);
                    }}
                />
            </Form.Group>
        </Form>
    )
}

export default CreateRoutine;