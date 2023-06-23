import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use(express.static('dist'))
