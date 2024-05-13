const express = require('express');
const app = express();
const PORT = 3000;

// Define port for Express
app.listen(PORT, () => {
    console.log(`Now live on port ${PORT}`)
})

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import my routes
const usersRoutes = require('./routes/usersRoutes')
app.use('/api/users', usersRoutes)