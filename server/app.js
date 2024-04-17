/*const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port
${port}`));
*/


const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');


app.use(cors({origin: true, credentials: true}));
app.use(express.json({ extended: false })); // added this line to fix PUT request
app.use('/api/items', items);
app.get('/', (req, res) => res.send('Hello world!'));


const conn_str = 'mongodb+srv://specter:ayIrmSeFOBvimw6f@mongoexample.uij9ngg.mongodb.net/?retryWrites=true&w=majority&appName=MongoExample'
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('Connected to MongoDB');

})
.catch(err => {
    console.log(`Error connecting to MongoDB: ${err}`)
});