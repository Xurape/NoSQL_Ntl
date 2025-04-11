const express = require('express')
const app = express()

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const port = 3000

app.use(express.static('static'))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})