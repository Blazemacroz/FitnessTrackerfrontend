import React from "react";
import ActivityCard from "./ActivityCard";
import CreateActivity from "./CreateActivity";

const Activities = ({allActivities}) => {
    <div id= "Activities">
      <h1>Activities</h1>
      <CreateActivity/>
      <div className="routines-activities">
        {allActivities.map((activity, index) => (
          <ActivityCard key={activity.id} activity={activity}/>
        ))}
    </div>
  </div>
  
}

export default Activities;