const testForexAPI = require('./testdata.js');

// This is an IIFE (Immediately Invoked Function Expression) that will run immediately
(async () => {
  try {
    const data = await testForexAPI();
    console.log('Fetched Forex Rates:', data);
  } catch (error) {
    console.error('Error fetching Forex rates:', error);
  }
})();
