//Main script to generate timestamp-db.json file for MFOR Mock JSON Server
const mforFaker = require('./mfor-faker.js')
const fs = require('fs')
const jsonFilePrefix = Date.now()
const jsonFileSuffix = '-mfor-db'
const jsonFileExt = '.json'
const jsonFileName = jsonFilePrefix + jsonFileSuffix + jsonFileExt;

/**
 * Generates JSON file for Mock JSON Server
 * @param {string} filePath JSON files path
 * @returns {string} JSON file name
 */
exports.generateData = function (filePath) {
    fs.writeFileSync(filePath + jsonFileName, JSON.stringify(mforFaker.data()), function (err) {
		if (err) throw err
	})
	return jsonFileName;
}

