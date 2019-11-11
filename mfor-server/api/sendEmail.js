const apiSendEmail = 'SENDEMAIL';
const errors = require('./errors/errors.js')

/**
 * SendEmail GET Request Interceptor - Sends Response Status Code 405
 * @param {Object} res Response Object
 * @returns
 */
exports.sendEmailGet = function (res) {
	res.status(405).send(errors.http405(apiSendEmail))
}

/**
 * SendEmail POST Request Interceptor - Sends Response Status Code 400, 401 or 200
 * @param {Object} req request Object
 * @param {Object} res response Object
 * @returns
 */
exports.sendEmailPost = function (req, res) {
	if (req.get('X-XSRF-APP') == null || req.get('X-XSRF-APP') === "" || req.get('Content-Type') == null || req.get('Content-Type') === "" || 
		req.get('Content-Type') != "application/json" || req.body == null || JSON.stringify(req.body) === "{}") {
		res.status(400).send(errors.http400(apiSendEmail))
	}
	else if (req.get('X-XSRF-TOKEN') == null || req.get('X-XSRF-TOKEN') === "") {
		res.status(401).send(errors.http401(apiSendEmail))
	} else {
		res.status(200).send()
	}
}