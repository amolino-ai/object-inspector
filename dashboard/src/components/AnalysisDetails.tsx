//AnalysisDetails.tsx
import React, { useState } from 'react';

const AnalysisDetails: React.FC = () => {
  const [analysis, setAnalysis] = useState<any>(null);

  const fetchAnalysis = (id: string) => {
    console.log('Fetching analysis for ID:', id);
    // Fetch analysis logic here
  };

  return (
    <div className="analysis-details">
      <h2>Analysis Details</h2>
      {analysis ? (
        <div>
          <p>ID: {analysis.id}</p>
          <p>Description: {analysis.description}</p>
          <button onClick={() => console.log('Download analysis')}>Download</button>
        </div>
      ) : (
        <p>Select an analysis to see details.</p>
      )}
    </div>
  );
};

export default AnalysisDetails;
