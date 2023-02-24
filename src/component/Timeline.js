import React from "react";
import Timelinedata from './data';
import Done from './done';
import '../main.css' 

const Timeline = () =>
    Timelinedata.length > 0 && (
        <div className="timeline-container">
            {Timelinedata.map((data, idx) => (
                <Done className='' data={data} key={idx} />
            ))}
        </div>
    );
    
export default Timeline;