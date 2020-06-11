const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: path.join(__dirname, '/config.env')
});

const app = require('./server');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`App is running in port ${PORT}`);
});