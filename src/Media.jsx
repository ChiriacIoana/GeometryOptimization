import React from "react";

const Media = () => {
  return (
    <div className="media-container">
      <div className="media-item">
        <video controls>
          <source  src="/GeometryOptimization.github.io/BeforeStructureEdited.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Structura Inițilă</p>
      </div>
      <div className="media-item">
        <video controls>
          <source src="/GeometryOptimization.github.io/OptimizedStructureEdited.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Structura Optimizată Geometric</p>
      </div>
    </div>
  );
};

export default Media;