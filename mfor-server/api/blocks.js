const apiBlocks = 'BLOCKS';
const errors = require('./errors/errors.js')

/**
 * Blocks POST Request Interceptor - Sends Response Status Code 400, 401 or 200
 * @param {Object} req request Object
 * @param {Object} res response Object
 * @param {Object} dbadapter dbadapter Object
 * @returns
 */ 
exports.blocksGet = function (req, res, dbadapter) {
	if (req.get('X-XSRF-APP') == null || req.get('X-XSRF-APP') === ""){
		res.status(400).send(errors.http400(apiBlocks))
	}
	else if (req.get('X-XSRF-TOKEN') == null || req.get('X-XSRF-TOKEN') === "") {
		res.status(401).send(errors.http401(apiBlocks))
	} else {
		let end = Math.floor(Math.random() * dbadapter.get('mock_recommend').size().value())
		let start = Math.floor(Math.random() * end)
		res.redirect('mock_blocks?_start=' + start + '&_end=' + end)
	}
}

/**
 * Blocks POST Request Interceptor - Sends Response Status Code 405
 * @param {Object} res Response Object
 * @returns
 */
exports.blocksPost = function (res) {
		res.status(405).send(errors.http405(apiBlocks))
}