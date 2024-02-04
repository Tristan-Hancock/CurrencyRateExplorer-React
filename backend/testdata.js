const axios = require('axios');
const api = require('forexrateapi');
const API_KEY = '50e791dfde810e466c5c7b4ac915ce6b';

api.setAPIKey(API_KEY);

async function testForexAPI() {
  try {
    const response = await axios.get('https://api.forexrateapi.com/v1/latest?api_key=50e791dfde810e466c5c7b4ac915ce6b');
    const forexData = response.data;
    const symbols = await api.fetchSymbols();
    const change = await api.change('2021-04-05', '2021-04-06', 'USD', ['AUD', 'CAD', 'GBP', 'JPY']);



    console.log('Fetched Forex Rates:', forexData);
    console.log('symbols', symbols)
    console.log('change', change )
  } catch (error) {
    console.error('Error fetching Forex Rates:', error);
  }
}

testForexAPI();
