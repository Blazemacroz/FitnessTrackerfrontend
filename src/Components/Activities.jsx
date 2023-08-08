import React from "react";
import ActivityCard from "./ActivityCard";

const Activities = ({allActivities}) => {
    <div id= "Activities">
      <h1>Activities</h1>
      <div className="routines-activities">
        {allActivities.map((activity, index) => (
          <ActivityPost key={activity.id} activity={activity}/>
        ))}
    </div>
  </div>
  
}

export default Activities;