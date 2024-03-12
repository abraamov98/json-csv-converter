# json-csv-converter

A simple library to convert JSON to CSV and vice versa. Designed to be lightweight and easy to use, `json-csv-converter` leverages powerful libraries to handle the conversion processes efficiently.

## Installation

To install `json-csv-converter`, run the following command in your project directory:

```
npm install json-csv-converter
```

## Usage

After installing `json-csv-converter`, you can use it in your project by requiring the library and calling its functions.

### Convert JSON to CSV

```javascript
const { jsonToCsv } = require('json-csv-converter');

// Your JSON array
const jsonArray = [
{ name: "John Doe", age: 30, email: "john@example.com" },
{ name: "Jane Doe", age: 25, email: "jane@example.com" }
];

// Path to save the CSV file
const outputPath = './output.csv';

// Convert and save the CSV
jsonToCsv(jsonArray, outputPath);
```

### Convert CSV to JSON

```javascript
const { csvToJson } = require('json-csv-converter');

// Path to your CSV file
const csvPath = './input.csv';

// Path to save the JSON file
const outputPath = './output.json';

// Convert and save the JSON
csvToJson(csvPath, outputPath);
```

## Contributing

Contributions to `json-csv-converter` are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgments

- Thanks to the authors of `json2csv` and `csvtojson` for their excellent libraries that made this project possible.
