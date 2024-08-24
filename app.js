const express = require('express');
const path = require('path');
const con = require('./Config/config1.js')
const noteRoute = require('./routes/noteRoute');
const app = express();
const cors = require('cors');
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.use('/', noteRoute);
app.listen(3000, () => {
  console.log('Dashboard Server is up on port 3000');
});
