const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/EmployeeRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (request, response) => {
  response.send("Employee API is running...");
});

// Employee Routes
app.use("/employees", employeeRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});