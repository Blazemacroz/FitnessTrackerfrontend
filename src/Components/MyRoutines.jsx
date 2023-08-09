import React from "react";
import RoutineCard from "./RoutineCard";
import CreateRoutine from "./CreateRoutine";
import Routines from "./Routines";

const MyRoutines = ({MyRoutines, setMyRoutine, allRoutines, setAllRoutines, currentUser, token }) => {
  return (
    <div id="MyRoutines">
    <h1>
      My Routines
    </h1>

    <CreateRoutine MyRoutines={MyRoutines}
    setMyRoutine={setMyRoutine}
    allRoutines={allRoutines}
    setAllRoutines={setAllRoutines}
    currentUser={currentUser}
    token={token} />

  <div className="routine-activities">
    {
      MyRoutines.map((Routine) => {
          return ( <RoutineCard key={Routine.id}
          routine={Routines}
          MyRoutines={MyRoutines}
          setMyRoutines={setMyRoutines}
          allRoutines={allRoutines}
          setAllRoutines={setAllRoutines}
          currentUser={currentUser}
          token={token} />
          )
      })
    }
      </div> 
    </div>
  )

  }

export default MyRoutines;