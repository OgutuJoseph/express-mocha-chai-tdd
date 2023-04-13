const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// configs
const port = process.env.PORT;

/** Middlewares */
app.use(express.json()); 

/** Routers */
// ##

/** Routes */
app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
});