const routes = require('./routes');

const express = require('express'),
    app = express(),
    cors = require('cors'),
    port = 8000;


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, () => console.log(`Listening on port: ${port}`));