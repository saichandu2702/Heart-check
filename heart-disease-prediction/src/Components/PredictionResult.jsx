
import React from 'react';
import './PredictionResult.css'

const PredictionResult = ({ prediction }) => (
    <div>
        <h2>Prediction Result</h2>
        <p className='heading'>{prediction === 1 ? "High risk of heart disease" : "Low risk of heart disease"}</p>
    </div>
);

export default PredictionResult;
