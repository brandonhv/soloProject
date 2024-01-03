// We are seeting up our express modules, so we can use them to take care of the request
// we are also setting up the path(whaat is the reason  we are setting up the path??)
// the port is a variable with the number that we can use as port, to where we are goin to listen
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// we are accepting a get request, so we can sen the file, of our server that has the index.html
app.get('/', (req, res) => {

    // when we get the get reques, we will serve whe index.html file to our client inmedialty, to they can see the homepage
    // console.log('This is __dirname: ', __dirname);
    res.sendFile(path.join(__dirname, './index.html'));
}
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));