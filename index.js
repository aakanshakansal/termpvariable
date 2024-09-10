const express = require("express");
const cors = require("cors"); // Import the CORS package
const app = express();

const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// In-memory variable to store data
let storedData = {
  variable: null,
};

// GET endpoint to retrieve the stored data
app.get("/get-data", (req, res) => {
  res.json({
    success: true,
    data: storedData.variable,
  });
});

// POST endpoint to update the stored data
app.post("/store-data", (req, res) => {
  const { variable } = req.body;

  if (variable === undefined || variable === null) {
    return res.status(400).json({
      success: false,
      message: "Variable data is required",
    });
  }

  // Update the stored data
  storedData.variable = variable;

  res.json({
    success: true,
    message: "Data stored successfully",
    data: storedData.variable,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
