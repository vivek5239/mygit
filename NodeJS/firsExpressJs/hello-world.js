import express from 'express';
const app = express();
const port = 3000;
app.get('/', (_req, res) => {
    res.send('Hello World, from express');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));