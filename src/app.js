require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {

    return response.json({ok: true})
});

app.listen(process.env.PORT, () => {
    console.log('Server up and running ');
})