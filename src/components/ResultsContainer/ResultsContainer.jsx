import React from 'react';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameCards = suggestedNames.map((suggestedName) => {
        return (
            <div>
                <p>{suggestedName}</p>
            </div>
        );
    });

    return <div className="results-container">{suggestedNameCards}</div>;
};

export default ResultsContainer;
