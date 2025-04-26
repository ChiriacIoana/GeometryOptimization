import React from "react";

const Media = () => {
  return (
    <div className="media-container">
      <div className="media-item">
        <video controls poster="./before-preview.jpg">
          <source src="./BeforeStructureEdited.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="sub-vid-title">Structura Inițială</p>
      </div>
      <div className="media-item">
        <video controls poster="./optimized-preview.jpg">
          <source src="./OptimizedStructureEdited.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="sub-vid-title">Structura Optimizată Geometric</p>
      </div>
    </div>
  );
};

export default Media;
