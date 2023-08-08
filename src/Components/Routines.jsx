import React from "react";

const Routines = ({ allRoutines }) => {
  return (
    <div>
        <h1>Routines</h1>
        {
          allRoutines.map ((routine) => {
            return (
              <div key={routine.id}>
                  <h2>{routine.name}</h2>
                  <h3>{routine.creatorName}</h3>

                  <p>{routine.goal}</p>

                </div>

            )
          }
          
          )
        }
    </div>
  )
}

export default Routines;