const axios = require('axios');
const api = require('forexrateapi');
const API_KEY = '50e791dfde810e466c5c7b4ac915ce6b';

api.setAPIKey(API_KEY);

async function fetchForexRates() {
  try {
    const response = await axios.get('https://api.forexrateapi.com/v1/latest?api_key=50e791dfde810e466c5c7b4ac915ce6b');
    const forexData = response.data;

    console.log('Fetched Forex Rates:', forexData);
  } catch (error) {
    console.error('Error fetching Forex Rates:', error);
  }
}

module.exports = fetchForexRates;
