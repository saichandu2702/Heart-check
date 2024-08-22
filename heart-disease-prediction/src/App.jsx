// src/App.jsx
import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';

const App = () => {
    const [prediction, setPrediction] = useState(null);

    const handlePredict = async (formData) => {
        const response = await fetch('/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        setPrediction(result.prediction);
    };

    return (
        <div>
            <h1>Heart Disease Prediction</h1>
            <PredictionForm onPredict={handlePredict} />
            {prediction && <PredictionResult prediction={prediction} />}
        </div>
    );
};

export default App;
                                