import joblib
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Example training data (replace with your actual data)
X_train = np.array([[1, 2, 3, 4], [2, 3, 4, 5]])  # Replace with actual training features
y_train = np.array([0, 1])  # Replace with actual labels

# Initialize and train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'model.pkl')
