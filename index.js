// Import necessary libraries
const json2csv = require('json2csv').parse;
const csvtojson = require('csvtojson');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Promisify fs.writeFile and fs.readFile for async/await use
const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);

/**
 * Convert JSON Array to CSV.
 * @param {Array<Object>} jsonArray - The JSON array to convert.
 * @param {String} outputPath - File path to save the CSV.
 */
async function jsonToCsv(jsonArray, outputPath) {
  try {
    const csv = json2csv(jsonArray);
    await writeFileAsync(path.resolve(outputPath), csv);
    console.log('JSON to CSV conversion successful. File saved at:', outputPath);
  } catch (err) {
    console.error('Error converting JSON to CSV:', err);
  }
}

/**
 * Convert CSV to JSON Array.
 * @param {String} csvPath - File path to the CSV to convert.
 * @param {String} outputPath - File path to save the JSON.
 */
async function csvToJson(csvPath, outputPath) {
  try {
    const jsonArray = await csvtojson().fromFile(path.resolve(csvPath));
    await writeFileAsync(path.resolve(outputPath), JSON.stringify(jsonArray, null, 2));
    console.log('CSV to JSON conversion successful. File saved at:', outputPath);
  } catch (err) {
    console.error('Error converting CSV to JSON:', err);
  }
}

// Export the functions for use in other files
module.exports = { jsonToCsv, csvToJson };
