import React from "react";
import RoutineCard from "./RoutineCard";
import CreateRoutine from "./CreateRoutine";

const Routines = ({ MyRoutines, setMyRoutine, allRoutines, setAllRoutines, currentUser, token }) => {
  return (
    <div id="routine">
        <h1>Routines</h1>
      {token ? 
        <CreateRoutine MyRoutines={MyRoutines}
    setMyRoutine={setMyRoutine}
    allRoutines={allRoutines}
    setAllRoutines={setAllRoutines}
    currentUser={currentUser}
    token={token} />
  : null}
  <div className="routine-activities">
          {
          allRoutines.map ((routine,index) => {
            return (
              <RoutineCard key={Routine.id}
              routine={Routines}
              MyRoutines={MyRoutines}
              setMyRoutines={setMyRoutines}
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
              currentUser={currentUser}
              token={token} />

            )
          }
          
          )
        }
    </div>

  </div>
  )
}

export default Routines;