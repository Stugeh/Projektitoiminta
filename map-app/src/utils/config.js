require('dotenv').config();

// Fetches the api key from environment variables.
// To add your key you need to create a file
// called .env in the root directory of the app.
const MAP_KEY = process.env.REACT_APP_MAPS_KEY;
module.exports = {MAP_KEY};

