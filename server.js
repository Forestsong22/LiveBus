const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/public'))


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/busNumber', (req, res)=> {
    res.sendFile(__dirname + '/templates/busNumber.html')
});

app.get('/busName', (req, res)=> {
    res.sendFile(__dirname + '/templates/busName.html')
});

app.get('/myFavorite', (req, res)=> {
    res.sendFile(__dirname + '/templates/myFavorite.html')
});


app.listen(port, () => {
    console.log('서버 작동중 ');
});