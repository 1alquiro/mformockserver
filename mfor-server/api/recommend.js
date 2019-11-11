const apiRecommend = 'RECOMMEND';
const errors = require('./errors/errors.js')

/**
 * Recommend GET Request Interceptor - Sends Response Status Code 405
 * @param {Object} res Response Object
 * @returns
 */
exports.recommendGet = function (res) {
	res.status(405).send(errors.http405(apiRecommend))
 }

/**
 * Recommend POST Request Interceptor - Sends Response Status Code 400, 401 or 200
 * @param {Object} req request Object
 * @param {Object} res response Object
 * @param {Object} dbadapter dbadapter Object
 * @returns
 */
exports.recommendPost = function (req, res, dbadapter) {
	if (req.get('X-XSRF-APP') == null || req.get('X-XSRF-APP') === "" || req.get('Content-Type') == null || req.get('Content-Type') === "" || 
		req.get('Content-Type') != "application/json" || req.body == null || JSON.stringify(req.body) === "{}") {
		res.status(400).send(errors.http400(apiRecommend))
	}
	else if (req.get('X-XSRF-TOKEN') == null || req.get('X-XSRF-TOKEN') === "") {
		res.status(401).send(errors.http401(apiRecommend))
	} else {
		req.method = 'GET'
		let end = Math.floor(Math.random() * dbadapter.get('mock_recommend').size().value())
		let start = Math.floor(Math.random() * end)
		res.redirect('mock_recommend?_start=' + start + '&_end=' + end)
	}
}