import React, { useState } from "react";
import { postRoutine } from "../api/ajax-helpers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateRoutine = () => {
    const [isPublic, setIsPublic] = useState(false);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    

    const handleSubmit = async () => {
      const result = await postRoutine({ token, name, goal, isPublic });
      if (result.id) {
          result.creatorName = currentUser.username;
          alert("Successfully created a routine!");
          setAllRoutines([result, ...allRoutines]);
          setMyRoutines([result, ...myRoutines]);
          setName('');
          setGoal('');
          setIsPublic(true);
      } else {
          alert("Failed creating routine");
      }
  }


    return (
        <Form className="form m-4 p-3 border border-3 border-primary rounded text-bg-light"
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
            <h2>Create a Routine</h2>
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
                <Form.Label html="goal">Goal</Form.Label>
                <Form.Control
                    id="goal"
                    type="text"
                    required
                    value={goal}
                    placeholder="goal"
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
            <Button className="m-2" variant="success" type="submit">Create</Button>
        </Form>
      
    )
}

export default CreateRoutine;