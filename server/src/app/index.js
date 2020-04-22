const express = require('express');

const app = express();


app.get('/api', (req, res) => res.json('Hello world from api!'));
app.get('/api/users', (req, res) => res.json('Lista de usuarios...'));


app.listen(3000, () => console.log('Server listening on port 3000'));
