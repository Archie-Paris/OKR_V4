const express = require('express');
const app = express();
const Rout = require('./src/routes/Rout');

const PORT = process.env.PORT || 2391;

app.use(express.json())
app.use('/auto',Rout)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});