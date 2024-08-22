import React, { useState } from 'react';
import './PredictionForm.css';

const PredictionForm = ({ onPredict }) => {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        ca: '',
        thal: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPredict(formData);
    };

    return (
        <div className="form-container">
            <form className="prediction-form" onSubmit={handleSubmit}>
                <h2 className="form-heading">Heart Disease Prediction</h2>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Sex:</label>
                    <select name="sex" value={formData.sex} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="1">Male</option>
                        <option value="0">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Chest Pain Type (CP):</label>
                    <input type="number" name="cp" value={formData.cp} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Resting Blood Pressure (trestbps):</label>
                    <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Serum Cholesterol (chol):</label>
                    <input type="number" name="chol" value={formData.chol} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Maximum Heart Rate Achieved (thalach):</label>
                    <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Exercise Induced Angina (exang):</label>
                    <select name="exang" value={formData.exang} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Oldpeak:</label>
                    <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Number of Major Vessels (ca):</label>
                    <input type="number" name="ca" value={formData.ca} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Thalassemia (thal):</label>
                    <input type="number" name="thal" value={formData.thal} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-button">Predict</button>
            </form>
        </div>
    );
};

export default PredictionForm;
