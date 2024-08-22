from flask import Flask, request, jsonify
import numpy as np
import joblib  # Updated import for joblib

app = Flask(__name__)

# Load your pre-trained model (replace 'your_model.pkl' with your actual model file)
model = joblib.load('your_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Extract the features from the request data
    features = [
        int(data['age']),
        int(data['sex']),
        int(data['cp']),
        int(data['trestbps']),
        int(data['chol']),
        int(data['thalach']),
        int(data['exang']),
        float(data['oldpeak']),
        int(data['ca']),
        int(data['thal'])
    ]
    # Convert the features into a numpy array
    features = np.array(features).reshape(1, -1)

    # Predict using the model
    prediction = model.predict(features)[0]

    # Return the prediction result
    return jsonify({"prediction": int(prediction)})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
