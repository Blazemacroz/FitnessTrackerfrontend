import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { updateRoutine, deleteRoutine } from "api/ajax-helpers";

const RoutineCard = ({ routine, MyRoutine, setMyRoutines, allRoutines, setAllRoutines, currentUser, token }) => {
    const [name, setName] = useState(routine.name);
    const [goal, setGoal] = useState(routine.goal);
    const [isPublic, setIsPublic] = useState(routine.isPublic);
    const [isUpdating, setIsUpdating] = useState (false);

    const handleUpdate = async () => {
      const routineId = routine.id;
      const result = await updateRoutine({ token, routineId, name, goal, isPublic });
      if (result.id) {
          alert("Updated Routine Successfully");
          result.creatorName = currentUser.username;
          const newAllRoutines = allRoutines.filter((el) => {
              return el.id !== routine.id;
          })
          const newMyRoutines = MyRoutines.filter((el) => {
              return el.id !== routine.id;
          })
          setAllRoutines([result, ...newAllRoutines]);
          setMyRoutines([result, ...newMyRoutines]);
          setIsUpdating(false);
      }
  }

  const handleDelete = async () => {
    const routineId = routine.id;
    const result = await deleteRoutine({ token, routineId });
    if (result.id) {
        alert("You've successfully deleted your routine");
        const newAllRoutines = allRoutines.filter((el) => {
            return el.id !== routine.id;
        })
        const newMyRoutines = MyRoutines.filter((el) => {
            return el.id !== routine.id;
        })
        setAllRoutines(newAllRoutines);
        setMyRoutines(newMyRoutines);
    }
}

    return (
        <Card bg="light" className="mb-2" border="primary">
            <Card.Header>{routine.creatorName}</Card.Header>
            <Card.Body>
                <Card.Title>{routine.name}</Card.Title>
                <Card.Text>{routine.goal}</Card.Text>
                {
                    routine.activities ?
                        <>
                            <Card.Text><strong>Activities:</strong></Card.Text>
                            {routine.activities.map((activity, index) => {
                                return (
                                    <Card key={activity.id}>
                                        <Card.Body>
                                            <Card.Title>{activity.name}</Card.Title>
                                            <Card.Text>{activity.description}</Card.Text>
                                            <Card.Text>Set Count: {activity.count}</Card.Text>
                                            <Card.Text>Duration: {activity.duration}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </> : null
                }
                {
                    isUpdating ?
                        <Form className="m-4 p-3 border border-3 border-primary rounded text-bg-light"
                            onSubmit={(event) => {
                                event.preventDefault();
                                handleUpdate();
                            }}>
                            <h4>Update Routine</h4>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    id="name"
                                    type="text"
                                    required
                                    value={name}
                                    placeholder="name"
                                    onChange={(event) => {
                                        setName(event.target.value);
                                    }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="goal">Goal</Form.Label>
                                <Form.Control
                                    id="goal"
                                    type="text"
                                    required
                                    value={goal}
                                    placeholder="goal"
                                    onChange={(event) => {
                                        setGoal(event.target.value);
                                    }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label html="isPublic">Public</Form.Label>
                                <Form.Check
                                    id="isPublic"
                                    type="checkbox"
                                    checked={isPublic}
                                    onChange={(event) => {
                                        setIsPublic(!isPublic);
                                    }} />
                            </Form.Group>
                            <Button className="m-2" variant="primary" type="submit">Update</Button>
                        </Form>
                        : null
                }
            </Card.Body>
        </Card>
    )
}

 export default RoutineCard;